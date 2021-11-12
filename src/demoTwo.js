import { api, LightningElement, track, wire } from 'lwc';

export default class DemoOne extends LightningElement {

    @api
    greetingOne = 'Bonjour World';
    
    @api
    greetingTwo = 'Hola World';

    @api
    greetingThree = 'Konnichiwa World';

    connectedCallback() {
    
    }

    renderedCallback(){

    }

    disconnectedCallback(){

    }

    errorCallback(){

    }

}
