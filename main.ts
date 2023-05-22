radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (mi_jugada == 1) {
            basic.showString("Empate")
        }
    } else if (receivedNumber == 2) {
        if (mi_jugada == 2) {
            basic.showString("Perdedor")
        }
    } else if (receivedNumber == 1) {
        if (mi_jugada == 3) {
            basic.showString("Ganador")
        }
    } else if (receivedNumber == 2) {
        if (mi_jugada == 1) {
            basic.showString("Perdedor")
        }
    } else if (receivedNumber == 2) {
        if (mi_jugada == 2) {
            basic.showString("Empate")
        }
    } else if (receivedNumber == 2) {
        if (mi_jugada == 3) {
            basic.showString("Gandor")
        }
    } else if (receivedNumber == 3) {
        if (mi_jugada == 3) {
            basic.showString("Perdedor")
        }
    } else if (receivedNumber == 3) {
        if (mi_jugada == 3) {
            basic.showString("Gandor")
        }
    } else if (receivedNumber == 3) {
        if (mi_jugada == 3) {
            basic.showString("Empate")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    mi_jugada = randint(1, 1)
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.AB, function () {
    mi_jugada = randint(3, 3)
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    mi_jugada = randint(2, 2)
    basic.showIcon(IconNames.Square)
})
let mi_jugada = 0
radio.setGroup(107)
