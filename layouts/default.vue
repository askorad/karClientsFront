<template>
    <div>
        <b-navbar toggleable="lg" class="shadow bg-white">
            <b-navbar-brand>
                <nuxt-link :to="{name:'index'}">
                    <img src="~/assets/img/logo-kara.png" style="height: 50px" alt="KARA">
                </nuxt-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-navbar>
        <div class="container mt-4">
            <Nuxt/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "default"
    }
</script>

<style scoped>

</style>
