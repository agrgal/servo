let angulo = 90
serial.redirectToUSB()
basic.clearScreen()
basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P2))
    serial.writeValue("angulo", angulo)
    if (pins.analogReadPin(AnalogPin.P4) > 600) {
        angulo = 90
    }
    if (pins.analogReadPin(AnalogPin.P2) > 801) {
        angulo += 10
    }
    if (pins.analogReadPin(AnalogPin.P2) < 100) {
        angulo += -10
    }
    if (angulo > 180) {
        angulo = 180
    }
    if (angulo < 0) {
        angulo = 0
    }
    servos.P1.setAngle(angulo)
    basic.pause(100)
})
