import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class MyChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'value-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
          name: 'value-2',
          data: [30, 23, 34, 65, 23, 34, 62, 57]
        }
      ],
      theme: {
        mode: 'light',
        palette: 'palette1',
        monochrome: {
          enabled: true,
          color: '#008241',
          shadeTo: 'dark',
          shadeIntensity: 0.65
        }
      }
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
      />
    )
  }
}

export default MyChart
