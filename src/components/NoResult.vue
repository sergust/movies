<template>
    <div class="grid--no-result">
        <h2>Nothing to show you...</h2>
        <h2 v-if="currentTab === 0">Please try to look for something interesting 🤓</h2>
        <h2 v-else>You have no favorite movies yet...</h2>
    </div>
</template>

<script>
    export default {
        computed: {
            currentTab() {
                return this.$store.getters.currentTab
            }
        }
    }
</script>

<style lang="scss">
    .grid--no-result {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;

        h2 {
           align-self: center;
        }
    }
</style>
