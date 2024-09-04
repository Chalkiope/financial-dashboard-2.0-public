import DummyData from '../lib/dummyData.json'

export const getUserData = async () => {
  const myHeaders = new Headers()
  myHeaders.append(
    'X-Developer-Key',
    `${process.env.NEXT_PUBLIC_POCKETSMITH_API_KEY}`
  )

  return await fetch(
    `https://api.pocketsmith.com/v2/users/${process.env.NEXT_PUBLIC_POCKETSMITH_USER_ID}`,
    {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result
    })
    .catch((error) => {
      console.log('error', error)
    })
}

export const getAllAccountData = async () => {
  const myHeaders = new Headers()
  myHeaders.append(
    'X-Developer-Key',
    `${process.env.NEXT_PUBLIC_POCKETSMITH_API_KEY}`
  )

  return await fetch(
    `https://api.pocketsmith.com/v2/users/${process.env.NEXT_PUBLIC_POCKETSMITH_USER_ID}/accounts`,
    {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
  )
    .then((response) => {
      if (!response.ok) {
        // use dummy data when no API key (public repo) or on error
        return DummyData.dummyData
      }
      return response.json()
    })
    .then((result) => {
      return result
    })
    .catch((error) => {
      console.log('error', error)
    })
}

export const getOneAccountData = async (id: number) => {
  const myHeaders = new Headers()
  myHeaders.append(
    'X-Developer-Key',
    `${process.env.NEXT_PUBLIC_POCKETSMITH_API_KEY}`
  )

  return await fetch(`https://api.pocketsmith.com/v2/accounts/${id}`, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  })
    .then((response) => {
      if (!response.ok) {
        console.log('error getting account')
        // use dummy data when no API key (public repo) or on error
        DummyData.dummyData.map((account) => {
          if (account.id === id) {
            return account
          }
        })
      }
      return response.json()
    })
    .then((result) => {
      return result
    })
    .catch((error) => console.log('error', error))
}
