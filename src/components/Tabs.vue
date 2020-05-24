<template>
    <div>
        <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                grow
        >
            <v-tab
                    v-for="item in items"
                    :key="item"
            >
                {{ item }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item
                    v-for="item in items"
                    :key="item"
            >
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                items: [
                    'All', '⭐️️️Favorites'
                ],
            }
        },
        computed: {
            tab: {
                get() {
                    return mapGetters(['currentTab'])
                },
                set(tab) {
                    this.$store.commit('setCurrentTab', tab)
                }
            }
        }
    }
</script>
