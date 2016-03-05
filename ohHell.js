var hand = ["6S", "5S", "AH", "KS", "AS", "JC", "2C", "6D", "4D", "QH"];

// card represents a card in the hand like 6H (the 6 of hearts)
// trump represents the trump suit represented by S, C, H, D (spades, clubs, hearts, diamonds)
// totNumCards represents the total number of cards in play (beginning of round)
function getProbTrick(card, trump, totCards) {
    cardSplit = card.split('');
    suit = cardSplit[1];
    number = cardSplit[0];

    // assign values to face cards
    if (number == 'T') {
	number = 10;
    }
    if (number == 'J') {
	number = 11;
    }
    if (number == 'Q') {
        number = 12;
    }
    if (number == 'K') {
        number = 13;
    }
    if (number == 'A') {
	number = 14;
    }

    // main algorithms for deciding percentage probability of getting a trick
    if (suit == trump) {
	number = 1 / (1 + Math.pow(Math.E, -((52 / totCards) * (number - 7))));
    }
    else {
	number = 1 / (1 + Math.pow(Math.E, -((52 / (totCards * 4)) * (number - 7))));
    }

    // sort the decimal percentage from before to be either a trick or not
    // returns 1 if it will get a trick, returns 0 if not
    if (number >= 0.82) {
	number = 1;
    }
    else {
	number = 0;
    }
    return number;
}

// function that parses through the hand variable from earlier and determines the amount
// of tricks based on the value returned from getProbTrick()
function getTotalBid() {
    var totalBid = 0;
    for (i=0; i<hand.length-1; i++) {
	totalBid = totalBid + getProbTrick(hand[i], 'H', process.argv[2]);
    }
    return totalBid;
}

console.log(getTotalBid());
