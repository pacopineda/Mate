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
        //% blockId="CW" block="Adelante"
        CW = 0,
        //% blockId="CCW" block="Atras"
        CCW = 1
    }

    /**
      * Set the direction and speed of Mate motor.
      */

    //% weight=90
    //% blockId=motor_MotorRun_mat block="Pinmotor|%index|move|%Dir|at speed|%speed"
    //% speed.min=0 speed.max=255
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function motorRun(index: Motors, direction: Dir, speed: number): void {
        let spin = 0;
        let spin2 = 0 ;
        if (direction == 0){
            let spin = (speed * 90) / 255 + 90;
            let spin2 = 86 - (speed * 90) / 255;
        }
        if (direction == 1) {
            let spin2 = (speed * 90) / 255 + 90;
            let spin = 86 - (speed * 90) / 255;
        }
        if (index == 0) {
            pins.servoWritePin(AnalogPin.P0, spin);
        }
        if (index == 1) {
            pins.servoWritePin(AnalogPin.P1, spin2);
        }
        
        if (index == 2) {
            pins.servoWritePin(AnalogPin.P0, spin);
            pins.servoWritePin(AnalogPin.P1, spin2);

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
            pins.digitalWritePin(DigitalPin.P1, 0);
        }

        if (motors == 2) {
            pins.digitalWritePin(DigitalPin.P0, 0);
            pins.digitalWritePin(DigitalPin.P1, 0);
        }

    }

}// Añade tu código aquí

