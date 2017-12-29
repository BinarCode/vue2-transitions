<template>
  <div id="app">
    <button class="btn" @click="toggle">Trigger</button>
    <FadeTransition>
      <div class="box" v-show="show">
        <p>Fade transition</p>
      </div>
    </FadeTransition>
  </div>
</template>

<script>
  import {FadeTransition} from '../src'

  export default {
    components: {
      FadeTransition
    },
    data() {
      return {
        show: true
      }
    },
    methods: {
      toggle() {
        this.show = !this.show
      }
    }
  }
</script>
<style lang="scss">
  $primary-color: #66615B;
  .box {
    margin: 10px 0px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: $primary-color;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    margin-right: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      color: white;
    }
  }

  .btn{
    border: 2px solid $primary-color;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    color: $primary-color;

    &:hover {
       background-color:$primary-color;
       color: white;
     }
  }
</style>
