<script setup lang="ts">
import Clocker from "../service/Clocker.ts";

// @ts-ignore
const props = defineProps({
  clockerVal: Clocker
})

function displayedHours() {
  if (props.clockerVal != undefined) {
    return props.clockerVal?.todayClockedHours.getHours() - 1
  }
  return undefined
}

</script>

<template>
  <p>Dernière entrée : {{ clockerVal?.lastEntry.toLocaleTimeString() }}</p>
  <p>Badgeages d'aujourd'hui : {{ clockerVal?.todayEntries }}</p>
  <p>Heures badgées aujourd'hui : {{ displayedHours() }}h {{ clockerVal?.todayClockedHours.getMinutes() }}mn</p>
</template>

<style scoped>

</style>