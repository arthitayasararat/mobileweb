<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery <br>โดย อาทิตยา สารราษฎร์ 673380256-9</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
    <ion-row>
      <ion-col
        size="6"
        v-for="photo in photos"
        :key="photo.filepath"
      >
        <ion-img :src="photo.webviewPath" />
      </ion-col>
    </ion-row>
  </ion-grid>

      

      <!-- CHANGE: Remove or comment out <ExploreContainer /> -->
      <!-- <ExploreContainer name="Tab 2 page" /> -->
    </ion-content>
    <!-- CHANGE: Add the floating action button -->
      <ion-fab vertical="bottom" horizontal="center" >
        <ion-fab-button @click="addNewToGallery()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
  </ion-page>
</template>

<script setup lang="ts">
// CHANGE: Add import from `ionicons/icons`
import { camera } from 'ionicons/icons';
// CHANGE: Update import from `@ionic/vue` to include necessary Ionic components
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// CHANGE: Remove or comment out the ExploreContainer import
// import ExploreContainer from '@/components/ExploreContainer.vue';
// CHANGE: Add `usePhotoGallery` import
import { usePhotoGallery } from "../composables/usePhotoGallery";

// CHANGE: Destructure `addNewToGallery` from `usePhotoGallery()
const { photos,addNewToGallery } = usePhotoGallery();
import {
  IonGrid,
  IonRow,
  IonCol,
  IonImg
} from '@ionic/vue';
</script>

