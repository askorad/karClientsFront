<template>
    <div :key="key">
        <div v-for="comment in comments" :key="'comment'+comment.id">
            <comment-edit :comment="comment"/>
        </div>

        <comment-create :point="point"/>
    </div>
</template>

<script>
    import CommentCreate from "./CommentCreate";
    import CommentEdit from "./CommentEdit";

    export default {
        name: "CommentsContainer",

        props: {
            point: {}
        },

        components: {
            CommentCreate,
            CommentEdit
        },
        data() {
            return {
                key: ''
            }
        },

        created() {
            this.key = 'comments-container' + this.point.id
        },

        methods: {
            async refresh() {
                await this.$store.dispatch('userData/GET_PENDING_POINTS')
                this.key = 'comments-container' + Date.now()
            }
        },

        computed: {
            comments() {
                return this.point.comments.data
            },

            noComment() {
                return this.comments.data.length === 0
            }
        }

    }
</script>

<style scoped>

</style>
