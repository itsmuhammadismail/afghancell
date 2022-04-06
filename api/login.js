import route from "./route";

const loginApi = async (username, password) => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("username", username);
  urlencoded.append("password", password);

  var requestOptions = {
    method: "POST",
    body: urlencoded,
    redirect: "follow",
  };

  const res = await fetch(`${route}auth/login`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return res;
};

export default loginApi;
