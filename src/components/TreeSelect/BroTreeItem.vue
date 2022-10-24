<template>
    <div :class="{bold:isFolder}" @click="toggle">
        <img src="../../assets/image/rightArrows.png" alt="" v-if="isFolder" :class="{rodate:isOpen}" style="width:15px;height:15px;vertical-align: bottom;">
            {{list.name}}
    </div>
    <div class="list" v-if="isFolder" v-show="isOpen" >
        <bro-tree-item  v-for="(child,index) in list.children" :key="index" :list="child">
        </bro-tree-item>
    </div>

</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
const props = defineProps({
    list: {
        type: Object,
        default:()=>{}
    }
})
const isOpen = ref<Boolean>(false)
// 使用计算属性判断用户是否有children
const isFolder= computed(()=>{
    return props.list.children &&props.list.children.length > 0
})
const toggle =(()=>{
    if(isFolder){
        isOpen.value = !isOpen.value
    }
})
</script>
<style lang="less" scoped>
.bold{
    color:@xtxColor ;
    cursor: pointer;
}
.list{
    margin-left: 15px;
}
.rodate{
    transform: rotate(90deg);
}
</style>