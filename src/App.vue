<script setup lang="ts">

import Clocker from "./service/Clocker.ts";
import {ref} from "vue";
import ClockDisplay from "./components/ClockDisplay.vue";

let clocker = new Clocker()
let clockerRef = ref(clocker)

function clock() {
  clockerRef.value.clock()
}

</script>

<template>
  <h1>Suloséant</h1>
  <Button @click="clock">Badger</Button>
  <ClockDisplay :clockerVal="clockerRef"/>
</template>

<style scoped>

</style>
