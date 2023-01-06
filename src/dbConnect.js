import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://victornegromonte:vm140498@alurawebsocket.cspj5h2.mongodb.net/?retryWrites=true&w=majority");

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("websockets");
    documentosColecao = db.collection("documentos");

    console.log("conectado com sucesso!");

} catch (erro) {
    console.log(erro);
}

export { documentosColecao };