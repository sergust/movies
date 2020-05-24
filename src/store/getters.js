export const getters = {
    movies: ({movies, favorites}) => {
        return movies.map((movie) => {
            let like = !!favorites.find(favorite => favorite.imdbID === movie.imdbID)
            return {like, ...movie}
        })
    },
    favorites: ({favorites, searchQuery = ''}) => {
        let result
        if (searchQuery) {
            result = favorites.filter(favorite => {
                return favorite.Title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
            })
        } else result = [...favorites]
        return result.map(result => Object.assign(result, {like: true}))
    },
    favoritesPages: (state, {favorites}) => {
        const favoritesAmount = favorites.length
        let pages = Math.trunc(favoritesAmount / 10) + 1
        if (favoritesAmount > 0 && favoritesAmount % 10 === 0) pages = pages - 1;
        return pages
    },
    favoritesPaginated: (state, {favorites}) => (page) => {
        const right = page * 10
        const left = right - 10
        return favorites.length > 9 ? favorites.slice(left, right) : favorites
    },
    searchQuery: ({searchQuery}) => searchQuery,
    favoritesCurrentPage: ({favoritesCurrentPage}) => favoritesCurrentPage,
    pagination: ({pagination}) => pagination,
    loading: ({loading}) => loading,
    currentTitle: ({currentTitle}) => currentTitle,
    currentTab: ({currentTab}) => currentTab
}
