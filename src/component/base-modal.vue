<template>
  <ion-modal :is-open="show" css-class="base-modal-container">
    <div class="base-modal flex-center" @click.self="closeOnClickOverlay ? close() : null">

      <slot name="content">
        <div class="content">
          <div class="close flex-center" @click="close"><img src="@/static/icon-close.svg" /></div>
          <div class="title text-overflow-1">{{ title }}</div>
          <slot />
        </div>
      </slot>

    </div>
  </ion-modal>
</template>

<script>
  import { IonModal } from '@ionic/vue'

  export default {
    name: 'base-modal',
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: '',
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true,
      },
    },
    components: { IonModal },
    emits: ['update:show'],
    methods: {
      close() {
        this.$emit('update:show', false)
      }
    },
  }
</script>

<style lang="less" scoped>
  .base-modal {
    width: 100%;
    height: 100%;

    .content {
      width: 79%;
      background-color: #fff;
      position: relative;
      border-radius: 16px;
      overflow: hidden;

      @titleHeight: 42px;

      .close {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 10;
        height: @titleHeight;
        padding: 0 25px;

        img {
          width: 12px;
        }
      }

      .title {
        line-height: @titleHeight;
        text-align: center;
        min-height: 42px;
        border-bottom: 1px solid @line;
        font-size: 15px;
        font-weight: bold;
        padding: 0 50 + 12px;
      }
    }
  }
</style>
