export default {
    async GET_PENDING_POINTS({commit}, id) {
        try {
            let response = await this.$axios.get('pendingPoints')
            commit('SET_PENDING_POINTS', response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
}
