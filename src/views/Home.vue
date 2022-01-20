<template>
    <div id="home">
        <ProgressBar/>
        <Web/>
    </div>
</template>

<script>
import ProgressBar from '../components/ProgressBar.vue'
//import CostSections from '../components/CostSections.vue'
import Web from '../components/Web.vue'
export default {
    name: 'Home',
    props: ['coste'],
    components: {
        ProgressBar,
        Web,
    }
}
</script>
