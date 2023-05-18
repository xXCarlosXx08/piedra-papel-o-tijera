input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallSquare)
    mi_jugada = 1
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    Mi_jugada_3 = 3
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Square)
    Mi_jugada_2 = 2
    radio.sendNumber(2)
})
let Mi_jugada_2 = 0
let Mi_jugada_3 = 0
let mi_jugada = 0
radio.setGroup(107)
