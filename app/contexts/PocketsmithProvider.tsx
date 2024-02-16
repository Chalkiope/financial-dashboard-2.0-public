"use client";

import { createContext, useEffect, useState } from "react";
import { getAccountData, getUserData } from "../lib/fetchPocketsmithData";

export const PocketsmithContext = createContext({});

export default function PocketsmithProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accounts, setAccounts] = useState([]);
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
    // getPocketSmithUserData();
  }, []);

  return (
    <PocketsmithContext.Provider value={accounts}>
      {children}
    </PocketsmithContext.Provider>
  );
}
