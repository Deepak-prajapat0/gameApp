import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"534d9419fce745878aae6d7679715451"
    }
})