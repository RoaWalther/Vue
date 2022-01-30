<template>
<div>
    <ul class="list-group">
    <li v-for="fruta of frutas" :key='fruta'
    class="list-group-item d-flex justify-content-between align-items-center">
        cust
        <span class="badge bg-primary rounded-pill">14</span>
    </li>
    </ul>
</div>
    
</template>

<script>

import {mapState} from 'vuex';
    export default {
        name: 'Lista',
        computed: {
            ...mapState(['frutas'])
        }
    }

</script>