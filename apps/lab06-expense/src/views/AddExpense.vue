<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>เพิ่มรายการ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-input
  label="ชื่อรายการ"
  @ionInput="e => title = e.detail.value">
</ion-input>

<ion-input
  label="จำนวนเงิน"
  type="number"
  @ionInput="e => amount = e.detail.value">
</ion-input>

<ion-select
  label="ประเภท"
  @ionChange="e => type = e.detail.value">
  <ion-select-option value="income">รายรับ</ion-select-option>
  <ion-select-option value="expense">รายจ่าย</ion-select-option>
</ion-select>

<ion-input
  label="หมวดหมู่"
  @ionInput="e => category = e.detail.value">
  
</ion-input>

<ion-textarea
  label="หมายเหตุ"
  @ionInput="e => note = e.detail.value">
</ion-textarea>
<ion-button expand="block" @click="saveExpense">
  บันทึกข้อมูล
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
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "vue-router";

const router = useRouter();

let title = ""
let amount = 0
let type = "expense"
let category = ""
let note = ""

const saveExpense = async () => {
  alert("กดแล้ว");

  console.log(title, amount);

  await addDoc(collection(db, "expenses"), {
    title: title,
    amount: Number(amount),
    type: type,
    category: category,
    note: note,
    createdAt: new Date()
  });

  alert("บันทึกสำเร็จ");
  router.push("/tabs/tab1");
};
</script>
