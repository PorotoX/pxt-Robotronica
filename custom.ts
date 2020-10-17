
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
      //Para el sensorde temperatura MLX90614
      const addr = 0x5A
      const obTempAddr = 0x07
      const amTempAddr = 0x06

      /**
       * Retorna el número de Fibonacci de la posición indicada.
       * @param value La posición del número de Fibonacci a mostrar, eg: 6
       */
      //% block
      export function fibonacci(value: number): number {
          return value <= 1 ? value : fibonacci(value -1) + fibonacci(value - 2);
      }

    /**
     * Retorna una cadena de texto con la dirección de Robotrónica.
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
        basic.showString("Robotronica");
    }

    function read16(reg: NumberFormat.UInt8BE): number {
       pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE, true);
       let ret = pins.i2cReadNumber(addr, NumberFormat.UInt16LE, true);
       //ret |= pins.i2cReadNumber(addr, NumberFormat.UInt16LE) << 8
       return ret
    }

    function readTemp(reg: NumberFormat.UInt8BE): number {
       let temp = read16(reg)
       temp *= .02
       temp -= 273.15
       return temp
    }

    function objectTemp(): number{
       return readTemp(obTempAddr)
    }

    function ambientTemp(): number{
       return readTemp(amTempAddr)
    }

    //%block="TemperatureMLX90614 %loc"
    export function temperatura(loc: TemperatureLocation): number{
       switch (loc){
           case 0:
               return objectTemp();
           case 1:
               return ambientTemp();
           default:
               return 0;
       }
    }
}
