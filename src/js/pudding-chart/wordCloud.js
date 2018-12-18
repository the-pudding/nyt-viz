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
		let areaChartRef = null;
		const tags = data.values;
		const articles = data.articles
		const wordFrequencies = data.areaData;


		// console.log(articles)

		// dimension stuff
		let width = 0;
		let height = 0;
		const marginTop = 5;
		const marginBottom = 5;
		const marginLeft = 5;
		const marginRight = 5;
		let resizeNum = 0;

		// scales
		const scaleX = null;
		const scaleY = null;
		let yScale = d3.scaleLinear();
		const fontSize = d3.scaleSqrt().range([20, 50]);

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
		const $mentions = $articlesBox.select('p.mentions').select('.mentioned-span')
		const $word = $articlesBox.select('p.mentions').select('.word-span')

		// helper functions

		function showDefaultArticles(isBoer) {
			if (isBoer) {
				handleWordClick(isBoer)
			}

		}


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

			fontSize.domain(d3.extent(data, (d) => {
				return d.overindex;
			}))

			const layout = d3.layout.cloud()
				.timeInterval(Infinity)
				.size([width - (2 * marginLeft), height - (2 * marginTop)])
				.words(data)
				// .padding(8)
				.padding(15)
				.rotate(() => 0)
				.fontSize((d, i) => fontSize(d.overindex))
				.text(d => d.word.toLowerCase()
					.split(' ')
					.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
					.join(' '))
				.spiral("rectangular")
				.on("end", draw)
				.start()

			return layout;
		}


		function handleWordClick(d) {
			const currentYear = d.year;
			const wordCloudWord = d.word;
			const decadeOverindex = d.overindex.toString().slice(0, 3);
			const relevantArticleData = shuffle(articles.filter(row => (row.term === wordCloudWord) && (row.decade === currentYear)).slice(0, 3))

			// console.log(relevantArticleData)
			//highlight clicked word
			d3.selectAll('.word').classed('clickedWord', false)
			const clickedWord = d3.selectAll(`[data-attribute="${wordCloudWord}"]`)
			clickedWord.classed('clickedWord', true)

			// setting overindex % text in sidebar
			$word.text(wordCloudWord.toUpperCase())
			$mentions.text(decadeOverindex + 'x')

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
				.append('p.hed-num tk-national')
				.text((d, i) => i + 1)


			// Headline text
			$headlines
				.append('p.hed-text')
				// .text(example => example.para.length > 100 ? `${example.para.slice(0, 100)}...` : example.para)
				.html(example => {
					const exampleYear = example.year.slice(0, 4);
					let lowerPara = example.headline_russell.toLowerCase();
					const findLength = wordCloudWord.length
					const stringdIndex = lowerPara.indexOf(wordCloudWord.toLowerCase());
					const endIndex = stringdIndex + findLength;
					let editedPara = '<span class="year-example">' + exampleYear + '</span>' + ': ' + example.headline_russell.slice(0, stringdIndex) + '<b>' + example.headline_russell.slice(stringdIndex, endIndex) + '</b>' + example.headline_russell.slice(endIndex);
					return editedPara.slice(0, 100) + '...'
				})



			// Update area chart
			relevantWordFrequencies = wordFrequencies.filter(term => term.word === wordCloudWord)
				.map(word => ({
					...word,
					frequency: +word.frequency,
					year: +word.year,
					decadeString: `dec_${word.year}`
				}))

			//check if areaChartRef object exists; if it doesn't, don't update chart (for default view)
			areaChartRef ? areaChartRef.update(wordCloudWord) : null;

			const $sidebar = d3.select('.sidebar');
			const $toggle = d3.select('.drawer__toggle');
			const visible = $sidebar.classed('is-visible');
			$sidebar.classed('is-visible', !visible);
			$toggle.classed('is-visible', !visible);
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
				.on('click', handleWordClick)

			const isBoer = words.filter(word => word.word === 'boer')[0]

			showDefaultArticles(isBoer);


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

				const initWord = d3.selectAll(`[data-attribute="boer"]`)
				initWord.classed('clickedWord', true)

				createCloudLayout(width, height, tags)

				Chart.render();
			},
			// on resize, update new dimensions
			resize() {
				// defaults to grabbing dimensions from container element

				width = $sel.node().offsetWidth - marginLeft - marginRight;


				resizeNum += 1;

				if (resizeNum <= 1) {
					height = $sel.node().offsetHeight - marginTop - marginBottom;
					$svg.at({
						width: width + marginLeft + marginRight,
						height: height + marginTop + marginBottom
					});

					$wordcloud
						.at("transform", `translate(${width / 2},${height / 2})`);

				} else {
					$svg.at({
						width: width + marginLeft + marginRight,
						// height: height + marginTop + marginBottom
					})


					$wordcloud
						.at("transform", `translate(${width / 2},${height / 2})`);
				}




				// createCloudLayout(width, height, tags)

				return Chart;
			},
			// update scales and render chart
			render() {
				return Chart;
			},
			area(wordArea) {
				areaChartRef = wordArea
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