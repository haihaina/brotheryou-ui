<script setup lang="ts">
import BroInput from './components/input/bro-input.vue';
import {ref} from 'vue'
const msg =ref<string>('')
const btn=()=>{
  console.log('msg',msg.value)
}
</script>

<template>
<bro-input v-model='msg' :clearable="true"></bro-input>
<button @click="btn">确认</button>
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
