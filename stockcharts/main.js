import { ChartCanvas, Chart, DataSeries } from 'react-stockcharts'
import { series, axes, helper, coordinates } from 'react-stockcharts'
import d3, { tsv, cleanData } from './d3'

const { MouseCoordinates, CurrentCoordinate } = coordinates
const { TypeChooser } = helper
const { XAxis, YAxis } = axes
const { AreaSeries } = series

view Main {
  let data = null

  load()

  async function load() {
    data = await tsv("//rrag.github.io/react-stockcharts/data/MSFT.tsv")
    data = cleanData(data)
  }

  <AreaChart
    if={data}
    data={data}
    type="svg"
    width={1000}
  />
}

view AreaChart {
  let { data, type, width } = view.props

  <ChartCanvas
    width={width}
    height={400}
		margin={{left: 50, right: 50, top:10, bottom: 30}}
		data={data}
    type={type}>
		<Chart id={0} xAccessor={(d) => d.date}>
			<XAxis axisAt="bottom" orient="bottom" ticks={6} />
			<YAxis axisAt="left" orient="left" />
			<DataSeries id={0} yAccessor={(d) => d.close}>
				<AreaSeries />
			</DataSeries>
		</Chart>
    <CurrentCoordinate forChart={0} forDataSeries={0} />
    <MouseCoordinates xDisplayFormat={d3.time.format("%Y-%m-%d")} />
	</ChartCanvas>
}
