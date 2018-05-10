<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Blog',
  data: function() {
    return {
      msg: 'This is blog'
    };
  }
};
</script>

