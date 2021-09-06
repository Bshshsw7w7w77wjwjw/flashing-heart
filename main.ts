basic.forever(function () {
    serial.redirect(
    SerialPin.P0,
    SerialPin.P1,
    BaudRate.BaudRate115200
    )
    basic.showString("Hello")
    music.playMelody("C D E F G A B C5 ", music.volume())
    music.setBuiltInSpeakerEnabled(true)
})
