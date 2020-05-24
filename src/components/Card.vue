<template>
    <transition name="fade">
        <v-card outlined class="grid--card">
            <v-card-title>
                <p class="grid--card--title">{{movie.Title}}</p>
            </v-card-title>

            <v-card-text>
                <p>year: {{movie.Year}}</p>

                <p>IMDb: {{movie.imdbID}}</p>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon @click="toggleLike">
                    <v-icon :color="movie.like ? 'yellow' : 'white'">mdi-star</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </transition>
</template>

<script>
    export default {
        props: {
            movie: {
                type: Object,
                required: true
            }
        },
        methods: {
            toggleLike() {
                this.$store.commit('toggleLike', this.movie)
            }
        }
    }
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
    .grid--card {
        transition: all .5s ease-in-out;

        .v-card__title {
            height: 112px;
        }

        .grid--card--title {
            align-self: baseline;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow-y: hidden;
            word-break: break-word;
        }
    }
</style>
