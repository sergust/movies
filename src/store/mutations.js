export const mutations = {
    setMovies(state, payload) {
        state.movies = [...payload]
    },
    setPagination(state, payload) {
        Object.assign(state.pagination, payload)
    },
    setLoading(state, value) {
        state.loading = value
    },
    setCurrentTitle(state, value) {
        state.currentTitle = value
    },
    setCurrentTab(state, tab) {
        state.currentTab = tab
    },
    setSearchQuery(state, query) {
        state.searchQuery = query
    },
    favoritesCurrentPage(state, page) {
        state.favoritesCurrentPage = page
    },
    toggleLike(state, payload) {
        const favorites = state.favorites
        const imdbID = payload.imdbID
        if (favorites.filter(favorite => favorite.imdbID === imdbID).length < 1) {
            state.favorites.push(payload)
        } else {
            state.favorites.splice(favorites.findIndex(favorite => {
                return favorite.imdbID === imdbID
            }),1)
        }
    }
}
