/**
 * @file App.js - Componente principal da aplicação RandonPet
 * @description Componente que exibe fotos aleatórias de gatos e cachorros
 * @author WCD
 * @version 1.0.0
 */

import { LightningElement } from "lwc";

/**
 * @class App
 * @extends LightningElement
 * @description Classe principal do componente que gerencia a exibição de fotos de animais
 */
export default class App extends LightningElement {
    /**
     * @property {boolean} temFoto - Indica se há uma foto para exibir
     * @default false
     */
    temFoto = false;

    /**
     * @property {string} pictureUrl - URL da imagem atual
     */
    pictureUrl;

    /**
     * @property {string} value - Valor selecionado pelo usuário ('gatinhos' ou 'doguinhos')
     * @default ''
     */
    value = '';

    /**
     * @property {string} botaoLabel - Texto exibido no botão
     * @default 'Give me a ?'
     */
    botaoLabel = 'Give me a ?';

    /**
     * @property {string} urlGato - URL da API para obtenção de fotos de gatos
     * @default 'https://api.thecatapi.com/v1/images/search'
     */
    urlGato = `https://api.thecatapi.com/v1/images/search`;

    /**
     * @property {string} urlCachorro - URL da API para obtenção de fotos de cachorros
     * @default 'https://random.dog/woof.json'
     */
    urlCachorro = `https://random.dog/woof.json`;

    /**
     * @method buscarGatinho
     * @description Busca uma imagem de animal (gato ou cachorro) através de uma API externa
     * @param {Event} evento - O evento de clique que acionou a busca
     * @returns {void}
     */
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
    /**
     * @method selecionaOpcao
     * @description Atualiza o valor selecionado e o rótulo do botão com base na opção escolhida pelo usuário
     * @param {Event} evento - O evento de mudança que contém o valor selecionado
     * @returns {void}
     */
    selecionaOpcao(evento){
        this.value = evento.target.value
        console.log(evento.target.value)
        this.botaoLabel = (evento.target.value != 'doguinhos') ? 'Give me a Gatinhos' : 'Give me a Doguinhos'
    }

    /**
     * @method get options
     * @description Getter que retorna as opções disponíveis para seleção de animais
     * @returns {Array<Object>} - Array de objetos contendo as opções de seleção
     */
    get options() {
        return [
            { label: 'Gatinhos', value: 'gatinhos' },
            { label: 'Doguinhos', value: 'doguinhos' },
        ];
    }
}

