export default {
  data() {
    return {};
  },
  methods: {
    YoYIncrease(data) {
      let j = 1;
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        arr.push((((data[j] - data[i]) / data[i]) * 100).toFixed(2));
        if (j != data.length - 1) {
          j++;
        }
      }
      arr.unshift("");
      return arr;
    }
  }
};
