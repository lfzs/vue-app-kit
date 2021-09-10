<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-buttons slot="start">
        <slot name="left"><ion-back-button :icon="IconBack" text="" /></slot>
      </ion-buttons>

      <ion-title mode="ios">
        <template v-if="title">{{ title }}</template>
        <img v-else src="@/static/logo.svg" class="logo" />
      </ion-title>

      <ion-buttons slot="end">
        <slot name="right" />
      </ion-buttons>

    </ion-toolbar>
  </ion-header>
</template>

<script>
  import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/vue'
  import IconBack from '@/static/icon-back.svg'
  import Logo from '@/static/logo.svg'

  export default {
    name: 'base-header',
    components: { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar },
    props: {
      title: {
        type: String,
        default: '',
      },
    },

    setup() {
      return {
        IconBack,
        Logo,
      }
    }
  }
</script>

<style lang="less" scoped>
  ion-toolbar {
    @height: 44px;

    --background: #212a34;
    --color: #fff;
    --min-height: 0;
    --padding-top: 0;
    --padding-bottom: 0;
    --padding-end: 0;
    --padding-start: 0;

    ion-buttons {
      height: @height;
    }

    ion-back-button {
      --icon-font-size: 22px;

      width: 50px;
      height: 100%;
    }

    ion-title {
      font-size: 14px;

      .logo {
        height: 18px;
      }
    }
  }
</style>
