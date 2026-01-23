let bombilla = {
    id: 1,
    marca: "phillips",
    intesidad: 80,
    encendida: false,
    conmutar() {
        this.encendida=!this.encendida
            console.log("la bombilla ahora esta", this.encendida? "encendida":"apagada");
    }
}
console.log(bombilla);
bombilla.conmutar()
bombilla.conmutar()

function DispositivoVello(nome, consumo) {
    this.nome= nome
    this.consumo= consumo
    this.mostrarInfo = function () {
        console.log("Dispositivo", nome, " consume", consumo);        
    }
}

let radio = new DispositivoVello("radioRetro", 20);
radio.mostrarInfo()

class Dispositivo{
    static contadorDispositivos = 0;
    constructor(nome, fabricante){
        this.nome = nome
        this.fabricante = fabricante
        this.conectado = false

        Dispositivo.contadorDispositivos++
    }
    conectar(){
        this.conectado=true
        console.log(this.nome," esta ahora en linea");
        
    }
    static mostrarTotal(){

        console.log("Dispositivos totales", this.contadorDispositivos);

    }
}

let cafetera = new Dispositivo("cafetera", "cafeSL")
let television = new Dispositivo("Tv", "LG")
let ordenador = new Dispositivo("Pc", "ordenador")

class Termostato extends Dispositivo {
    constructor(nome, fabricante, temperatura) {
        super(nome, fabricante);
        this._temperatura = temperatura;
    }

    // getter
    get temperatura() {
        return` ${this._temperatura}ºC`;
    }

    // setter
    set temperatura(tempNueva) {
        this._temperatura = tempNueva;
    }

    obtenerTemperatura() {
        return this._temperatura;
    }

    establecerTemperatura(temperatura) {
        this._temperatura = temperatura;
    }
}

let termo = new Termostato("EjemTermostato", "Samnsung", 34)

termo.temperatura = 20;
console.log(termo.temperatura);


class Sensor extends Dispositivo {
    constructor(arg1, arg2) {
        super("sensorGenerico","fabricanteEstandar")        
        if (arguments.length == 0) {
            this.tipo = "temperatura"
            this.unidad = "ºC"

        }else if (arguments.length == 1 && typeof arg1 == "string") {
            this.nome = arg1
            this.tipo = arg1
            this.unidad = "ºC"
        } else if (typeof arg1 == "object") {
            this.nome = arg1.nome
            this.tipo = arg1.tipo
            this.unidad = arg1.unidad || "ºC"
            this.fabricante = arg1.fabricante
        }
    }
    leer() {
        console.log(`nombre: ${this.nome} unidad: ${this.unidad} fabricante: ${this.fabricante} tipo: ${this.tipo}`);            
    }
}

let sensorBasico = new Sensor()
let sensorMovimiento = new Sensor("movimiento")
let sensorFume = new Sensor({nome: "sensorCocina", tipo: "fume", unidad: "ºC", fabricante: "Samnsung"})

sensorBasico.leer()
sensorMovimiento.leer()
sensorFume.leer()

class SensorPro {
    constructor(nome, tipo, unidad) {
        this._nome = nome
        this._tipo = tipo
        this._unidad = unidad
    }

    static crearSensorAgus (nome){
        return new SensorPro(nome, "inundacion", "binario")
    }

    static crearDesdeJson (json){
        let datos = JSON.parse(json)
        return new SensorPro(datos.nome, datos.tipo, datos.unidad)
    }

    leer() {
        console.log(`nombre: ${this._nome} unidad: ${this._unidad} fabricante: ${this._fabricante} tipo: ${this._tipo}`);            
    }
}

let sensorBaño = SensorPro.crearSensorAgus("sensorBaño")
let sensorTerraza = SensorPro.crearDesdeJson(`{
    "nome" : "Sensor2",
    "tipo": "Lume",
    "unidade" : "ºC"
    }`)

sensorBaño.leer()
console.log(sensorTerraza);
