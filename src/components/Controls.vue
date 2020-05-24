<template>
    <v-row
            justify="space-between"
    >
        <v-col lg="3" md="5" cols="12" sm="12" xs="12">
            <Search/>
        </v-col>
        <v-col lg="3" md="5" cols="12" sm="12" xs="12">
            <Tabs/>
        </v-col>
    </v-row>
</template>

<script>
    import Tabs from './Tabs'
    import Search from './Search'

    export default {
        components: {
            Tabs,
            Search
        }
    }
</script>
