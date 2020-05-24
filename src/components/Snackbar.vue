<template>
    <v-snackbar
            v-model="snackbar"
            :timeout="7000"
    >
        Something went wrong...
        <v-btn
                color="blue"
                text
                @click="snackbar = false"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        computed: {
            snackbar: {
                get() {
                    return this.$store.getters.snackbar
                },
                set(value) {
                    this.$store.commit('setSnackbar', value)
                }
            }
        }
    }
</script>
