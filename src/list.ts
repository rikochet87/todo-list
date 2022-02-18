import { state } from "./state";

class TodoList extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();
  }
  connectedCallback(){
    state.subscribe(() => {
      this.render();
    });
  }
 
  render() {
    const list = state.getState().list;
    console.log(list);
    

    this.shadow.innerHTML = `
        <div style="border:solid 2px red">
        <ul>
         ${list.map((item)=>{
           return `<li>${item}</li>`
         }).join("")}
         </ul>
        </div>
        `;
  }
}
customElements.define("my-list", TodoList);
