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

export const MortgageProcessGraph = ({accountData}: {accountData: AccountType[]}) => {
  const { accounts, addedAccountdata } = useContext(PocketsmithContext)
  const [mortgageData, setMortgageData] = useState<mortgageDataType[]>([])

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
  // console.log(accountData)

  // const [accountData, setAccountsData] = useState([]);
  // const [mortgageAccounts, setMortgageAccounts] = useState([]);

  interface mortgageDataType {
    accountName: string | undefined, 
    available: number, 
    debt: number
  }


  let tempData: mortgageDataType[] = []
  const [defaultData, setDefaultData] = useState([])

  // Add custom properties for limit, debt and balance in accArr array
  const createDataSet = () => {
    // console.log(accountData)
    accountData.map((account, index) => {
      // console.log(account)
      let limit = addedAccountdata.limits[index]
      // console.log(limit)
      let debt = account.current_balance ? account.current_balance * -1 : 0
      // console.log(debt)
      // tempData[index][0] = account.title
      // tempData[index][2] = debt
      // tempData[index][1] = limit - debt
      tempData.push({
        accountName: account.title,
        available: addedAccountdata.limits[index],
        debt: account.current_balance ? account.current_balance * -1 : 0
      })
    })

  //   // update state with mortgage accounts data and custom properties
    // setDefaultData(mortgageData)
    // console.log('updated: ', defaultData)
    setMortgageData(tempData)
  }

  useEffect(() => {
    createDataSet()
    // console.log(mortgageData)
  }, [accountData])

  const data = {
    labels: ['Wedding', 'Joint', 'Trip', 'Fix 2', 'Fix 1'],
    // labels: accountData.map((account) => account.title),
    datasets: [
      {
        label: 'Paid off',
        data: mortgageData.map((value) => value[1]),
        yAxisID: 'y-axis',
        backgroundColor: '#65b891'
      },
      {
        label: 'Remaining',
        data: mortgageData.map((value) => value[2]),
        backgroundColor: '#f48668'
      }
    ]
  }

  const options = {
    indexAxis: 'y' as const,
    // catAxis: 'x' as const,
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
        position: {
          x: 0
        },
        border: {
          display: false,
          color: '#ffffff' // turn off
        },
        stacked: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        }
      },
      'y-axis': {
        position: {x: 12000},
        border: {
          display: false
        },
        stacked: true,
        ticks: {
          crossAlign: 'far',
          padding:  20,
          // mirror: true,
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

  // console.log(data)
  if (!accountData || !addedAccountdata) return <></>

  return (
    <>
      {/* <Bar data={data2} options={options2} /> */}
      <Bar data={data} options={options} />
    </>
  )
}
