<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello2</h2>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import {resInit,ERR_OK} from '../api/api'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  computed: {
    msg(){
      resInit({id:1}).then((res)=>{
        if(res.code===ERR_OK){
          console.log(res)
        }
      })
      return this.$store.state.demo
    }
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
