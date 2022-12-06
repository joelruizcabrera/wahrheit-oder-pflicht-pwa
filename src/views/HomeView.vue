<template>
  <div class="home">
    <div class="home__headline">
      <h1>Wahrheit</h1>
      <h3>oder</h3>
      <h1>Pflicht</h1>
    </div>
    <div class="home__description">
      <div class="home__description__steps">
        <b>Schritt {{this.progress.step}} / 2</b>
      </div>
      <p>{{this.progress.description}}</p>
    </div>
    <div class="home__configuration">
      <StartGameConfiguration @gameStart="startGame"></StartGameConfiguration>
    </div>
  </div>
</template>

<script>
import StartGameConfiguration from '@/components/StartGameConfigurationView'
export default {
  name: 'HomeView',
  data() {
    return {
      progress: {
        step: 1,
        description: ""
      }
    }
  },
  components: {
    StartGameConfiguration
  },
  computed: {
    config() {
      return this.$store.state.config
    }
  },
  mounted() {
    this.progress.step = 1;
    this.progress.description = "Wähle deinen Spielmodi aus"
  },
  methods: {
    startGame(config) {
      this.$store.commit('configChange', config.config)
      this.$router.push({path: '/play/' + config.config.gameMode})
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__headline {
    margin-top: 3rem;
    h1 {line-height: 1.7rem}
    h1, h3 {margin: 0}
    h3 {
      font-weight: 500;
      letter-spacing: 15px;
    }
    h1:last-child {
      letter-spacing: 6px;
    }
  }
  &__description {
    margin-top: 2rem;
  }
}
</style>