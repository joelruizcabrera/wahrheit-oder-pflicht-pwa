import store from '../store'

export class Questions {
    constructor(modeId) {
        this.modeId = parseInt(modeId)
        this.questions = store.state.questions
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