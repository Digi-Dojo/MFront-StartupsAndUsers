import axios from "axios";

const baseURL = 'https://dog.ceo/api/breeds'

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})