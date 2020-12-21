<template>
    <div>
        <p class="chat-title">{{title}}</p>
        <b-form-input
                :class="inputClass"
                v-model="form.message"
                @change="updateMessage"
                @click="edit"
                ref="blabla">
        </b-form-input>
        <hr class="chat-hr">
    </div>
</template>

<script>
    export default {
        name: "CommentEdit",

        props: {
            comment: {}
        },

        data() {
            return {
                form: {},
                editing: false
            }
        },

        created() {
            this.form.message = this.comment.message
        },

        methods: {
            edit() {
                this.editing = true
            },

            async updateMessage() {
                try {
                    await this.$axios.put('/pendingPointComments/' + this.comment.id, this.form)
                    this.refreshComments()
                } catch (error) {
                    console.log(error)
                }
            },

            refreshComments() {
                this.editing = false
                this.unFocus()
                this.$parent.getComments()
            },

            unFocus() {
                this.$refs.blabla.blur()
            }
        },

        computed: {
            inputClass() {
                return this.editing
                    ? 'p-1'
                    : 'border-0 p-1'
            },

            title() {
                return this.comment.accounting_firm_user.name + ', ' + this.comment.created_at
            }
        }

    }
</script>

<style scoped>
    .chat-title {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 0;
    }

    .chat-message {
        margin-bottom: 0;
    }

    .chat-hr {
        margin-top: 5px;
        margin-bottom: 15px;
    }
</style>
