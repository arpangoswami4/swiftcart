export const createUser = (data) => {
  const response = fetch(
    "https://swiftcart-3c77e-default-rtdb.firebaseio.com/users.json",
    {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response;
    })
    .catch((response) => {
      return response;
    });
  return response;
};

export const getUsers = async () => {
  const response = await fetch(
    "https://swiftcart-3c77e-default-rtdb.firebaseio.com/users.json"
  );
  let data = await response.json();
  data = Object.keys(data).map((key) => data[key]);
  return data;
};

export const authenticateUser = (formData,usersData) => {
  let val = usersData.findIndex((userData)=> userData.email===formData.email && userData.password===formData.password)
  return val;
};