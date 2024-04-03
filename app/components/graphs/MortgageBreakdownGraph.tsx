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

export const MortgageBreakdownGraph = ({
  accountData
}: {
  accountData: AccountType[]
}) => {
  const { accounts, addedAccountdata } = useContext(PocketsmithContext)
  const [balances, setBalances] = useState<number[]>([])
  const [titles, setTitles] = useState<string[]>([])

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

  useEffect(() => {
    let balances: number[] = []
    let titles: string[] = []
    accountData.map((account, i) => {
      if (account.current_balance !== undefined) {
        if (account.current_balance < 0) {
          balances.push(account?.current_balance * -1)
        } else if (account.current_balance == 0) {
          balances.push(0)
        } else {
          balances.push(account.current_balance)
        }
      }
      titles.push(account.title || account.name)
    })

    setBalances(balances)
    setTitles(titles)
  }, [accountData])

  const data = {
    labels: ['Breakdown'],
    datasets: [
      {
        label: titles[1],
        data: [balances[1]],
        // yAxisID: 'y-axis',
        backgroundColor: '#f48668'
      },
      {
        label: titles[0],
        data: [balances[0]],
        backgroundColor: '#ffffff'
      },
      {
        label: titles[2],
        data: [balances[2]],
        backgroundColor: '#b5ffe1'
      },
      {
        label: titles[3],
        data: [balances[3]],
        backgroundColor: '#dd614a'
      },
      {
        label: titles[4],
        data: [balances[4]],
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
