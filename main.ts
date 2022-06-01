let Número = 0
let strip: neopixel.Strip = null
let Número_2 = 0
let Número_3 = 0
function baile () {
	
}
// Tecla 0 =
// 
// Tecla 1 =
// 
// Tecla 2 =
IR.IR_callbackUser(function (message) {
    Número = 1
    basic.showIcon(IconNames.Happy)
    if (Número == 1) {
        if (message == 0) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        }
        if (message == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (message == 3) {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        if (message == 5) {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        if (message == 7) {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (message == 9) {
            strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
        if (message == 2) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            Número_2 = 1
        }
        if (message == 8) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            Número_2 = 1
        }
        if (message == 8) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            Número_2 = 1
        }
        if (message == 4) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            Número_2 = 1
        }
        if (message == 6) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            Número_2 = 1
        }
        if (message == 16) {
            strip.showRainbow(1, 360)
        }
        if (message == 18) {
            strip.showRainbow(360, 1)
        }
        if (message == 11) {
            music.setVolume(music.volume() + 5)
        }
        if (message == 17) {
            music.setVolume(music.volume() - 5)
        }
        if (message == 12) {
            if (Número_2 == 1) {
                maqueen.motorStop(maqueen.Motors.All)
            } else {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            }
        }
        if (message == 14) {
            música()
        }
        if (message == 19) {
            baile()
        }
        if (message == 13) {
            music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        }
        if (message == 15) {
            music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        }
        if (message == 20) {
            Número_3 = 0
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            Número_3 = 1
            if (Número_3 == 1) {
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            }
        }
        if (message == 10) {
            if (Número == 1) {
                basic.clearScreen()
                music.stopAllSounds()
                maqueen.motorStop(maqueen.Motors.All)
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
                strip.clear()
            } else {
                Número = 1
            }
        }
    }
})
function música () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Double))
}
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    Número = 0
    Número_2 = 0
})
