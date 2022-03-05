const headers = new Headers();
headers.append("x-api-key", "DEMO-API-KEY");

export const requestOptions = {
  method: "GET",
  headers: headers,
};

export const apiInstance = {
  baseUrl: "https://api.thecatapi.com/v1/",
};
