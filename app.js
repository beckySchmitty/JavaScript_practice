console.log("Working")

let count = 0
let btn = document.getElementById("card-btn")
let btnFront = document.getElementById("card-front")


let url = "https://deckofcardsapi.com/api/deck"

let deck = axios.get(`${url}/new/shuffle/?deck_count=1`)
deck.then(res => {
    return axios.get(`${url}/${res.data.deck_id}/draw/?count=52`)
})
    .then(allCards => {
        btn.addEventListener("click", function(){ 
            if (count < 51) {
                console.log(allCards.data.cards[count].suit, allCards.data.cards[count].value);
                btnFront.innerText = `${allCards.data.cards[count].value} of ${allCards.data.cards[count].suit}`
                count++;
            }        
        });
    })

    

