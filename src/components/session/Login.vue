<template>
  <div class="login__container" ref="loginContainer">
    <form class="login__form" action="" @submit.prevent="login">
      <h2>Sign In</h2>
      <fieldset class="login__form-fieldset">
        <label>Username</label>
        <input v-model="username" type="text" placeholder="username">
      </fieldset>
      <fieldset class="login__form-fieldset">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="password">
      </fieldset>
      <button class="submit__btn" type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import VueNotifications from '../shared/Notifications';

export default {
  components: { VueNotifications },
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
        if (res && res.status === 200) {
          this.$router.push('/dashboard');
        } else {
          // do a thing
          let ComponentClass = Vue.extend(VueNotifications);
          let instance = new ComponentClass({
            propsData: {
              type: 'error',
              title: 'Alert!',
              msg: 'A login error ocurred'
            }
          });
          instance.$mount();
          this.$refs.loginContainer.appendChild(instance.$el);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login__container {
  position: relative;
}
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


