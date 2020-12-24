<template>
    <div :key="key">
        <div v-if="noFile">
            Aucun fichier joint
        </div>
        <div v-else v-for="file in files">
            <file-handler :file="file"/>
        </div>
        <file-loader :point="point"/>
    </div>
</template>

<script>
    import FileHandler from "./FileHandler";
    import FileLoader from "./FileLoader";

    export default {
        name: "FilesContainer",

        components: {FileLoader, FileHandler},

        props: {
            point: {}
        },

        data() {
            return {
                key: ''
            }
        },

        created() {
            this.key = 'files-container' + this.point.id
        },

        methods: {
            async refresh() {
                await this.$store.dispatch('userData/GET_PENDING_POINTS')
                this.key = 'files-container' + Date.now()
            }
        },

        computed: {
            files() {
                return this.point.files.data
            },
            noFile() {
                return this.files.length === 0
            }
        }
    }
</script>

<style scoped>

</style>
