<template>
  <main>
    <Header />
    <router-view />
  </main>
</template>

<script>
import Header from './Header'

export default {
  name: 'MainLayout',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
</style>
