export const createUser = async (data) => {
  fetch(
    `https://swiftcart-3c77e-default-rtdb.firebaseio.com/users/${data.id}.json`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const authData = { loggedIn: true, userName: data.userName, userId: data.userId };
  setAuthUser(authData);
};

export const setAuthUser = async (authData) => {
  fetch(`https://swiftcart-3c77e-default-rtdb.firebaseio.com/auth.json`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
};

const getUsers = async () => {
  const response = await fetch(
    "https://swiftcart-3c77e-default-rtdb.firebaseio.com/users.json"
  );
  let data = await response.json();
  data = Object.keys(data).map((key) => data[key]);
  return data;
};

export const authenticateUser = async (data) => {
  let usersData = await getUsers();
  let val = usersData.findIndex(
    (userData) =>
      userData.userEmail === data.userEmail && userData.userPassword === data.userPassword
  );
  const userData = usersData[val];
  if (userData) {
    const authData = { loggedIn: true, userName: userData.userName, userId: userData.userId };
    setAuthUser(authData);
  }
  else{
    throw Error("Invalid Login");
  }
  return userData;
};

export const getClothes = async () => {
  const response = await fetch(
    "https://swiftcart-3c77e-default-rtdb.firebaseio.com/clothes.json"
  );
  let data = await response.json();
  data = Object.keys(data).map((key) => data[key]);
  return data;
};


export const getAuth = async () => {
  const response = await fetch(
    "https://swiftcart-3c77e-default-rtdb.firebaseio.com/auth.json"
  );
  let data = await response.json();
  return data;
};


export const deleteCloth = async (id) => {
  await fetch(
    `https://swiftcart-3c77e-default-rtdb.firebaseio.com/clothes/${id}.json`,
    {
      method: "DELETE",
    }
  );
};

export const updateCloth = (data, id) => {
  const response = fetch(
    `https://swiftcart-3c77e-default-rtdb.firebaseio.com/clothes/${id}.json`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
};

export const createCloth = async (data) => {
  fetch(
    `https://swiftcart-3c77e-default-rtdb.firebaseio.com/clothes/${data.id}.json`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
};
