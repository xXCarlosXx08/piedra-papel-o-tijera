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
    basic.showIcon(IconNames.SmallSquare)
    radio.sendNumber(1)
    mi_jugada = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(3)
    mi_jugada = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(2)
    mi_jugada = 2
})
let mi_jugada = 0
radio.setGroup(107)
