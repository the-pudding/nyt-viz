/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* global d3 */
import testingGround from './testing-ground';


let $svg;
let wordcloud;
let rawCloudData;
let rawArticleData;
let nestedYearCloudData = []
let size = {}





function resize() {}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}



function appendDOMElements(size) {
	$svg = d3.select('.decades-box')
		.append('svg.decade')

	$svg.at('height', size.height)
		.at('width', size.width)

	wordcloud = $svg.append("g")
		.at('class', 'wordcloud')
		.at("transform", `translate(${size.width / 2},${size.height / 2})`)
}



function nestDataByYear(data) {
	const nestedDataRaw = d3.nest()
		.key(d => +d.year)
		.entries(data)

	const nestedDataTyped = nestedDataRaw
		.map(item => ({
			...item,
			key: 'dec_' + item.key,
			values: item.values.map(term => ({
				...term,
				rank: +term.rank,
				overindex: +term.overindex,
				wordOriginal: term.word,
				word: term.word
			}))
		}))
	return nestedDataTyped;
}

function getDimensions() {
	size.width = window.innerWidth,
		size.height = window.innerHeight;
	return size
}

const fontSize = d3.scaleSqrt().range([10, 100]);

function createCloudLayout(size, data) {

	const layout = d3.layout.cloud()
		.timeInterval(10)
		.size([size.width, size.height])
		.words(data)
		.rotate(() => 0)
		.fontSize((d, i) => fontSize(Math.random()))
		.text(d => d.word)
		.spiral("archimedean")
		.on("end", draw)
		.start()

	return layout;
}


function draw(words) {
	wordcloud.selectAll("text")
		.data(words)
		.enter()
		.append('text')
		.at('class', 'word')
		.at('data-attribute', d => d.word)
		.style('font-size', d => `${d.size}px`)
		.at('text-anchor', 'middle')
		.at('transform', d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
		.text(d => d.word.toLowerCase()
			.split(' ')
			.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
			.join(' '))
		.on('click', d => {
			d3.select('div.articles-container')
				.remove()

			const wordCloudWord = d.word;
			const relevantArticleData = shuffle(rawArticleData.filter(row => row.term === wordCloudWord).slice(0, 3))

			const $articlesBox = d3.select('.decades-box')
				.append('div.articles-container')

			const $articles = $articlesBox.selectAll('p.article')
				.data(relevantArticleData)
				.enter()
				.append('p.article')

			$articles.text(d => d.para)
		})
}


function loadData() {
	return new Promise((resolve, reject) => {

		// file paths
		const filePathWordCloud = '/assets/data/word_cloud_data.csv'
		const filePathExampleArticles = '/assets/data/term_article_pairs_overall.csv'

		d3.loadData(filePathWordCloud, filePathExampleArticles, (error, response) => {

			if (error) {
				reject(error)
			} else {
				// Data
				[rawCloudData, rawArticleData] = response;

				resolve();
			}

		})

	})
}


function init() {
	loadData()
		.then(() => {
			nestedYearCloudData = nestDataByYear(rawCloudData);
			size = getDimensions();

			// DOM els + word cloud
			// testingGround.testingGround()
			appendDOMElements(size);
			const tags = nestedYearCloudData[0].values;
			createCloudLayout(size, tags)
		})

}

export default {
	init,
	resize
};