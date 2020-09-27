/**
 * Utilice este archivo para definir funciones y bloques personalizados.
 * Lea más en https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Bloques personalizados
 */
//% weight=100 color=#0fbc11 icon=""
namespace Robotrónica {
    /**
     * TODO: describa su función aquí
     * @param n describa el parámetro aquí, eg: 5
     * @param s describa el parámetro aquí, eg: "Hello"
     * @param e describa el parámetro aquí
     */
    //% block
    /*export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }*/

   /**
     * Retorna el texto "Robotrónica"
     */
    //%block
    export function decirRobotrónica(){
        return('Robotronica');
    }

    /**
     * Retorna el valor de Fibonacci del número ingresado
     * @param value describa el valor aquí, eg: 5
     */
    //% block
    export function Fibonacci(value: number): number {
        return value <= 1 ? value : Fibonacci(value -1) + Fibonacci(value - 2);
    }
}
