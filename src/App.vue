<template>
    <div id="app">
        <v-app id="sandbox">
            <v-content>
                <v-container fluid>
                    <v-row
                            align="center"
                            justify="center"
                    >
                        <v-col cols="12">
                            <v-card>
                                <v-card-text>
                                    <Controls/>
                                    <Grid/>
                                    <Pagination/>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
            <v-row>
                <v-col>
                    <p class="text-center grey--text">Made for Jibble by Sergey Ustinov with ❤️</p>
                </v-col>
            </v-row>
            <Snackbar/>
        </v-app>
    </div>
</template>

<script>
    import Controls from './components/Controls'
    import Grid from './components/Grid'
    import Pagination from './components/Pagination'
    import Snackbar from "./components/Snackbar";

    export default {
        name: 'App',
        components: {
            Controls,
            Grid,
            Pagination,
            Snackbar
        },
    };
</script>

