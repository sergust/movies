<template>
    <v-text-field
            v-model="searchQuery"
            @change="tryToSearch"
            :disabled="loading"
            label="Search"
    ></v-text-field>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        methods: {
            tryToSearch(query) {
               if (this.currentTab === 0) {
                   this.$store.dispatch('searchMovies', {title: query, page: 1}).then(response => {
                       if (!response) {
                            this.$store.commit('setSnackbar', true)
                       }
                   })
               }
            }
        },
        computed: {
            ...mapGetters(['loading', 'currentTab']),
            searchQuery: {
                get() {
                    return this.$store.getters.searchQuery
                },
                set(value) {
                    this.$store.commit('setSearchQuery', value)
                }
            }
        }
    }
</script>
