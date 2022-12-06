<template>
  <div class="game_configuration">
    <Transition name="fade">
     <div class="game_configuration__modes" v-if="this.$parent.progress.step === 1">
      <div
          :class="'game_configuration__modes__item item-' + mode.id"
          v-for="mode in gameModes"
          :key="mode.id"
          @click="changeModi(mode.id)"
          :style="'background: linear-gradient(112deg, ' + mode.colorGrade.from + ' 0%, ' + mode.colorGrade.to + ' 100%);'"
      >
        <span style="z-index: 3;">
          {{mode.name}}
        </span>
        <div class="game_configuration__modes__item__emoji">
          {{mode.emoji}}
        </div>
      </div>
    </div>
    </Transition>
    <Transition name="fade">
      <div class="game_configuration__start" v-if="this.config.players.length >= 3">
        <button class="jrc__button full-width" @click="startGame" style="margin-bottom: 2rem">Spiel starten</button>
      </div>
    </Transition>
    <Transition name="fade">
      <div class="game_configuration__players" v-if="this.$parent.progress.step === 2">
        <div class="game_configuration__players__box">
          <div class="game_configuration__players__box_players" v-if="this.config.players.length >= 1">
            <div class="game_configuration__players__box_player-item" v-for="player in this.config.players" :key="player.id">
              <span @click="removePlayer(player.id)"><i class="fa-solid fa-xmark"></i></span> {{player.name}}
            </div>
          </div>
          <div class="game_configuration__players__box_players no-players" v-else>
            Bitte füge mindestens 3 Spieler hinzu
          </div>
        </div>
        <div class="game_configuration__players__input">
          <input type="text" v-model="inputPlayer" placeholder="Spieler..." v-on:keyup.enter="setPlayer">
        </div>
      </div>
    </Transition>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<script>
import { uuid } from 'vue-uuid';

export default {
  name: "StartGameConfiguration",
  data() {
    return {
      inputPlayer: '',
      config: {
        gameMode: null,
        players: []
      },
    }
  },
  computed: {
    gameModes() {
      return this.$store.state.gameModes
    }
  },
  methods: {
    changeModi(id) {
      this.config.gameMode = id;
      this.$parent.progress.step = null
      setTimeout(() => {
        this.$parent.progress.step = 2
        this.$parent.progress.description = "Trage nun die Spieler im unten stehenden Feld ein. Mindestens 3 Spieler."
      }, 500)
      console.log(id)
    },
    setPlayer() {
      let newPlayer = this.inputPlayer;
      this.inputPlayer = ''
      this.config.players.push({
        id: uuid.v4(),
        name: newPlayer,
        points: 0
      })
      console.log(this.config.players)
    },
    removePlayer(id) {
      const player = this.config.players.findIndex((obj) => obj.id === id);
      this.config.players.splice(player, 1)
      console.log(this.config.players)
    },
    startGame() {
      let appInformations = {
        config: this.config,
        gameModes: this.gameModes
      }
      this.$emit('gameStart', appInformations)
    }
  }
}
</script>

<style lang="scss" scoped>
.game_configuration {
  margin-top: 3rem;
  &__modes {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    &__item {
      height: 5rem;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: box-shadow .3s ease;
      &:hover {
        box-shadow: inset 0 0 6px 3px #fff;
      }
      &__emoji {
        position: absolute;
        z-index: 1;
        opacity: .3;
        font-size: 4rem;
      }
      &.active {
        box-shadow: inset 0 0 2px #fff;
      }
      &.item-1 { grid-area: 1 / 1 / 2 / 2; animation-delay: .5s}
      &.item-2 { grid-area: 1 / 2 / 2 / 3; animation-delay: 1s}
      &.item-3 { grid-area: 2 / 1 / 3 / 2; animation-delay: 1.5s}
      &.item-4  { grid-area: 2 / 2 / 3 / 3; animation-delay: 2s}
    }
  }
  &__players {
    &__input input {
      width: 100%;
      border: none;
      background: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 0;
      outline: none;
      color: white;
      font-size: 1rem;
      padding-bottom: .4rem;
      transition: .3s ease;
      margin-bottom: .6rem;
      &:focus {
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 1);
        margin-bottom: 0rem;
      }
    }
    &__box {
      border: 1px solid #fff;
      padding: 1rem;
      margin-bottom: 2rem;
    }
    &__box_players {
      display: flex;
      flex-wrap: wrap;
    }
    &__box_player-item {
      margin: .2rem;
      padding: .5rem;
      background: #4d4d4d;
      span {
        margin-right: .2rem;
      }
    }
  }
}
</style>