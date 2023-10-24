let startTid = 0
let slutTid = 0
let beregnetTid = 0
let afstand = 0
input.onButtonPressed(Button.A, function () {
    // Start tidsmåling når knap A trykkes
    startTid = input.runningTime()
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    // Stop tidsmåling når knap B trykkes
    slutTid = input.runningTime()
    // Konverter til sekunder
    beregnetTid = slutTid - startTid
    // Konverter til sekunder
    beregnetTid = beregnetTid / 1000
    // Beregn afstanden
    // 28000 km/t er 7778 m/s
    afstand = 7778 * beregnetTid
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    // Vent et sekund for at vise målflag
    basic.pause(1000)
    basic.showNumber(afstand)
})
