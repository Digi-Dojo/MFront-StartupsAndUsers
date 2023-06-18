import axios from "axios";

const baseURL = 'https://usersandteams.onrender.com/'

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})