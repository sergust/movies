import axios from 'axios'

const CancelToken = axios.CancelToken
let cancel

import constants from '@/constants'

const {API_SEARCH_URL} = constants

export const actions = {
    searchMovies({commit}, {title, page}) {
        if (cancel) cancel()
        return new Promise((resolve, reject) => {
            commit('setLoading', true)
            axios
                .get(
                    `${API_SEARCH_URL}/?Title=${title}&page=${page}`,
                    {
                        cancelToken: new CancelToken(function executor(c) {
                            cancel = c;
                        })
                    }
                )
                .then(response => {
                    if (response.status === 200) {
                        const {page, per_page, total, total_pages, data} = response.data
                        commit('setMovies', data);
                        commit('setPagination', {
                            page: parseInt(page, 10),
                            total,
                            perPage: per_page,
                            totalPages: total_pages
                        })
                        commit('setCurrentTitle', title)
                        commit('setLoading', false)
                        cancel = null
                        resolve(true)
                    } else {
                        //notify
                        reject(false)
                    }
                })
                .catch(() =>  reject(false))
        })
    }
}
