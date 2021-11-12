import { LightningElement, api } from "lwc";

export default class Test extends LightningElement {

  @api 
  hello = "Gutentag";

  connectedCallback() {
    const SAYHELLO = new CustomEvent('sayhello', { detail:this.hello});
    setTimeout(() => {
            this.dispatchEvent(SAYHELLO);
        }, 5000) 
  }
}