/* global d3 */

// import wordcloud from './wordcloud';
import cleanData from './cleanData';
import './pudding-chart/area'
import './pudding-chart/wordcloud';
import enterView from 'enter-view';
import jump from 'jump.js';

// data
let areaChartData;
let areaChartDataWithArticles;
let wordCloudDataRaw;
let wordCloudDataFiltered;
let wordCloudDataNested;
let wordCloudDataAreaData;
let exampleArticleData;
let formattedArticleData;
let wordCloudDataJoined;
let wordsToInclude;

let wordArea = null;
let wordCloudCharts = null;

//selections
const $freqChart = d3.select('.chart-wrapper')
const $wordCloudContainers = d3.selectAll('.wordcloud-wrapper')


function resize() {

	wordCloudCharts.forEach(chart => chart.resize())

	wordArea.resize()
}

function loadData() {
	return new Promise((resolve, reject) => {
		const filePath__Timelines = 'assets/data/word_timelines.csv'
		const filePath__WordCloud = 'assets/data/word_cloud_data.csv'
		const filePath__ExampleArticles = 'assets/data/term_article_pairs_overall.csv'
		const filePath__WordsToInclude = 'assets/data/word_cloud_data_to_include.csv'

		const allFiles = [filePath__Timelines, filePath__WordCloud, filePath__ExampleArticles, filePath__WordsToInclude]

		d3.loadData(...allFiles, (err, response) => {
			if (err) {
				reject(err)
			} else {
				resolve(response)

				areaChartData = response[0];

				//changing frequency values for chart data; add cleaning to cleanData.js?
				areaChartData.forEach(d => d.frequency = (d.frequency * 100000))

				wordCloudDataRaw = response[1];
				wordsToInclude = response[3];

				wordCloudDataFiltered = cleanData.filterWordCloud(wordCloudDataRaw, wordsToInclude)

				wordCloudDataNested = cleanData.nestWordCloudDataByYear(wordCloudDataFiltered);

				wordCloudDataAreaData = cleanData.joinWordsToFrequencies(areaChartData, wordCloudDataNested)

				// Loading+formatting article data
				exampleArticleData = response[2];
				formattedArticleData = cleanData.formatArticles(exampleArticleData);

				// Joining articles to word decades
				wordCloudDataJoined = cleanData.joinWordsToArticles(formattedArticleData, wordCloudDataAreaData);

				areaChartDataWithArticles = cleanData.joinWordsAndYearsToArticles(areaChartData, formattedArticleData)
			}
		})
	})
}

function setUpFreqChart() {
	wordArea = $freqChart
		.datum(areaChartDataWithArticles)
		.puddingChartArea()
}

function setUpWordCloud() {
	wordCloudCharts = $wordCloudContainers
		.data(wordCloudDataJoined)
		.puddingChartWordCloud()
	wordCloudCharts.forEach(w => w.area(wordArea))
}

function handleNavSelection() {
	enterView({
		selector: '.wordcloud-wrapper',
		enter: function (el) {
			const cloudDecade = el.classList[1].split('-')[1]
			const matchingNav = d3.select(`.decade-${cloudDecade}`)
			d3.selectAll('.decade').classed('current', false)
			matchingNav.classed('current', true)
		},
		exit: function (el) {
			const cloudDecade = el.classList[1].split('-')[1]
			const prev = Math.max(1900, cloudDecade - 10)
			const matchingNav = d3.select(`.decade-${prev}`)
			d3.selectAll('.decade').classed('current', false)
			matchingNav.classed('current', true)
		},
		offset: 0.7, // enter at middle of viewport
		once: false, // trigger every time
	});
}

function showDrawer() {
	const $drawer = d3.select('.drawer')
	enterView({
		selector: '#decades',
		enter: function (el) {
			$drawer.classed('is-visible', true)
		},
		exit: function (el) {
			$drawer.classed('is-visible', false)
		},
		offset: 0.5, // enter at middle of viewport
		once: false, // trigger every time
	});
}

function scrollTo(element) {
	jump(element, {
	  duration: 1000,
	  offset: -100
	})
}

function handleNavClick() {
	const decades = d3.selectAll('.decade')
	decades
		.on('click', function () {
			const decadeClick = d3.select(this).text().split('s')[0]
			const el = d3.select(`.wordcloud-${decadeClick}`).node()
			scrollTo(el);
		})
}

function setupSidebarDrawer() {
	const $sidebar = d3.select('.sidebar');
	const $toggle = d3.select('.drawer__toggle');

	$sidebar.classed('is-visible', false);

	$toggle.on('click', () => {
		const visible = $sidebar.classed('is-visible');
		$sidebar.classed('is-visible', !visible);
		$toggle.classed('is-visible', !visible);
	});
}

function init() {

	return new Promise((resolve) => {
		loadData()
			.then(response => {
				setUpFreqChart();
				setUpWordCloud();
				handleNavSelection();
				handleNavClick();
				showDrawer();
				setupSidebarDrawer();
			})
	})

}

export default {
	init,
	resize
};
