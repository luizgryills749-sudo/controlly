input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("raytech")
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("marrucos", 3)
})
basic.forever(function () {
    radio.setGroup(255)
})
