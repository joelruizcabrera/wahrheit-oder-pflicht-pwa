import store from '../store'

export class User {
    constructor(userId) {
        this.userId = userId
    }
    getRandomUser() {
        let players = store.state.config.players
        return players[Math.floor(Math.random() * (players.length))]
    }
    getUser() {
        let user = store.state.config.players.map(x => {
            if (x.id === this.userId) {
                return x
            }
        })
        return user.filter(function( element ) {
            return element !== undefined;
        })[0];
    }
    setPoints(point) {
        let user = this.getUser()
        user.points = user.points + point

        console.log(user)
    }
}