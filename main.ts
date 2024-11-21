function calculateSuit (card: number) {
    if (Math.idiv(card, 13) == 0) {
        return "Spades"
    } else if (Math.idiv(card, 13) == 1) {
        return "Diamonds"
    } else if (Math.idiv(card, 13) == 2) {
        return "Clubs"
    } else if (Math.idiv(card, 13) == 3) {
        return "Hearts"
    } else {
        return "0"
    }
}
function CalculatePip (card: number) {
    if (card % 13 == 10) {
        return "Jack"
    } else if (card % 13 == 11) {
        return "Queen"
    } else if (card % 13 == 12) {
        return "King"
    } else if (card % 13 == 0) {
        return "Ace"
    } else {
        return convertToText(1 + card % 13)
    }
}
let myCard = game.askForNumber("Enter a number.")
game.splash("" + myCard + "=" + CalculatePip(myCard) + "of" + calculateSuit(myCard))
