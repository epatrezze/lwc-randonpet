import { LightningElement } from "lwc";

export default class App extends LightningElement {
temFoto = false;
pictureUrl;
value = '';
botaoLabel = 'Give me a ?';

buscarGatinho(evento) {
    const url = this.value;
    console.log('url: ',url)
    const urlGato = `https://api.thecatapi.com/v1/images/search`;
    const urlCachorro = `https://random.dog/woof.json`;
    const options = {
        method: 'GET'
    }
    fetch(url, options).then(
        response => response.json()
    ).then(
          data => {
              console.log('data ',data)
              this.pictureUrl = (url == urlGato) ? data[0].url : data.url;
              console.log('data ',this.pictureUrl)
              this.temFoto = true;
            
          }
      )  
}
selecionaOpcao(evento){
    this.value = evento.target.value
    console.log(evento.target.label.valeu)
}

get options() {
    return [
        { label: 'Gatinhos', value: `https://api.thecatapi.com/v1/images/search` },
        { label: 'Doguinhos', value: `https://random.dog/woof.json` },
    ];
}
}

