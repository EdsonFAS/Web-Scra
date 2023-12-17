let url = null;
let botao = document.querySelector(".buscar");

function validar(dados) {
  const regexURL = new RegExp(
      '^(https?:\\/\\/)?' + // Protocolo (http:// ou https://)
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Domínio
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // Ou IP
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Porta e caminho
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // Parâmetros de consulta
      '(\\#[-a-z\\d_]*)?$',
      'i'
  );

  if (!regexURL.test(dados)) {
      alert("URL inválida");
      return false;
  }

  //this.url = dados;
  return true;
}
function buscar(){

  

validar( document.querySelector("#urlID").value)
  
  
}
