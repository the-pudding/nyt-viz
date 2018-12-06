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
		const articles = data.articles
		const wordFrequencies = data.areaData;


		console.log(articles)
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
		let yScale = d3.scaleLinear();
		const fontSize = d3.scaleSqrt().range([10, 100]);
		let drawLine = null;
		let drawArea = null;


		// dom elements
		let $svg = null;
		let $wordcloud = null;
		let $axis = null;
		let $vis = null;
		const $articlesBox = d3.select('.sidebar');
		const $headlineContainer = $articlesBox.select('div.headline-wrapper')
		const $areaChartContainer = $articlesBox.select('div.chart-wrapper')

		// helper functions

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
				.on('click', d => {
					const wordCloudWord = d.word;
					const relevantArticleData = shuffle(articles.filter(row => row.term === wordCloudWord).slice(0, 3))
					let maxY = null;
					let areaChartHeight = null;
					let areaChartWidth = null;

					const areaMarginTop = 0;
					const areaMarginBottom = 25;
					const areaMarginLeft = 30;
					const areaMarginRight = 30;

					console.log(relevantArticleData)

					// Update article text
					$headlineContainer
						.selectAll('div.headline')
						.remove()

					const headlineData = $headlineContainer
						.selectAll('div.headline')
						.data(relevantArticleData)
						.enter()

					const $headlines = headlineData
						.append('div.headline')

					// Para numbers
					$headlines
						.append('p.hed-num tk-atlas')
						.text((d, i) => i + 1)

					// Headline text
					$headlines
						.append('p.hed-text')
						.text(example => example.para.length > 100 ? `${example.para.slice(0, 100)}...` : example.para)


					// Update area chart
					relevantWordFrequencies = wordFrequencies.filter(term => term.word === wordCloudWord)
						.map(word => ({
							...word,
							frequency: +word.frequency,
							year: +word.year,
							decadeString: `dec_${word.year}`
						}))

					// console.log(relevantWordFrequencies)

					// maxY = d3.max(relevantWordFrequencies, function (word) {
					// 	return word.frequency;
					// });

					// width = $areaChartContainer.node().offsetWidth - areaMarginLeft - areaMarginRight;
					// height = $areaChartContainer.node().offsetHeight - areaMarginTop - areaMarginBottom;
					// // axisPadding = areaChartHeight;

					// yScale
					// 	.domain([0, maxY])
					// 	.range([height, 0]);



					$articlesBox.selectAll('path.area')
						.st('display', 'none')

					$articlesBox.selectAll('path.line')
						.st('display', 'none')

					$articlesBox.select(`path.line.line-${wordCloudWord}`)
						.st('display', 'inline-block')

					$articlesBox.select(`path.area.area-${wordCloudWord}`)
						.st('display', 'inline-block')
				})
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