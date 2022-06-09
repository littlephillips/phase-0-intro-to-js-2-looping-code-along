function writeCards (myArray, present) {
    let thankYouCards = []
     for (let i = 0; i < myArray.length; i++){
        thankYouCards.push(`Thank you, ${myArray[i]}, for the wonderful ${present} gift!`)
    }
    return thankYouCards
}
 writeCards()


function countDown (startingNumber){
       while (startingNumber > 0 ){
        console.log(startingNumber);
        startingNumber -=1;
    } 

    console.log(startingNumber);
}