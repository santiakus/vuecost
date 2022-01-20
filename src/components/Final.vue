<template>
    <div id="cost-sections">
        <div class="container pt-5 pb-5 text-center container-box-c">
            <div class="project-info-section">
                <div class="section-option-total container-medium">
                    <h2 class="title-cost">Preu Final</h2>
                    <p class="subtitle-cost">
                        El preu final és:
                    </p>
                    <h3 class="title-cost">2.000€</h3>
                    <br>
                    <div class="input-group mb-3 input-medium">
                        <label for="exampleInputEmail1" class="form-label">Introduïu el vostre correu electrònic aquí</label>
                        <span class="input-group-text" id="basic-addon1">
                            <span class="material-icons">
                                <span class="material-icons">email</span>
                            </span>
                        </span>
                        <input type="email" class="form-control" placeholder="hola@hola.cat" aria-label="Username" aria-describedby="basic-addon1" value="">
                    </div>
                </div>
                <div class="section-option-total section-option-total-last container-large">
                    <h3 class="title-cost">Resum</h3>
                    <br>
                    <div class="result-list-c">
                        <h4 class="title-result-c">Descripció</h4>
                        <div class="result-c">
                            <ul>
                                <li>
                                    <h5>{{web.tipo}}: <b>{{web.nombre}}</b></h5>
                                    <p>
                                        Abans d’iniciar el projecte es farà una prèvia consultoria, briefing i enfoc estratègic de la nova web. També un primer estudi de mutu acord a nivell de preferències, disseny i estructura de navegació. A posteriori el nostre equip en funció de les peticions, valorarà i emprendrà la seva pròpia proposta.
                                    </p>
                                </li>
                                <li>
                                    <h5>{{diseny.tipo}}: <b>{{diseny.nombre}}</b></h5>
                                    <p>
                                        Abans d’iniciar el projecte es farà una prèvia consultoria, briefing i enfoc estratègic de la nova web. També un primer estudi de mutu acord a nivell de preferències, disseny i estructura de navegació. A posteriori el nostre equip en funció de les peticions, valorarà i emprendrà la seva pròpia proposta.
                                    </p>
                                </li>
                                <li>
                                    <h5>{{idioma.tipo}}: <b>{{idioma.nombre}}</b></h5>
                                    <p>
                                        Abans d’iniciar el projecte es farà una prèvia consultoria, briefing i enfoc estratègic de la nova web. També un primer estudi de mutu acord a nivell de preferències, disseny i estructura de navegació. A posteriori el nostre equip en funció de les peticions, valorarà i emprendrà la seva pròpia proposta.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Final',
    resutlItems: [],
    web: [],
    diseny: [],
    idioma: [],
    mounted() {
        console.log(JSON.parse(localStorage.getItem('dataTotal')))
        //console.log(JSON.parse(localStorage.getItem('dataTotal'))[1].nombre)
    },
    data() {
        return {
            Web: this.web,
            diseny: this.diseny,
            idioma: [
                this.idioma
            ],
            items: this.resutlItems,
        }
    },
    created() {
        for(var i = 0; i <= JSON.parse(localStorage.getItem('dataTotal')).length;i++){
            if(JSON.parse(localStorage.getItem('dataTotal'))[i].tipo == 'tipus'){
                this.web = JSON.parse(localStorage.getItem('dataTotal'))[i]
            }
            if(JSON.parse(localStorage.getItem('dataTotal'))[i].tipo == 'diseny'){
                this.diseny = JSON.parse(localStorage.getItem('dataTotal'))[i]
            }
            if(JSON.parse(localStorage.getItem('dataTotal'))[i].tipo == 'idioma'){
                this.idioma = JSON.parse(localStorage.getItem('dataTotal'))[i]
            }
        }
        /*if(JSON.parse(localStorage.getItem('dataTotal'))[1].tipo == 'tipus'){
            this.web = JSON.parse(localStorage.getItem('dataTotal'))[1]
        }*/
    }
}
</script>

<style scoped>
.section-option-total {
    padding-bottom: 40px;
    border-bottom: 5px dashed #f1f1f1;
    padding-top: 30px;
}
.section-option-total-last {
    border: none;
}
.container-medium {
    max-width: 600px;
    margin: 0 auto;
}
.input-medium {
    max-width: 350px;
    margin: 0 auto;
}
.container-large {
    max-width: 900px;
    margin: 0 auto;
}
.result-list-c {
    text-align: left;
}
.title-result-c {
    font-weight: 600;
    font-size: 17px;
    color: #fff;
    background: #1dbfb9;
    padding: 10px;
    margin-bottom: 0px;
}
.result-c ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
}
.result-c ul li {
    padding: 10px;
    border-bottom: 5px dashed #f1f1f1;
    margin-top: 10px;
}
.result-c ul li h5 {
    font-size: 15px;
    color: inherit;
}
.result-c ul li p {
    font-size: 14px;
    margin: 11px;
    color: #686868;
}
</style>