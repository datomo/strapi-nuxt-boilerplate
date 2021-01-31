export const state = () => ({
    examples: {}
});

export const mutations = {
    setEndpoint(state, payload) {
        state.examples = payload;
    },
};

export const actions = {
    async nuxtServerInit ({ commit }, { $axios }) {
        const payload = await $axios.$get("http://localhost:1337/examples")
        commit('setEndpoint', payload)
    }
};

export const getters = {
    examples: state => {
        return state.examples
    },
};