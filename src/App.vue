<template>
  <div id="app">
    <p class="title">Ele-Multi-Cascader 示例</p>
    <br>
    <br>
    <el-row class="demo-wrapper">
      <el-col :gutter="100" class="demo-col" :span="8">
        <div style="text-align: left;">
          <p>Data</p>
          <pre>
            {{ options }}
          </pre>
        </div>
      </el-col>
      <el-col :gutter="100" class="demo-col" :span="8">
        <br>
        <br>
        <br>
        <br>
        <el-form label-width="100px" ref="form" :model="form" :rules="rules" label-position="left">
          <el-form-item label="选中子项: " prop="selectChildren" align="left">
            <el-switch
              v-model="form.selectChildren"
              :active-value="true"
              :inactive-value="false"
            >
            </el-switch>
          </el-form-item>
          <el-form-item label="运营商: " prop="isp">
            <ele-multi-cascader
              :options="options"
              v-model="form.isp"
              placeholder="选择运营商"
              @change="ispChange"
              ref="cascader"
              :selectChildren="form.selectChildren"
            ></ele-multi-cascader>
          </el-form-item>
          <br>
          <br>
          <p><el-button type="primary" @click="submit">测试提交</el-button></p>
        </el-form>
      </el-col>
      <el-col :gutter="100" class="demo-col" :span="8" style="text-align: left;">
        <p>Output @change(values, items)</p>
        <p>Values</p>
        <pre>
          {{ outputs.values }}
        </pre>
        <p>Items</p>
        <pre>
          {{ outputs.items }}
        </pre>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import options from "./db/options";

export default {
  name: "app",
  data() {
    return {
      options,
      outputs: {
        values: [],
        items: []
      },
      rules: {
        isp: [
          {
            required: true,
            trigger: "change",
            validator(rule, val, cb) {
              if (val.length === 0) {
                cb(new Error("请选择运营商"));
              } else {
                cb();
              }
            }
          }
        ]
      },
      form: {
        isp: [58, 59],
        selectChildren: true
      }
    };
  },
  created(){
    // setTimeout(_ => {
    //   this.form.isp = [51, 58, 59]
    // }, 2000)
    // setTimeout(_ => {
    //   this.options = [];
    // }, 5000)
    // setTimeout(_ => {
    //   this.options = options;
    // }, 6000)
  },
  methods: {
    ispChange(values, items) {
      this.outputs.values = values;
      this.outputs.items = items;
    },
    resetForm(){
      this.$refs.cascader.initDatas();
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message({
            message: "测试通过",
            type: "success"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-weight: 600;
}
.demo-wrapper {
  height: 500px;
  width: 100%;
}
.demo-col {
  height: 100%;
  overflow: auto;
  border: 1px dashed #ccc;
  padding: 0 20px;
}
</style>
