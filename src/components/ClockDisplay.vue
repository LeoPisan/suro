<script setup lang="ts">
import Clocker from "../service/Clocker.ts";

// @ts-ignore
const props = defineProps({
  clockerVal: Clocker
})

function displayedHours(time: Date | undefined) {
  if (time != undefined) {
    return time.getHours() - 1
  }
  return undefined
}

</script>

<template>
  <p>Dernière entrée : {{ clockerVal?.lastEntry.toLocaleTimeString() }}</p>
  <p>Badgeages d'aujourd'hui : {{ clockerVal?.todayEntries }}</p>
  <p>
    Temps badgé aujourd'hui : {{ displayedHours(clockerVal?.todayClockedHours) }}h
    {{ clockerVal?.todayClockedHours.getMinutes() }}mn
  </p>
  <p>
    Temps badgé cette semaine : {{ displayedHours(clockerVal?.weekClockedTime) }}h
    {{ clockerVal?.weekClockedTime.getMinutes() }}mn
  </p>
</template>

<style scoped>

</style>