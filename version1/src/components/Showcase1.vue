<script setup>
import MarkdownIt from 'markdown-it';
import { ref } from 'vue';

const props = defineProps(['content']);


const md = new MarkdownIt({html: true});
const myHTML = props.content.markdown;
const result = md.render(myHTML);
const images = props.content.imgCarrousel;
const header = props.content.header;
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '960px',
    numVisible: 4
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]);
</script>

<template>
  <div class="main_content">
    <Panel :toggleable="true">
      <template #header>{{ header }}</template>

      <div class="flex">
        <div class="block_description" v-html="result"></div>

        <!-- <Divider layout="vertical" /> -->

        <div class="block_container">
          <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true"
            :showItemNavigators="true">
            <template #item="{ item }">
              <Image :src="item.itemImageSrc" :alt="item.alt" preview />
            </template>
            <template #thumbnail="{ item }">
              <div class="grid grid-nogutter justify-content-center">
                <img :src="item.thumbnailImageSrc" :alt="item.alt" style="display: block;" />
              </div>
            </template>
          </Galleria>
        </div>

      </div>

    </Panel>
  </div>
</template>

<style scoped>
@import url('../water.css');
/* @import url('https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'); */
.block_description {
  width: 60%;
  height: 430px;
  padding-right: 10px;
  overflow-y: auto;
  scrollbar-width: thin;          /* "auto" or "thin" */
  --scrollbar-color: white;
  --scrollbar-color-2: #e0e0e0;
  scrollbar-color: var(--scrollbar-color-2) var(--scrollbar-color);   /* scroll thumb and track */ 
  color: #4d4d4d !important;
}
.block_description {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-color-2) var(--scrollbar-color);
}

/* Works on Chrome, Edge, and Safari */
.block_description::-webkit-scrollbar {
  width: 8px;
}

.block_description::-webkit-scrollbar-track {
  background: var(--scrollbar-color);
}

.block_description::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-color-2);
  border-radius: 20px;
  border: 3px solid var(--scrollbar-color);
}
.block_container {
  margin-left: 10px;
  width: 40%;
}

.main_content {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--main-padding);
  padding-right: var(--main-padding);
  margin-bottom: 20px;
}

.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

@media only screen and (max-width: 500px) {
  .flex {
    flex-direction: column;
    align-items: center;
  }
}
.block_container {

}
</style>