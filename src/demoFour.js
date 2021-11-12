import { api, LightningElement, track, wire } from 'lwc';

export default class DemoOne extends LightningElement {


    luke = "Name: "
    height = "Height: "
    mass = "Mass: "


    connectedCallback(){
        fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.luke += data.name;
            this.height += data.height;
            this.mass += data.mass; 
        })
    }
}
