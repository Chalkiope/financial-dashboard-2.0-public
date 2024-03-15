import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ArcOptions,
  plugins
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { GraphData } from '../asset-distribution/AssetDistribution'
import React, { useContext, useState } from 'react'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'

export const AssetDistributionGraph = ({
  isGoalData
}: {
  isGoalData: boolean
}) => {
  const { addedAccountdata } = useContext(PocketsmithContext)

  ChartJS.register(ArcElement, Tooltip, Legend)

  let goalData: GraphData[] = []
  let assetData: GraphData[] = []

  const initData = () => {
    addedAccountdata.accountGroups.map((group) => {
      assetData.push({
        key: group.name,
        value: group.groupBalance
      })
    })
    addedAccountdata.goalDistribution.map((group) => {
      goalData.push({
        key: group.key,
        value: group.value
      })
    })
    console.log(assetData)
    return { assetData, goalData }
  }

  initData()

  const colours = [
    '#DD614A',
    '#4E878C',
    '#65B891',
    '#93E5AB',
    '#B5FFE1',
    '#F48668',
    '#FFFFFF'
  ]

  const data = {
    labels: [
      'Savings',
      'Investment',
      'Real Estate',
      'Cards',
      'German Accounts',
      'Insurance',
      'Other'
    ],
    datasets: [
      {
        label: 'Actual',
        data: [...assetData],
        backgroundColor: [...colours]
      },
      {
        label: 'Goal',
        data: [...goalData],
        backgroundColor: [...colours]
      }
    ]
  }

  const options = {
    layout: {
      padding: { top: 20 }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        fullSize: true,
        align: 'start',
        padding: { top: 20 },
        labels: {
          color: 'white',
          font: {
            family: 'Overpass',
            size: 12
          },
          textAlign: 'left',
          padding: 10
        }
      }
    }
  }

  // const goalData = {
  //   labels: [],
  //   datasets: [
  //     {
  //       label: 'goal',
  //       data: [20, 20, 20, 20, 10, 10],
  //       backgroundColor: [
  //         '#DD614A',
  //         '#4E878C',
  //         '#65B891',
  //         '#93E5AB',
  //         '#B5FFE1',
  //         '#F48668'
  //       ]
  //     }
  //   ]
  // }

  return <Doughnut data={data} options={options} />
}
