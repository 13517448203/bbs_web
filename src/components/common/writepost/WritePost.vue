<template>
  <div class="wapper">
    <div class="wp-content">
      <div>
        <!--
            @save: 按下 ctrl + s 时触发
            @change: 当值发生改变时 触发
        -->
        <mavon-editor
                @save="saveDoc"
                @change="updateDoc"
                ref="editor"
                v-model="doc">
        </mavon-editor>
      </div>
    </div>
  </div>
</template>
<script>
  import {mavonEditor} from "mavon-editor";
  import "mavon-editor/dist/css/index.css";

  // // 获取 markdown
  // let markdown = this.$refs.editor.d_value;
  // // 修改 markdown
  // this.$refs.editor.d_value = '> hello world';
  // // 获取编译后的 html
  // let html = this.$refs.editor.d_render;

  export default {
    name: "Create",
    components: {mavonEditor},
    data() {
      return {
        doc: ""
      };
    },
    methods: {
      updateDoc(markdown, html) {
        // 此时会自动将 markdown 和 html 传递到这个方法中
        console.log("markdown内容: " + markdown);
        console.log("html内容:" + markdown);


      },
      saveDoc(markdown, html) {
        // 此时会自动将 markdown 和 html 传递到这个方法中
        console.log("markdown内容:" + markdown);
        console.log("html内容:" + html);
      }
    }
  };
</script>
<style scoped>
  .wapper {
    margin-top: 60px;
    width: 100%;
    max-width: 1920px;
    line-height: 50px;
    float: left;
  }

  .wp-content {
    background: #fff;
    max-width: 1100px;
    height: 90vh;
    margin: auto;
  }
</style>