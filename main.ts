let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(1, 360)
})
