<script setup lang="ts">
import Clocker from "../service/Clocker.ts";

const props = defineProps({
  clocker: Clocker
})

</script>

<template>
  <p>Dernière entrée : {{ clocker?.lastEntry.toLocaleTimeString() }}</p>
  <p>{{ clocker?.todayEntries }}</p>
  <p>{{ clocker?.todayClockedHours.getHours() }}h {{ clocker?.todayClockedHours.getMinutes() }}mn</p>
</template>

<style scoped>

</style>