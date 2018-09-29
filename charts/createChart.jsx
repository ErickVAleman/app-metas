import { ResponsiveLine } from '@nivo/line'

const ChartBar = () => <ResponsiveLine
  margin={{
    top: 20,
    right: 20,
    bottom: 60,
    left: 80
  }}
  data={[{
    id: 'jamon de pavo fud', data: [
      { x: '2018-01-01', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-02', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-03', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-04', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-05', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-06', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-07', y: Math.round(Math.random() * 10000) },
    ]
  }, {
    id: 'jamon de pavo fud old', data: [
      { x: '2018-01-01', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-02', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-03', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-04', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-05', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-06', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-07', y: Math.round(Math.random() * 10000) },
    ]
  }, {
    id: 'jamon de cerdo san rafael old', data: [
      { x: '2018-01-01', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-02', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-03', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-04', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-05', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-06', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-07', y: Math.round(Math.random() * 10000) },
    ]
  }, {
    id: 'jamon de cerdo san rafael', data: [
      { x: '2018-01-01', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-02', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-03', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-04', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-05', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-06', y: Math.round(Math.random() * 10000) },
      { x: '2018-01-07', y: Math.round(Math.random() * 10000) },
    ]
  }]}
  animate
  xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
  yScale={{ type: 'linear', stacked: false }}
  axisBottom={{ format: '%b %d' }}
  curve="monotoneX"
/>

export default ChartBar
