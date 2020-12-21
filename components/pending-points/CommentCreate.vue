<template>
    <b-form-input
            placeholder="Saisissez votre message"
            v-model="form.message"
            @change="sendMessage">
    </b-form-input>
</template>

<script>
    export default {
        name: "CommentCreate",

        props: {
            point: {},
        },

        data() {
            return {
                form: {},
            }
        },

        methods: {
            async sendMessage() {
                this.form.pending_point_id = this.point.id
                try {
                    await this.$axios.post('/pendingPointComments', this.form)
                    this.refreshComments()
                } catch (error) {
                    console.log(error)
                }
            },

            refreshComments() {
                this.form.message = ''
                this.$parent.getComments()
            }
        }
    }
</script>

<style scoped>

</style>
