<script setup lang="ts">

import Clocker from "./service/Clocker.ts";

let clocker = new Clocker()
let count = 0

function clock() {
  clocker.clock()
  count++
}

</script>

<template>
  <h1>Hello world !</h1>
  <Button @click="clock">Badger</Button>
  <p>{{ clocker.clockEntries }}</p>
  <p>{{count}}</p>
</template>

<style scoped>

</style>
