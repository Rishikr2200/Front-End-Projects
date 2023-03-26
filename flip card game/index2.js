const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;//selecting class cards
let disableDeck = false;//it will fix the other until flip card will fix either flip after other card work for matching

function flipCard({target: clickedCard}) {  // getting user clicked card
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {  //return the cardOne value to clickedcard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {  //if two img matched
        matched++;  //increment the value by 1
        if(matched == 8) {  // if matched value is 8 that means user has matched all the card (8 * 2 =16 card)
            setTimeout(() => {
                return shuffleCard();
            }, 1000); //calling return shufflecard(); after 1sec
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }  //if two card will not matched
    setTimeout(() => {
        cardOne.classList.add("shake");  //if not matched then shake Css will be add in class (.card)
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {  //remove both shake & flip classes from the both card after 1.2sec
        cardOne.classList.remove("shake", "flip");  //if not matched then shake Css will be add in class (.card)
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";  //setting both card value to blank
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `image/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => { //adding click evewnt to all cards 
    // card.classList.add("flip")
    card.addEventListener("click", flipCard);
});