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

export default {
	nestWordCloudDataByYear
}