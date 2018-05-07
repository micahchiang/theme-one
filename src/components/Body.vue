<template>
    <div class="body__container">
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'BodyComponent'
};
</script>

<style lang="scss" scoped>
.body__container {
  flex: 0 0 92%;
}
</style>


