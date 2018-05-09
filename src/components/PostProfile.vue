<template>
    <div class="post__container">
        {{$route.params.id}}
    </div>
</template>

<script>
export default {
  name: 'PostProfile',
  props: ['id']
};
</script>

<style lang="scss" scoped>

</style>


