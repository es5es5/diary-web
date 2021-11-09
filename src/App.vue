<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

h1, h2, h3, h4, h5 {
  margin: 0;
  padding: 0;
  font-family: 'Bebas Neue', cursive;
  color: $primary;
  letter-spacing: 1px;
  line-height: 1em;
}

*, *::after, *::before { box-sizing: border-box; }

body {
  margin: 0;
  padding: 0;
  color: #272727;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

p, span{
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  &:hover,
  &:active,
  &:focus { text-decoration: none; }
}
</style>
