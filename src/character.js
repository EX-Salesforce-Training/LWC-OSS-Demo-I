import { api, LightningElement, track, wire } from 'lwc';

export default class DemoOne extends LightningElement {


    name = "Name: "
    height = "Height: "
    mass = "Mass: "


    connectedCallback(){
        var randomnumber=Math.floor(Math.random()*84)
        fetch(`https://swapi.dev/api/people/${randomnumber}/`)
        .then(response => response.json())
        .then(data => {
            if(data.name != undefined){
            this.name += data.name;
            this.height += data.height;
            this.mass += data.mass; 
            }
        })
    }


}
