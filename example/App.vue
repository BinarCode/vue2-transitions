<template>
  <div id="app">
    <github
      v-tippy="{title: 'Star me on GitHub', trigger: 'mouseenter '}"
      fill="white"
      slug="cristijora/vue2-transitions">
    </github>
    <header class="header">
      <div class="container">
        <h1 class="hero-heading">Vue 2 Transitions</h1>
        <h2 class="desc">Elegant, reusable Vue 2 transitions</h2>
      </div>
    </header>
    <div class="main-content">
      <div class="transition-wrapper">
        <component :is="kebab(transitionName)" :duration="duration">
          <div v-show="show">
            <div class="box">
              <p>{{transitionName}}</p>
            </div>
          </div>
        </component>
      </div>
      <div class="transition-select">
        <el-select v-model="transitionName" class="select-primary">
          <el-option-group v-for="group in transitionOptions" :key="group.label" :label="group.label">
            <el-option v-for="transition in group.options"
                       class="select-primary"
                       :key="transition"
                       :option="transition"
                       :value="transition">
            </el-option>
          </el-option-group>

        </el-select>
        <el-input-number :step="100" v-model="duration" placeholder="Duration"></el-input-number>
        <button class="btn btn-outline" v-tippy="codeOptions">Code</button>
        <button class="btn" @click="toggle">Trigger</button>
      </div>

    </div>
    <!--<div class="f-row">
      <div class="f-column">
        <div class="f-row">
          <div class="mr-5">
            <h3>Simple transitions</h3>
            <el-select v-model="transitionName">
              <el-option v-for="transition in transitions"
                      :key="transition"
                      :value="transition">
                {{transition}}
              </el-option>
            </el-select>
            <div style="margin-top: 20px;">
              <button class="btn" v-tippy="{title: example, interactive: true}">Show code</button>
            </div>
          </div>
          <div >


          </div>
        </div>
      </div>
      <div class="f-column">
        <div class="f-row">
          <div class="mr-5">
            <h3>List Transitions</h3>
            <select v-model="transitionGroupName">
              <option v-for="transition in transitionGroups"
                      :key="transition"
                      :value="transition">
                {{transition}}
              </option>
            </select>
          </div>
          <div>
            <h3>{{transitionGroupName}}</h3>
            <button class="btn" @click="add">Add item</button>
            <fade-transition-group class="f-row">
              <Icon v-for="(color,index) in colors" :color="color"
                    :key="color.key"
                    :index="index"
                    :with-button="true"
                    @remove="remove(index)"
              />
            </fade-transition-group>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import Transitions from '../src'

  import Github from 'vue-github-badge'

  Vue.use(Transitions)
  import Icon from './Icon.vue'
  import {generateRGBColors} from './utils.js'

  import kebab from 'lodash.kebabcase'

  const example = preval`
  const fs = require('fs')
  require('prismjs')
  require('prismjs/components/prism-javascript')
  const marked = require('marked3')
  const markdown = fs.readFileSync(__dirname + '/example.md', 'utf8')
  const html = marked(markdown, {
    highlight(str, lang) {
      return Prism.highlight(str, Prism.languages[lang] || Prism.languages.markup)
    }
  })
  module.exports = html
  `
  export default {
    components: {
      Icon,
      Github
    },
    data() {
      let colors = generateRGBColors(5)
      return {
        colors,
        transitionOptions: [
          {
            label: 'Fade',
            options: ['FadeTransition']
          },
          {
            label: 'Zoom',
            options: ['ZoomCenterTransition', 'ZoomXTransition', 'ZoomYTransition']
          },
          {
            label: 'Collapse',
            options: ['CollapseTransition']
          }
        ],
        transitions: ['FadeTransition', 'ZoomCenterTransition', 'ZoomXTransition', 'ZoomYTransition', 'CollapseTransition'],
        transitionGroups: ['fade-transition-group'],
        selected: null,
        show: true,
        duration: 300,
        transitionName: 'FadeTransition',
        transitionGroupName: 'fade-transition-group'
      }
    },
    computed: {
      codeOptions() {
        return {
          title: this.example,
          interactive: true
        }
      },
      example() {
        this.show = false
        this.show = true
        return example
          .replace(/TRANSITION/g, this.transitionName)
          .replace(/kebab-transition/g, kebab(this.transitionName))
      }
    },
    methods: {
      kebab(name) {
        return kebab(name)
      },
      toggle() {
        this.show = !this.show
      },
      add() {
        let newColor = generateRGBColors(1)
        this.colors.push(...newColor)
      },
      remove(index) {
        this.colors.splice(index, 1)
      }
    }
  }
</script>

<style src="v-tippy/dist/tippy.css"></style>
<style src="prismjs/themes/prism.css"></style>
<style>
  .tippy-tooltip {
    text-align: left;
  }

  .tippy-tooltip-content pre {
    margin: 0;
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 3px;
  }

  .tippy-tooltip-content pre code {
    overflow: visible;
    word-wrap: normal;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }

  .tippy-popper .tippy-tooltip.light-theme[data-animatefill] {
    background-color: white;
  }
</style>
<style lang="scss">
  @import "assets/variables";
  @import "assets/demo";

  .header {
    background: linear-gradient(90deg, $primary-color, lighten($primary-color, 20) 70%, lighten($primary-color, 30));
    padding: 40px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .desc {
    color: white;
    font-weight: 500;
  }

  .hero-heading {
    color: $secondary-color;
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    background: -webkit-linear-gradient(135deg, lighten($secondary-color, 20), $secondary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  body {
    background-color: $body-color;
    margin: 0;
    font-family: Lato;
  }

  h1 {
    color: $primary-color;
  }

  .main-content {
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 300px);
  }

  .transition-wrapper {
    width: 400px;
    height: 250px;
  }

  .transition-select {
    .btn {
      margin-left: 10px;
    }
  }

  .box {
    margin: 10px 0px;
    width: 100%;
    height: 200px;
    border-radius: 4px;
    background-color: $secondary-color;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    margin-right: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: white;
    }
  }

  @media (max-width: 800px) {
    .transition-wrapper {
      width: 100%;
    }
    .transition-select {
      display: flex;
      flex-direction: column;
      .btn,
      .el-input-number {
        margin-top: 10px;
        margin-left: 0;
        width: 100%;
      }
    }
  }

</style>
