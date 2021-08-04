import Vue from "vue";
import Vuex from "vuex";
import Finance from "../pages/Finance/Finance";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        searchValue: {
            oid: '',
            selected: '服务区'
        },
        userPages: [],
        timer: 1,
        homeState: {
            //页面主题风格
            pageTheme: "",
            //经营排行选中
            operating: [],
            //营收利润
            revenueProfit: "",
            //地图选中及定位的点
            map: {
                oid: "",
                nowPosition: []
            }
        },
        Finance: {
            //切换财务页面主题
            theme: 1
        }
    },
    mutations: {
        newSearchValue: (state, msg) => {
            state.searchValue.oid = msg.oid;
            state.searchValue.selected = msg.selected;
        },
        setUserPages: (state, data) => {
            state.userPages = data;
        },
        setTimer: (state, t) => {
            state.timer = t;
        },
        updateHomeSate: (state, d) => {
            for (let i in d) {
                if (d[i]) {
                    state.homeState[i] = d[i];
                }
            }
        },
        changeFinance: (state, v) => {
            if (JSON.stringify(v) !== "{}") {
                for (let i in Finance) {
                    for (let m in v) {
                        if (i === m) {
                            Finance[i] = v[m];
                        }
                    }
                }
            }
        }
    },
    actions: {
        actionIncrease({commit}) {
            commit('newSearchValue');
            commit('setUserPages');
            commit('updateHomeSate');
            commit('changeFinance');
        },
    },
    modules: {
        getSearchValue: state => {
            return state.searchValue;
        },
        getUserPages: state => {
            return state.userPages;
        },
        getTimer: state => {
            return state.timer;
        },
        getHomeSate: state => {
            return state.homeState;
        },
        getFinance: state => {
            return state.Finance;
        }
    }
});
