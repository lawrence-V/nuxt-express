import axios from 'axios'

export const state = () => ({
  posts: {}
});

export const getters = {
  posts(state) {
    return state.posts;
  }
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  }
};

export const actions = {
    // the use of nuxtServerInit is that web the page is render the data in vuex alrealy load we didnt go to post page to show the data in vuex alrealy load we
    async nuxtServerInit({commit})  {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts') 
        commit("SET_POSTS",data)
    }
//   setPosts({ commit }, posts) {
//     commit("SET_POSTS", posts);
//   }
};
