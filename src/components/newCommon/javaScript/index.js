import el from "element-ui/src/locale/lang/el";

export default {
    methods: {
        /**
         * 将数据从折线图表中提取出来
         * @param t 图表的类型
         * @param v 数据源
         * */
        getData(t, v) {
            let arr = [];
            let name = '';
            v.xAxis.forEach(i => {
                if (i.type === "category") {
                    arr.push({
                        type: "label",
                        name: i.name,
                        data: i.data
                    });
                } else {
                    name = i.name;
                }
            });
            v.yAxis.forEach(i => {
                if (i.type === "category") {
                    arr.push({
                        type: "label",
                        name: i.name,
                        data: i.data
                    });
                } else {
                    name = i.name;
                }
            });
            let series = this.getSeriesData(v.series, name);
            return [arr, series]
        },
        getSeriesData(v, name) {
            let arr = [];
            if (v && v.length > 0) {
                v.forEach(i => {
                    arr.push({
                        type: "value",
                        name: name,
                        data: i.data
                    })
                });
                return arr;
            }
        }
    }
}