<template>
  <ion-page>
    <base-header />

    <ion-content>
      content
    </ion-content>

    <ion-footer>
      footer
    </ion-footer>
  </ion-page>
</template>

<script>
  import { IonPage, IonContent, IonFooter } from '@ionic/vue'
  export default {
    name: 'home',
    components: { IonPage, IonContent, IonFooter }
  }
</script>
