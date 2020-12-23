<template>
    <div :key="key">
        <div v-if="points.length>0">
            <pending-point-item
                    v-for="point in points"
                    :key="'point' + point.id"
                    :point="point"/>
        </div>
        <div v-else>
            <b-card class="mb-3">
                Aucun point en suspens
            </b-card>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import PendingPointItem from "./PointItem";

    export default {
        name: "PendingPointsContainer",

        components: {
            PendingPointItem
        },

        props: {
            type: ''
        },

        data() {
            return {
                key: ''
            }
        },

        created() {
            this.key = 'points-container' + this.type
        },

        methods: {
            async refresh() {
                await this.$store.dispatch('userData/GET_PENDING_POINTS')
                this.key = 'points-container' + Date.now()
            }
        },

        computed: {
            ...mapState({
                pendingPoints: state => state.userData.pendingPoints,
            }),

            points() {
                return this.pendingPoints.filter(item => item.type === this.type)
            }
        }
    }
</script>

<style scoped>

</style>
