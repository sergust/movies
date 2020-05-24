<template>
    <v-row class="grid">
        <template v-if="currentTab === 0 && !loading">
            <v-col
                    v-for="(movie, index) in movies"
                    :key="index"
                    md="4" sm="6" xs="12" cols="12"
                    class="grid--col--lg5-custom"
            >
                <Card :movie="movie"/>
            </v-col>
            <v-col v-if="!movies.length">
                <NoResult/>
            </v-col>
        </template>

        <template v-if="currentTab === 1 && !loading">
            <v-col
                    v-for="(favorite, index) in favoritesPaginated"
                    :key="index"
                    md="4" sm="6" xs="12" cols="12"
                    class="grid--col--lg5-custom"
            >
                <Card :movie="favorite"/>
            </v-col>
            <v-col v-if="!favoritesPaginated.length">
                <NoResult/>
            </v-col>
        </template>

        <template v-if="currentTab === 0 && loading">
            <v-col v-for="skeleton in 10"
                   :key="skeleton"
                   md="4" sm="6" xs="12" cols="12"
                   class="grid--col--lg5-custom"
            >
                <v-skeleton-loader
                        class="mx-auto"
                        type="card"
                ></v-skeleton-loader>
            </v-col>
        </template>
    </v-row>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Card from './Card'
    import NoResult from './NoResult'

    export default {
        components: {
            Card,
            NoResult
        },
        computed: {
            ...mapGetters(['movies', 'favorites', 'loading', 'currentTab', 'favoritesCurrentPage']),
            favoritesPaginated() {
                return this.$store.getters.favoritesPaginated(this.favoritesCurrentPage)
            }
        }
    }
</script>

<style lang="scss">
@media (min-width: 1264px) and (max-width: 1903px) {
        .grid {
            min-height: 564px;

            .grid--col--lg5-custom {
                width: 20%;
                max-width: 20%;
                flex-basis: 20%;
            }
        }
    }
</style>
