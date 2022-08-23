import fetch from "node-fetch"

const getName = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        result.map(result => console.log(result.name))
    })
}
getName('https://jsonplaceholder.typicode.com/users')