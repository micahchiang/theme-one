<template>
    <div class="login__container">
        <form class="login__form" action="" @submit.prevent="login">
            <h2>Sign In</h2>
            <fieldset class="login__form-fieldset">
                <label>Username</label>
                <input v-model="username" type="text" placeholder="username">
            </fieldset>
            <fieldset class="login__form-fieldset">
                <label>Password</label>
                <input v-model="password" type="text" placeholder="password">
            </fieldset>
            <button class="submit__btn" type="submit">Log In</button>
        </form>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login: function() {
      let payload = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch('AUTH_REQUEST', payload).then(res => {
        this.$router.push('/dashboard');
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login__form {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-fieldset {
    width: 70%;
    padding: 2rem;
    font-size: 2rem;
    line-height: 4rem;
    border: none;

    & > input,
    input:active {
      line-height: 3rem;
      font-size: 2rem;
      padding: 1rem;
      outline: none;
    }
  }
}
</style>


