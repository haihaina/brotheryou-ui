<template>
  <!-- 轮播图 -->
  <div
    class="slideshow"
    @mouseenter="stop"
    @mouseleave="start"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <ul>
      <li v-for="(item, i) in list" :key="i" :class="{ fade: index === i }">
        <img
          :src="`${item[url]}`"
          :style="{ width: width + 'px', height: height + 'px' }"
        />
      </li>
      <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)"
        >&lt;</a
      >
      <a href="javascript:;" class="carousel-btn next" @click="toggle(1)"
        >&lt;</a
      >
      <!-- 分页器 -->
      <div class="carousel-indicator" :style="{ width: width + 'px' }">
        <span
          v-for="(item, i) in list"
          :key="i"
          :class="{ active: index === i }"
          @click="index = i"
        >
        </span>
      </div>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, type PropType } from "vue";
const index = ref<number>(0);

interface listtype {
  [key: string]: string
}
const props = defineProps({
  list: {
    type: Array as PropType<listtype[]>,
    default: () => [],
  },
  //路径名
  url: {
    type: String,
    default: "url",
  },
  //   是否轮播
  autoplay: {
    type: Boolean,
    default: false,
  },
  //   轮播间隔
  duration: {
    type: Number,
    default: 1500,
  },
  width: {
    type: Number,
    default: 720,
  },
  height: {
    type: Number,
    default: 500,
  },
});
const toggle = (step: number) => {
  index.value += step;
  if (index.value >= props.list.length) {
    index.value = 0;
    return;
  }
  if (index.value < 0) {
    index.value = props.list.length - 1;
  }
};
let timer: any = null;
const autoplayFn = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    index.value++;
    if (index.value >= props.list.length) {
      index.value = 0;
    }
  }, props.duration);
};
const stop = () => {
  if (timer) clearInterval(timer);
};
const start = () => {
  if (props.list.length && props.autoplay) {
    autoplayFn();
  }
};
watch(
  () => props.list,
  (data) => {
    if (data.length > 1 && props.autoplay) {
      index.value = 0;
      autoplayFn();
    }
  },
  { immediate: true }
);
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
