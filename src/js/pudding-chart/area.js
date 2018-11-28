/*
 USAGE (example: line chart)
 1. c+p this template to a new file (line.js)
 2. change puddingChartName to puddingChartLine
 3. in graphic file: import './pudding-chart/line'
 4a. const charts = d3.selectAll('.thing').data(data).puddingChartLine();
 4b. const chart = d3.select('.thing').datum(datum).puddingChartLine();
*/

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

		// helper functions
		function updateScales() {
			dataByDecade = d3.nest()
				.key(function(d) { return d.year;})
				.entries(data);

			data = data[0]

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
				//.ticks(10)
				//.tickFormat(function(d) { return d * 10000000})
		}

		const Chart = {
			// called once at start
			init() {
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
					.selectAll('g')
					.classed('g-baseline', function(d) {return d == 0})

				// setup viz group
				$vis = $g.append('g.g-vis');

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
