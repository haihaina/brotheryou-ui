<template>
  <div class="m-form" :style="{width:width+'px',height:height+'px'}">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { reactive, provide, toRefs } from "vue";
import mitt from "mitt";
const emitter = mitt();
const props = defineProps({
  // 校验的数据
  model: {
    type: Object,
    default: () => {},
  },
  // 校验规则
  rules: {
    type: Object,
    default: () => {},
  },
  width:{
    type:Number,
    default:1200
  },
  height:{
    type:Number,
    default:500
  }
});
const fileds: any = reactive([]);
// 提供表单整体校验方法validate, 调用form-item的校验方法
const validate = (cb: any) => {
  // TODO : 调用子组件form-item的校验方法
  const tasks = fileds.map((item: any) => item.validate());
  Promise.all(tasks)
    .then(() => cb(true))
    .catch(() => {
      //   console.log('校验失败')
      cb(false);
    });
};
// 监听表单项是否注册，如果一旦注册，就存放到栈中
emitter.on("m.form.addField", (field: any) => {
  field && fileds.push(field);
});
const mForm = reactive({
  fomEmitter: emitter,
  ...toRefs(props),
});
provide("mForm", mForm);
defineExpose({
  validate,
});
</script>

<style lang="less" scoped>
.m-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid #ccc;
  padding: 20px;
  // height: 100%;
}
</style>
