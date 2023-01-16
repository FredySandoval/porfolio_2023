<script setup>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({html: true});
const myHTML = 
`### Various CSS examples Project
See the <a href="https://fredysandoval.github.io/demo-css-animations" target="_blank">DEMO</a> or check the <a href="https://github.com/FredySandoval/demo-css-animations" target="_blank">CODE</a> in GitHub

### Description:
In this project I create some animations using css only.

### Highlights:
* I consider myself a css expert
* Pure CSS animations
* Develop confidence on CSS
`;
const result = md.render(myHTML);
const header = 'Pure CSS';

</script>
<template>
  <div class="main_content">
    <Panel :toggleable="true">
      <template #header>{{ header }}</template>

      <div class="flex">
        <div class="block_description" v-html="result"></div>

        <div class="block_container">
          <div class="centerXY">
            <div class="container1" style="--box-color:160; --tX:170%; --tY: 0%;">
              <div class="block1"></div>
            </div>
            <div class="container1" style="--box-color:70; --tX:50%; --tY: 120%;">
              <div class="block1"></div>
            </div>
            <div class="container1" style="--box-color:220; --tX:-100%; --tY: -100%;">
              <div class="block1"></div>
            </div>
            <div class="container1" style="--box-color:10; --tX:50%; --tY: 0%;">
              <div class="block1 vibrate-2"></div>
            </div>
            <div class="container1" style="--box-color:50; --tX:50%; --tY: -120%;">
              <div class="block1"></div>
            </div>
            <div class="container1" style="--box-color:120; --tX:-70%; --tY: 0%;">
              <div class="block1"></div>
            </div>
            <div class="container1" style="--box-color:190; --tX:190%; --tY: 100%;">
              <div class="block1"></div>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  </div>
</template>
<style scoped>
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
/* css newanimation.css */
.centerXY {
    position: relative;
    width: 1px;
    margin: 0 auto;
}
.container1 {
    position: absolute;
    transform: skewY(-35deg) translateX(var(--tX)) translateY(var(--tY));
}
.container1:hover {
    --box-color: 300 !important;
    cursor: pointer;
}
.container1:hover .block1 {
    --box-width: 65px;
    --box-height: 65px;
}
/*side*/
.block1 {
    --box-width: 60px;
    --box-height: 60px;
    --box-shade: 60%;
    --border: 1px;
    /* bug: little space between cube side*/
    box-shadow: 0px 0px 3px 0px hsl(var(--box-color), 100%, calc(var(--box-shade) - 20%));

    height: calc(var(--box-height) + 10px);
    width: calc(var(--box-width) - 10px);

    background-color: hsl(var(--box-color), 100%, calc(var(--box-shade) - 20%));

    transition: 0.2s;
}
/*front*/
.block1::before {
    content: "";
    position: absolute;

    top: 0px;
    left: calc((var(--box-width) * -1));

    box-shadow: 0px 0px 3px 0px hsl(var(--box-color), 100%, var(--box-shade));
    
    height: calc(var(--box-height) + 10px);
    width: calc(var(--box-width));

    transform-origin: right;
    transform: skewY(45deg);

    background-color: hsl(var(--box-color), 100%, var(--box-shade));

    transition: 0.2s;
}
/*top*/
.block1::after {
    content: "";
    position: absolute;

    top: calc(var(--box-height) * -1);
    left: 0px;

    height: calc(var(--box-height));
    width: calc(var(--box-width) - 10px);

    box-shadow: 0px 0px 3px 0px hsl(var(--box-color), 100%, calc(var(--box-shade) - 15%));

    transform-origin: bottom;
    transform: skewX(45deg);

    background-color: hsl(var(--box-color), 100%, calc(var(--box-shade) - 15%));

    transition: 0.2s;
}
.vibrate-2 {
    -webkit-animation: vibrate-1 0.3s linear infinite both;
    animation: vibrate-1 4s linear infinite both;
}
@-webkit-keyframes vibrate-1 {
    0% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
    20% {
        -webkit-transform: translate(-8px, 8px);
        transform: translate(-8px, 8px);
    }
    40% {
        -webkit-transform: translate(-8px, -8px);
        transform: translate(-8px, -8px);
    }
    60% {
        -webkit-transform: translate(8px, 8px);
        transform: translate(8px, 8px);
    }
    80% {
        -webkit-transform: translate(8px, -8px);
        transform: translate(8px, -8px);
    }
    100% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
}
@keyframes vibrate-2 {
    0% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
    20% {
        -webkit-transform: translate(-8px, 8px);
        transform: translate(-8px, 8px);
    }
    40% {
        -webkit-transform: translate(-8px, -8px);
        transform: translate(-8px, -8px);
    }
    60% {
        -webkit-transform: translate(8px, 8px);
        transform: translate(8px, 8px);
    }
    80% {
        -webkit-transform: translate(8px, -8px);
        transform: translate(8px, -8px);
    }
    100% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
}
</style>