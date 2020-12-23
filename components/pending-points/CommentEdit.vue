<template>
    <div>
        <div class="row">
            <div class="col-10">
                <p class="chat-title">{{messageTitle}}</p>
            </div>
            <div class="col-2 text-right">
                <div v-if="clientMessage">
                    <a href="#" @click="deleteMessage"
                       title="Supprimer ce message">
                        <font-awesome-icon :icon="['fal','trash-alt']"></font-awesome-icon>
                    </a>
                </div>
            </div>
        </div>
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

            async deleteMessage() {
                try {
                    await this.$axios.delete('/pendingPointComments/' + this.comment.id)
                    this.refreshComments()
                } catch (error) {
                    console.log(error)
                }
            },

            refreshComments() {
                this.editing = false
                this.unFocus()
                this.$parent.refresh()
            },

            unFocus() {
                this.$refs.blabla.blur()
            }
        },

        computed: {
            inputClass() {
                return this.editing
                    ? 'p-1'
                    : 'border-0 p-1 bg-light'
            },

            messageTitle() {
                return this.clientMessage
                    ? 'Vous, ' + this.comment.created_at
                    : this.comment.accounting_firm_user.name + ', ' + this.comment.created_at
            },

            clientMessage() {
                return this.comment.accounting_firm_user === null
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
