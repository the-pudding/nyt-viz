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
		const marginTop = 0;
		const marginBottom = 25;
		const marginLeft = 30;
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

		function nestData() {
			dataByWord = d3.nest()
				.key(function(d) { return d.word;})
				.sortValues(function(a,b) {
					return a.year - b.year;
				})
				.entries(data)
				.map(d => {
					const values =  d3.range(1900, 1980, 10).map(y => {
						const match = d.values.find(v => +v.year === y)
						return match ? match : {word: d.key, year: y.toString(), frequency: null}
					})
					return {
						...d,
						values
					}
				})
		}

		// helper functions
		function updateScales() {

			let maxX = d3.max(data, function(d) { return d.year; });
			let minX = d3.min(data, function(d) { return d.year; });
			let maxY = d3.max(data, function(d) { return d.frequency; });

			xScale = d3
				.scaleLinear()
				.domain([minX, maxX])
				.range([0, width])

			yScale = d3
				.scaleLinear()
				.domain([0, maxY])
				.range([height, 0]);

			xAxis = d3
				.axisBottom(xScale)
				.tickPadding(8)
				.tickValues(xScale.ticks(5).concat( xScale.domain()))
				.tickFormat(d3.format("d"));

			yAxis = d3
				.axisLeft(yScale)
				.tickPadding(8)
				.tickSize(-width)

			// define the line
			drawLine = d3.line()
				.defined(function(d) { return d; })
				.x(function(d) { return xScale(d.year); })
				.y(function(d) { return yScale(d.frequency); })

			lines
				.attr("d", function(d) { return drawLine(d.values); })

			// define the area
			drawArea = d3.area()
				.defined(drawLine.defined())
				.x(function(d) {return xScale(d.year); })
				.y0(height)
				.y1(function(d) {return yScale(d.frequency); });

			areas
				.attr("d", function(d) { return drawArea(d.values); })
		}

		const Chart = {
			// called once at start
			init() {
				nestData()

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
					.data(dataByWord)
					.enter()
					.append('g')
					.at('class', 'wordArea')

				areas = wordAreas.append('path')
					.attr('class', function(d) {return `area area-${d.values[0].word}`})
					.style("fill", t.url());

				// append line
				wordLine = $vis.selectAll('.wordLine')
					.data(dataByWord)
					.enter()
					.append('g')
					.at('class', 'wordLine')

				lines = wordLine.append('path')
					.attr('class', function(d) {return `line line-${d.values[0].word}`})

				Chart.resize();
				Chart.render();
			},
			// on resize, update new dimensions
			resize() {
				// defaults to grabbing dimensions from container element
				width = $sel.node().offsetWidth - marginLeft - marginRight;
				height = $sel.node().offsetHeight - marginTop - marginBottom;
				axisPadding = height;

				updateScales()

				$axis.select('.x')
					.at('transform', `translate(${marginLeft},${axisPadding})`)
					.call(xAxis);

					const yGrouping = $axis.select('.y')
						.call(yAxis)

					yGrouping
						.at('transform', `translate(${marginLeft}, ${marginTop})`)
						.selectAll("g")
		    		.classed("g-baseline", function(d) { return d == 0 });

				$svg.at({
					width: width + marginLeft + marginRight,
					height: height + marginTop + marginBottom
				});
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
