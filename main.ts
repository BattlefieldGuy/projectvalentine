//Vars
let LoopState = 0
let HeartLoop1Speed = 5
let HeartLoop2Speed = 0.01
let ButtonASequenceSpeed = 2

//start
LoopState = 0
HeartLoop1Speed = 5
HeartLoop2Speed = 0.01
ButtonASequenceSpeed = 2
basic.showString("LOVE YOU")
// state check
basic.forever(function () {
    if (LoopState == 0) {
        PlayHeartLoop()
    } else if (LoopState == 1) {
        PlayHeartLoop2()
    } else if (LoopState == 2) {
        ButtonASequence()
    }
    if (input.buttonIsPressed(Button.A)) {
        LoopState = 2
    }
})
// HeartLoops
function PlayHeartLoop2() {
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
    if (LoopState == 1){
        LoopState = 0
    }
}
function PlayHeartLoop() {
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
    if (LoopState == 0){
    LoopState = 1
     }
}
//button sequences
function ButtonASequence() {
    basic.pause(ButtonASequenceSpeed)
    basic.showString("Matthew")
    basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
    basic.pause(ButtonASequenceSpeed)
    basic.showLeds(`
    . # . # . 
    # # # # # 
    # # # # # 
    . # # # . 
    . . # . . 
    `)
    basic.pause(ButtonASequenceSpeed)
    basic.showLeds(`
    . # . # . 
    # . # . # 
    # . . . # 
    . # . # . 
    . . # . .
    `)
    basic.pause(ButtonASequenceSpeed)
    basic.showLeds(`
    . # . # . 
    # # # # # 
    # # # # # 
    . # # # . 
    . . # . . 
    `)
    basic.pause(ButtonASequenceSpeed)
    basic.showLeds(`
    . # . # . 
    # . # . # 
    # . . . # 
    . # . # . 
    . . # . .
    `)
    basic.pause(ButtonASequenceSpeed)
    basic.showLeds(`
    . # . # . 
    # # # # # 
    # # # # # 
    . # # # . 
    . . # . . 
    `)
    basic.pause(ButtonASequenceSpeed)
    basic.showLeds(`
    . # . # . 
    # . # . # 
    # . . . # 
    . # . # . 
    . . # . .
    `)
    basic.showString("Luna")
    LoopState = 0
}