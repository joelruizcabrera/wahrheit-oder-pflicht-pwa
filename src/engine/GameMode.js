import store from '../store'
import axios from "axios";

export class GameMode {
    constructor(host) {
        this.host = host
    }
    async fetchGameModes() {
        const res = await axios.get(this.host + "/getGameModes.php")
        return res.data
    }
    async setGameModeStore() {
        let gameModes = await this.fetchGameModes()
        store.commit('addGameModes', gameModes)
    }
}