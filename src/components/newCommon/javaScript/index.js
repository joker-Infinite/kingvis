export default {
    methods: {
        /**
         * 将数据从折线图表中提取出来
         * @param t 图表的类型
         * @param v 数据源
         * */
        getData(t, v) {
            let arr = [];
            let series = this.getSeriesData(v.series);
            v.xAxis.forEach(i => {
                if (i.type === "category") {
                    arr.push({
                        type: "label",
                        name: i.name,
                        data: i.data
                    });
                }
            });
            v.yAxis.forEach(i => {
                if (i.type === "category") {
                    arr.push({
                        type: "label",
                        name: i.name,
                        data: i.data
                    });
                }
            });
            return [arr, series]
        },
        getSeriesData(v) {
            let arr = [];
            if (v && v.length > 0) {
                v.forEach(i => {
                    arr.push({
                        type: "value",
                        name: i.name,
                        data: i.data
                    })
                });
                return arr;
            }
        }
    }
}