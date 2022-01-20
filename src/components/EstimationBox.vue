<template>
    <div id="estimation-box" :class="toggleNavClass()">
        <h2>Estimació Total</h2>
        <div class="items-total">
            <ul class="list-group list-group-items">
                <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(lista, index) in listas" :key="index" :id="index">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold item-title-t">{{lista.nombre}} <small>({{lista.tipo}})</small></div>
                    </div>
                    <span class="badge bg-primary rounded-pill">{{lista.precio}}€</span>
                </li>
            </ul>
        </div>
        <div class="total-b">
            <ul class="list-group total-est-g">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold item-title-t">Total Estimat</div>
                    </div>
                    <span class="badge bg-primary rounded-pill bd-total-c">{{ coste }}€</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EstimationBox',
    props: ['coste', 'listas'],
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggleNavClass(){
            if(this.active == false){
            return 'default-box-c'
            } else {
            return 'fixed-box-c'
            }
        }
    },
    mounted(){
    window.document.onscroll = () => {
        let navBar = document.getElementById('estimation-box');
        if(window.scrollY > navBar.offsetTop){
            this.active = true;
            } else {
                this.active = false;
            }
        }
    }
}
</script>

<style scoped>
h2 {
    background: #1dbfb9;
    font-weight: 600;
    color: #fff;
    text-align: center;
    padding: 10px;
    font-size: 24px;
    margin: 0px;
}
.list-group-items {
    max-height: 300px;
    overflow: auto;
}
.item-title-t {
    color: #2a3c4a !important;
    font-weight: 600 !important;
}
.total-est-g {
    background: #e9e9e9;
    border: none;
    padding: 8px;
    border-radius: 0px;
}
.total-est-g li {
    border-radius: 0px;
    background: transparent;
    border: none;
}
.total-est-g li .item-title-t {
    font-weight: 700 !important;
}
.bd-total-c {
    font-size: 16px;
    background: transparent;
    background-color: transparent !important;
    color: #1dbfb9;
    padding: 5px 0;
}
.fixed-box-c {
    position: fixed;
    max-width: 416px;
    width: 100%;
}
</style>