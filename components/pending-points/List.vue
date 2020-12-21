<template>
    <div>
        <div v-if="items.length>0">
            <pending-point-item
                    v-for="item in items"
                    :key="'item'+item.id"
                    :item="item"/>
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
    import PendingPointItem from "./Item";

    export default {
        name: "PendingPointsList",

        components: {PendingPointItem},

        props: {
            type: ''
        },

        computed: {
            ...mapState({
                pendingPoints: state => state.userData.pendingPoints,
            }),

            items() {
                return this.pendingPoints.filter(item => item.type === this.type)
            }
        }
    }
</script>

<style scoped>

</style>
