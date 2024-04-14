import axios from 'axios'
export const add = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num1 !== "number") return 0
    return num1 + num2;
}
export const revreseString = (str) => {
    if (typeof str !== "string") return false
    return str.split("").reverse().join("")
}

export const URL_API = "https://api.com/admin/login"
export const LANGUAGES = ["CSS", "HTML", "JS"]
export const USER_DETAILS = {
    name: "hadhi",
    age: 19,
    place: "kerala,india"
}

export const fetchUser = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data.data[0]
}