<template>
    <v-row>
        <v-col>
            <v-pagination
                    :value="paginationValue"
                    :length="paginationLength"
                    :total-visible="totalVisible"
                    :disabled="loading"
                    @input="handlePagination"
            ></v-pagination>
        </v-col>
    </v-row>
</template>

<script>
    import { mapGetters } from 'vuex'
    import constants from '@/constants'
    const { PAGINATION_TOTAL_VISIBLE } = constants

    export default {
        data: () => ({
            totalVisible: PAGINATION_TOTAL_VISIBLE
        }),
        computed: {
            ...mapGetters([
                'pagination',
                'loading',
                'currentTitle',
                'currentTab',
                'favoritesCurrentPage',
                'favoritesPages'
            ]),
            paginationValue() {
                return this.currentTab === 0 ? this.pagination.page : this.favoritesCurrentPage
            },
            paginationLength() {
                return this.currentTab === 0 ? this.pagination.totalPages : this.favoritesPages
            }
        },
        methods: {
            handlePagination(page) {
                if (this.currentTab === 0) {
                    this.$store.dispatch('searchMovies', {title: this.currentTitle, page})
                } else {
                    this.$store.commit('favoritesCurrentPage', page)
                }
            }
        },
    }
</script>
