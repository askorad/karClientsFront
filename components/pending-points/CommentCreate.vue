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
                    await this.$parent.refresh()
                    this.form.message = ''
                } catch (error) {
                    console.log(error)
                }
            },
        }
    }
</script>

<style scoped>

</style>
