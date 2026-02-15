<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>รายการรายรับรายจ่าย</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-button expand="block" @click="goToAdd">
        เพิ่มรายการรายรับ–รายจ่าย
      </ion-button>
<ion-card>
  <ion-card-content>
    <p>รายรับรวม: {{ totalIncome }} บาท</p>
    <p>รายจ่ายรวม: {{ totalExpense }} บาท</p>
    <p><strong>คงเหลือ: {{ balance }} บาท</strong></p>
  </ion-card-content>
</ion-card>
      <ion-list>
        <ion-item 
  v-for="item in expenses" 
  :key="item.id"
  @click="goToEdit(item.id)"
  button
>
          <ion-label>
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.amount }} บาท |
              {{ item.type === 'income' ? 'รายรับ' : 'รายจ่าย' }}
            </p>
          </ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonCard, IonCardContent
} from '@ionic/vue'

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
import { computed } from "vue"

const totalIncome = computed(() => {
  return expenses.value
    .filter(item => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount), 0)
})

const totalExpense = computed(() => {
  return expenses.value
    .filter(item => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount), 0)
})

const balance = computed(() => {
  return totalIncome.value - totalExpense.value
})

const router = useRouter()
const expenses = ref<any[]>([])

const goToAdd = () => {
  router.push('/add')
}
const goToEdit = (id: string) => {
  router.push(`/edit/${id}`)
}
onMounted(() => {
  onSnapshot(collection(db, "expenses"), (snapshot) => {
    expenses.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  })
})
</script>
