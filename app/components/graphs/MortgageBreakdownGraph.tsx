import { AccountType } from '@/app/api/types'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { useContext, useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

export const MortgageBreakdownGraph = ({accountData}: {accountData: AccountType[]}) => {
    const { accounts, addedAccountdata } = useContext(PocketsmithContext)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

  useEffect(() => {
  }, [accounts])

  const data = {
    labels: ['Breakdown'],
    datasets: [
        {
          label: 'Paid off',
          data: [10],
          yAxisID: 'y-axis',
          backgroundColor: '#65b891'
        },
        {
          label: 'Remaining',
          data: [30],
          backgroundColor: '#f48668'
        },
        {
            label: 'Remaining',
            data: [30],
            backgroundColor: '#f48668'
          },
          {
            label: 'Remaining',
            data: [30],
            backgroundColor: '#f48668'
          },
          {
            label: 'Remaining',
            data: [30],
            backgroundColor: '#f48668'
          }
      ]
    // datasets: [
    //   {
    //     label: ['Wedding', 'Joint', 'Trip', 'Fix 2', 'Fix 1'],
    //     data: [10, 10, 10, 20, 20],
    //     backgroundColor: ['#65b891', '#f48668', '#65b891', '#f48668', '#65b891']
    //   }
    // ]
  }

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        align: 'start',
        labels: {
          color: 'white',
          font: {
            family: 'Overpass',
            size: 12
          },
          onHover: /* handleHover */ () => {},
          onLeave: /* handleLeave */ () => {}
        }
      }
    },
    scales: {
      x: {
        border: {
          color: '#ffffff'
        },
        stacked: true,
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
          tickColor: '#ffffff',
          drawBorder: false
        }
      },

      y: {
        // position: {
        //   y: 20
        // },
        border: {
          display: false
        },
        stacked: true,
        ticks: {
          display: false
        },
        grid: {
          display: false,
          ticks: {
            display: false
          }
        }
      }
    }
  }

  if (!accounts || !addedAccountdata) return <></>


  return (
    <>
    <Bar data={data} options={options} />
    </>  
  )
}