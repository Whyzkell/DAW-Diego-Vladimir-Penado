// Definición de la clase Potencia
class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
        this.resultado = this.calcularPotencia();
    }

    // Método para calcular la potencia
    calcularPotencia() {
        return Math.pow(this.base, this.exponente);
    }

    // Método para mostrar el resultado en la página web
    mostrarResultado() {
        let resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `${this.base}^${this.exponente} = ${this.resultado}`;
    }
}

// Función para manejar el envío del formulario
function calcular() {
    // Obtener los valores del formulario
    let base = parseInt(document.getElementById('base').value);
    let exponente = parseInt(document.getElementById('exponente').value);

    // Crear una instancia de la clase Potencia
    let potencia = new Potencia(base, exponente);

    // Mostrar el resultado en la página
    potencia.mostrarResultado();
}
