<template>
  <div class="hello">
    <h1 class="text-orange-700">{{ msg }}</h1>
    <Button>hello</Button>
  </div>
</template>

<script>

import { Button } from 'vant';

export default {
  name: 'hello',
  components: { Button },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.hello {
  color: #42b983;

  button {
    background-color: red
  }
}
</style>
