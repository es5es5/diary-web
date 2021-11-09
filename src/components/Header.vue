<template>
  <header>
    <div class="header_wrap">
      <h2>Our diary</h2>
      <img src="@/assets/icons/settings.svg" alt="settings">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
header {
  padding: 25px;
}

.header_wrap {
  h2 {
    display: inline-block;
    font-size: 18px;
    color: $secondary;
    vertical-align: middle;
    letter-spacing: 1.5px;
  }

  img {
    float: right;
    vertical-align: middle;
  }
}
</style>
