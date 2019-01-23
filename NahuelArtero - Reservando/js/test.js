var expect = chai.expect;


describe('Test reservas de horario', function () {

    it('Elimina horario', function () {
        var resto = listadoDeRestaurantes[1];
        let paraComparar = resto.reservarHorario('12:30');
        expect(resto.horarios).not.to.eql(paraComparar);
        expect(resto.horarios).to.have.lengthOf(2); // otra forma que compara la longitud del array

    });

    it('Horario se mantiene', function () {
        var resto = listadoDeRestaurantes[2];
        //en caso de que se ingrese un horario que no posee
        resto.reservarHorario('16:00');
        expect(resto.horarios).to.eql(['11:30', '12:00', '22:30']);
        expect(resto.horarios).to.have.lengthOf(3);
    });

    it('funcion sin parametro de horario', function () {
        var resto = listadoDeRestaurantes[2];
        resto.reservarHorario();
        expect(resto.horarios).to.eql(['11:30', '12:00', '22:30']);
    });


});



describe('Test de la obtencion de puntuacion', function () {

    it('promedia bien la calificacion', function () {
        expect(listadoDeRestaurantes[2].obtenerPuntuacion()).to.eql(7);
        expect(listadoDeRestaurantes[19].obtenerPuntuacion()).to.eql(6);


    });

    it('Calificacion es igual a 0', function () {
        listado.restaurantes[3].calificaciones = [];
        expect(listadoDeRestaurantes[3].obtenerPuntuacion()).to.eql(0);


    });
});

describe('Test de calificacion', function () {

    it('se agrega nueva calificacion', function () {
        var resto = listadoDeRestaurantes[3];
        resto.calificaciones = [8, 9, 9, 4, 6, 7];
        resto.calificar(5);
        expect(resto.calificaciones).to.eql([8, 9, 9, 4, 6, 7, 5]);
        expect(resto.calificaciones).to.have.lengthOf(7);

    });

    it('No se agregan strings ni números fuera del rango entre 1 y 10', function () {
        var resto = listadoDeRestaurantes[3];
        resto.calificaciones = [8, 9, 9, 4, 6, 7];
        resto.calificar(0);
        resto.calificar(13);
        resto.calificar('foo');
        resto.calificar(-1);
        expect(resto.calificaciones).to.eql([8, 9, 9, 4, 6, 7]);
    });
});

describe('Test para buscar restaurante', function () {
    it('encuentra bien el restaurante', function () {
        var buscaResto = listado.buscarRestaurante(4);
        expect(buscaResto.nombre).to.equal('Bleecker Street Pizza');
    });

    it('No encuentra restaurante si ingresa un string', function () {
        var listado = new Listado(listadoDeRestaurantes)
        expect(listado.buscarRestaurante("foo")).is.eql("No se ha encontrado ningún restaurant");
    });

    it('No encuentra restaurante si no existe el id buscado', function () {
        expect(listado.buscarRestaurante(50)).is.eql("No se ha encontrado ningún restaurant");

    });

});

describe('Test para obtener Restaurante mediante filtros(filtroRubro, filtroCiudad, filtroHorario) ', function () {
    var listado = new Listado(listadoDeRestaurantes)

    it('Encuentra el restaurante utilizando todos los filtros', function () {
        expect(listado.obtenerRestaurantes("Pasta", "Berlín", "12:00").length).to.equal(1);

    });

    it('Encuentra todos los restaurantes si no se aplica filtro', function () {
        expect(listado.obtenerRestaurantes(null, null, null).length).to.equal(24);

    });

    it('Encuentra restaurantes filtrado por ciudad', function () {
        expect(listado.obtenerRestaurantes(null, 'Berlín', null).length).to.equal(5);
    });
});


describe('Test del objeto Reserva', function () {
    it('Objeto y sus atributos creados correctamente', function () {
        let reservaObjeto = new Reserva();
        expect(reservaObjeto).to.be.an("object")
            .that.have.all.keys("horario", "cantidadDePersonas", "precioPorPersona", "codigoDeDescuento")
    });

    it('Chequea el precio base', function () {
        expect(reserva1.precioBase()).to.eql(2800);
        expect(reserva2.precioBase()).to.eql(300);
    });

    it('Chequea el precio final', function () {
        expect(reserva1.precioTotal()).to.eql(2170);
        expect(reserva2.precioTotal()).to.eql(100);
    });
});