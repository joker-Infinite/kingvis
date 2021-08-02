export default {
    data() {
        return {}
    },
    methods: {
        getNowTime() {
            let data = this.getTimeLevel(['W', "H", "Min", "S"]);
            return data[0] + " " + data[1] + ":" + data[2] + ":" + data[3];
        },
        /**
         * @param v 需要获取的时间类型
         * */
        getTimeLevel(v) {
            let nowDate = new Date();
            //年
            let FY = nowDate.getFullYear();
            //月
            let M = nowDate.getMonth() + 1;
            //天
            let D = nowDate.getDate();
            //小时
            let H = nowDate.getHours();
            //分钟
            let Min = nowDate.getMinutes();
            //秒钟
            let S = nowDate.getSeconds();
            //星期
            let W = nowDate.getDay();
            let arr = [];
            let week = ["一", "二", "三", "四", "五", "六", "日"]
            let obj = {
                FY: FY,
                M: this.addNumber(M),
                D: D,
                H: this.addNumber(H),
                Min: this.addNumber(Min),
                S: this.addNumber(S),
                W: '星期' + week[W - 1],
            }
            v.forEach(i => {
                arr.push(obj[i]);
            })
            return arr
        },
        /**
         * @param v 对数字进行处理
         * */
        addNumber(v) {
            if (parseInt(v) < 10) {
                return "0" + v;
            }
            return v;
        }
    }
}