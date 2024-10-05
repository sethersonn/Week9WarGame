/*For the final project you will be creating an automated version
of the classic card game WAR! There are many versions of the game
WAR.In this version there are only 2 players.
You do not need to do anything special when there is a tie in a
round.
Think about how you would build this project and write your plan
down. Consider classes such as: Card, Deck, Player, as well as
what properties and methods they may include.
Four suits to represent the appearance (user interface - ui) for
your cards.
let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎",
"Clubs 🍀"];
console.log("Card Suits Example:", cardSuits);
The game itself will automatically play using console.log() to
display turns, points, cards used, and the outcome of the game.
No user input via prompts is required.

The completed project should, when executed, do the following:
1. Deal 26 Cards to each Player from a Deck of 52 cards.
2. Iterate through the turns where each Player plays a Card.
3. The Player who played the higher card is awarded a point.
  -Ties result in zero points for both Players.
4. After all cards have been played, display the score and declare
the winner.
*/

/*Make a class for the Dealer:
Players (2)
Deck
start(): while loop for user to start game,
instantiate 2 players, instantiate and build deck,
give 26 cards to each Player, loop through all 26 cards and 
determine which value is higher then assign 1 point to winning
card of Player 1 or Player 2, Display winner - the higher score.
note: could separate into multiple methods.
*/

class Dealer {
    constructor() {
        this.players = new Players();
        this.deck = [];
        this.turn = 0;
    }


    start() {
        //instantiate and build the deck
        const deck = new Deck();
        deck.buildDeck();
        this.deck = deck.cards;

        //give players their hands
        while (this.deck.length !== 0) {
            this.players.player1.hand.push(this.deck.shift());
            this.players.player2.hand.push(this.deck.shift());
        }

        //for loop to determine who scores a point based on card value
        //Also increments this.turn to show what turn it is
        for (let i = 0; i < this.players.player1.hand.length; i++) {
            if (this.players.player1.hand[i] > this.players.player2.hand[i]) {
                this.players.player1.score++
                this.turn++
                console.log(`${this.players.player1.name} scored a point!
----------------------------------------
Current Score:
P1: ${this.players.player1.score}
P2: ${this.players.player2.score}
Turn: ${this.turn}`);
            } else if (this.players.player2.hand[i] > this.players.player1.hand[i]) {
                this.players.player2.score++
                this.turn++
                console.log(`${this.players.player2.name} scored a point!
----------------------------------------
Current Score:
P1: ${this.players.player1.score}
P2: ${this.players.player2.score}
Turn: ${this.turn}`);
            } else {
                this.turn++
                console.log(`It's a tie!
 ------------
 Current Score:
 P1: ${this.players.player1.score}
 P2: ${this.players.player2.score}
 Turn: ${this.turn}`);
            }
        }

        //if/elseif/else statement to determine winner, or a draw
        if (this.players.player1.score > this.players.player2.score) {
            console.log(`${this.players.player1.name} is the winner! Huzzah!`);
        } else if (this.players.player2.score > this.players.player1.score) {
            console.log(`${this.players.player2.name} is the winner! Huzzah!`);
        } else {
            console.log("Oof! It's a draw! Better luck next time.");
        }
    }
}



/*Make a class for Players:
name: string
cards: []
score: 0
*/

//If I were to do this again, would probably meld this into Dealer class and rename it.
class Players {
    constructor() {
        this.player1 = {
            name: "Player 1",
            score: 0,
            hand: []
        }
        this.player2 = {
            name: "Player 2",
            score: 0,
            hand: []
        }
    }
}



/*Make a class for the Deck:
Should have an array for cards

method buildDeck() that runs populate() and shuffleDeck()

populate() defines suits, ranks and values: [Heart, Ace, 1], 
[Spade, King, 13]. Populates 52 cards.

shuffleDeck() randomizes order of cards array
*/

class Deck {
    constructor() {
        //cards array
        this.cards = [];
    }


    buildDeck() {
        this.populate();
        this.shuffleDeck();
        return this.cards;
    }

    //Makes the deck
    populate() {
        this.rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.suit = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
        this.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        //Populates the deck using the three arrays above
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.value.length; j++) {
                this.cards.push(new Card(this.rank[j], this.suit[i], this.value[j]));
            }
        }
    }

    //Shuffles the deck
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let card = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[card]] = [this.cards[card], this.cards[i]];
        }
    }
}



/*Make a Card class:
rank: number
suit: string
value: number
*/

class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }

    //When testing, was only printing "Card" to the console 52 times, so added this method
    //Further tested after finishing by removing, and broke it again by only printing "Card", resulting in a draw everytime
    toString() {
        return `Name: ${this.rank} of ${this.suit}, (Value: ${this.value})`;
    }
}

const dealer = new Dealer();
dealer.start();


/*
Some tests I did during the process, had more but I believe I deleted or moved them. Figured I'd keep these.
console.log(dealer.players.player1.hand.map(card => card.toString()));
console.log(dealer.players.player2.hand.map(card => card.toString()));
console.log(deck.buildDeck().map(card => card.toString()));*/
