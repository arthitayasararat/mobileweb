<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>แก้ไขรายการ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-input
        label="ชื่อรายการ"
        v-model:value="title">
      </ion-input>

      <ion-input
        label="จำนวนเงิน"
        type="number"
        v-model:value="amount">
      </ion-input>

      <ion-select
        label="ประเภท"
        v-model:value="type">
        <ion-select-option value="income">รายรับ</ion-select-option>
        <ion-select-option value="expense">รายจ่าย</ion-select-option>
      </ion-select>

      <ion-input
        label="หมวดหมู่"
        v-model:value="category">
      </ion-input>

      <ion-textarea
        label="หมายเหตุ"
        v-model:value="note">
      </ion-textarea>

      <ion-button expand="block" @click="updateExpense">
        บันทึกการแก้ไข
      </ion-button>

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
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton
} from '@ionic/vue'

import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase"

const route = useRoute()
const router = useRouter()

const id = route.params.id as string

const title = ref("")
const amount = ref(0)
const type = ref("expense")
const category = ref("")
const note = ref("")

onMounted(async () => {
  const docRef = doc(db, "expenses", id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data = docSnap.data()
    title.value = data.title
    amount.value = data.amount
    type.value = data.type
    category.value = data.category
    note.value = data.note
  }
})

const updateExpense = async () => {
  await updateDoc(doc(db, "expenses", id), {
    title: title.value,
    amount: Number(amount.value),
    type: type.value,
    category: category.value,
    note: note.value
  })

  router.push("/tabs/tab1")
}
</script>