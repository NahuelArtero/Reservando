//Objeto Reserva
var Reserva = function (horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario,
        this.cantidadDePersonas = cantidadDePersonas,
        this.precioPorPersona = precioPorPersona,
        this.codigoDeDescuento = codigoDeDescuento
}
//calculo de precio base de la reserva(se calcula por persona)
Reserva.prototype.precioBase = function () {
    return this.cantidadDePersonas * this.precioPorPersona;
}

Reserva.prototype.precioTotal = function () {
    var descuentoTotal = this.descuentosPorPersona() + this.descuentosPorCodigo();
    var adicionalTotal = this.adicionalPorHora() + this.adicionalPorDia();
    return this.precioBase() + adicionalTotal - descuentoTotal;
}

Reserva.prototype.descuentosPorPersona = function () {
    var personaDescuento = 0;
    if (this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6) {
        return personaDescuento = this.precioBase() * 0.05;

    } else if (this.cantidadDePersonas == 7 || this.cantidadDePersonas == 8) {
        return personaDescuento = this.precioBase() * 0.1;

    } else if (this.cantidadDePersonas > 8) {
        return personaDescuento = this.precioBase() * 0.15;

    } else { return personaDescuento; };
};

Reserva.prototype.descuentosPorCodigo = function () {
    var descuento = 0;
    if (this.codigoDeDescuento === "DES15") {
        return descuento = this.precioBase() * 0.15; //DES15: obtiene un 15% de descuento.
    } else if (this.codigoDeDescuento === "DES200") {
        return descuento = 200; //DES200: obtiene $200 de descuento.
    } else if (this.codigoDeDescuento === "DES1") {
        return descuento = this.precioPorPersona; //DES1: obtiene de descuento el valor equivalente al precio de una persona.
    } else { return descuento; }
};

Reserva.prototype.adicionalPorHora = function () {
    var adicionalXHora = 0;
    if (this.horario.getHours() === 13 || this.horario.getHours() === 14 || this.horario.getHours() === 20 || this.horario.getHours() === 21) {
        return adicionalXHora = this.precioBase() * 0.05;
    } else { return adicionalXHora; }
}

Reserva.prototype.adicionalPorDia = function () {
    var adicionalXDia = 0;
    if (this.horario.getDay() === 5 || this.horario.getDay() === 6 || this.horario.getDay() === 0) {
        return adicionalXDia = this.precioBase() * 0.1;
    } else { return adicionalXDia; }
}

var reserva1 = new Reserva(new Date(2018, 7, 22, 11, 00), 8, 350, "DES1");

var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");


