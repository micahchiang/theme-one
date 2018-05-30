<template>
    <div class="notifications__container" ref="notificationContainer">
        <h2 class="notifications__container-title">
            {{title}}
        </h2>
        <p class="notifications__container-text">
            {{msg}}
        </p>
    </div>
</template>

<script>
export default {
  name: 'VueNotifications',
  props: ['type', 'title', 'msg'],
  data: function() {
    return {};
  },
  mounted: function() {
    // probably call first method here
    this.initNotification();
  },
  methods: {
    // digest props passed in
    initNotification() {
      this.$refs.notificationContainer.classList.add(this.type);
      setTimeout(() => {
        this.displayNotification();
      }, 1000);
    },
    // handle dom manipulation
    displayNotification() {
      this.$refs.notificationContainer.classList.add('displayed');
      setTimeout(() => {
        this.$refs.notificationContainer.classList.add('visible');
      }, 1500);
      setTimeout(() => {
        this.removeNotification();
      }, 3000);
    },
    // remove element from dom
    removeNotification() {
      setTimeout(() => {
        this.$refs.notificationContainer.classList.remove('visible');
      }, 5000);
      setTimeout(() => {
        this.$refs.notificationContainer.classList.remove('displayed');
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.notifications__container {
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: all 0.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  display: none;
  color: $white-color;
  padding: 2rem 4rem;
  font-size: 1.4rem;
  border-radius: 5px;

  &.displayed {
    display: block;
  }
  &.visible {
    opacity: 1;
  }
}

.error {
  background-color: rgba(#ffc1c1, 0.5);
  border: 1px solid #ee6363;
}
.success {
  background-color: rgba(#c5e3bf, 0.5);
  border: 1px solid #a6d785;
}
.general {
  background-color: rgba(#b9d3ee, 0.5);
  border: 1px solid #739ac5;
}
</style>


