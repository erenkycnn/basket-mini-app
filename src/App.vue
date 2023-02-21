<template>
  <div>
    <nav>
      <router-link to="/list" class="nav-link">Product List</router-link>
      <router-link to="/cart" class="nav-link"
        >Cart({{ basketItemCount || 0 }})</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    basketItemCount() {
      return this.$store.state.cart.length;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px;

  .nav-link {
    font-weight: bold;
    color: black;
    text-decoration: none;
    margin: 10px;

    &:hover {
      color: orange;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: orange;
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 768px) {
  nav {
    justify-content: space-between;

    .nav-link {
      margin: 0;
    }
  }
}
</style>
