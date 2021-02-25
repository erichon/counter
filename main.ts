let count = 0
basic.showString("" + (count))
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (count))
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        count += 1
        music.playMelody("C5 - - - - - - - ", 1000)
    }
    if (input.buttonIsPressed(Button.AB)) {
        count = 0
        basic.showString("" + (count))
    }
})
