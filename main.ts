let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.lightLevel() < 5) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    }
    if (input.lightLevel() > 7) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
