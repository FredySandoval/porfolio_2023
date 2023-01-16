<script setup>
import Showcase1 from './components/Showcase1.vue';
import Showcase2 from './components/Showcase2.vue';
import Showcase3 from './components/Showcase3.vue';

import { data_project, data_project_frontend, data_project_illustration } from './assets/data_projects';


</script>

<template>
  <h2 class="h2">FullStack Showcase</h2>
  <Showcase1  v-for="item in data_project" :content="item" :key="item.id" />
  <h2 class="h2 h2-styled" >FrontEnd Showcase</h2>
  <Showcase2 />
  <Showcase3 />
  <Showcase1  v-for="item in data_project_frontend" :content="item" :key="item.id" />
  <h2 class="h2 h2-styled" >Illustration Showcase</h2>
  <Showcase1  v-for="item in data_project_illustration" :content="item" :key="item.id" />

</template>

<style scoped>
.h2-styled {
  margin-top: 80px;
  margin-bottom:40px;
}
.h2 {
  /* border: 1px solid white; */
  color: var(--main-color-1);
  text-align: left;

  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>