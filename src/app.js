import { LightningElement } from "lwc";

export default class App extends LightningElement {
temFoto = false;
pictureUrl;
value = '';
botaoLabel = 'Give me a ?';
urlGato = `https://api.thecatapi.com/v1/images/search`;
urlCachorro = `https://random.dog/woof.json`;

buscarGatinho(evento) {
    const url = (this.value == 'gatinhos') ? this.urlGato : this.urlCachorro;
    console.log('url: ',url)
    
    const options = {
        method: 'GET'
    }
    fetch(url, options).then(
        response => response.json()
    ).then(
          data => {
              console.log('data ',data)
              this.pictureUrl = (url == this.urlGato) ? data[0].url : data.url;
              console.log('data ',this.pictureUrl)
              this.temFoto = true;
            
          }
      )  
}
selecionaOpcao(evento){
    this.value = evento.target.value
    console.log(evento.target.value)
    this.botaoLabel = (evento.target.value != 'doguinhos') ? 'Give me a Gatinhos' : 'Give me a Doguinhos'
}

get options() {
    return [
        { label: 'Gatinhos', value: 'gatinhos' },
        { label: 'Doguinhos', value: 'doguinhos' },
    ];
}
}

