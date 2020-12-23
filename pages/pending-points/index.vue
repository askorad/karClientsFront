<template>
    <div>
        <h1>Points en suspens</h1>
        <h2>Clients</h2>
        <points-container :type="'CLI'"/>
        <h2 class="mt-5">Fournisseurs</h2>
        <points-container :type="'FRN'"/>
        <h2 class="mt-5">Social</h2>
        <points-container :type="'SOC'"/>
        <h2 class="mt-5">Trésorerie</h2>
        <points-container :type="'TRE'"/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import PointsContainer from "../../components/pending-points/PointsContainer";

    export default {
        name: "index",

        components: {PointsContainer},

        head: {
            title: 'Points en suspens'
        },

        created() {
            this.$store.dispatch('userData/GET_PENDING_POINTS')
        },

        computed: {
            ...mapState({
                pendingPoints: state => state.userData.pendingPoints,
            }),
        }
    }
</script>

<style scoped>

</style>
