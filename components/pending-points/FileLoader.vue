<template>
    <div>
        <div class="form-group input-file-container">
            <input type="file"
                   accept="application/pdf"
                   class="form-control-file text-secondary "
                   @change="onFileChange"
                   :data-title="inputFileTitle">
        </div>
        <b-button variant="success"
                  class="btn-block mt-2"
                  v-if="showSubmit"
                  @click="sendFile">
            <font-awesome-icon :icon="['fal','file-upload']"></font-awesome-icon>
            Téléverser le fichier
        </b-button>
    </div>
</template>

<script>
    export default {
        name: "FileLoader",

        props: {
            point: {}
        },

        data() {
            return {
                form: {},
                showSubmit: false,
                inputFileTitle: '',
            }
        },

        created() {
            this.initTitle()
        },

        methods: {
            initTitle() {
                this.inputFileTitle = 'Déposez votre fichier ici ou cliquez'
            },

            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files
                if (!files.length)
                    return;
                this.inputFileTitle = files[0].name
                this.form.file = files[0]
                // this.showSubmit = true
                this.sendFile()
            },

            async sendFile() {
                this.form.pending_point_id = this.point.id
                let dataToSubmit = new FormData();
                _.forOwn(this.form, function (value, key) {
                    dataToSubmit.append(key, value)
                })
                try {
                    await this.$axios({
                        method: 'post',
                        url: 'pendingPointFiles',
                        config: {headers: {'Content-Type': 'multipart/form-data'}},
                        data: dataToSubmit,
                    })
                    this.$parent.refresh()
                    this.initTitle()
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style scoped>

</style>
