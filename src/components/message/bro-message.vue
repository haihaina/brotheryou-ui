<template>
  <teleport to="body">
    <section class="message-container" :class="type" v-if="show">
      <!-- <div class="icon-area">o</div> -->
      <div class="message-area">{{ message }}</div>
      <div class="close-button-area" v-show="closable" @click="hiddenMessage">x</div>
    </section>
  </teleport>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref, toRefs } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (type: string) => ['info', 'success', 'error', 'warn'].includes(type)
  },
  message: {
    type: String,
    required: true,
    default:'info alert'
  },
  closable: {
    type: Boolean,
    default: false
  },
  during: {
    type: String || Number,
    default: 3000
  }
})

const show = ref(true)
const hiddenMessage = () => {
  show.value = false
}


onMounted(() => {
  setTimeout(() => {
    hiddenMessage()
  }, parseInt(props.during))
})

</script>

<style scoped>
.message-container {
  position: absolute;
  top: 20px;
  left: calc(50% - 190px);
  min-width: 200px;
  border-radius: 35px;
  height: 48px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 20px;
  animation: slidedown 0.6s ease-in;
  z-index: 999;
}

@keyframes slidedown {
  from {
    position: absolute;
    top: -48px;
    left: calc(50% - 190px);
    opacity: 0.1;
  }

  to {
    position: absolute;
    top: 20px;
    left: calc(50% - 190px);
    opacity: 1;
  }
}
.message-container.info {
  background-color: #eee;
  color: #909399;
}
.message-container.success {
  background-color: #dee1e6;
  color: #0c9c7d;
}
.message-container.error {
  background-color: #dee1e6;
  color: #cf4444;
}
.message-container.warn {
  color: #ffb302;;
  background-color: #f4e5cb;
}

.message-container > .icon-area {
  width: 24px;
  height: 24px;
  margin-right: 20px;
  display: grid;
  place-items: center;
  /* background-color: #1e9f22; */
}

.message-container > .message-area {
  /* background-color: #0084ff; */
  flex-grow: 1;
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  /**
   * TODO: 处理单行文本省略的功能
  */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.message-container > .close-button-area {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  margin-left: 20px;
  cursor: pointer;
  /* background-color: #333; */
}
</style>