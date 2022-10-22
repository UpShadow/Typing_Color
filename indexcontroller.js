const appcores = {
    data() {
        return {
            color: "white", // define background color with v-bind in div
            colorname: "", // string with colors typed
            colorsPT: "azul cinza verde vermelho amarelo ciano preto branco", // colors in portuguese
            colorsEN: "blue grey green red yellow cyan black white", // colors in english
            colorSplited: "", // string applied split transform in array of colors
            language: "", // page idiom PT or EN

            //Page Text
            EnterC: "Enter a color:", 
            Title: "Typing background color",
            tittleInputL: "Language:",
            example: "blue grey green red yellow cyan black white",
        }
    },
    methods: {
        changeColor(){
            this.colorname = this.colorname.toLowerCase(); // transform colorname string in lower caracters
            this.colorSplited = this.colorname.split(" ");  // colorSplited get colorname in array format
            this.colorSplited.reverse();  // array colorSplited reversed
            //Search into portuguese colors
            if (this.language == "PT")
            {
                let colorsPTSplit = this.colorsPT.split(" ");
                let i;
                //Search into portuguese colors
                for(i=0; i <= colorsPTSplit.length && this.colorSplited[0] != colorsPTSplit[i]; i++) {

                }   
                //change background-color variable 
                let colorsENSplit = this.colorsEN.split(" "); //split in portuguese languages string
                if(i <= colorsPTSplit.length && this.colorSplited[0] == colorsPTSplit[i]) { // if i< = colorSplited.lenght find the color
                    this.color = colorsENSplit[i];
                } 
            } else { // English Language
                 //Search into english colors and change background-color variable 
                if(this.colorsEN.includes(this.colorSplited[0])) {
                    if(this.colorSplited[0] != "")
                        this.color = this.colorSplited[0];
                }
            }
        },
        // function for change page text language
        changeLanguage() {
            if (this.language == "PT")
            {
                this.Title = "Plano de fundo digitando cor";
                this.tittleInputL = "Linguagem:";  
                this.EnterC = "Digite uma cor:";
                this.example = this.colorsPT;
            } else {              
                this.Title = "Typing background color";
                this.tittleInputL = "Language:";
                this.EnterC = "Enter a color:";
                this.example = this.colorsEN;
            }    
        }
    },
    template:
    `   
        <!-- Tittle Page -->
        <div class="d-flex flex-row justify-content-center mt-5">
            <!-- não consegui usar v-img do Vue la no template -->
            <img src="./favicons/favicon.ico" alt="rainbow" class="img-fluid ms-1">
            <h1 class="text-center ms-2">{{Title}}</h1>
        </div>

        <div class="container border rounded mt-3 pt-3" v-bind:style="{ backgroundColor: color }">
            <div class="d-flex flex-column pb-4 pt-1 w-25">               
                <label>
                    <div class="pt-3">
                        <span class="span_option">{{tittleInputL}}</span>
                        <select class="form-select form-select-sm" v-model="language" @change="changeLanguage()">
                            <option>EN</option>
                            <option selected>PT</option>
                        </select>
                    </div>
                </label>
            </div>
            <div class="d-flex flex-column">
                <label class="input_color">
                    <span>{{EnterC}}</span>
                    <input type="text" v-model="colorname" @keyup="changeColor" class="input">
                </label>
            </div>
            <div class="pb-2">
                <span class="text_style">{{example}}</span>
            </div>
        </div>
    `
}

Vue.createApp(appcores).mount('#app')