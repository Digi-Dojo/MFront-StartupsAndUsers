import axios from "axios";

const baseURL = 'http://https://usersandteams.onrender.com/'

//fixme: use this to declare default endpoint or delete it as it's not used atm

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})