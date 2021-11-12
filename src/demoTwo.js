import { api, LightningElement } from 'lwc';

export default class DemoOne extends LightningElement {

    @api
    greetingOne = 'Bonjour World';
    
    @api
    greetingTwo = 'Hola World';

    @api
    greetingThree = 'Konnichiwa World';

    //Lifecycle Hooks
    connectedCallback() {
        
    }

    renderedCallback(){

    }

    disconnectedCallback(){

    }

    errorCallback(){

    }

    handleSayHello(event){
        this.greetingOne = event.detail;
    }

}
