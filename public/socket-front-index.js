import { inserirLinkDocumento, removerLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    documentos.forEach((documento) => {
        inserirLinkDocumento(documento.nome);
    });
});

function emitirAdicionarElemento(nome) {
    socket.emit("adicionar_documento", nome);
}

socket.on("adicionar_documento_interface", (nome) => {
    inserirLinkDocumento(nome);
});

socket.on("documento_existente", (nome) =>{
    console.log(`O documento ${nome} já Existe!`);
});

socket.on("excluir_documento_sucesso", (nome) => {
    removerLinkDocumento(nome);
})

function emitirExcluirDocumento(nome) {
    socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
    alertarERedirecionar(nome);
});

export { emitirAdicionarElemento, emitirExcluirDocumento };