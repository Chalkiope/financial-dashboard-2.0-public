"use client";

import { createContext, useEffect, useState } from "react";
import { getAccountData, getUserData } from "../lib/fetchPocketsmithData";

export interface AccountType {
  currency_code: string,
  current_balance: number,
  current_balance_date: string,
  current_balance_in_base_currency: number,
  id: number,
  is_net_worth: boolean,
  title: string,
  type: string
}

export interface AddedAccountDataType {
  accountGroups: {
    name: string,
    accountIds: number[],
    accounts: AccountType | null[]
    groupBalance: number
  }[]
}

export const PocketsmithContext = createContext({});

export default function PocketsmithProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [user, setUser] = useState<any>({});
  
  const getPocketsmithAccountData = async () => {
    const response = await getAccountData();
    setAccounts(response);
  };
  
  const getPocketSmithUserData = async () => {
    const response = await getUserData();
    setUser(response);
  };
  
  useEffect(() => {
    getPocketsmithAccountData();
    getPocketSmithUserData();
  }, []);
  
  const [addedAccountdata, setAddedAccountData] = useState<AddedAccountDataType>({
    accountGroups: [
      {
        name: 'transaction',
        accountIds: [
          1586124, 1586127, 1586121, 825924, 1203277, 825819, 826674
        ],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'investment',
        accountIds: [1201357, 1201823, 1203283, 1217816],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'house',
        accountIds: [1586118, 1586115, 835889],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'creditCards',
        accountIds: [
          1139080, 1201345, 1201346, 1203196, 1203197, 1203198, 1203199, 1203200
        ],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'german',
        accountIds: [1199010, 1200456, 1201347],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'insurance',
        accountIds: [1201432, 1201827, 1203282, 1217814],
        accounts: [],
        groupBalance: 0
      },
      {
        name: 'retired',
        accountIds: [
          848422, 1214535, 1214536, 1214539, 1217782, 1336446, 848373, 826675,
          826630, 848422
        ],
        accounts: [],
        groupBalance: 0
      }
    ],
    limits: [140000, 140000, 20000, 110000, 50000],
    mortgageAccounts: [1586124, 1586127, 1586121, 1586118, 1586115],
    nonLiquidAssets: [
      835889, 1201432, 1201827, 1203282, 1217814, 1586115, 1586118
    ],
    goalDistribution: [
      { x: 'Savings', value: 10 },
      { x: 'Investment', value: 40 },
      { x: 'Real Estate', value: 20 },
      { x: 'Cards', value: 5 },
      { x: 'German Accounts', value: 5 },
      { x: 'Insurance', value: 20 }
    ]
  })

  const addAPIAccountData = () => {
    // console.log('add API data');
    addedAccountdata.accountGroups.map((group, i) => {
      accounts.map((account, i: number) => {
        if(group.accountIds.includes(account.id)) {
          group.accounts.push(account);
          console.log(group.accounts)
        }
        })
        console.log(group.accounts)
    })

};

addAPIAccountData();

// const calcGroupBalances = () => {
//   // console.log('calc group balances');
//   addedAccountdata.accountGroups.map((group) => {
//       let balance = 0;
//       data.map((account) => {
//           if(group.accountIds.includes(account.id)) {
//               balance += account.current_balance_in_base_currency;
//           }
//       })
//       group.groupBalance = balance;
//   })
// };

// calcGroupBalances();
  
  return (
    <PocketsmithContext.Provider value={{accounts: accounts, user: user, addedAccountdata: addedAccountdata}}>
      {children}
    </PocketsmithContext.Provider>
  );
}
