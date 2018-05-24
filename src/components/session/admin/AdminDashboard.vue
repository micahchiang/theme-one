<template>
    <div class="dashboard__container">
        <aside>
            <ul class="entries__title-list">
                <li v-for="(entry, index) in entries" :key="index">
                    {{entry.title}}
                </li>
            </ul>
        </aside>
        <main>
            <section class="form__container">
                <form @submit.prevent="submitForm">
                    <input v-model="title" type="text" placeholder="Title">
                    <vue-editor v-model="postBody"></vue-editor>
                    <button type='submit' class="submit__btn">Submit</button>
                </form>
            </section>
        </main>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  components: { VueEditor },
  computed: {
    entries() {
      return this.$store.getters.entries;
    }
  },
  data: function() {
    return {
      msg: 'This is Admin Dashboard',
      title: '',
      postBody: ''
    };
  },
  methods: {
    submitForm: function() {
      let payload = {
        title: this.title,
        entry: this.postBody
      };
      this.$store.dispatch('submitEntry', payload).then(res => {
        // do a toastr thing...
        if (res && res.status === 201) {
          this.title = '';
          this.postBody = '';
        } else {
          console.log('an error occurred hmm...', res);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard__container {
  display: flex;
  width: 100%;
  height: 100%;

  aside {
    flex: 0 0 30%;
    border-right: 3px solid gray;
    padding: 2rem;

    .entries__title-list {
      list-style: none;
      text-align: left;
      li {
        margin: 2rem 0;
        font-size: 2rem;
      }
    }
  }

  main {
    flex: 0 0 70%;

    .form__container {
      padding: 2rem;

      form {
        display: flex;
        flex-direction: column;
        & input,
        textarea,
        button {
          margin-bottom: 1rem;
        }

        & input {
          line-height: 4rem;
          font-size: 2.5rem;
          padding: 1rem;
          outline: none;
        }

        & textarea {
          font-size: 1.7rem;
          padding: 1rem;
        }
      }
    }
  }
}
</style>


