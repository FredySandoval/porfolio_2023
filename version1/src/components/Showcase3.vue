<script setup>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });
const myHTML =
`## Building a DarkButton
See the <a href="https://hungry-nightingale-c15fa4.netlify.app" target="_blank">DEMO</a> or check the <a href="https://github.com/FredySandoval/darkmode-button-in-svelte" target="_blank">CODE</a> in GitHub

You can also click the example right next.

### Problem to be solved:
This project was developed for a client with the following especifications:
* Fix the flickering bug the existing darkbutton had.
* Button state survive page reload.
* Respect user system prefered mode.
* Easy to addapt to existing CSS.
* Must be built in Svelte
`;
const result = md.render(myHTML);
const header = 'Dark Button ';

</script>
<template>
  <div class="main_content">
    <Panel :toggleable="true">
      <template #header>{{ header }}</template>

      <div class="flex">
        <div class="block_description" v-html="result"></div>

        <div class="block_container">
          <iframe class="iframe3" style="display: none;" onload="this.style.display='block';" src="https://hungry-nightingale-c15fa4.netlify.app/" frameborder="0"></iframe>
        </div>
      </div>
    </Panel>
  </div>
</template>
<style scoped>
.iframe3 {
  width:100%;
  height: 400px;
}
.block_description {
  width: 60%;
  height: 430px;
  padding-right: 10px;
  overflow-y: auto;
  scrollbar-width: thin;
  /* "auto" or "thin" */
  --scrollbar-color: white;
  --scrollbar-color-2: #e0e0e0;
  scrollbar-color: var(--scrollbar-color-2) var(--scrollbar-color);
  /* scroll thumb and track */
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
</style>