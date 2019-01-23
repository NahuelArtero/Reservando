var Restaurant = function (id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}
//dado un horario (string) lo busca dentro del arreglo del horarios del restaurante y lo elimina.
//Función refactorizada de reservarHorario(horario) utilizando la función filter.
Restaurant.prototype.reservarHorario = function (horarioReservado) {
    this.horarios = this.horarios.filter(horario => horario != horarioReservado);
};

//agrega una nueva calificación al arreglo de calificaciones.
Restaurant.prototype.calificar = function (nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

//suma las calificaciones
Restaurant.prototype.sumatoria = function () {
    var sumaTotal = 0;
    this.calificaciones.forEach(numero => {
        sumaTotal += numero;
    }); return (sumaTotal);
};

//promedia las calificaciones
Restaurant.prototype.promedio = function () {
    var suma = this.sumatoria();
    var promedioTotal = suma / this.calificaciones.length;
    return Math.round(promedioTotal * 10) / 10;
};

//obtiene la puntuación del restaurante
Restaurant.prototype.obtenerPuntuacion = function () {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return (this.promedio(this.calificaciones));
    };
};