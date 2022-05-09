alert("¡Bienvenido/a! En este ejercicio realizaremos un par de multiplicaciónes para mostrar muy brevemente como funcionan los ciclos en JavaScript")

let valor = prompt("Para ello te pedimos que ingreses un valor numerico para continuar. ¡Es el unico valor que necesitaras agregar, del resto nos encargamos nosotros!")

console.log("El valor ingresado es: " + valor);

for (let i = 1; i <= 5; i++) {
  console.log("El resultado de " + valor + "x" + i + " es igual a " + valor * i);
}

let segundoValor = prompt ("¡Bien Hecho! con eso fue suficiente, ingresa tu nombre y apellido por favor para tener un registro de quienes han participado de nuestro ejercicio");

while (segundoValor != "salir" ) {
  alert (segundoValor + " gracias por haber participado");
  segundoValor = prompt ("Para finalizar la actividad, por favor escribe 'salir'");
}
