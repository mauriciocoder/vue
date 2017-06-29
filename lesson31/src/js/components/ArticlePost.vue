<template>
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong><slot name="name"></slot></strong>
          <br><slot name="message"></slot>
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <like likes="10"></like>
        </div>
      </nav>
    </div>
  </article>
</template>
<script>
  import Like from './Like'

  export default {
    components: {
      Like
    }
  }
</script>
