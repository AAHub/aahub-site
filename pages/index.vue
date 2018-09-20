<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        AAHub Homepage
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-weight: 300;
  font-size: 20vw;
  color: #35495e;
  letter-spacing: 1px;
}

@media (min-width: 600px) {
  .title{
    font-size: 100px;
  }
}
</style>

