<script setup lang="ts">
import Clocker from "../service/Clocker.ts";

// @ts-ignore
const props = defineProps({
  clockerVal: Clocker
})

</script>

<template>
  <p>Dernière entrée : {{ clockerVal?.lastEntry.toLocaleTimeString() }}</p>
  <p>{{ clockerVal?.todayEntries }}</p>
  <p>{{ clockerVal?.todayClockedHours.getHours() }}h {{ clockerVal?.todayClockedHours.getMinutes() }}mn</p>
</template>

<style scoped>

</style>