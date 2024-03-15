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

export const MortgageGraph = () => {
  const { accounts, addedAccountdata } = useContext(PocketsmithContext)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

  // const [accountData, setAccountsData] = useState([]);
  // const [mortgageAccounts, setMortgageAccounts] = useState([]);

  let mortgageData = [
    ['Fix 3', 0, 0],
    ['Fix 1', 0, 0],
    ['Wedding', 0, 0],
    ['Joint', 0, 0],
    ['Trip', 0, 0]
  ]
  const [defaultData, setDefaultData] = useState(mortgageData)

  let accArr: AccountType[] = []

  // loop through all account data
  // get only the accounts that have id from mortgageAccounts array
  // push those accounts to accArr array
  const getMortgageAccounts = () => {
    accounts.map((account) => {
      if (
        account.id &&
        addedAccountdata.mortgageAccounts.includes(account.id)
      ) {
        // bit hacky... separate 2 fix loans
        if (account.transaction_accounts && account.id === 2712064) {
          accArr.push(account?.transaction_accounts[0])
          accArr.push(account?.transaction_accounts[1])
        } else {
          accArr.push(account)
        }
      }
    })
    console.log(accArr)
  }

  // Add custom properties for limit, debt and balance in accArr array
  const createDataSet = () => {
    accArr.map((account, index) => {
      let limit = addedAccountdata.limits[index]
      let debt = account.current_balance ? account.current_balance * -1 : 0
      mortgageData[index][2] = debt
      mortgageData[index][1] = limit - debt
    })

    // update state with mortgage accounts data and custom properties
    setDefaultData(mortgageData)
  }

  useEffect(() => {
    getMortgageAccounts()
    createDataSet()
  }, [accounts])

  const data = {
    labels: ['Wedding', 'Joint', 'Trip', 'Fix 2', 'Fix 1'],
    datasets: [
      {
        label: 'Paid off',
        data: defaultData.map((value) => value[1]),
        yAxisID: 'y-axis',
        backgroundColor: '#65b891'
      },
      {
        label: 'Remaining',
        data: defaultData.map((value) => value[2]),
        backgroundColor: '#f48668'
      }
    ]
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
      },
      'y-axis': {
        // position: { x: 20 },
        border: {
          display: false
        },
        // z: 100,
        ticks: {
          // crossAlign: 'far',
          // align: 'end',
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

  console.log(data)
  if (!accounts || !addedAccountdata) return <></>

  return (
    <>
      <Bar data={data} options={options} />
    </>
  )
}
