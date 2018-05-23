<template>
  <div class="about__container">
    <section class="bio__img grid-item">
      <div id="bioImage" class="img" ref="bioImage"></div>
    </section>
    <section class="bio__desc grid-item">
      <p id="bioText" class="bio__desc-text" ref="bioText">Hi, I'm Micah.<br> Software Engineer<br> raised in Hong Kong,<br> living in Los Angeles.<br> I like video games and Dyson Vacuums.
      </p>
    </section>
    <section id="social" class="social__links grid-item" ref="social">
      <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/micahkchiang"></a>
      <a class="github" target="_blank" href="https://github.com/micahchiang"></a>
      <a class="insta" target="_blank" href="https://www.instagram.com/micahkchiang/"></a>
      <a class="email" href="mailto:micahkchiang@gmail.com"></a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  created: function() {
    setTimeout(() => {
      this.$refs.bioImage.classList.add('img__fade-in');
    }, 0);
    setTimeout(() => {
      this.$refs.bioText.classList.add('bio__desc-fade-in');
    }, 1000);
    setTimeout(() => {
      this.$refs.social.classList.add('social__links-fade-in');
    }, 1500);
  },
  data: function() {
    return {
      msg: 'This is about'
    };
  }
};
</script>

<style lang="scss" scoped>
.about__container {
  min-height: 100%;
  height: auto;
  display: grid;
  grid-template-areas:
    'bio__img'
    'bio__desc'
    'current__work';
  grid-template-rows: 2fr 2fr 2fr;
  font-family: Helvetica;
  grid-gap: 5px;
  color: #35586c;
  overflow: hidden;
}

.bio__img {
  grid-area: bio__img;
  display: flex;
  padding: 1em 2em;
  justify-content: center;
  align-items: center;
}

.img {
  height: 100%;
  width: 100%;
  background-image: url('./mc_biopic.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: right;
  opacity: 0;
}

.img__fade-in {
  opacity: 1;
  animation: loadOpacity 1s ease;
}

@keyframes loadOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.bio__desc {
  grid-area: bio__desc;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2em;
  font-size: 16px;
}

.bio__desc-text {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.5em;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: left;
  opacity: 0;
}

.bio__desc-fade-in {
  opacity: 1;
  animation: loadText 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes loadText {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.social__links {
  grid-area: current__work;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2em;
  opacity: 0;
}

.social__links-fade-in {
  opacity: 1;
  animation: loadSites 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes loadSites {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.linkedin {
  height: 10%;
  width: 6%;
  background-image: url('./linkedin.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.github {
  height: 10%;
  width: 6%;
  background-image: url('./github.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.insta {
  height: 10%;
  width: 6%;
  background-image: url('./instasvg.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.email {
  height: 10%;
  width: 6%;
  background-image: url('./email.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

