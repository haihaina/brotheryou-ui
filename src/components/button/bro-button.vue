<script setup lang="ts">
    import {
        computed
    } from 'vue'
    const props = defineProps({
        type: {
            type: String,
            default: 'default',
            validator(val: string) {
                return ['default', 'primary', 'success', 'danger', 'warning'].includes(val)
            }
        },
        round: Boolean, // 圆角
        disabled: Boolean, // 禁用
        size: {
            type: String,
            validator(val: string) {
                return ['mini', 'normal', 'medium', 'large'].includes(val)
            }
        }, // 大小 
        plain: Boolean, // 简约
        icon: Boolean, // 图标
    })
    const ButtonColor: any = {
        primary: '#27ba9b',
        success: '#1dc779',
        danger: '#d10f1b',
        warning: '#fbcc30',
        default: '#3f536e'
    }
    const textColor = computed(() => {
        if (props.plain) return ButtonColor[props.type]
        return props.type === 'default' || props.type === '' ? '#333' : '#fff'
    })
    const buttonClass = computed(() => {
        return [
            'bro-button',
            props.plain ?
            props.disabled ? `bro-button-plain-disabled-${props.type}` : `bro-button-plain-${props.type}` :
            props.disabled ? `bro-button-disabled-${props.type}` : `bro-button-${props.type}`,
            props.size ? `bro-button-size-${props.size}` : '',
            {
                'bro-button-round': props.round,
            }
        ]
    })
</script>
<template>
    <button :class="buttonClass" :disabled="disabled">
        <!-- <bro-icon > -->
        <span class='bro-button-text' :style="[icon?'margin-left:5px':'',{color:textColor}]">

            <slot> 按钮</slot>
        </span>

    </button>
</template>
<style scoped>
    .bro-button {
        min-width: 40px;
        padding: 0 22px;
        height: 35px;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
        border: none;
        transition: .3s
    }

    .bro-button-primary {
        background: #27ba9b
    }

    .bro-button-primary:hover {
        background:  #0c9c7d;
        box-shadow: 0 0 3px  #0c9c7d
    }

    .bro-button-primary:active {
        background:  #0c9c7d
    }

    .bro-button-success {
        background: #1dc779;
    }

    .bro-button-success:hover {
        background: #188848;
        box-shadow: 0 0 3px #188848;
    }

    .bro-button-success:active {
        background: #1dc779;
    }

    .bro-button-danger {
        background: #d10f1b
    }

    .bro-button-danger:hover {
        background: #ea3941;
        box-shadow: 0 0 3px #ea3941
    }

    .bro-button-danger:active {
        background: #b90510
    }

    .bro-button-warning {
        background: #fbcc30
    }

    .bro-button-warning:hover {
        background: #fbd659;
        box-shadow: 0 0 3px #fbd659
    }

    .bro-button-warning:active {
        background: #dfb118
    }

    .bro-button-,
    .bro-button-default {
        background: #f4f5f5
    }

    .bro-button-:hover,
    .bro-button-default:hover {
        background: #eee;
        box-shadow: 0 0 3px #eee
    }

    .bro-button-:active,
    .bro-button-default:active {
        background: #dbdbdb
    }

    .bro-button-round {
        border-radius: 30px
    }

    .bro-button-plain-danger,
    .bro-button-plain-default,
    .bro-button-plain-primary,
    .bro-button-plain-success,
    .bro-button-plain-warning {
        background: #f4f5f5
    }

    .bro-button-plain-primary:hover {
        background: #eee;
        box-shadow: 0 0 3px #eee
    }

    .bro-button-plain-primary:active {
        background: #dbdbdb
    }

    .bro-button-plain-success:hover {
        background: #eee;
        box-shadow: 0 0 3px #eee
    }

    .bro-button-plain-success:active {
        background: #dbdbdb
    }

    .bro-button-plain-danger:hover {
        background: #eee;
        box-shadow: 0 0 3px #eee
    }

    .bro-button-plain-danger:active {
        background: #dbdbdb
    }

    .bro-button-plain-warning:hover {
        background: #eee;
        box-shadow: 0 0 3px #eee
    }

    .bro-button-plain-warning:active {
        background: #dbdbdb
    }

    .bro-button-plain-default:hover {
        background: #eee;
        box-shadow: 0 0 3px #eee
    }

    .bro-button-plain-default:active {
        background: #dbdbdb
    }

    .bro-button-disabled-danger,
    .bro-button-disabled-default,
    .bro-button-disabled-primary,
    .bro-button-disabled-success,
    .bro-button-disabled-warning {
        opacity: .6;
        cursor: no-drop
    }

    .bro-button-disabled-primary {
        background: #27ba9b
    }

    .bro-button-disabled-success {
        background: #1dc779
    }

    .bro-button-disabled-danger {
        background: #d10f1b
    }

    .bro-button-disabled-warning {
        background: #fbcc30
    }

    .bro-button-disabled-default {
        background: #f4f5f5
    }

    .bro-button-plain-disabled-danger,
    .bro-button-plain-disabled-default,
    .bro-button-plain-disabled-primary,
    .bro-button-plain-disabled-success,
    .bro-button-plain-disabled-warning {
        opacity: .6;
        cursor: no-drop
    }

    .bro-button-size-large {
        width: 100%
    }

    .bro-button-size-normal {
        min-width: 60px;
        padding: 0 17px;
        height: 30px
    }

    .bro-button-size-medium {
        min-width: 80px;
        padding: 0 17px;
        height: 40px
    }

    .bro-button-size-mini {
        min-width: 25px;
        padding: 0 12px;
        height: 25px
    }

    .bro-button-square {
        border-radius: 0
    }
</style>