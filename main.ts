input.onButtonPressed(Button.A, function () {
    isRunning = false
    music.playTone(262, music.beat(BeatFraction.Half))
})
let isRunning = false
let counter = 0
isRunning = true
basic.forever(function () {
    if (isRunning == true) {
        counter += 1
        basic.showNumber(counter)
        basic.pause(1000)
    }
})
