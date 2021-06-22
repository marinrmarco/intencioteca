class audioPlayer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        return ["intencion", "edad", "emocion"]
    }

    attributeChangedCallback(attr, oldVal, newVal){
        if (newVal !== oldVal){
            if(attr === "intencion"){
                this.intencion = newVal;
            }
            if(attr === "edad"){
                this.edad = newVal;
            }
            if(attr === "emocion"){
                this.emocion = newVal;
            }
        }
    }
/*    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }*/
    connectedCallback(){
        //this.render();
        this.shadowRoot.innerHTML = `
        <style>
            .container{
                display: grid;
                grid-template-columns: repeat(3, 1fr)

            }
            .btn_player{
                display: block;
                width: 100%;
                border: none;
                margin-left: 2px;
            }
            .btn_activo{
                background-color: blue;
            }
            .btn_player:active{
                background-color: blue;
            }
            .player_container{
                margin: 0 auto;
                text-align: center;
                margin-top: 20px;
            }
            .title{
                display: flex;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
                background-color: gray;
                height: 30px;
                align-items: center;
                justify-content: center;

            }
        </style>
        <main class="container"> 
        <section class="intencion">
            <div class="title">Intención</div>
            <button class="btn_player" id="int_comercial">
                <p>Voz Comercial/Publicitario</p>
            </button>       
            <button class="btn_player" id="int_narrativo">
                <p>Narrativo/Documental</p>
            </button>     
            <button class="btn_player" id="int_natural">
                <p>Natural</p>
            </button>
            <button class="btn_player" id="int_excotidiano">
                <p>Extra Cotidiano</p>
            </button>
            <button class="btn_player" id="int_epico">
                <p>Épico/Manifiesto</p>
            </button>
        </section>
        <section class="edad">
            <div class="title">Edad</div>
            <button class="btn_player" id="edad_20">
                <p>20</p>
            </button>  
            <button class="btn_player" id="edad_30">
                <p>30</p>
            </button>  
            <button class="btn_player" id="edad_40">
                <p>40</p>
            </button>  
        </section>
        <section class="emocion">
            <div class="title">Emoción</div>
            <button class="btn_player" id="emo_rabia">
                <p>Rabia</p>
            </button>  
            <button class="btn_player" id="emo_pena">
                <p>Pena</p>
            </button>  
            <button class="btn_player" id="emo_alegria">
                <p>Alegría</p>
            </button>  
            <button class="btn_player" id="emo_ternura">
                <p>Ternura</p>
            </button>  
            <button class="btn_player" id="emo_erotismo">
                <p>Erotismo</p>
            </button>  

        </section>
        </main>
        <section class="player_container">
            <audio id="player" 
            controls=""
            src="./audio/${this.intencion}${this.edad}${this.emocion}.mp3">
            Your browser does not support the <code>audio</code> element.
            </audio>
        </section>
        `;

        //añadir clase btn_activo al estilo de audio definido como inicial en el componente
        switch (this.intencion){
            case "1": this.shadowRoot.querySelector("#int_comercial").classList.add("btn_activo"); break;
            case "2": this.shadowRoot.querySelector("#int_narrativo").classList.add("btn_activo"); break;
            case "3": this.shadowRoot.querySelector("#int_natural").classList.add("btn_activo"); break;
            case "4": this.shadowRoot.querySelector("#int_excotidiano").classList.add("btn_activo"); break;
            case "5": this.shadowRoot.querySelector("#int_epico").classList.add("btn_activo"); break;
        }
        switch (this.edad){
            case "1": this.shadowRoot.querySelector("#edad_20").classList.add("btn_activo"); break;
            case "2": this.shadowRoot.querySelector("#edad_30").classList.add("btn_activo"); break;
            case "3": this.shadowRoot.querySelector("#edad_40").classList.add("btn_activo"); break;
        }
        switch (this.emocion){
            case "1": this.shadowRoot.querySelector("#emo_rabia").classList.add("btn_activo"); break;
            case "2": this.shadowRoot.querySelector("#emo_pena").classList.add("btn_activo"); break;
            case "3": this.shadowRoot.querySelector("#emo_alegria").classList.add("btn_activo"); break;
            case "4": this.shadowRoot.querySelector("#emo_ternura").classList.add("btn_activo"); break;
            case "5": this.shadowRoot.querySelector("#emo_erotismo").classList.add("btn_activo"); break;
        }

        this.int_comercial = this.shadowRoot.querySelector("#int_comercial");
        this.int_comercial.addEventListener("click", () => {this.cambiarIntencion(1), false});
        this.int_narrativo = this.shadowRoot.querySelector("#int_narrativo");
        this.int_narrativo.addEventListener("click", () => {this.cambiarIntencion(2), false});
        this.int_natural = this.shadowRoot.querySelector("#int_natural");
        this.int_natural.addEventListener("click", () => {this.cambiarIntencion(3), false});
        this.int_natural = this.shadowRoot.querySelector("#int_excotidiano");
        this.int_natural.addEventListener("click", () => {this.cambiarIntencion(4), false});
        this.int_natural = this.shadowRoot.querySelector("#int_epico");
        this.int_natural.addEventListener("click", () => {this.cambiarIntencion(5), false});
        
        this.int_natural = this.shadowRoot.querySelector("#edad_20");
        this.int_natural.addEventListener("click", () => {this.cambiarEdad(1), false});
        this.int_natural = this.shadowRoot.querySelector("#edad_30");
        this.int_natural.addEventListener("click", () => {this.cambiarEdad(2), false});
        this.int_natural = this.shadowRoot.querySelector("#edad_40");
        this.int_natural.addEventListener("click", () => {this.cambiarEdad(3), false});
        
        this.int_natural = this.shadowRoot.querySelector("#emo_rabia");
        this.int_natural.addEventListener("click", () => {this.cambiarEmocion(1), false});
        this.int_natural = this.shadowRoot.querySelector("#emo_pena");
        this.int_natural.addEventListener("click", () => {this.cambiarEmocion(2), false});
        this.int_natural = this.shadowRoot.querySelector("#emo_alegria");
        this.int_natural.addEventListener("click", () => {this.cambiarEmocion(3), false});
        this.int_natural = this.shadowRoot.querySelector("#emo_ternura");
        this.int_natural.addEventListener("click", () => {this.cambiarEmocion(4), false});
        this.int_natural = this.shadowRoot.querySelector("#emo_erotismo");
        this.int_natural.addEventListener("click", () => {this.cambiarEmocion(5), false});
    }

    disconnectedCallback(){
        //this.int_natural.removeEventListener("click", this.cambiarIntencion);
    }

    cambiarIntencion(int){
       const player = this.shadowRoot.getElementById("player");
       const src = player.getAttribute('src');
       const src2 = src.substr(0,8)+int+src.substr(9, 6)
       const btn_comercial = this.shadowRoot.querySelector("#int_comercial");
       const btn_narrativo = this.shadowRoot.querySelector("#int_narrativo");
       const btn_natural = this.shadowRoot.querySelector("#int_natural");
       const btn_excotidiano = this.shadowRoot.querySelector("#int_excotidiano");
       const btn_epico = this.shadowRoot.querySelector("#int_epico");
       const div_activo = this.shadowRoot.querySelector(".intencion .btn_activo");
       //cambiar apariencia del botón
       div_activo.classList.remove("btn_activo");
       switch (int){
           case 1: btn_comercial.classList.add("btn_activo"); break
           case 2: btn_narrativo.classList.add("btn_activo"); break
           case 3: btn_natural.classList.add("btn_activo"); break
           case 4: btn_excotidiano.classList.add("btn_activo"); break
           case 5: btn_epico.classList.add("btn_activo"); break
       }
       player.currentTime = 0;
       player.setAttribute("src", src2)
       player.play();
    }
    cambiarEdad(int){
       const player = this.shadowRoot.getElementById("player");
       const src = player.getAttribute('src');
       const src2 = src.substr(0,9)+int+src.substr(10, 6);
       const btn_edad20 = this.shadowRoot.querySelector("#edad_20");
       const btn_edad30 = this.shadowRoot.querySelector("#edad_30");
       const btn_edad40 = this.shadowRoot.querySelector("#edad_40");

       const div_activo = this.shadowRoot.querySelector(".edad .btn_activo");
       //cambiar apariencia del botón
       div_activo.classList.remove("btn_activo");
       switch (int){
           case 1: btn_edad20.classList.add("btn_activo"); break
           case 2: btn_edad30.classList.add("btn_activo"); break
           case 3: btn_edad40.classList.add("btn_activo"); break
       }

       player.currentTime = 0;
       player.setAttribute("src", src2)
       player.play();
    }

    cambiarEmocion(int){
       const player = this.shadowRoot.getElementById("player");
       const src = player.getAttribute('src');
       const src2 = src.substr(0,10)+int+src.substr(11, 6);

       const btn_rabia = this.shadowRoot.querySelector("#emo_rabia");
       const btn_pena = this.shadowRoot.querySelector("#emo_pena");
       const btn_alegria = this.shadowRoot.querySelector("#emo_alegria");
       const btn_ternura = this.shadowRoot.querySelector("#emo_ternura");
       const btn_erotismo = this.shadowRoot.querySelector("#emo_erotismo");
       const div_activo = this.shadowRoot.querySelector(".emocion .btn_activo");
       //cambiar apariencia del botón
       div_activo.classList.remove("btn_activo");
       switch (int){
           case 1: btn_rabia.classList.add("btn_activo"); break
           case 2: btn_pena.classList.add("btn_activo"); break
           case 3: btn_alegria.classList.add("btn_activo"); break
           case 4: btn_ternura.classList.add("btn_activo"); break
           case 5: btn_erotismo.classList.add("btn_activo"); break
       }

       player.currentTime = 0;
       player.setAttribute("src", src2)
       player.play();
    }
}

customElements.define("audio-player", audioPlayer);