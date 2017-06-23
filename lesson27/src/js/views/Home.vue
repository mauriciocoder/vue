<template>
  <div>
    <h6>{{picture.title}}</h6>
    <img v-bind:src="picture.url"></img>
  </div>

</template>
<script>
  import Picture from '../models/Picture'

  export default {
    data() {
      return {
        picture: new Picture()
      }
    },

    created() {
      this.picture.findPicOfDay()
    }
  }
</script>
