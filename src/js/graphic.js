/* global d3 */
import './pudding-chart/area'

// data
let data = null

//selections
const $freqChart = d3.select('.chart-wrapper')

function resize() {}

function loadData() {
	return new Promise((resolve, reject) => {
		const filePath = `assets/data/word_timelines.csv`
		d3.loadData(filePath, (err, response) => {
			if (err) reject (err)
			else resolve(response)
			data = response[0]
		})
	})
}

function setUpFreqChart() {
	const $sel = $freqChart

	const chart = $freqChart
		.datum(data)
		.puddingChartArea()
}

function init() {
  return new Promise((resolve) => {
    loadData()
      .then(response => {
				setUpFreqChart()
      })
  })
}

export default { init, resize };
