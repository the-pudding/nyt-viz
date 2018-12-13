/*
 USAGE (example: line chart)
 1. c+p this template to a new file (line.js)
 2. change puddingChartName to puddingChartLine
 3. in graphic file: import './pudding-chart/line'
 4a. const charts = d3.selectAll('.thing').data(data).puddingChartLine();
 4b. const chart = d3.select('.thing').datum(datum).puddingChartLine();
*/

import textures from 'textures';

d3.selection.prototype.puddingChartArea = function init(options) {
	function createChart(el) {
		const $sel = d3.select(el);
		let data = $sel.datum();
		// dimension stuff
		let width = 0;
		let height = 0;
		const marginTop = 5;
		const marginBottom = 25;
		const marginLeft = 22;
		const marginRight = 30;

		// scales
		const scaleX = null;
		const scaleY = null;

		// dom elements
		let $svg = null;
		let $axis = null;
		let $vis = null;
		let xScale = d3.scaleLinear();
		let xAxis = null;
		let xAxisGroup = null;
		let yScale = d3.scaleLinear();
		let yAxis = null;
		let yAxisGroup = null;
		let axisPadding = null;
		let wordLine = null;
		let lines = null;
		let wordAreas = null;
		let areas = null;
		let dataByWord = null;
		let drawLine = null;
		let drawArea = null;
		let maxY = null;
		let tooltip = null;
		let formatComma = d3.format(",")

		// helper functions
		function nestData() {
			dataByWord = d3.nest()
				.key(function (d) { return d.word; })
				.sortValues(function (a, b) { return a.year - b.year; })
				.entries(data)
				.map(d => {
					const values = d3.range(1900, 2020, 10).map(y => {
						const match = d.values.find(v => +v.year === y)
						return match ? match : {
							word: d.key,
							year: y.toString(),
							frequency: null
						}
					})
					return {
						...d,
						values
					}
				})
				.map(d => {
					const allValues = d.values
					const freqValues = allValues.map(f => {
						return f.frequency
					})
					let maxFreq = d3.max(freqValues)
					return  {
						...d,
						maxFreq: maxFreq
					}
				})
		}

		function handleMouseMove(d){
			const selected = d3.selectAll('.line')
			const highlighted = selected.data()
			const currWordData = highlighted[0].values
			const bisectDate = d3.bisector(d => d.year).left
			const x0 = xScale.invert(d3.mouse(this)[0])
			const i = bisectDate(currWordData, x0, 1)
			const d0 = currWordData[i - 1]
			const d1 = currWordData[i]
			const e = x0 - d0.year > d1.year - x0 ? d1 : d0

			const moveX = xScale(e.year)
			const moveY = yScale(e.frequency)

			tooltip.at('transform', `translate(${moveX}, ${moveY})`)

			tooltip.selectAll('.tooltip-text')
				.text(d => ((+e.frequency)).toFixed(2))
				.at('dx', d => {
					let pos = null
					if (e.year >= 1940 ) pos = -20
					else if (e.year <= 1950 ) pos = 25
					return pos
				})
		}

		const Chart = {
			// called once at start
			init() {
				nestData()
				const initData = dataByWord.filter(d => d.key === 'boer')

				$svg = $sel.append('svg.pudding-chart');
				const $g = $svg.append('g');

				// offset chart for margins
				$g.at('transform', `translate(${marginLeft}, ${marginTop})`);

				// create axis
				$axis = $svg.append('g.g-axis');

				// draw axes
				xAxisGroup = $axis.append('g')
					.attr('class', 'x axis')
					.at('transform', `translate(${marginLeft},${height})`)

				yAxisGroup = $axis.append('g')
					.attr('class', 'y axis')

				// setup viz group
				$vis = $g.append('g.g-vis');

				// textures
				const t = textures.lines().size(4).strokeWidth(1).stroke("#BAB3A9");;
				$vis.call(t)

				// append area
				wordAreas = $vis.selectAll('.wordArea')
					.data(initData)
					.enter().append('path')
					.attr('class', function (d) { return `area area-${d.values[0].word}` })
					.style("fill", t.url());

				// append line
				wordLine = $vis.selectAll('.wordLine')
					.data(initData)
					.enter().append('path')
					.attr('class', function (d) { return `line line-${d.values[0].word}`})

					drawLine = d3.line()
						.defined(function (d) { return d; })
						.x(function (d) { return xScale(d.year); })
						.y(function (d) { return yScale(d.frequency); })

					wordLine
						.attr("d", function (d) { return drawLine(d.values); })

					// define the area
					drawArea = d3.area()
						.defined(drawLine.defined())
						.x(function (d) { return xScale(d.year); })
						.y0(height)
						.y1(function (d) { return yScale(d.frequency); });

					wordAreas
						.attr("d", function (d) { return drawArea(d.values); })

				Chart.resize();
				Chart.render();
			},
			// on resize, update new dimensions
			resize() {
				// defaults to grabbing dimensions from container element
				width = $sel.node().offsetWidth - marginLeft - marginRight;
				height = $sel.node().offsetHeight - marginTop - marginBottom;
				axisPadding = height;

				let maxX = d3.max(data, function (d) { return d.year; });
				let minX = d3.min(data, function (d) { return d.year; });
				maxY = d3.max(data, function (d) { return d.frequency; });

				xScale = d3
					.scaleLinear()
					.domain([minX, maxX])
					.range([0, width])

				yScale = d3
					.scaleLinear()
					.domain([0, maxY]).nice()
					.range([height, 0]);

				xAxis = d3
					.axisBottom(xScale)
					.tickPadding(8)
					//.tickValues([minX, maxX])
					.tickValues(xScale.ticks(5).concat(xScale.domain()))
					.tickFormat(d3.format("d"));

				yAxis = d3
					.axisLeft(yScale)
					.tickPadding(8)
					.ticks(5)
					.tickSize(-width);

				$axis.select('.x')
					.at('transform', `translate(${marginLeft},${axisPadding})`)
					.call(xAxis);

				const yGrouping = $axis.select('.y')
					.call(yAxis)

				yGrouping
					.at('transform', `translate(${marginLeft}, ${marginTop})`)
					.selectAll("g")
					.classed("g-baseline", function (d) {
						return d == 0
					});

				$svg.at({
					width: width + marginLeft + marginRight,
					height: height + marginTop + marginBottom
				});

				tooltip = $svg.append('g').at('class', 'g-tooltip').st('display', 'none')
				tooltip.append('circle').at('class', 'tooltip-circle').at('r', 5).at('transform', 'translate(' + marginLeft + ',' + marginTop + ')')
				tooltip.append('text').at('class', 'tooltip-text').at('dy', 20)

				$svg.append('rect')
					.at('width', width)
					.at('height', height)
					.at('class', 'overlay')
					.at('transform', 'translate(' + marginLeft + ',' + marginTop + ')')
					.on('mouseover', () => tooltip.st('display', null))
					.on('mouseout', () => tooltip.st('display', 'none'))
					.on('mousemove touchstart', handleMouseMove)

				return Chart;
			},
			// update scales and render chart
			render() {
				return Chart;
			},
			update(word) {
				let individWordData = dataByWord.filter(d => d.key === word)

				maxY = d3.max(individWordData, function (d) { return d.maxFreq; });
				yScale.domain([0, maxY])
				$axis.select('.y').transition().duration(1000).call(yAxis)

				drawLine
					.defined(function (d) { return d; })
					.y(function (d) { return yScale(d.frequency);})
				drawArea
					.defined(drawLine.defined())
					.y0(height)
					.y1(function (d) { return yScale(d.frequency);})

				wordLine
					.data(individWordData)
					.transition().delay(500).duration(1000)
					.attr('d', function (d) {
						return drawLine(d.values)
					})
					.attr('class', function (d) { return `line line-${d.values[0].word}` });

					wordAreas
						.data(individWordData)
						.transition().delay(500).duration(1000)
						.attr("d", function (d) { return drawArea(d.values); })
						.attr('class', function (d) { return `area area-${d.values[0].word}` });


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
