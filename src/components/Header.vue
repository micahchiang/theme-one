<template>
  <header class="header">
    <router-link to="/" class="nav__btn">Blog</router-link>
    <router-link to="/about" class="nav__btn">About</router-link>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: $primary-color;
  flex: 0 0 8%;
  display: flex;

  @media only screen and (max-width: 400px) {
    flex: 0 0 12%;
  }

  .nav__btn {
    color: $white-color;
    text-decoration: none;
    font-size: 2rem;
    padding: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: all 0.2s ease-out;

    &:hover {
      background-color: rgba($white-color, 0.1);
    }
    &:active {
      transform: scale(0.7);
    }
  }
}
</style>

