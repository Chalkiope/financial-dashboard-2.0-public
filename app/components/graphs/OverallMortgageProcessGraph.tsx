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
import type { ChartOptions, ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { ToggleButton } from '../toggle-button/ToggleButton'
import s from './OverallMortgageProcessGraph.module.scss'

export const OverallMortgageProcessGraph = ({
  accountData
}: {
  accountData: AccountType[]
}) => {
  const { addedAccountdata } = useContext(PocketsmithContext)
  const [mortgageData, setMortgageData] = useState<ChartData<'bar'>>()
  const [current, setCurrent] = useState(true)
  const [maxRepay, setMaxRepay] = useState(true)

  interface mortgageDataType {
    accountName: string | undefined
    available: number
    debt: number
    limit: number
  }

  console.log(accountData)

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
    const calcDebt = (account: AccountType, index: number) => {
      if (maxRepay) {
        return account.current_balance ? account.current_balance * -1 : 0
      } else if (
        account.id &&
        !maxRepay &&
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
        accountName: account.title || account.name,
        available: available,
        debt: debt,
        limit: limit
      })
    })
    // last additions
    tempData.push({
      accountName: 'Paid off',
      available: current ? 460000 - totalDebt : 557000 - totalDebt, // paid off
      debt: current ? 460000 - totalAvailable : 557000 - totalAvailable,
      limit: current ? 460000 : 557000
    })

    data = {
      labels: ['Breakdown'],
      datasets: [
        {
          // Joint
          label: tempData[1]?.accountName,
          data: [tempData[1]?.debt],
          backgroundColor: '#d8462c'
        },
        {
          // Wedding
          label: tempData[0]?.accountName,
          data: [tempData[0]?.debt],
          backgroundColor: '#dd614a'
        },
        {
          // Trip
          label: tempData[2]?.accountName,
          data: [tempData[2]?.debt],
          backgroundColor: '#f48668'
        },
        {
          // Fix loan 1
          label: tempData[4]?.accountName,
          data: [tempData[4]?.debt],
          backgroundColor: '#eb9d87'
        },
        {
          // Fix loan 2
          label: tempData[3]?.accountName,
          data: [tempData[3]?.debt],
          backgroundColor: '#edbdb0'
        },
        {
          // Total
          label: 'Paid off',
          data: [tempData[5]?.available],
          backgroundColor: '#93e5ab'
        }
      ]
    }

    setMortgageData(data)
  }

  useEffect(() => {
    createDataSet()
  }, [accountData, current, maxRepay])

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
        suggestedMax: 557000,
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
      <div className={s.chartControls}>
        <ToggleButton
          labelLeft="Current Mortgage"
          labelRight="Since 2019"
          onActive={() => setCurrent(!current)}
        />
        <ToggleButton
          labelLeft="Max. Repayment"
          labelRight="Min. Repayment"
          onActive={() => setMaxRepay(!maxRepay)}
        />
      </div>
      <Bar data={mortgageData} options={options} />
    </div>
  )
}
