import snakecaseKeys from "snakecase-keys";

export async function registerUser(data){
  // parse information to snakecase
  const parseData = snakecaseKeys(data);
  const response = await fetch("http://192.168.1.21:3000/users", {
    method: "POST",
    body: JSON.stringify(parseData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  const payload = await response.json();
  if(response.ok){
    return payload;
  }

  return Promise.reject(payload);
}
