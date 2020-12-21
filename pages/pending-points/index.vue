<template>
    <div>
        <h1>Points en suspens</h1>
        <h2>Clients</h2>
        <pending-points-list :type="'CLI'"/>
        <h2>Fournisseurs</h2>
        <pending-points-list :type="'FRN'"/>
        <h2>Social</h2>
        <pending-points-list :type="'SOC'"/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import PendingPointsList from "../../components/pending-points/List";

    export default {
        name: "index",

        components: {PendingPointsList},

        head: {
            title: 'Points en suspens'
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
