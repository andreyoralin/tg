<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import {dateNow} from './utils/date.js'

let start = 24
let count = 0
let [day,hour,second] = dateNow()

if (hour < 15){
    count = day - start - 1
}else{
  count = day - start
}

</script>

<template>
    
    <div style="color:white">
      {{ count }}
      <br>
      <br>
      Days Pavel Durov has been detained by the French government
    </div>
  
</template>

<style scoped>

</style>
