<template>
    <div id="web">
        <ProgressBar/>
        <div class="container pt-5 pb-5">
            <div class="row">
                <div class="col-8 container-box-c">
                    <div id="cost-sections">
                        <div class="section-option">
                            <h3 class="title-cost">Tipus de Web</h3>
                            <p class="subtitle-cost">
                                Selecciona el tipus de web que necessites
                            </p>
                            <div class="options-c">
                                <div class="options-radio-inline">
                                    <div class="row">
                                        <div class="col-md-4" v-for="(service, index) in services" :key="index" :id="index">
                                            <div class="form-check form-radio-option">
                                                <label class="form-check-label" :for="service.id" :class="{ 'active-opt' : service.active }">
                                                    <div class="title-option">
                                                        <span>{{service.name}}</span>
                                                        <input class="form-check-input" type="radio" name="web-opt" :id="service.id" v-on:change="toggleActive(service)" v-model="service.active">
                                                    </div>
                                                    <small>{{service.desc}}</small>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-option">
                            <h3 class="title-cost">Diseny</h3>
                            <p class="subtitle-cost">
                                Tens el teu propi disseny o prefereixes començar de 0 amb el nostre equip gràfic?
                            </p>
                            <div class="options-c">
                                <div class="options-radio-inline">
                                    <div class="row">
                                        <div class="col-md-4" v-for="(diseny, index) in disenys" :key="index" :id="index">
                                            <div class="form-check form-radio-option">
                                                <label class="form-check-label" :for="diseny.id" :class="{ 'active-opt' : diseny.active }">
                                                    <div class="title-option">
                                                        <span>{{diseny.name}}</span>
                                                        <input class="form-check-input" type="radio" name="diseny-opt" :id="diseny.id" v-on:change="toggleActive(diseny)" v-model="diseny.active">
                                                    </div>
                                                    <small>{{diseny.desc}}</small>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="container-w-2">
                                    <p class="subtitle-cost">Hores Totals</p>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <span class="material-icons">schedule</span>
                                        </span>
                                        <input type="text" class="form-control" placeholder="00:00" aria-label="Username" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <br>
                                <button class="btn btn-primary btn-sm btn-toggle-icon" v-on:click="isHidden = !isHidden">
                                    <span class="material-icons">edit</span> Afegir Comentari
                                </button>
                                <div class="mb-3 txt-diseny" v-if="isHidden">
                                    <br>
                                    <!--<label for="option-diseny-txt" class="form-label">Comentaris</label>-->
                                    <textarea class="form-control" id="option-web-txt" rows="3" placeholder="Escriu el teu comentari..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="section-option">
                            <h3 class="title-cost">Idioma</h3>
                            <p class="subtitle-cost">
                                Quants idiomes vols?
                            </p>
                            <div class="options-c">
                                <div class="options-radio-inline">
                                    <div class="row">
                                        <div class="col" v-for="(idioma, index) in idiomes" :key="index" :id="index">
                                            <div class="form-check form-radio-option">
                                                <label class="form-check-label" :for="idioma.id" :class="{ 'active-opt' : idioma.active }">
                                                    <div class="title-option title-option-single">
                                                        <span>{{idioma.name}}</span>
                                                        <input class="form-check-input" type="checkbox" :id="idioma.id" v-on:click="toggleActive(idioma)" v-model="idioma.active">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <button class="btn btn-primary btn-sm btn-toggle-icon" v-on:click="isHidden2 = !isHidden2">
                                    <span class="material-icons">edit</span> Afegir Comentari
                                </button>
                                <div class="mb-3 txt-diseny" v-if="isHidden2">
                                    <br>
                                    <!--<label for="option-diseny-txt" class="form-label">Comentaris</label>-->
                                    <textarea class="form-control" id="option-web-txt" rows="3" placeholder="Escriu el teu comentari..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="section-option">
                            <h3 class="title-cost">Pàgines</h3>
                            <p class="subtitle-cost">
                                Selecciona el nombre de pàgines
                            </p>
                            <div class="options-c">
                                <div class="options-radio-inline">
                                    <div class="range-c">
                                        <div class="row">
                                            <div class="col-10">
                                                <input type="range" class="form-range" id="range-c-input" min="1" max="100" step="1" value="1" v-model="rangeValor" v-on:change="newPages">
                                            </div>
                                            <div class="col-2">
                                                <span>
                                                    <b>{{rangeValor}} Pàgines</b>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <button class="btn btn-primary btn-sm btn-toggle-icon" v-on:click="isHidden3 = !isHidden3">
                                    <span class="material-icons">edit</span> Afegir Comentari
                                </button>
                                <div class="mb-3 txt-diseny" v-if="isHidden3">
                                    <br>
                                    <!--<label for="option-diseny-txt" class="form-label">Comentaris</label>-->
                                    <textarea class="form-control" id="option-web-txt" rows="3" placeholder="Escriu el teu comentari..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="section-option">
                            <h3 class="title-cost">Extres</h3>
                            <p class="subtitle-cost">
                                Tria els extres que vols afegir a la teva web i que gestionaran el nostre equip.
                            </p>
                            <div class="options-c">
                                <div class="options-radio-inline options-radio-inline-long">
                                    <div class="row row-cols-auto">
                                        <div class="col" v-for="(extra, index) in extres" :key="index" :id="index">
                                            <div class="form-check form-radio-option">
                                                <label class="form-check-label" :for="extra.id" :class="{ 'active-opt' : extra.active }">
                                                    <div class="title-option title-option-single">
                                                        <span>{{extra.name}}</span>
                                                        <input class="form-check-input" type="checkbox" :id="extra.id" v-on:click="toggleActive(extra)" v-model="extra.active">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-option">
                            <h3 class="title-cost">Domini i Hosting</h3>
                            <p class="subtitle-cost">
                                Vols un nou domini i/o hosting?
                            </p>
                            <div class="options-c">
                                <div class="options-radio-inline">
                                    <div class="row row-cols-5">
                                        <div class="col" v-for="(domini, index) in dominis" :key="index" :id="index">
                                            <div class="form-check form-radio-option">
                                                <label class="form-check-label" :for="domini.id" :class="{ 'active-opt' : domini.active }">
                                                    <div class="title-option title-option-single">
                                                        <span>{{domini.name}}</span>
                                                        <input class="form-check-input" type="checkbox" :id="domini.id" v-on:click="toggleActive(domini)" v-model="domini.active">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <span style="display:none">{{total()}}</span>
                    <EstimationBox :coste="total()" :listas="listasArr"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressBar from '../components/ProgressBar.vue'
import EstimationBox from '../components/EstimationBox.vue'
export default {
    name: 'Web',
    components: {
        ProgressBar,
        EstimationBox
    },
    costeTotal: 0,
    props: {
        cost: {
            type: Number
        },
        listas: {
            type: Array
        }
    },
    data() {
        return {
            listasArr: [{
                'tipo':1,
                'nombre':'Pàgines',
                'precio':0
            }],
            services: [
                {
                    type: 'tipus',
                    name: 'Web Corporativa',
                    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 1500,
                    active: false
                },
                {
                    type: 'tipus',
                    name: 'E-commerce',
                    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 3000,
                    active: false
                },
                {
                    type: 'tipus',
                    name: 'Landing',
                    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 550,
                    active: false
                },
            ],
            disenys: [
                {
                    type: 'diseny',
                    name: 'Diseny Propi',
                    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 100,
                    active: false
                },
                {
                    type: 'diseny',
                    name: 'Diseny Personalitzat',
                    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                    price: 200,
                    active: false
                },
            ],
            isHidden: false,
            idiomes: [
                {
                    type: 'idioma',
                    name: 'Espanyol',
                    price: 100,
                    active: false
                },
                {
                    type: 'idioma',
                    name: 'Català',
                    price: 100,
                    active: false
                },
                {
                    type: 'idioma',
                    name: 'Anglès',
                    price: 100,
                    active: false
                },
                {
                    type: 'idioma',
                    name: 'Altres',
                    price: 100,
                    active: false
                },
            ],
            isHidden2: false,
            rangeValor: 1,
            isHidden3: false,
            extres: [
                {
                    type: 'extres',
                    name: 'Google Analytics',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'Xarxes Socials',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'Live Chat',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'Newsletter',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'Certificat SSL',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'RGPD',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'Blog',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'Contacte',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'Maps',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'SEO',
                    price: 50,
                    active: false
                },
                {
                    type: 'extres',
                    name: 'Responsive',
                    price: 50,
                    active: false
                },
            ],
            dominis: [
                {
                    type: 'domini',
                    name: '.com',
                    price: 10,
                    active: false
                },
                {
                    type: 'domini',
                    name: '.es',
                    price: 20,
                    active: false
                },
                {
                    type: 'domini',
                    name: '.cat',
                    price: 30,
                    active: false
                },
                {
                    type: 'domini',
                    name: 'altres',
                    price: 30,
                    active: false
                },
                {
                    type: 'domini',
                    name: 'hosting',
                    price: 100,
                    active: false
                },
            ],
        }
    },
    methods: {
        toggleActive: function(s) {
            var arr = {
                'tipo':s.type,
                'nombre':s.name,
                'precio':s.price
            };
            var exists = this.listasArr.some(function(field) {
                return field.tipo === s.type
            });
            var existsMultiple = this.listasArr.some(function(field) {
                return field.nombre === s.name
            });
            var index = ''
            if(s.type == 'tipus'){
                if(!s.active){
                    if(!exists){
                        this.listasArr.push(arr)
                    }else{
                        index = this.listasArr.map(function (element) {return element.tipo;}).indexOf('tipus');
                        this.listasArr[index] = arr
                    }
                }
                this.services.forEach(function(e) {
                    if (e.active) {
                        e.active = false;
                    }
                });
                s.active = true;
            }
            if(s.type == 'diseny'){
                if(!s.active){
                    if(!exists){
                        this.listasArr.push(arr)
                    }else{
                        index = this.listasArr.map(function (element) {return element.tipo;}).indexOf('diseny');
                        this.listasArr[index] = arr
                    }
                }
                this.disenys.forEach(function(e) {
                    if (e.active) {
                    e.active = false;
                    }
                });
                s.active = true;
            }
            if(s.type == 'idioma'){
                if(!s.active){
                    if(!existsMultiple){
                        this.listasArr.push(arr)
                    }
                }else{
                    index = this.listasArr.map(function (element) {return element.nombre;}).indexOf(s.name);
                    this.listasArr.splice(index, 1)
                }
                this.disenys.forEach(function(e) {
                    if (e.active) {
                    e.active = false;
                    }
                });
                s.active = true;
            }
            if(s.type == 'extres'){
                if(!s.active){
                    if(!existsMultiple){
                        this.listasArr.push(arr)
                    }
                }else{
                    index = this.listasArr.map(function (element) {return element.nombre;}).indexOf(s.name);
                    this.listasArr.splice(index, 1)
                }
                this.disenys.forEach(function(e) {
                    if (e.active) {
                    e.active = false;
                    }
                });
                s.active = true;
            }
            if(s.type == 'domini'){
                if(!s.active){
                    if(!existsMultiple){
                        this.listasArr.push(arr)
                    }
                }else{
                    index = this.listasArr.map(function (element) {return element.nombre;}).indexOf(s.name);
                    this.listasArr.splice(index, 1)
                }
                this.disenys.forEach(function(e) {
                    if (e.active) {
                    e.active = false;
                    }
                });
                s.active = true;
            }
            var objDiv = document.getElementById("list-group-wrap");
            objDiv.scrollTop = objDiv.scrollHeight;
        },
        newPages: function() {
            this.listasArr[0]['tipo'] = this.rangeValor
            var pagTotal = 0
            var x = 0
            if(this.rangeValor > 4){
                if((this.rangeValor % 5) >= 0){
                    x++
                    pagTotal = this.listasArr[0]['precio']+60*x;
                }
            }
            this.listasArr[0]['precio'] = pagTotal
        },
        total: function() {
            var total = 0;
        
            this.services.forEach(function(s) {
                if (s.active) {
                    total += s.price;
                }
            });
            this.disenys.forEach(function(s) {
                if (s.active) {
                    total += s.price;
                }
            });
            this.idiomes.forEach(function(s) {
                if (s.active) {
                    total += s.price;
                }
            });
            this.extres.forEach(function(s) {
                if (s.active) {
                    total += s.price;
                }
            });
            this.dominis.forEach(function(s) {
                if (s.active) {
                    total += s.price;
                }
            });
        
            //this.coste = total;
            return total;
        }
    }
}
</script>

<style scoped>
.form-check {
    padding-left: 0;
}
.container-w-2 {
    max-width: 200px;
}
input[type='range']::-webkit-slider-thumb {
    background: #1dbfb9;
}
.options-radio-inline-long .form-radio-option {
    margin-bottom: 20px;
}
.options-radio-inline-long .form-radio-option .title-option {
    padding-right: 20px;
    font-size: 13px;
}
</style>