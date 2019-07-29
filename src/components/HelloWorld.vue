<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Hello1</h2>
      <ul>
        <li @click="toHello2('从1传过来的')">传值到helloWorld2</li>
      </ul>
    </div>
    <hello-world2></hello-world2>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import helloWorld2 from './helloWorld2.vue'
export default {
  name: 'HelloWorld',
  components:{
    helloWorld2
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapMutations({
      toHello2:'DEMO'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
