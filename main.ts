input.onButtonPressed(Button.A, function () {
    isRunning = false
})
input.onButtonPressed(Button.B, function () {
    counter = 0
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    isRunning = true
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
