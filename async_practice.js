// #31.1

let favNumFact = axios.get('http://numbersapi.com/random/trivia?json')
favNumFact.then( res => console.log(res.data.text))

let multiNumFact = axios.get('http://numbersapi.com/1..5/trivia?json')
multiNumFact.then(res => console.log(res.data))

// #3
let fourPromises = [];
let myList = document.getElementById("list")

for (let i=0; i<4; i++) {
    fourPromises.push(
        axios.get('http://numbersapi.com/8/trivia?json')
    );
}

Promise.all(fourPromises).then(arr => {
    arr.forEach(fact => {
        let li = document.createElement("li")
        li.innerText = fact.data.text
        myList.append(li)
    })
})
.catch(err => console.log(err));


