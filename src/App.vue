<script setup lang="ts">

import Clocker from "./service/Clocker.ts";
import {ref} from "vue";
import ClockDisplay from "./components/ClockDisplay.vue";

let clocker = ref(new Clocker())

function clock() {
  clocker.value.clock()
}

</script>

<template>
  <h1>Suloséant</h1>
  <Button @click="clock">Badger</Button>
  <ClockDisplay :clocker="clocker"/>
</template>

<style scoped>

</style>
