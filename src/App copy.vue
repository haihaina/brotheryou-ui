<script setup lang="ts">
// import broCarousel from './components/Carousel/broCarousel.vue';
import { reactive,ref } from 'vue';
import BroForm from './components/Form/BroForm.vue';
import BroFormItem from './components/FormItem/broFormItem.vue';
import BroInput from './components/input/bro-input.vue';
import BroButton from './components/button/bro-button.vue';
// import BroForm from './components/Form/BroForm.vue';
// import broFormItem from './components/FormItem/broFormItem.vue';
// import broInput from './components/input/bro-input.vue';

// const list = [{
//   broUrl:'http://img.haihaina.cn/Shinichi.jpeg'
// },
// {
//   broUrl:'http://img.haihaina.cn/Shinichi1.jpeg'
// },
// {
//   broUrl:'http://img.haihaina.cn/Shinichi5.jpeg'
// },
// {
//   broUrl:'http://img.haihaina.cn/Shinichi6.jpeg'
// }]
interface FormState {
  name:string,
  pwd:string
}
const formData:FormState = reactive({name:'',pwd:''})

const rules = {
  name: [
    {
      required: true,
      message: '请输入名称',
    },
  ],
  pwd: [
    {
      required: true,
      message: '请输入密码',
    },
  ],
}
const formRef = ref<any>('')
const handleSubmit = ()=>{
  formRef.value.validate((valid:boolean)=>{
    console.log('valid',valid)
  })
}
</script>

<template>
<!-- <BroForm ref="formRef" :model="formData" :rules="rules">
  <broFormItem label="名称" prop="name">
    <broInput v-model="formData.name" height="20" />
  </broFormItem>
    <broFormItem label="密码" prop="pwd">
    <broInput v-model="formData.pwd" height="20" />
  </broFormItem>
    <broFormItem label="确定">

      <button @click="handleSubmit">
        确定
      </button>
  </broFormItem>
</BroForm> -->
 
 <bro-form ref="formRef" :model="formData" :rules="rules">
 <bro-form-item label="名称" prop="name">
  <bro-input  v-model="formData.name" height="20"  />
 </bro-form-item>
  <bro-form-item label="密码" prop="pwd">
  <bro-input  v-model="formData.pwd" height="20"  />
 </bro-form-item>
   <bro-form-item label="提交" >
  <bro-button @click="handleSubmit">确定</bro-button>
 </bro-form-item>
 </bro-form>
</template>

<style>
.lf{
  display: flex;
  width: 200px;
  height: 50px;
}
/* .a {
  position: relative;
  top: 200px;
  left: 300px;
  width: 600px;
  height: 1000px;
  background-color: #eee;
} */
</style>
