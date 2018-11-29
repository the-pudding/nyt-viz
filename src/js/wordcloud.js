/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* global d3 */

let $svg;
let wordcloud;
let nestedYearCloudData = []

function resize() {}

function appendDOMElements(size) {
	$svg = d3.selectAll('.decades-box')
		.append('svg.decade')

	$svg.at('height', size.height)
		.at('width', size.width)



	wordcloud = $svg.append("g")
		.at('class', 'wordcloud')
		.at("transform", "translate(" + size.width / 2 + "," + size.height / 2 + ")");
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
				word: term.word.toLowerCase()
					.split(' ')
					.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
					.join(' ')
			}))
		}))

	return nestedDataTyped;
}

function getDimensions() {
	const size = {}

	size.width = window.innerWidth,
		size.height = window.innerHeight;

	return size
}

// function draw(data, bounds) {
// 	var w = window.innerWidth,
// 		h = window.innerHeight;


// 	const $svg = d3.select('svg.decade')

// scale = bounds ? Math.min(
// 	w / Math.abs(bounds[1].x - w / 2),
// 	w / Math.abs(bounds[0].x - w / 2),
// 	h / Math.abs(bounds[1].y - h / 2),
// 	h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;

// var text = vis.selectAll("text")
// 	.data(data, function (d) {
// 		return d.text.toLowerCase();
// 	});
// text.transition()
// 	.duration(1000)
// 	.attr("transform", function (d) {
// 		return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
// 	})
// 	.style("font-size", function (d) {
// 		return d.size + "px";
// 	});
// text.enter().append("text")
// 	.attr("text-anchor", "middle")
// 	.attr("transform", function (d) {
// 		return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
// 	})
// 	.style("font-size", function (d) {
// 		return d.size + "px";
// 	})
// 	.style("opacity", 1e-6)
// 	.transition()
// 	.duration(1000)
// 	.style("opacity", 1);
// text.style("font-family", function (d) {
// 		return d.font;
// 	})
// 	.style("fill", function (d) {
// 		return fill(d.text.toLowerCase());
// 	})
// 	.text(function (d) {
// 		return d.text;
// 	});

// vis.transition().attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
// }

// function renderCloud(size, tags) {

// 	const layout = d3.layout.cloud()
// 		.timeInterval(Infinity)
// 		.size([size.width, size.height])
// 		// .fontSize(function (d) {
// 		// 	return fontSize(+d.value);
// 		// })
// 		.text(function (d) {
// 			return d.word;
// 		})
// 		.on("end", draw);

const fontSize = d3.scaleSqrt().range([10, 100]);

// 	if (tags.length) {
// 		fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]);
// 	}

// 	layout.stop().words(tags).start();

// }

function createCloudLayout(size, data) {

	const layout = d3.layout.cloud()
		.timeInterval(10)
		.size([size.width, size.height])
		.words(data)
		.rotate(function (d) {
			return 0;
		})
		.fontSize(function (d, i) {
			return fontSize(Math.random());
		})
		.text(function (d) {
			return d.word;
		})
		.spiral("archimedean")
		.on("end", draw)
		.start()

	return layout;
}


function draw(words) {

	wordcloud.selectAll("text")
		.data(words)
		.enter()
		.append("text")
		.attr('class', 'word')
		.style("font-size", function (d) {
			return d.size + "px";
		})
		.attr("text-anchor", "middle")
		.attr("transform", function (d) {
			return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		})
		.text(function (d) {
			return d.word;
		});
};

function init() {
	d3.loadData('/assets/data/word_cloud_data.csv', (error, response) => {

		// Data
		const rawCloudData = response[0];
		const nestedYearCloudData = nestDataByYear(rawCloudData);

		const size = getDimensions();
		appendDOMElements(size);

		const tags = nestedYearCloudData[0].values;

		const cloudLayout = createCloudLayout(size, tags);





		// renderCloud(size, tags);


	})
}

export default {
	init,
	resize
};