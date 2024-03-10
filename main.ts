input.onButtonPressed(Button.A, function () {
    if (tastendruck < 1) {
        tastendruck += 1
    } else if (tastendruck == 1) {
        tastendruck += -1
    }
})
let tastendruck = 0
tastendruck = 0
basic.forever(function () {
    basic.showNumber(tastendruck)
})
basic.forever(function () {
    if (tastendruck == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (tastendruck == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
