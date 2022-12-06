<template>
  <div class="game">
    <div class="game__userInfo">
      <h1>{{currentUser.name}},</h1>
      <h3>du bist dran!</h3>
    </div>
    <div class="game__todChoice" v-if="this.question === null">
      <button type="button" @click="choice('truth')">Wahrheit</button>
      <p>oder</p>
      <button type="button" @click="choice('dare')">Pflicht</button>
    </div>
    <div class="game__question" v-else>
      <h1 v-html="question"></h1>
      <div class="game__question__actions">
        <button type="button" class="jrc__button" @click="finishQuestion(true)">{{ this.actionBtn.yes }}</button>
        <button type="button" class="jrc__button" @click="finishQuestion(false)">{{ this.actionBtn.no }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game {
  &__userInfo {
    h1, h3 {
      margin: 0;
    }
    margin-top: 3rem;
  }
  &__todChoice {
    margin-top: 3rem;
    button {
      width: 100%;
      height: 4rem;
      text-transform: uppercase;
      font-weight: 900;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      border: none;
      outline: none;
      font-size: 1.6rem;
      margin: 1rem 0;
      color: #000;
    }
    p {
      margin: 0;
    }
  }
  &__question {
    margin-top: 3rem;
    &__actions {

      margin-top: 4rem;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

<script>
import {Questions} from "@/engine/Questions";
import {User} from "@/engine/User";
export default {
  name: 'PlayView',
  data() {
    return {
      currentUser: '',
      question: null,
      actionBtn: {
        yes: '',
        no: ''
      }
    }
  },
  mounted() {
    this.initGame()
  },
  methods: {
    initGame() {
      this.currentUser = new User().getRandomUser()
      this.question = null
    },
    choice(mode) {
      this.question = new Questions(this.$route.params.id).getRandomQuestion(mode)
      switch (mode) {
        case "truth":
          this.actionBtn.yes = "Beantwortet"
          this.actionBtn.no = "Nicht beantwortet"
          break;
        case "dare":
          this.actionBtn.yes = "Erledigt"
          this.actionBtn.no = "Nicht erledigt"
          break;
      }
    },
    finishQuestion(answer) {
      let pointing = (answer ? 1 : -1)
      let user = new User(this.currentUser.id)
      user.setPoints(pointing)
      this.initGame()
    }
  }
}
</script>