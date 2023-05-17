import axios from "axios";

const baseURL = 'http://https://usersandteams.onrender.com/'

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})