<template>
    <div id="home">
        <div class="container pt-5 pb-5 text-center container-box-c">
            <div class="project-info-section">
                <div class="section-option container-medium">
                    <h2 class="title-cost">Nom del Client</h2>
                    <p class="subtitle-cost">
                        Introdueix el nom del client
                    </p>
                    <div class="input-group mb-3 input-medium">
                        <span class="input-group-text" id="basic-addon1">
                            <span class="material-icons">person</span>
                        </span>
                        <input type="text" class="form-control" placeholder="Nom del client" aria-label="Username" aria-describedby="basic-addon1" v-model="nomClient" @input="persist()" value="">
                    </div>
                </div>
                <div class="section-option container-medium">
                    <h2 class="title-cost">Objectius del Projecte</h2>
                    <p class="subtitle-cost">
                        Descriu breument quins son els objectius
                    </p>
                    <div class="form-floating">
                        <textarea class="form-control textarea-c" placeholder="Leave a comment here" id="floatingTextarea" v-model="obtClient" @input="persist()" value=""></textarea>
                        <label for="floatingTextarea">Objectius</label>
                    </div>
                </div>
                <div class="section-option section-option-last">
                    <h2 class="title-cost">Què Necessites?</h2>
                    <p class="subtitle-cost">
                        Selecciona l'opció adequada pel Projecte
                    </p>
                    <div class="options-c">
                        <div class="options-radio-inline">
                            <div class="row">
                                <div class="col-md-3 col-left-c" v-for="(service, index) in services" :key="index" :id="index">
                                    <div class="form-check form-radio-option">
                                        <label class="form-check-label" :for="service.id" :class="{ 'active-opt' : service.active }">
                                            <div class="title-option">
                                                <span class="material-icons">{{service.icon}}</span>
                                                <input class="form-check-input" type="radio" name="web-opt" :id="service.id" v-on:change="toggleActive(service)" v-model="service.active">
                                            </div>
                                            <small>{{service.name}}</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div>
                    <router-link :to="link" class="btn btn-primary btn-lg btn-step" :disabled="!ActiveLink" :event="ActiveLink ? 'click' : ''"><span class="material-icons">navigate_next</span> SEGÜENT</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import ProgressBar from '../components/ProgressBar.vue'
//import CostSections from '../components/CostSections.vue'
//import Web from '../components/Web.vue'
export default {
    name: 'Home',
    data() {
        return {
            nomClient: '',
            obtClient: '',
            ActiveLink: false,
            link: '',
            services: [
                {
                    type: 'tipus',
                    name: 'Web',
                    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                    icon: 'desktop_windows',
                    url: 'web',
                    active: false
                },
                {
                    type: 'tipus',
                    name: 'Diseny Gràfic',
                    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                    icon: 'square_foot',
                    url: 'diseny',
                    active: false
                },
                {
                    type: 'tipus',
                    name: 'Màrqueting i Social Media',
                    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                    icon: 'thumb_up_alt',
                    url: 'marqueting',
                    active: false
                },
                {
                    type: 'tipus',
                    name: 'Audiovisuals',
                    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                    icon: 'videocam',
                    url: 'video',
                    active: false
                },
            ]
        }
    },
    methods: {
        toggleActive: function(s) {
            this.services.forEach(function(e) {
                if (e.active) {
                    e.active = false;
                }
            });
            s.active = true;
            this.link = s.url
        },
        persist() {
            localStorage.removeItem('nomClient');
            localStorage.removeItem('obtClient');
            localStorage.setItem('nomClient', this.nomClient)
            localStorage.setItem('obtClient', this.obtClient)
            this.ActiveLink = true
        }
    }
}
</script>

<style scoped>
.container-box-c {
    margin-top: 100px;
    max-width: 1140px;
}
.container-medium {
    max-width: 600px;
    margin: 0 auto;
}
.textarea-c {
    min-height: 120px;
}
.col-left-c {
    text-align: left;
}
.form-radio-option .title-option span {
    font-size: 40px;
    color: #1dbfb9;
}
.form-radio-option small {
    font-size: 15px;
}
.input-medium {
    max-width: 350px;
    margin: 0 auto;
}
</style>