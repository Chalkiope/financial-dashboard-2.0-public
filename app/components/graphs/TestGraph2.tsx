/// <reference types="anychart" />
import { useRef } from 'react'
import 'anychart'

export function renderChart() {
  anychart.onDocumentLoad(function () {
    // create an instance of a pie chart
    var chart = anychart.pie()
    // set the data
    chart.data([
      ['Chocolate', 5],
      ['Rhubarb compote', 2],
      ['Crêpes Suzette', 2],
      ['American blueberry', 2],
      ['Buttermilk', 1]
    ])

    // set chart title
    chart.title('Top 5 pancake fillings')
    // set the container element
    chart.container('container')
    // initiate chart display
    chart.draw()

    console.log(chart.data)
  })
}

export const TestGraph2 = () => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={chartRef} id="container">
      TestGraph2
      <>{renderChart}</>
    </div>
  )
}
