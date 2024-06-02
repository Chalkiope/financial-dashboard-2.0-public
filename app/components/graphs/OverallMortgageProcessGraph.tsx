import { AccountType, DummyDataAccount } from '@/app/api/types'
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
import type { ChartOptions, ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'

export const OverallMortgageProcessGraph = ({
  accountData
}: {
  accountData: AccountType[] | DummyDataAccount[]
}) => {
  const { addedAccountdata } = useContext(PocketsmithContext)
  const [mortgageData, setMortgageData] = useState<ChartData<'bar'>>()

  interface mortgageDataType {
    accountName: string | undefined
    available: number
    debt: number
    limit: number
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

  let tempData: mortgageDataType[] = []
  let data: ChartData<'bar'>

  // Add custom properties for limit, debt and balance in accArr array
  const createDataSet = () => {
    let totalLimit = 0
    let totalDebt = 0
    let totalAvailable = 0

    // recalculate debt depending on toggle states
    const calcDebt = (
      account: AccountType | DummyDataAccount,
      index: number
    ) => {
      if (
        account.id &&
        addedAccountdata.revolvingCredits.includes(account?.id)
      ) {
        return addedAccountdata.limits[index]
      } else {
        return account.current_balance ? account.current_balance * -1 : 0
      }
    }

    // populate mortgageData object
    accountData.map((account, index) => {
      let limit = addedAccountdata.limits[index]
      totalLimit += limit
      let debt = calcDebt(account, index)
      totalDebt += debt
      let available = limit - debt
      totalAvailable += available

      tempData.push({
        accountName: account.title,
        available: available,
        debt: debt,
        limit: limit
      })
    })
    // last additions
    tempData.push({
      accountName: 'Paid off',
      available: 500000 - totalDebt, // paid off
      debt: 0,
      limit: 0
    })

    data = {
      labels: ['Mortgage'],
      datasets: [
        {
          // Part 1
          label: tempData[0]?.accountName,
          data: [tempData[0]?.debt],
          backgroundColor: '#d8462c'
        },
        {
          // Part 2
          label: tempData[1]?.accountName,
          data: [tempData[1]?.debt],
          backgroundColor: '#dd614a'
        },
        {
          // Part 3
          label: tempData[2]?.accountName,
          data: [tempData[2]?.debt],
          backgroundColor: '#f48668'
        },
        {
          // Total
          label: 'Paid off',
          data: [tempData[3]?.available],
          backgroundColor: '#93e5ab'
        }
      ]
    }

    setMortgageData(data)
  }

  useEffect(() => {
    createDataSet()
  }, [accountData])

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        align: 'start',
        labels: {
          color: 'white',
          font: {
            family: 'Overpass',
            size: 12
          }
        }
      }
    },
    scales: {
      x: {
        border: {
          color: '#ffffff'
        },
        suggestedMax: 500000,
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
          tickColor: '#ffffff'
        }
      },

      y: {
        border: {
          display: false
        },
        stacked: true,
        ticks: {
          display: false
        },
        grid: {
          display: false,
          drawTicks: false
        }
      }
    }
  }

  if (!mortgageData) return <></>

  return (
    <div style={{ position: 'relative', width: '100%', height: '20vh' }}>
      <Bar data={mortgageData} options={options} />
    </div>
  )
}
