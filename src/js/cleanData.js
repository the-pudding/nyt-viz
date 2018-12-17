function filterWordCloud(wordCloudData, filterArray) {
	let includedWords = new Array;
	for (let i in filterArray) {
		includedWords.push(filterArray[i].word);
	}
	const filteredWordCloudData = wordCloudData.filter(cloudWord => includedWords.includes(cloudWord.word))

	//console.log(filteredWordCloudData)

	return filteredWordCloudData;

}

function nestWordCloudDataByYear(data) {
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

function formatArticles(rawArticleData) {
	return rawArticleData.map(article => ({
		...article,
		decadeString: `dec_${article.year.slice(0,3)}0`
	}))
}


function joinWordsToArticles(formattedArticleData, wordCloudData) {
	let i = 0;
	for (i; i < wordCloudData.length; i++) {
		let decade = wordCloudData[i].key
		const relevantArticles = formattedArticleData.filter(article => article.decadeString === decade)
		wordCloudData[i].articles = relevantArticles;
	}
	return wordCloudData
}


function joinWordsAndYearsToArticles(areaChartData, formattedArticleData) {
	// console.log(areaChartData)
	// console.log(formattedArticleData)
	let i = 0;
	for (i; i < areaChartData.length; i++) {

		let decade = areaChartData[i].year
		let word = areaChartData[i].word

		const relevantArticles = formattedArticleData.filter(article => (article.decade === decade) && (article.term === word))
		areaChartData[i].articles = relevantArticles;
	}
	return areaChartData
}


function joinWordsToFrequencies(areaChartData, wordCloudData) {
	return wordCloudData.map(decade => ({
		...decade,
		areaData: areaChartData
	}))
}

function joinWordsYearsToArticles(areaChartData, wordCloudData) {
	return wordCloudData.map(decade => ({
		...decade,
		areaData: areaChartData
	}))
}

export default {
	filterWordCloud,
	nestWordCloudDataByYear,
	joinWordsToArticles,
	joinWordsToFrequencies,
	joinWordsAndYearsToArticles,
	formatArticles
}