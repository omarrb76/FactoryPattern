// Esta clase es la que va a ser implementada por cada operación de la calculadora
interface Operacion {
    efectuarOperacion(a: number, b: number): number;
}

// Esta es la clase factory
abstract class Calculadora {
    // Aqui se guarda el valor de la operacion
    protected resultado: number;
    // Este metodo manda a llamar al código diferente dependiendo del tipo que deseemos
    abstract crearOperacion(): Operacion;
    // Este método muestra el resultado
    mostrarResultado(a: number, b: number): void {
        // Conseguimos la operación que deseamos
        const operacion: Operacion = this.crearOperacion();
        // Efectuamos la operación
        this.resultado = operacion.efectuarOperacion(a, b);
        // Mostramos el resultado
        console.log('Resultado', this.resultado);
    }
}

// Si creamos una clase suma, su operación va a ser la de OperacionSuma
class Suma extends Calculadora {
    crearOperacion(): Operacion {
        return new OperacionSuma();
    }
}

// Si creamos una clase resta, su operación va a ser la de OperacionResta
class Resta extends Calculadora {
    crearOperacion(): Operacion {
        return new OperacionResta();
    }
}

// Implementación de la interface operacion, devuelve un número con la suma de los dos
class OperacionSuma implements Operacion {
    efectuarOperacion(a: number, b: number): number {
        return a + b;
    }
}

// Implementación de la interface operacion, devuelve un número con la resta de los dos
class OperacionResta implements Operacion {
    efectuarOperacion(a: number, b: number): number {
        return a - b;
    }
}

// Prueba del código
// Luigi cambia aqui en lugar del comentario pon "Comprobando la clase suma"
console.log('Usando clase Suma');
const suma: Calculadora = new Suma();
suma.mostrarResultado(10, 5);

// Charlie cambia aqui en lugar del comentario pon "Comprobando la clase resta"
console.log('Usando clase Resta');
const resta: Calculadora = new Resta();
resta.mostrarResultado(10, 5);