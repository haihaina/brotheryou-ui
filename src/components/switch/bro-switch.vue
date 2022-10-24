<script lang="ts" setup>
import {ref,computed} from 'vue'
const props = defineProps({
    modelValue:{
        type:Boolean,
        required:true
    },
    // 关闭颜色
    closeColor:{
        type: String,
        default:'#dcdfe6'
    },
    // 开启颜色
    openColor:{
        type: String,
        default: '#27ba9b'
    },
    inactiveText:String,
    activeText:String,
    disabled:Boolean,
    width:{
        type: Number,
        default:50
    }
})
const emit = defineEmits(['update:modelValue', 'change'])
  const switchValue = ref(props.modelValue)

  const clickSwitch = () => {
    if (props.disabled) return
    switchValue.value = !switchValue.value
    emit('update:modelValue', switchValue.value)
    emit('change', switchValue.value)
  }

  const switchColor = computed(() => {
    return props.modelValue ? props.openColor : props.closeColor
  })

  const switchStyle = computed(() => {
    const width = ref(props.width)
    if (width.value < 20) width.value = 20
    return [{
      width: `${width.value}px`,
      height: `${width.value / 2}px`,
      backgroundColor: switchColor.value
    }]
  })

  const switchRollStyle = computed(() => {
    const width = ref(props.width)
    if (width.value < 20) width.value = 20
    return [{
      width: `${(width.value / 2) - 4}px`,
      height: `${(width.value / 2) - 4}px`,
      left: props.modelValue ? `${width.value / 2}px` : '0px'
    },
    `border:2px solid  ${switchColor.value}`
    ]
  })
</script>
<template>
  <span
    v-if="inactiveText"
    class="bro-switch-inactiveText"
    :style="[`color:${switchValue ? '#333' : '#27ba9b'}`]"
  >
    {{ inactiveText }}
  </span>
  <span
    :class="[
      'bro-switch',
      {
        'bro-switch-disabled': disabled,
      },
    ]"
    :style="switchStyle"
    @click="clickSwitch"
  >
    <span class="bro-switch-roll" :style="switchRollStyle" />
  </span>
  <span
    v-if="activeText"
    class="bro-switch-activeText"
    :style="[`color:${modelValue ? '#27ba9b' : '#333'}`]"
  >
    {{ activeText }}
  </span>
</template>
<style scoped>
.bro-switch {
  display: inline-block;
  transition: 0.3s;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
}
.bro-switch .bro-switch-roll {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  transition: 0.3s;
  border-radius: 50%;
  background-color: #fff;
}
.bro-switch-disabled {
  opacity: 0.6;
  cursor: no-drop;
}
.bro-switch-inactiveText,
.bro-switch-activeText {
  vertical-align: top;
  font-size: 13px;
  color: #333;
  transition: 0.3s;
}
.bro-switch-inactiveText {
  margin-right: 5px;
}
.bro-switch-activeText {
  margin-left: 5px;
}
</style>