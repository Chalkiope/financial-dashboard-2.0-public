import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ArcOptions,
  plugins,
  BarElement,
  CategoryScale,
  LinearScale,
  scales,
  ChartOptions
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import React, { useContext, useState } from 'react'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'

export const AssetDistributionBarGraph = () => {
  const { addedAccountdata } = useContext(PocketsmithContext)

  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

  let goalData: number[] = []
  let assetData: number[] = []

  const initData = () => {
    let tempAssets: number[] = []
    addedAccountdata.accountGroups.map((group) => {
      tempAssets.push(group.groupBalance)
    })
    addedAccountdata.goalDistribution.map((group) => {
      goalData.push(group.value)
    })
    let totalAssets = tempAssets.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    tempAssets.map((number) => {
      assetData.push((number / totalAssets) * 100)
    })

    console.log(assetData)
    return { assetData, goalData }
  }

  initData()

  const actualColours = ['#DD614A', '#4E878C', '#65B891']
  const goalColours = ['#f48668', '#b5ffe1', '#93e5ab']

  const data = {
    labels: ['Savings', 'Investment', 'Real Estate'],
    datasets: [
      {
        label: 'Actual',
        data: [...assetData],
        backgroundColor: [...actualColours]
      },
      {
        label: 'Goal',
        data: [...goalData],
        backgroundColor: [...goalColours]
      }
    ]
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      // padding: { top: 20 }
    },
    plugins: {
      legend: {
        display: true,

        align: 'end',
        labels: {
          color: '#ffffff',
          font: {
            family: 'Overpass',
            size: 12
          },
          padding: 10
        },
        position: 'top',
        fullSize: true
        // align: 'start',
        // padding: { top: 20 },
        // labels: {
        //
        //   textAlign: 'left',
        //   padding: 10
        // }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || ''

            if (label) {
              label += ': '
            }
            if (context.parsed.y !== null) {
              label += `${new Intl.NumberFormat('en-EN', {
                maximumSignificantDigits: 2
              }).format(context.parsed.y)}%`
            }
            return label
          }
        }
      }
    },
    scales: {
      x: {
        border: {
          color: '#ffffff'
        },
        ticks: {
          display: true,
          color: '#ffffff',
          font: {
            family: 'Overpass',
            size: 12
          }
        },
        grid: {
          display: false,
          tickColor: '#ffffff'
        }
      },
      y: {
        suggestedMax: 100,
        border: {
          display: true,
          color: '#ffffff'
        },
        ticks: {
          display: true,
          color: '#ffffff',
          font: {
            family: 'Overpass',
            size: 12
          }
        },
        grid: {
          display: true
        }
      }
    }
  }

  return <Bar data={data} options={options} />
}
