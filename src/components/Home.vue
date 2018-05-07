<template>
    <div class="home__container">
        {{msg}}
    </div>
</template>

<script>
export default {
  name: 'Home',
  date: function() {
    return {
      msg: 'This is home'
    };
  },
  created: function() {
    this.msg = 'This is home';
  }
};
</script>

<style lang="scss" scoped>

</style>


