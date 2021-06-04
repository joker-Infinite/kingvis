//src/assets/vue-py.js
import {pinyin} from "./pinyin";

export default {
    methods: {
        //全拼
        chineseToPinYin(l1) {
            let l2 = l1.length;
            let I1 = "";
            let reg = new RegExp("[a-zA-Z0-9]");
            for (let i = 0; i < l2; i++) {
                let val = l1.substr(i, 1);
                let name = this.arrayNormal(val, pinyin);
                if (reg.test(val)) {
                    I1 += val;
                } else if (name !== false) {
                    I1 += name;
                }
            }
            I1 = I1.replace(/ /g, "-");
            while (I1.indexOf("--") > 0) {
                I1 = I1.replace("--", "-");
            }
            return I1;
        },
        //简拼
        simplePinYin(l1) {
            let l2 = l1.length;
            let I1 = "";
            let reg = new RegExp("[a-zA-Z0-9]");
            for (let i = 0; i < l2; i++) {
                let val = l1.substr(i, 1);
                let name = this.arraySimple(val, pinyin);
                if (reg.test(val)) {
                    I1 += val;
                } else if (name !== false) {
                    I1 += name;
                }
            }
            I1 = I1.replace(/ /g, "-");
            while (I1.indexOf("--") > 0) {
                I1 = I1.replace("--", "-");
            }
            return I1;
        },
        //全部处理
        arrayNormal(l1) {
            for (let name in pinyin) {
                if (pinyin[name].indexOf(l1) !== -1) {
                    return this.normalHandle(name);
                }
            }
            return false;
        },
        normalHandle(l1) {
            if (l1.length > 0) {
                return l1;
            }
        },
        //简拼处理
        arraySimple(l1) {
            for (let name in pinyin) {
                if (pinyin[name].indexOf(l1) !== -1) {
                    return this.simpleHandle(name);
                }
            }
            return false;
        },
        simpleHandle(l1) {
            if (l1.length > 0) {
                let first = l1.substr(0, 1);
                return first;
            }
        }
    }
};