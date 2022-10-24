<template>
  <div class="m-form-item">
    <label for="" style="margin-right: 10px;height: 40px;">{{ label }}</label>
    <div >
    <div class="top">
          <slot></slot>
    </div>
    
    <div class="errors" :class="error?'':'size0'">
      {{ error?error:'haihaina' }}
    </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, inject, provide, ref, reactive, toRefs } from "vue";
import Schema from "async-validator";
import mitt from "mitt";
interface Formtype {
    rules:[],
    model:[]
}
const emitter = mitt();
const props = defineProps(["label", "prop"]);
const mForm:Formtype|any= inject("mForm");
const error = ref<string|undefined>("");
// 真正的校验方法
const validate = () => {
  // console.log(props)
  // form-item: prop=>name
  // form-item: prop=>pwd
  // form-item组件上没有prop属性，不去校验
  if (!props.prop) return;
  const rules = mForm.rules[props.prop];
  const value = mForm.model[props.prop];
  //   console.log(rules)
  const validator = new Schema({ [props.prop]: rules });
  return validator.validate({ [props.prop]: value }, (errors) => {
    //  errors存在则校验失败
    if (errors) {
      error.value = errors[0].message;
    } else {
      //校验通过
      error.value = "";
    }
  });
};
const mFormItem = reactive({
  ...toRefs(props),
  formItemEmitter: emitter,
  validate,
});
provide("mFormItem", mFormItem);
onMounted(() => {
  // 组件加载时，监听表单控件输入或者blur校验
  emitter.on("validate", validate);

  if (props.prop) {
    mForm.fomEmitter.emit("m.form.addField", mFormItem);
  }
});
</script>

<style lang="less" scoped>
.m-form-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
    // flex: 1;
    label {
      height: 40px;
    }
}
.top{
    height: 40px;
}
.errors {
  color: red;
  font-size: 14px;
//   height: 20px;
}
.size0{
  visibility:hidden
}
</style>
