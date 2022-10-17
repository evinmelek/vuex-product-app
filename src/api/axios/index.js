import Axios from "axios";

const axios = Axios.create({
    BASE_URL: "https://localhost:3000/"
})

export default axios