<template>
    <div class="card shadow mb-4">

        <div class="card-header bg-secondary text-white p-2">
            <div class="row">
                <div class="col-9">
                    <span> {{ point.entry_date | moment("D/M/Y") }}</span> :
                    {{point.account_name+' - '+point.document+' '+point.description}}
                </div>
                <div class="col-3 text-right">
                    <strong> {{amount}}</strong>
                </div>
            </div>
        </div>

        <div class="card-body p-3">
            <div class="row">
                <div class="col-8">
                    <b-alert show variant="success"> {{point.question}}</b-alert>
                    <b-card class="bg-light">
                        <comments-container :point="point"/>
                    </b-card>
                </div>
                <div class="col-4">
                    <b-card class="bg-light shadow-sm">
                        <files-container :point="point"/>
                    </b-card>
                </div>
            </div>
            <b-button variant="success" class="btn-block mt-3" @click="send">Envoyer à KARA</b-button>

        </div>
    </div>
</template>

<script>
    import FilesContainer from "./FilesContainer";
    import CommentsContainer from "./CommentsContainer";

    export default {
        name: "PendingPointItem",

        components: {
            CommentsContainer,
            FilesContainer
        },

        props: {
            point: {}
        },

        methods: {
            async send() {
                try {
                    await this.$axios.put('/pendingPoints/' + this.point.id + '/send')
                    this.$parent.refresh()
                } catch (error) {
                    console.log(error)
                }
            }
        },

        computed: {
            amount() {
                if (this.point.debit > 0 && this.point.credit === 0) {
                    return 'Débit : ' + Number(this.point.debit).toFixed(2) + ' €'
                } else if (this.point.credit > 0 && this.point.debit === 0) {
                    return 'Crédit : ' + Number(this.point.credit).toFixed(2) + ' €'
                }
            }
        }
    }
</script>

<style scoped>

</style>
