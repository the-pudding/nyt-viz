/*
 USAGE (example: line chart)
 1. c+p this template to a new file (line.js)
 2. change puddingChartName to puddingChartLine
 3. in graphic file: import './pudding-chart/line'
 4a. const charts = d3.selectAll('.thing').data(data).puddingChartLine();
 4b. const chart = d3.select('.thing').datum(datum).puddingChartLine();
*/

d3.selection.prototype.puddingChartWordCloud = function init(options) {
	function createChart(el) {
		const $sel = d3.select(el);
		const $svgContainer = $sel.append('div.word-cloud__container')
		let data = $sel.datum();
		const tags = data.values;

		console.log(data)
		// dimension stuff
		let width = 0;
		let height = 0;
		const marginTop = 0;
		const marginBottom = 0;
		const marginLeft = 0;
		const marginRight = 0;

		// scales
		const scaleX = null;
		const scaleY = null;
		const fontSize = d3.scaleSqrt().range([10, 100]);

		// dom elements
		let $svg = null;
		let $wordcloud = null;
		let $axis = null;
		let $vis = null;

		// helper functions

		function createCloudLayout(width, height, data) {

			const layout = d3.layout.cloud()
				.timeInterval(10)
				.size([width, height])
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
			$wordcloud.selectAll("text")
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
			// .on('click', d => {
			// 	d3.select('div.articles-container')
			// 		.remove()

			// 	const wordCloudWord = d.word;
			// 	const relevantArticleData = shuffle(rawArticleData.filter(row => row.term === wordCloudWord).slice(0, 3))

			// 	const $articlesBox = d3.select('.decades-box')
			// 		.append('div.articles-container')

			// 	const $articles = $articlesBox.selectAll('p.article')
			// 		.data(relevantArticleData)
			// 		.enter()
			// 		.append('p.article')

			// 	$articles.text(d => d.para)
			// })
		}

		const Chart = {
			// called once at start
			init() {
				$svg = $svgContainer.append('svg').at('class', d => `word-cloud__chart ${d.key}`)
				$wordcloud = $svg.append("g").at('class', d => `word-cloud ${d.key}`)

				const $g = $svg.append('g');

				// offset chart for margins
				$g.at('transform', `translate(${marginLeft}, ${marginTop})`);

				// create axis
				$axis = $svg.append('g.g-axis');

				// setup viz group
				$vis = $g.append('g.g-vis');

				Chart.resize();

				createCloudLayout(width, height, tags)

				Chart.render();
			},
			// on resize, update new dimensions
			resize() {
				// defaults to grabbing dimensions from container element
				width = $sel.node().offsetWidth - marginLeft - marginRight;

				// console.log(`width: ${width}`)
				height = $sel.node().offsetHeight - marginTop - marginBottom;
				// console.log(`height: ${height}`)
				$svg.at({
					width: width + marginLeft + marginRight,
					height: height + marginTop + marginBottom
				});

				$wordcloud
					.at("transform", `translate(${width / 2},${height / 2})`);



				return Chart;
			},
			// update scales and render chart
			render() {
				return Chart;
			},
			// get / set data
			data(val) {
				if (!arguments.length) return data;
				data = val;
				$sel.datum(data);
				Chart.render();
				return Chart;
			}
		};
		Chart.init();

		return Chart;
	}

	// create charts
	const charts = this.nodes().map(createChart);
	return charts.length > 1 ? charts : charts.pop();
};