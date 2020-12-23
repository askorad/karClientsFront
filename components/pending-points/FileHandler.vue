<template>
    <div>
        <a :href="fileUrl" target="_blank" title="Afficher le fichier">
            <font-awesome-icon :icon="['fal','eye']" fixed-width></font-awesome-icon>
        </a>
        <a href="#" @click="deleteFile" title="Supprimer le fichier">
            <font-awesome-icon :icon="['fal','trash-alt']" fixed-width></font-awesome-icon>
        </a>
        <span class="pl-2">{{file.file_name}}</span>
    </div>
</template>

<script>
    export default {
        name: "FileHandler",

        props: {
            file: {}
        },

        methods: {
            async deleteFile() {
                try {
                    await this.$axios.delete('/pendingPointFiles/' + this.file.id)
                    this.$parent.refresh()
                } catch (error) {
                    console.log(error)
                }
            },
        },

        computed: {
            fileUrl() {
                //TODO set token
                return this.$axios.defaults.baseURL + 'pendingPointFiles/' + this.file.uuid + '/file' //?token=' + this.$auth.getToken('local')
            }
        }

    }
</script>

<style scoped>

</style>
