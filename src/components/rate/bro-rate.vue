<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
const props = defineProps({
      modelValue: Number,
    color:{
        type:  String,
    default:'#fbcc30'
    },
    voidColor:{
        type: String,
        default:'#c6d1de'
    },
    showText:Boolean,
    sayText:{
        type:Array,
        default:['差','一般','中','良','优']
    }
})
const emit = defineEmits(['update:modelValue', 'change'])
  const width:any = ref(props.modelValue)
  watch(() => props.modelValue, newVal => width.value = newVal)

  const upDataValue = () => {
    emit('update:modelValue', width.value)
    if (width.value !== props.modelValue) emit('change')
  }
  const showSayFn = computed(() => {
    if (!props.showText) return
    const showSay:any = ref(null)
    watch(() => width.value, () => {
      switch (width.value) {
        case 1: showSay.value = props.sayText[0]
          break
        case 2: showSay.value = props.sayText[1]
          break
        case 3: showSay.value = props.sayText[2]
          break
        case 4: showSay.value = props.sayText[3]
          break
        case 5: showSay.value = props.sayText[4]
          break
        default: showSay.value = ''
      }
    }, { immediate: true })
    return showSay.value
  })
</script>
<template>
  <div class="bro-rate">
    <div class="bro-rate-mouseout" @mouseout="width = modelValue">
      <span class="solid" :style="`width:${width * 17}px;`">
      </span>
    </div>
    <div v-if="showText" class="show-text">{{ showSayFn }}</div>
  </div>
</template>
<style scoped>
.bro-rate {
  position: relative;
  display: flex;
}
.bro-rate .bro-rate-mouseout .hollow,
.bro-rate .bro-rate-mouseout .solid {
  width: 17px;
}
.bro-rate .bro-rate-mouseout .solid {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
.bro-rate .show-text {
  color: #333;
  font-size: 14px;
  margin-left: 5px;
}
</style>