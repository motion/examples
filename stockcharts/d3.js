import d3 from 'd3'

// d3.select(self.frameElement).style("height", "420px")

export default d3
export const tsv = Promise.promisify(d3.tsv)
export const parseDate = d3.time.format("%Y-%m-%d").parse
export function cleanData(data) {
  return data.map((d, i) => {
    d.date = new Date(parseDate(d.date).getTime())
    d.open = +d.open
    d.high = +d.high
    d.low = +d.low
    d.close = +d.close
    d.volume = +d.volume
    return d
  })
}
