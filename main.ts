function calculateSuit (card: number) {
    if (card / 13 == 0) {
        return "Ace"
    } else {
        return card / 13
    }
}
function CalculatePip (card: number) {
    if (card / 13 == 0) {
        return "Ace"
    } else {
        return card / 13
    }
}
let myCard = game.askForNumber("Enter a number.")
game.splash("" + myCard + "=" + CalculatePip(myCard) + "of" + calculateSuit(myCard))
