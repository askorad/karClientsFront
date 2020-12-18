<template>
    <h1>KARA</h1>
</template>

<script>
    export default {
        name: "index",

        created() {
            this.$store.dispatch('userData/GET_PENDING_POINTS')
        }
    }
</script>

<style scoped>

</style>
