import axios from "axios";

const baseURL = 'https://dog.ceo/api/breeds'

//fixme: use this to declare default endpoint or delete it as it's not used atm

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})