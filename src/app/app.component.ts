import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'calculadora-app'

  opCalculadora = {
    operadorA: "",
    operadorB: "",
    
  };

  operacion: string = "";
  numero = "";
  pantalla = ""

  calculo = {
    "sum": function suma(a: number, b: number) {
      return a + b;
    },
    "res": function resta(a: number, b: number) {
      return a - b;
    },
    "multi": function multiplicacion(a: number, b: number) {
      return a * b;
    },
    "div": function divicion(a: number, b: number) {
      return a / b;
    },

  }


  uno() {
    this.numero = this.numero + "1"
    this.pantalla = this.pantalla + "1"
  }

  dos() {
    this.numero = this.numero + "2"
    this.pantalla = this.pantalla + "2"

  }

  tres() {
    this.numero = this.numero + "3"
    this.pantalla = this.pantalla + "3"

  }

  cuatro() {
    this.numero = this.numero + "4"
    this.pantalla = this.pantalla + "4"

  }

  cinco() {
    this.numero = this.numero + "5"
    this.pantalla = this.pantalla + "5"

  }

  seis() {
    this.numero = this.numero + "6"
    this.pantalla = this.pantalla + "6"

  }

  siete() {
    this.numero = this.numero + "7"
    this.pantalla = this.pantalla + "7"

  }

  ocho() {
    this.numero = this.numero + "8"
    this.pantalla = this.pantalla + "8"

  }

  nueve() {
    this.numero = this.numero + "9"
    this.pantalla = this.pantalla + "9"

  }

  cero() {
    this.numero = this.numero + "0"
    this.pantalla = this.pantalla + "0"

  }

  mas() {
    this.opCalculadora.operadorA = this.numero;
    this.numero = ""
    this.pantalla = this.pantalla + "+"
    this.operacion = "sum"

  }

  menos() {
    this.opCalculadora.operadorA = this.numero;
    this.numero = ""
    this.pantalla = this.pantalla + "-"
    this.operacion = "res"



  }

  multi() {
    this.opCalculadora.operadorA = this.numero;
    this.numero = ""
    this.pantalla = this.pantalla + "*"
    this.operacion = "multi"
  }

  div() {
    this.opCalculadora.operadorA = this.numero;
    this.numero = ""
    this.pantalla = this.pantalla + "/"

    
    this.operacion= "div"

  }

  igual() {
    this.opCalculadora.operadorB = this.numero;
    this.solucion();
  }

  solucion() {

    let sol = (this.calculo as any)[this.operacion](parseFloat(this.opCalculadora.operadorA), parseFloat(this.opCalculadora.operadorB))

    // switch (this.operacionCalculadora.operando) {
    //   case "+":
    //     sol = parseFloat(this.operacionCalculadora.operadorA) + parseFloat(this.operacionCalculadora.operadorB)
    //     break;
    //   case "-":
    //     sol = parseFloat(this.operacionCalculadora.operadorA) - parseFloat(this.operacionCalculadora.operadorB)
    //     break;
    //   case "*":
    //     sol = parseFloat(this.operacionCalculadora.operadorA) * parseFloat(this.operacionCalculadora.operadorB)
    //     break;
    //   case "/":
    //     sol = parseFloat(this.operacionCalculadora.operadorA) / parseFloat(this.operacionCalculadora.operadorB)
    //     break;
    // }
    this.pantalla = sol.toString();
    this.resetear();
    this.numero=sol;
  }

  limpiar() {
    this.numero = ""
    this.pantalla = ""
  }


  resetear() {
    this.opCalculadora.operadorA = "";
    this.opCalculadora.operadorB = "";
    this.operacion = ""
  }
}
