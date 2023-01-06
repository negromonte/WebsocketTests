import { emitirAdicionarElemento, emitirExcluirDocumento } from "./socket-front-index.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");
const botaoExcluir = document.getElementById("excluir-documento");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    emitirAdicionarElemento(inputDocumento.value);
    inputDocumento.value = "";
});

function inserirLinkDocumento(nomeDocumento) {
    listaDocumentos.innerHTML += ` 
    <a href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action" id="documento-${nomeDocumento}">
    ${nomeDocumento}
  </a>`;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);

  listaDocumentos.removeChild(documento);
}
  botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nomeDocumento);
});

export { inserirLinkDocumento, removerLinkDocumento };
