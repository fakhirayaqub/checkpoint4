export async function postDataToPath(path, data) {
  const BASE_URL = process.env.REACT_APP_BACK_END_URL;
  const url = `http://localhost:8080${path}`;
  const response = await fetch(url, {
    method: "POST",
    // headers: {
      // "Content-Type": "application/json",
    // },
    body: data,
  });
  console.log(response)
  return response.json();
}

export async function getDataFromPath(path, data) {
  // const BASE_URL = process.env.REACT_APP_BACK_END_URL;
  const url = `http://localhost:8080${path}`;
  const response = await fetch(url, {
    method: "get",
   
  });
  console.log(response)
  return response.json();
}