<template>
    <div class="bro-input">
        <input :type="type" :disabled="disabled" :placeholder="placeholder" v-model='modelValue' @input="close"
        :style="{ width: width + 'px', height: height + 'px' }">
    <div v-show="clearable&&modelValue.length >= 1" class="clearableFn-icon" @click="clearableFn"
        :style="{ left: iconleft + 'px', top: icontop + 'px', height: height + 'px' }">
            <img src="../../assets/image/clearable.png" style="width:20px;height: 20px;" alt="">
    </div>
    </div>

</template>
<script lang="ts" setup>
import { computed,inject } from 'vue';
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    // 双向绑定
    modelValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '请输入内容'
    },
    // 类型
    type: {
        type: String,
        default: 'text',
        validator(val: string) {
            return ['text', 'password'].includes(val)
        }
    },
    // 禁用
    disabled: {
        type: Boolean,
        default: false
    },
    // 宽
    width: {
        type: String,
        default: '150'
    },
    // 高
    height: {
        type: String,
        default: '30'
    },
    // 清空
    clearable: {
        type: Boolean,
        default: false,
    }
})
const mFormItem:any = inject('mFormItem')
const iconleft = computed(() => Number(props.width) - 10)
const icontop = computed(() => Number(props.height) / 2
) 
const emit = defineEmits(['update:modelValue'])
const close = (e: any) => {
    emit('update:modelValue', e.target.value)
     mFormItem && mFormItem.formItemEmitter.emit('validate')
}
const clearableFn = () => {
    console.log('eeee')
    emit('update:modelValue', '')
}
</script>
<style  scoped lang="less">
@import url('./index.css');
.bro-input{
    min-width: 50px;
    min-height: 50px;
    input {
    border: 1px solid #d9d9d9;
    padding: 8px 6px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    outline: none;
    position: absolute;
}

input:focus {
    border-color: #27ba9b;
}

.clearableFn-icon {
    width: 20px;
    // height:20px;
    position: relative;
    background-color: #Fff;
    z-index: 9;
}
}

</style>