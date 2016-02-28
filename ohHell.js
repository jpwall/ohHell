var hand = ["6S", "5S", "AH", "KS", "AS", "JC", "2C", "6D", "4D", "QD"];

// card represents a card in the hand like 6H (the 6 of hearts)
// trump represents the trump suit represented by S, C, H, D (spades, clubs, hearts, diamonds)
// totNumCards represents the total number of cards in play (beginning of round)
function getProbTrick(card, trump, totCards) {
    cardSplit = card.split('');
    suit = cardSplit[1];
    number = cardSplit[0];

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
	/*
	if (trump == suit) {
	    number = *best value*;
	}
	*/
    }

    if (suit == trump) {
	number = 1 / (1 + Math.pow(Math.E, -((52 / totCards) * (number - 7))));
    }
    else {
	number = 1 / (1 + Math.pow(Math.E, -((52 / (totCards * 4)) * (number - 7))));
    }

    if (number >= 0.9) {
	number = 1;
    }
    else {
	number = 0;
    }
    console.log(number);
}

/*for (i=0; i<=hand.length; i++) {
    var prob = getProbTrick(hand[i], "H", process.argv[2]);
}*/

getProbTrick(process.argv[2], "H", process.argv[3]);
