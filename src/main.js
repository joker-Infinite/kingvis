import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import VueAMap from "vue-amap";
import "./plugins/wyz-echarts/wyz-echarts.js";
import empty from "./pages/empty/empty.vue";
import "./assets/icon/iconfont.css";
import "echarts-liquidfill";
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.prototype.$axios.defaults.timeout = 120000;
Vue.config.productionTip = false;
Vue.component("empty", empty);
Vue.use(VueAMap);
Vue.use(VXETable)
VueAMap.initAMapApiLoader({
    key: "5f4ec16b146bc7ebde7308bd2dbcd132",
    plugin: [
        "AMap.Autocomplete",
        "AMap.PlaceSearch",
        "AMap.Scale",
        "AMap.OverView",
        "AMap.ToolBar",
        "AMap.MapType",
        "AMap.PolyEditor",
        "AMap.CircleEditor"
    ],
    // 默认高德 sdk 版本为 1.4.4
    v: "1.4.4",
    uiVersion: "1.0.11"
});
//同比增长
Vue.prototype.YOY = function (ls, THIS, NEXT) {
    let ns = JSON.parse(JSON.stringify(ls));
    let data = [];
    ls.pop();
    ns.shift();
    ns.forEach((i, x) => {
        if (i !== 0 && ls[x] !== 0) {
            data.push(((i - ls[x]) / ls[x]) * 100);
        } else {
            data.push("");
        }
    });
    data.unshift("");
    return data;
};
//深拷贝
Vue.prototype.DeepCopy = v => {
    return JSON.parse(JSON.stringify(v));
};
//通过ref调用多个子页面方法
/**
 * @param num 需要调用的ref数量
 * @param time 调用间隔时间
 * @param ref 页面ref
 * @param data ECharts数据
 * */
Vue.prototype.childRef = (num, time = 70, ref, data) => {
    let i = 0;
    let key = setInterval(_ => {
        let d;
        if (data && data[i]) {
            d = data[i];
        }
        if (ref[i]) {
            ref[i].initECharts(d);
        }
        i++;
        if (i === num) clearInterval(key);
    }, time);
};
Vue.prototype.mySet = (d, parameter) => {
    let array = [];
    let allArray = [];
    if (!d || d.length === 0) {
        return [];
    }
    d.forEach(i => {
        if (parameter) {
            i = i[parameter];
            allArray.push(i);
        } else {
            allArray.push(i);
        }
    });
    allArray.forEach((i, x) => {
        if (x === 0) {
            array.push(i);
        }
        if (array.indexOf(i) === -1 && x !== 0) {
            array.push(i);
        }
    });
    return array;
};
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
