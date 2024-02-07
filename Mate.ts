//% weight=100 color=#008B00 icon="\uf136" block="Mate"
//% groups=['micro:bit(v2)']
namespace Mate {
    export class Packeta {
        public mye: string;
        public myparam: number;
    }

    export enum Motors {
        //% blockId="left motor" block="Izquierda"
        M1 = 0,
        //% blockId="right motor" block="Derecha"
        M2 = 1,
        //% blockId="all motor" block="Ambos"
        All = 2
    }

    export enum Dir {
        //% blockId="CW" block="Avanzar"
        CW = 0,
        //% blockId="CCW" block="Retroceder"
        CCW = 1
    }

    /**
      * Set the direction and speed of Mate motor.
      */

    //% weight=90
    //% blockId=motor_MotorRun_mat block="Pinmotor|%index|sentido|%Dir|velocidad|%speed"
    //% speed.min=0 speed.max=255 speed.
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function motorRun(index: Motors, direction: Dir, speed: number): void {

        if(speed <= 50 ){
            let lento = 50;
            let rapido = 120;
        }
        if (speed > 50 && speed <= 70){
            let lento = 60;
            let rapido = 130;
        }
    if (speed > 70 && speed <= 90){
            let lento = 80;
            let rapido = 142;
        }
    if (speed > 90 && speed <= 110){
            let lento = 100;
            let rapido = 155;
        }
    if (speed > 110 && speed <= 130){
            let lento = 120;
            let rapido = 166;
        }
    if (speed > 130 && speed <= 150){
            let lento = 140;
            let rapido = 178;
        }
    if (speed > 150 && speed <= 170){
            let lento = 160;
            let rapido = 189;
        }
    if (speed > 170 && speed <= 190){
            let lento = 180;
            let rapido = 215;
        }
    if (speed > 190 && speed <= 210){
            let lento = 200;
            let rapido = 225;
        }
    if (speed > 210 && speed <= 230){
            let lento = 210;
            let rapido = 232;
        }
    if (speed > 230 && speed <= 255){
            let lento = 255;
            let rapido = 266;
        }

        if (direction == 0 && index == 0){
            let speed1 = lento;
            let spin = (speed1 * 90) / 1000 + 90;
            pins.servoWritePin(AnalogPin.P0, spin);
        }
        if (direction == 1 && index == 0) {
            let speed1 = rapido;
            let spin = 87 - (speed1 * 90) / 1000;
            pins.servoWritePin(AnalogPin.P0, spin);
        }
        if (direction == 0 && index == 1) {
            let speed2 = rapido;
            let spin2 = 87 - (speed2 * 90) / 1000;
            pins.servoWritePin(AnalogPin.P8, spin2)
        }
        if (direction == 1 && index == 1) {
            let speed2 = lento;
            let spin2 = (speed2 * 90) / 1000 + 90;
            pins.servoWritePin(AnalogPin.P8, spin2)
        }
        if (direction == 0 && index == 2) {
            let speed1 = lento;
            let speed2 = rapido;
            let spin = (speed1 * 90) / 1000 + 90;
            let spin2 = 87 - (speed2 * 90) / 1000;
            pins.servoWritePin(AnalogPin.P0, spin);
            pins.servoWritePin(AnalogPin.P8, spin2);
        }
        if (direction == 1 && index == 2) {
            let speed1 = rapido;
            let speed2 = lento;
            let spin = 87 - (speed1 * 90) / 1000;
            let spin2 = (speed2 * 90) / 1000 + 90;
            pins.servoWritePin(AnalogPin.P0, spin);
            pins.servoWritePin(AnalogPin.P8, spin2);
        }
    }

    /**
     * Stop the Mate motor.
     */

    //% weight=20
    //% blockId=motor_motorStop_mat block="Pinmotor |%motors stop"
    //% motors.fieldEditor="gridpicker" motors.fieldOptions.columns=2 
    export function motorStop(motors: Motors): void {
        if (motors == 0) {
            pins.digitalWritePin(DigitalPin.P0, 0);
        }
        if (motors == 1) {
            pins.digitalWritePin(DigitalPin.P8, 0);
        }

        if (motors == 2) {
            pins.digitalWritePin(DigitalPin.P0, 0);
            pins.digitalWritePin(DigitalPin.P8, 0);
        }

    }

}// Añade tu código aquí

