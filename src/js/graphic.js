/* global d3 */

import wordcloud from './wordcloud';
import cleanData from './cleanData';
import './pudding-chart/area'
import './pudding-chart/wordcloud';

// data
let areaChartData;
let wordCloudDataRaw;
let wordCloudDataNested;
let exampleArticleData;

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
				wordCloudDataRaw = response[1];
				wordCloudDataNested = cleanData.nestWordCloudDataByYear(response[1]);
				exampleArticleData = response[2];
			}
		})
	})
}

function setUpFreqChart() {
	// const $sel = $freqChart

	const chart = $freqChart
		.datum(areaChartData)
		.puddingChartArea()
}

function setUpWordCloud() {
	const wordCloudCharts = $wordCloudContainers
		.data(wordCloudDataNested)
		.puddingChartWordCloud()
	// .append('figure.wordcloud')

	// wordcloud.init();
}

function init() {

	return new Promise((resolve) => {
		loadData()
			.then(response => {
				setUpFreqChart();
				setUpWordCloud();
			})
	})

}

export default {
	init,
	resize
};