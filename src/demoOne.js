import { api, LightningElement, track, wire } from 'lwc';

export default class DemoOne extends LightningElement {


    greetingOne = 10;
    
    @api
    greetingTwo = 'Hola World';

    @track
    greetingThree = 'Konnichiwa World';


}
