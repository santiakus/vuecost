<template>
    <div>
        <Web/>
    </div>
</template>

<script>
import Web from '../components/Web.vue'
export default {
    name: 'WebSection',
    components: {
        Web
    },
    mounted() {
        if(localStorage.nomClient && localStorage.obtClient){
            //nombre y objectivos cliente
        }
    }
}
</script>