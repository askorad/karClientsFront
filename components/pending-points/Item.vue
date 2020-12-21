<template>
    <div class="card shadow mb-3">
        <div class="card-header bg-secondary text-white p-2">
            <div class="row">
                <div class="col-9">
                    {{item.entry_date+' : '+item.account_name+' - '+item.document+' '+item.description}}
                </div>
                <div class="col-3 text-right">
                    <strong> {{amount}}</strong>
                </div>
            </div>

        </div>
        <div class="card-body p-3">
            <div v-for="comment in comments" :key="comment.id">
                <comment-edit :comment="comment"/>
            </div>
            <comment-create :point="item"/>
        </div>
    </div>
</template>

<script>
    import CommentEdit from "./CommentEdit";
    import CommentCreate from "./CommentCreate";

    export default {
        name: "PendingPointItem",

        components: {CommentCreate, CommentEdit},

        props: {
            item: {}
        },

        data() {
            return {
                comments: [],
                show: false
            }
        },

        created() {
            this.getComments()
        },

        methods: {
            async getComments() {
                try {
                    let response = await this.$axios.get('/pendingPoints/' + this.item.id + '/pendingPointComments')
                    this.comments = response.data.data
                    this.show = true
                } catch (error) {
                    console.log(error)
                }
            },
        },

        computed: {
            amount() {
                if (this.item.debit > 0 && this.item.credit === 0) {
                    return 'Débit : ' + Number(this.item.debit).toFixed(2) + ' €'
                } else if (this.item.credit > 0 && this.item.debit === 0) {
                    return 'Crédit : ' + Number(this.item.credit).toFixed(2) + ' €'
                }
            }
        }
    }
</script>

<style scoped>

</style>
