/* global d3 */

// import wordcloud from './wordcloud';
import cleanData from './cleanData';
import './pudding-chart/area'
import './pudding-chart/wordcloud';
import enterView from 'enter-view';

// data
let areaChartData;
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
		const filePath__Timelines = '/assets/data/word_timelines.csv'
		const filePath__WordCloud = '/assets/data/word_cloud_data.csv'
		const filePath__ExampleArticles = '/assets/data/term_article_pairs_overall.csv'
		const filePath__WordsToInclude = '/assets/data/word_cloud_data_to_include.csv'

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

			}
		})
	})
}

function setUpFreqChart() {
	wordArea = $freqChart
		.datum(areaChartData)
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
			el.classList.add('entered');
		},
		exit: function (el) {
			const cloudDecade = el.classList[1].split('-')[1]
			const matchingNav = d3.select(`.decade-${cloudDecade}`)
			d3.selectAll('.decade').classed('current', false)
			matchingNav.classed('current', true)
			el.classList.remove('entered');
		},
		offset: 0.5, // enter at middle of viewport
		once: false, // trigger every time
	});
}

function scrollTo(element) {
	const h = window.innerHeight
	console.log(h, element.offsetTop)
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: element.offsetTop + 750
	});
}

function handleNavClick() {
	const decades = d3.selectAll('.decade')
	decades
		.on('click', function () {
			const decadeClick = d3.select(this).text().split('s')[0]
			const el = d3.select(`.wordcloud-${decadeClick}`).node()
			scrollTo(el);
		})
	//const { value } = this;
	//const el = d3.select(`#${value}-link`).node();
	//scrollTo(el);
}

function init() {

	return new Promise((resolve) => {
		loadData()
			.then(response => {
				setUpFreqChart();
				setUpWordCloud();
				handleNavSelection();
				handleNavClick();
			})
	})

}

export default {
	init,
	resize
};