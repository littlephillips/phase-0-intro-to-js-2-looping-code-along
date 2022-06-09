function writeCards (myArray, present) {
    let thankYouCards = []
     for (let i = 0; i < myArray.length; i++){
        thankYouCards.push(`Thank you, ${myArray[i]}, for the wonderful ${present} gift!`)
    }
    return thankYouCards
}
 writeCards()


function countDown (startingNumbr){
       while (startingNumbr > 0 ){
        console.log(startingNumbr);
        startingNumbr -=1;
    } 

    console.log(startingNumbr);
}