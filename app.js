console.log("Working")

// let url = "https://deckofcardsapi.com/api/deck"

// let deck = axios.get(`${url}/new/shuffle/?deck_count=1`)
// deck.then(res => {
//     // console.log(res.data.deck_id)
//     return axios.get(`${url}/${res.data.deck_id}/draw/?count=1`)
// })
//     .then(res2 => {
//         console.log(res2.data.cards[0].suit, res2.data.cards[0].value);
//         return axios.get(`${url}/${res2.data.deck_id}/draw/?count=1`);

//     })
//     .then(res3 => {
//         console.log(res3.data.cards[0].suit, res3.data.cards[0].value);
//     })
    


let url = "https://deckofcardsapi.com/api/deck"
let count = 0;

let deck = axios.get(`${url}/new/shuffle/?deck_count=1`)

let cards = deck.then(res => {
    // console.log(res.data.deck_id)
    return axios.get(`${url}/${res.data.deck_id}/draw/?count=52`)
    console.log(res.data.cards)
})

