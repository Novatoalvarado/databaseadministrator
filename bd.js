import { strict } from "assert";
import mongoose, { model } from "mongoose";
mongoose.connect("mongodb+srv://joangonzalez:Perrojiji@cluster0.do3tnua.mongodb.net/Database?retryWrites=true&w=majority")
    .then(data => console.log("conexion exitosa a mongo"))
    .catch(error => console.log(error))

let esquema = mongoose.Schema({
    _id: Number,
    nombre: String,
    edad: Number,
    sexo: String
})

var modelo = mongoose.model('usuarios', esquema)


async function consultar() {
    let documentos = await modelo.find()
    console.log(documentos)
}
//consultar()
/*
    async function insertar() {
        let registros = new modelo({
            _id: "04",
            nombre: "jose manuel",
            edad: 35,
            sexo: "No binario"
        })
        await registros.save()
    }
insertar()*/
/*
async function eliminar() {
    await modelo.deleteOne({ _id: "04" })

}
eliminar()
*/

async function actualizar() {
    await modelo.updateOne({ nombre: "Andres" }, {
        $set: {
            edad: "30",
        }
    })

}

actualizar()
consultar()