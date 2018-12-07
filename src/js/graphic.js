/* global d3 */

// import wordcloud from './wordcloud';
import cleanData from './cleanData';
import './pudding-chart/area'
import './pudding-chart/wordcloud';
import enterView from 'enter-view';

// data
let areaChartData;
let wordCloudDataRaw;
let wordCloudDataNested;
let wordCloudDataAreaData;
let exampleArticleData;
let formattedArticleData;
let wordCloudDataJoined;

//selections
const $freqChart = d3.select('.chart-wrapper')
const $wordCloudContainers = d3.selectAll('.wordcloud-wrapper')


function resize() {}

function loadData() {
	return new Promise((resolve, reject) => {
		const filePathTimelines = '/assets/data/word_timelines.csv'
		const filePathWordCloud = '/assets/data/word_cloud_data.csv'
		const filePathExampleArticles = '/assets/data/term_article_pairs_overall.csv'

		const allFiles = [filePathTimelines, filePathWordCloud, filePathExampleArticles]

		d3.loadData(...allFiles, (err, response) => {
			if (err) {
				reject(err)
			} else {
				resolve(response)

				areaChartData = response[0];

				//console.log(areaChartData)

				wordCloudDataRaw = response[1];
				wordCloudDataNested = cleanData.nestWordCloudDataByYear(response[1]);

				wordCloudDataAreaData = cleanData.joinWordsToFrequencies(areaChartData, wordCloudDataNested)


				// Loading+formatting article data
				exampleArticleData = response[2];
				formattedArticleData = cleanData.formatArticles(exampleArticleData);

				// Joining articles to word decades
				wordCloudDataJoined = cleanData.joinWordsToArticles(formattedArticleData, wordCloudDataAreaData);
				//console.log(wordCloudDataJoined)
			}
		})
	})
}

function setUpFreqChart() {
	const chart = $freqChart
		.datum(areaChartData)
		.puddingChartArea()
}

function setUpWordCloud() {
	const wordCloudCharts = $wordCloudContainers
		.data(wordCloudDataJoined)
		.puddingChartWordCloud()
}

function handleNavSelection() {
	enterView({
	    selector: '.wordcloud-wrapper',
	    enter: function(el) {
					const cloudDecade = el.classList[1].split('-')[1]
					const matchingNav = d3.select(`.decade-${cloudDecade}`)
					d3.selectAll('.decade').classed('current', false)
					matchingNav.classed('current', true)
	        el.classList.add('entered');
	    },
			exit: function(el) {
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

function init() {

	return new Promise((resolve) => {
		loadData()
			.then(response => {
				setUpFreqChart();
				setUpWordCloud();
				handleNavSelection();
			})
	})

}

export default {
	init,
	resize
};
