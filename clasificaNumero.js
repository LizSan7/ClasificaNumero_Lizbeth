const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log(`
=== MENÚ ===
1. Determinar si el número es par o impar
2. Determinar si es positivo, negativo o ceroo
3. Verificar si es múltiplo de 5
4. Verificar si es divisible entre 3 y 4 al mismo tiempo
5. Salir
  `);

  rl.question("Elige una opción (1-5): ", opcion => {
    switch (opcion) {
      case "1":
        numeroParImpar();
        break;
      case "2":
        positivoNegativoCero();
        break;
      case "3":
        multiploCinco();
        break;
      case "4":
        divisibleTresCuatro();
        break;
      case "5":
        console.log("¡Hasta luego!");
        rl.close();
        break;
      default:
        console.log("Opción no válida.");
        mostrarMenu();
    }
  });
}

function numeroParImpar() {
  rl.question("Ingresa un número: ", numero => {
    const n = parseInt(numero);

    if (isNaN(n)) {
      console.log("Eso no es un número válido.");
    } else {
      if (n % 2 === 0) {
        console.log(`${n} es un número PAR.`);
      } else {
        console.log(`${n} es un número IMPAR.`);
      }
    }

    mostrarMenu();
  });
}

function positivoNegativoCero() {
  rl.question("Ingresa un número: ", numero => {
    const n = parseInt(numero);

    if (isNaN(n)) {
      console.log("Eso no es un número válido.");
    } else if (n > 0) {
      console.log("El número es positivo.");
    } else if (n < 0) {
      console.log("El número es negativo.");
    } else {
      console.log("El número es cero.");
    }

    mostrarMenu();
  });
}

function multiploCinco() {
  rl.question("Ingresa un número: ", numero => {
    const n = parseInt(numero);

    if (isNaN(n)) {
      console.log("Eso no es un número válido.");
    } else if (n % 5 === 0) {
      console.log(`El número ${n} es múltiplo de 5.`);
    } else {
      console.log(`El número ${n} no es múltiplo de 5.`);
    }

    mostrarMenu();
  });
}

function divisibleTresCuatro() {
  rl.question("Ingresa un número: ", numero => {
    const n = parseInt(numero);

    if (isNaN(n)) {
      console.log("Eso no es un número válido.");
    } else if (n % 3 === 0 && n % 4 === 0) {
      console.log("El número es divisible entre 3 y 4.");
    } else {
      console.log("El número no es divisible entre 3 y 4.");
    }

    mostrarMenu();
  });
}

mostrarMenu();
