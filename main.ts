//Vars
let LoopState = 0
let HeartLoop2Speed = 0
let HeartLoop1Speed = 0
HeartLoop1Speed = 5
HeartLoop2Speed = 0.01
LoopState = 1
//start
basic.showString("LOVE YOU")
// state check
basic.forever(function () {
    if (LoopState == 1) {
        PlayHeartLoop()
    } else if (LoopState == 2) {
        PlayHeartLoop2()
    } else if (LoopState == 3){
        ButtonASequence()
    }
})
//input
input.buttonIsPressed(Button.A);{
    LoopState = 3;
}
// HeartLoops
function PlayHeartLoop2 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . . .
        . . # # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . # .
        . # # # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . # .
        . # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . # .
        . # # # #
        . # # # #
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . # .
        . # # # #
        . # # # #
        . . # # .
        . . . . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . # .
        . # # # #
        . # # # #
        . . # # .
        . . # . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . # .
        . # # # #
        . # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . # .
        . # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . . . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(HeartLoop2Speed)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    LoopState = 1
}
function PlayHeartLoop () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(HeartLoop1Speed)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop1Speed)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop1Speed)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(HeartLoop1Speed)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop1Speed)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop1Speed)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(HeartLoop1Speed)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop1Speed)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(HeartLoop1Speed)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    LoopState = 2
}
function ButtonASequence(){
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
`)
}