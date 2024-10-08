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
import type { ChartOptions } from 'chart.js'
import { Bar } from 'react-chartjs-2'

export const MortgageProcessGraph = ({
  accountData
}: {
  accountData: AccountType[] | DummyDataAccount[]
}) => {
  const { addedAccountdata } = useContext(PocketsmithContext)
  const [mortgageData, setMortgageData] = useState<mortgageDataType[]>([])

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

  interface mortgageDataType {
    accountName: string | undefined
    available: number
    debt: number
    limit: number
  }

  let tempData: mortgageDataType[] = []

  // Add custom properties for limit, debt and balance in accArr array
  const createDataSet = () => {
    let totalLimit = 0
    let totalDebt = 0
    let totalAvailable = 0
    accountData.map((account, index) => {
      let limit = addedAccountdata.limits[index]
      totalLimit += limit
      let debt = account.current_balance ? account.current_balance * -1 : 0
      totalDebt += debt
      let available = limit - debt
      totalAvailable += available
      tempData.push({
        accountName: account.title,
        available: available,
        debt: account.current_balance ? account.current_balance * -1 : 0,
        limit: limit
      })
    })
    tempData.push({
      accountName: 'Total',
      available: totalAvailable,
      debt: totalDebt,
      limit: totalLimit
    })

    setMortgageData(tempData)
  }

  useEffect(() => {
    createDataSet()
  }, [accountData])

  const data = {
    labels: ['Fix 1 year', 'Fix 2 years', 'Rev. Credit'],
    datasets: [
      {
        label: 'Paid off',
        data: [...mortgageData.map((value) => value.available)],
        backgroundColor: '#65b891'
      },
      {
        label: 'Remaining',
        data: [...mortgageData.map((value) => value.debt)],
        backgroundColor: '#f48668'
      }
    ]
  }

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
        suggestedMax: 250000,
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
        position: { x: 0 },
        border: {
          display: false,
          color: '#ffffff'
        },
        stacked: true,
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      'y-axis': {
        position: { x: 40000 },
        border: {
          display: false
        },
        // stacked: true,
        ticks: {
          crossAlign: 'near',
          padding: 20,
          mirror: true,
          z: 100,
          display: true,
          color: '#ffffff',
          font: {
            family: 'Overpass',
            size: 12
          }
        },
        grid: {
          display: false
        }
      }
    }
  }

  if (!accountData || !addedAccountdata) return <></>

  return (
    <div style={{ position: 'relative', width: '100%', height: '30vh' }}>
      <Bar data={data} options={options} />
    </div>
  )
}
