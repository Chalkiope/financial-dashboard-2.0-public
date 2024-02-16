export const getUserData = async () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "X-Developer-Key",
    `${process.env.NEXT_PUBLIC_POCKETSMITH_API_KEY}`
  );

  return await fetch(
    `https://api.pocketsmith.com/v2/users/${process.env.NEXT_PUBLIC_POCKETSMITH_USER_ID}`,
    {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));
};

export const getAccountData = async () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "X-Developer-Key",
    `${process.env.NEXT_PUBLIC_POCKETSMITH_API_KEY}`
  );

  return await fetch(
    `https://api.pocketsmith.com/v2/users/${process.env.NEXT_PUBLIC_POCKETSMITH_USER_ID}/accounts`,
    {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));
};
