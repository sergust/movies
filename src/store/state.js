export const state = {
    movies: [],
    favorites: [],
    favoritesCurrentPage: 1,
    snackbar: false,
    searchQuery: '',
    pagination: {
        page: null,
        perPage: null,
        total: null,
        totalPages: null
    },
    loading: false,
    currentTitle: null,
    currentTab: 0
}
