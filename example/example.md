```vue
<template>
  <kebab-transition>
    <div v-show="show">Your content here</div> 
  </kebab-transition>
</template>

<script>
import { TRANSITION } from 'vue2-transitions'

export default {
  components: {
    TRANSITION
  },
  data() {
    return {
      show: true
    }
  }
}
</script>
```
