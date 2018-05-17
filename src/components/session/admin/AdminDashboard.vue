<template>
    <div class="dashboard__container">
        {{msg}}
        <aside>

        </aside>
        <main>
            <section class="form__container">
                <form @submit.prevent="submitForm">
                    <input v-model="title" type="text" placeholder="Title">
                    <textarea v-model="postBody"></textarea>
                </form>
            </section>
        </main>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'This is Admin Dashboard',
      title: '',
      postBody: ''
    };
  }
};
</script>

<style lang="scss" scoped>

</style>


