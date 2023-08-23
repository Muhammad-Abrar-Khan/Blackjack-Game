
let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.querySelector("#cards-el");
let player = {
    name:"Abrar",
    chips:145
}
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;
console.log(cards);
function getRandomCard(){
    let rand=Math.floor(Math.random()*13)+1
    if (rand===1){return 11}
    else if(rand>10){return 10}
    else{return rand}
}
function startGame(){
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    isAlive=true;
    renderGame();
}
function renderGame(){
    cardsEl.textContent="Cards: "
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent="Sum: " +  sum;
    if (sum<=20){
        message="Do you want to draw a new card?";
    }
    else if(sum===21){
        message="You've got Blackjack!";
        hasBlackJack=true;
    }
    else{
        message="You're out of the game!";
        isAlive=false;
    }
    messageEl.textContent=message;
}
function newCard(){
    if (isAlive===true && hasBlackJack!=true){
        let card=getRandomCard();
        sum+=card;
        cards.push(card)
        console.log(cards);
        renderGame()
    } 

}
