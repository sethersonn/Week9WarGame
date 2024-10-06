const { expect } = chai

describe("Deck", function () {
    let deck;

    beforeEach(function () {
        deck = new Deck();
        deck.buildDeck();
    });

    describe("#buildDeck", function () {
        it("should create a deck of 52 cards", function () {
            expect(deck.cards).to.have.lengthOf(52);
        });

        it("should contain cards with the correct properties", function () {
            const firstCard = deck.cards[0];
            expect(firstCard).to.have.property("rank");
            expect(firstCard).to.have.property("suit");
            expect(firstCard).to.have.property("value");
        });
    });

    describe("shuffleDeck", function () {
        it("should shuffle the deck", function () {
            const originalOrder = [...deck.cards];
            deck.shuffleDeck();
            expect(deck.cards).to.not.deep.equal(originalOrder);
        });
    });
});

describe("Players", function () {
    let players;

    beforeEach(function () {
        players = new Players();
    });

    it("should create two players with empty hands", function () {
        expect(players.player1.hand).to.be.an("array").that.is.empty;
        expect(players.player2.hand).to.be.an("array").that.is.empty;
    });
});

describe("Dealer", function () {
    let dealer;

    beforeEach(function () {
        dealer = new Dealer();
    });

    it("should start with empty hands for both players", function () {
        dealer.start();
        expect(dealer.players.player1.hand).to.have.lengthOf(26);
        expect(dealer.players.player2.hand).to.have.lengthOf(26);
    });
});