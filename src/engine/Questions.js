import store from '../store'
import axios from "axios"

export class Questions {
    constructor(modeId) {
        this.modeId = parseInt(modeId)
        this.questions = store.state.questions
    }
    async fetchQuestions(host) {
        const res = await axios.get(host + "/getQuestions.php")

        let truth = res.data.map(x => {
            if (x.td === "truth") {
                return {
                    id: parseInt(x.id),
                    text: x.text,
                    mode: x.mode
                }
            }
        })
        truth = truth.filter(function( element ) {
            return element !== undefined;
        });

        let dare = res.data.map(x => {
            if (x.td === "dare") {
                return {
                    id: parseInt(x.id),
                    text: x.text,
                    mode: x.mode
                }
            }
        })
        dare = dare.filter(function( element ) {
            return element !== undefined;
        });

        store.commit('addQuestions', {dare: dare, truth: truth})
        return res.data
    }
    getQuestions() {
        let truthArr = this.questions.truth
        let dareArr = this.questions.dare

        let truthQuestions = truthArr.map(x => {
            if (x.mode.includes(parseInt(this.modeId))) {
                return x.text
            }
        })
        truthQuestions = truthQuestions.filter(function( element ) {
            return element !== undefined;
        });

        let dareQuestions = dareArr.map(x => {
            if (x.mode.includes(parseInt(this.modeId))) {
                return x.text
            }
        })
        dareQuestions = dareQuestions.filter(function( element ) {
            return element !== undefined;
        });

        return {
            truth: truthQuestions,
            dare: dareQuestions
        }
    }
    getRandomQuestion(way) {
        let questions = this.getQuestions()[way]
        return questions[Math.floor(Math.random() * (questions.length))]
    }
}