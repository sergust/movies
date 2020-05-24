import axios from 'axios'

const CancelToken = axios.CancelToken
let cancel

import constants from '@/constants'
const {API_SEARCH_URL} = constants

export const actions = {
    async searchMovies({commit}, {title, page}) {
        if (cancel) cancel()
        try {
            commit('setLoading', true)
            const response = await axios
                .get(
                    `${API_SEARCH_URL}/?Title=${title}&page=${page}`,
                    {
                        cancelToken: new CancelToken(function executor(c) {
                            cancel = c;
                        })
                    }
                )
            commit('setLoading', false)
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
                cancel = null
            } else {
                //notify
            }
        } catch (e) {
            console.log(e)
        }
    }
}
