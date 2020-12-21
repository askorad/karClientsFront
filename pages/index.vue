<template>
    <div>
        <div v-if="showPassword">
            <div class="row">
                <div class="col-4">
                    <b-input v-model="password"></b-input>
                </div>
            </div>

        </div>
        <div v-else>
            <h1>Bienvenue</h1>
            <p>Bienvenue sur votre espace personnel</p>
            <p>Vous avez {{pendingPoints.length}} points en suspens</p>
            <nuxt-link :to="{name:'pending-points'}" class="btn btn-secondary">
                Accéder à la liste des points en suspens
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "index",

        head: {
            title: 'Bienvenue'
        },

        data() {
            return {
                password: '',
            }
        },

        created() {
            this.$store.dispatch('userData/GET_PENDING_POINTS')
        },

        computed: {
            ...mapState({
                pendingPoints: state => state.userData.pendingPoints,
            }),

            showPassword() {
                return this.password !== 'Kara'
            }
        }

    }
</script>

<style scoped>

</style>
