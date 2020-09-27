
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
     * Muestra una cadena de texto con la dirección de Robotrónica.
     */
    //% block
    export function direcciónRobotrónica(): string {
        return 'Brasil 1086';
    }

    /**
     * Muestra la cadena de texto "Robotrónica".
     */
    //% block
    export function decirRobotrónica(): void {
        basic.showString("Robotrónica");
    }

    /**
     * Retorna el número de Fibonacci de la posición indicada.
     * @param La posición del número de Fibonacci a mostrar, eg: 6
     */
    //% block
    export function fibonacci(value: number): number {
        return value <= 1 ? value : fibonacci(value -1) + fibonacci(value - 2);
    }

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
}
