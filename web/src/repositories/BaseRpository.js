import axios from "axios";

// You can use your own logic to set your local or production domain
const baseDomain = "http://localhost:3000/api/v1";
// The base URL is empty this time due we are using the jsonplaceholder API
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
});