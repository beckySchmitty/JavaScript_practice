console.log("Working")


// first way
// let count = 0
// let btn = document.getElementById("card-btn")
// let btnFront = document.getElementById("card-front")


let url = "https://deckofcardsapi.com/api/deck"

// let deck = axios.get(`${url}/new/shuffle/?deck_count=1`)
// deck.then(res => {
//     return axios.get(`${url}/${res.data.deck_id}/draw/?count=52`)
// })
//     .then(allCards => {
//         btn.addEventListener("click", function(){ 
//             if (count < 51) {
//                 console.log(allCards.data.cards[count].suit, allCards.data.cards[count].value);
//                 btnFront.innerText = `${allCards.data.cards[count].value} of ${allCards.data.cards[count].suit}`
//                 count++;
//             }        
//         });
//     })

// second way - adding async funcs as methods on object

const deck = {
    async get() {
        let res = await axios.get(`${url}/new/shuffle/?deck_count=1`)
        console.log(res.data.deck_id)
        this.deckId = res.data.deck_id
    },
    async shuffle () {
        let res = await axios.get(`${url}/${this.deckId}/shuffle/`)
        console.log(res.data.shuffled)
    },
    async drawCard () {
        let res = await axios.get(`${url}/${this.deckId}/draw/?count=1`)
        this.oneCard = res.data.cards[0].value + res.data.cards[0].suit
        console.log(res.data)
    }
}


// Class with async

class Pokemon {
    constructor (id) {
        this.id = id
        this.name = ""
        this.effect = ""
    }
    async getInfo() {
        let res = await axios.get(`https://pokeapi.co/api/v2/ability/${this.id}`)
        this.name = res.data.name
        this.effect = res.data.effect_entries[0].effect
    }
}


// Error handling - try & catch
let user_url = "";
async function getUser(user) {
    try {
        let res = await axios.get(`https://api.github.com/users/${user}`)
        user_url = res.data.url
        console.log(res)
    } catch (e) {
        console.log("please enter a valid name", e)
    }
}

// refactor from callback hell (also compare to .then chaining version)
let threePokemon = [];
async function getThreePoke() {
        base = "https://pokeapi.co/api/v2/pokemon"
        let res = await axios.get(`${base}/1`)
        threePokemon.push(res.data.name)
        let res2 = await axios.get(`${base}/2`)
        threePokemon.push(res2.data.name)
        let res3 = await axios.get(`${base}/3`)
        threePokemon.push(res3.data.name)
        await console.log(threePokemon)
}

// sequential parallel requests

let threeMorePokemon = [];
async function ThreeMorePoke() {
        base = "https://pokeapi.co/api/v2/pokemon"
        let pokemons = await Promise.all ([
        axios.get(`${base}/6`),
        axios.get(`${base}/7`),
        axios.get(`${base}/83`),
        ]);

        for (let poke of pokemons) {
            threeMorePokemon.push(poke.data.name)
        }

        console.log(threeMorePokemon)
}