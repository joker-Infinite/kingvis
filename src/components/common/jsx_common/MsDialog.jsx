export default {
  name: "MsDialog",
  props: ["title", "visible"],
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.visible = false;
    }
  },
  mounted() {},
  created() {},
  watch: {},
  render(h) {
    const { title, visible, closeDialog } = this;
    return (
      <el-dialog
        title={title}
        visible={visible}
        append-to-body={true}
        close-on-click-modal={true}
        close-on-press-escape={true}
        on-close={closeDialog}
        {...{
          scopedSlots: {
            default: () => {
              return h("div", [h("default", [this.$slots.default])]);
            }
          }
        }}
      >
        暂无数据
      </el-dialog>
    );
  }
};
