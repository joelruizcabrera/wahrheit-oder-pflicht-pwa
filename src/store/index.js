import { createStore } from 'vuex'

export default createStore({
  state: {
    gameModes: [
      {
        id: 1,
        name: "Trinkspiel",
        emoji: "🍻",
        colorGrade: {
          from: "#ff9900",
          to: "#ffe229"
        }
      },
      {
        id: 2,
        name: "Normal",
        emoji: "🗿",
        colorGrade: {
          from: "#00e1ff",
          to: "#005e6e"
        }
      },
      {
        id: 3,
        name: "Hardcore",
        emoji: "✝️",
        colorGrade: {
          from: "#7300ff",
          to: "#ca29ff"
        }
      },
      {
        id: 4,
        name: "FSK 18",
        emoji: "🔞",
        colorGrade: {
          from: "#ff3535",
          to: "#930000"
        }
      }
    ],
    config: {},
    questions: {
      truth: [
        {
          text: "Was war dein peinlichstes Date bisher?",
          mode: [1, 2]
        },
        {
          text: "Wann hattest du das letzte Mal Sex?",
          mode: [3,4]
        },
        {
          text: "Mit wem hattest du das letzte Mal Sex?",
          mode:  [3,4]
        },
        {
          text: "Wenn du mit einer Person in der Runde schlafen müsstest, wen würdest du auswählen?",
          mode:  [3,4]
        },
        {
          text: "Wen in der Runde würdest du am ehesten küssen und warum?",
          mode:  [3,4]
        },
        {
          text: "Hattest du schon mal einen Dreier?",
          mode:  [3,4]
        },
        {
          text: "Hast du schon mal von einem Dreier geträumt?",
          mode:  [3,4]
        },
        {
          text: "Wann hattest du deinen letzten feuchten Traum?",
          mode:  [3,4]
        },
        {
          text: "Was war der verrückteste Ort an dem du jemals Sex hattest?",
          mode:  [3,4]
        },
        {
          text: "Wie oft hast du Sex?",
          mode:  [3,4]
        },
        {
          text: "Wann hast du das letzte Mal masturbiert?",
          mode:  [3,4]
        },
        {
          text: "Wie schafft man es am besten dich zu erregen?",
          mode:  [3,4]
        },
        {
          text: "Hast du schon mal mit jemandem aus der Runde geschlafen oder geknutscht?",
          mode:  [3,4]
        },
        {
          text: "Welches Körperteil turnt dich am meisten an?",
          mode:  [3,4]
        },
        {
          text: "Wen aus der Runde würdest du am liebsten nackt sehen wollen?",
          mode:  [3,4]
        },
        {
          text: "Welche ist deine Lieblingsstellung?",
          mode:  [3,4]
        },
        {
          text: "Hattest du schon mal einen One Night Stand?",
          mode:  [3,4]
        },
        {
          text: "Mit wie vielen Personen hattest du schon Sex?",
          mode:  [3,4]
        },
        {
          text: "Wieso bist du gut im Bett?",
          mode:  [3,4]
        },
        {
          text: "Wie kriegt man dich am besten rum?",
          mode:  [3,4]
        },
        {
          text: "Mit wem hattest du bisher das beste Sex Erlebnis deines Lebens?",
          mode:  [3,4]
        },
        {
          text: "Hast du schon mal Nacktbilder verschickt?",
          mode:  [3,4]
        },
        {
          text: "Gefällt dir Analsex?",
          mode:  [3,4]
        },
        {
          text: "Bist du eher dominant oder devot?",
          mode:  [3,4]
        },
        {
          text: "Welche Kleidung findest du besonders sexy an dir?",
          mode:  [3,4]
        },
        {
          text: "Hast du schon mal jemanden gefesselt oder wurst du schon mal gefesselt?",
          mode:  [3,4]
        },
        {
          text: "Welches Pornogenre findest du am besten?",
          mode:  [3,4]
        },
        {
          text: "Hast du ein Sexspielzeug?",
          mode:  [3,4]
        },
        {
          text: "Wie viele Jungs / Mädchen hast du bisher geküsst?",
          mode: [1,2]
        },
        {
          text: "Bist du im Moment verliebt?",
          mode:  [1,2]
        },
        {
          text: "Hast du schon mal mit einer Frau / einem Mann rumgemacht?",
          mode:  [1,2]
        },
        {
          text: "Was war dein letzter Traum an den du dich erinnerst?",
          mode:  [1,2]
        },
        {
          text: "Hast du schon mal etwas geklaut? Wenn ja, was?",
          mode:  [1,2]
        },
        {
          text: "Was war dein schönstes Date?",
          mode:  [1,2]
        },
        {
          text: "Was war dein schlimmstes Date?",
          mode:  [1,2]
        },
        {
          text: "Wen in der Runde findest du am interessantesten?",
          mode:  [1,2]
        },
        {
          text: "Mit wem in der Runde würdest du am liebsten einen Urlaub verbringen?",
          mode:  [1,2]
        },
        {
          text: "Hast du schon mal eine Straftat begangen?",
          mode:  [1,2]
        },
        {
          text: "Mit wem hattest du deinen ersten Kuss?",
          mode:  [1,2]
        },
        {
          text: "Was würdest du machen, wenn du für einen Tag ein Mann oder eine Frau wärst?",
          mode:  [1,2]
        },
        {
          text: "Welches Tier wärst du am liebsten?",
          mode:  [1,2]
        },
        {
          text: "Hast du schon mal illegale Drogen genommen?",
          mode:  [1,2]
        },
        {
          text: "Wen in der Runde findest du am attraktivsten?",
          mode:  [1,2]
        },
        {
          text: "Wonach hast du als letztes gegoogelt?",
          mode:  [1,2]
        },
        {
          text: "Wer in der Runde ist am besten angezogen und warum?",
          mode:  [1,2]
        },
        {
          text: "Welches ist dein aktuelles Lieblingslied?",
          mode:  [1,2]
        },
        {
          text: "Von wem hast du deinen letzten Korb bekommen?",
          mode:  [1,2]
        },
        {
          text: "Hast du schon mal auf dem Klo telefoniert?",
          mode:  [1,2]
        },
        {
          text: "Was war das gemeinste, was du je getan hast?",
          mode:  [1,2]
        },
        {
          text: "Was war das kriminellste, was du je getan hast?",
          mode:  [1,2]
        },
        {
          text: "Hast du schon mal sexy Bilder von der verschickt?",
          mode:  [1,2]
        },
        {
          text: "Würdest du mit jemandem knutschen, den du gerade erst kennengelernt hast?",
          mode:  [1,2]
        },
        {
          text: "Was findest du an dir am sexiesten?",
          mode:  [1,2]
        },
        {
          text: "Wofür hast du dich in letzter Zeit geschämt?",
          mode:  [1,2]
        },
        {
          text: "Worauf guckst du zuerst, wenn du jemanden kennenlernst?",
          mode:  [1,2]
        },
        {
          text: "Wie kann man dich am schnellsten von sich begeistern?",
          mode:  [1,2]
        },
        {
          text: "Was würdest du machen, wenn du für einen Tag unsichtbar wärst?",
          mode:  [1,2]
        },
        {
          text: "Wer in der Runde hat die schönsten Lippen?",
          mode:  [1,2]
        },
        {
          text: "Wer in der Runde hat den schönsten Hintern?",
          mode:  [1,2]
        },
        {
          text: "Wie sieht dein Traumdate aus?",
          mode:  [1,2]
        },
        {
          text: "Mit wem in der Runde würdest du gerne für einen Tag das Leben tauschen?",
          mode:  [1,2]
        },
        {
          text: "Welche Körperstellen rasierst du regelmäßig?",
          mode:  [1,2]
        },
        {
          text: "Was war deine letzte Lüge?",
          mode:  [1,2]
        },
        {
          text: "Welches Abenteuer würdest du gerne noch erleben?",
          mode:  [1,2]
        },
        {
          text: "Hast du schon mal jemanden betrogen?",
          mode:  [1,2]
        },
        {
          text: "Was würdest du an deinem Körper verändern wenn du könntest?",
          mode:  [1,2]
        },
        {
          text: "Was würdest du machen, wenn du nur noch eine Stunde zu leben hättest?",
          mode:  [1,2]
        },
        {
          text: "Was turnt dich bei Frauen/Männern besonders an?",
          mode:  [1,2]
        },
        {
          text: "Was war der größte Fehler deines Lebens?",
          mode:  [1,2]
        },
        {
          text: "Wie viele Menschen hast du schon geküsst?",
          mode:  [1,2]
        },
        {
          text: "Welcher ist dein Lieblings-Song?",
          mode:  [1,2]
        },
        {
          text: "Wann hattest du das letzte Mal einen Hang Over?",
          mode:  [1,2]
        },
        {
          text: "In wen bist du verliebt?",
          mode:  [1,2]
        }
      ],
      dare: []
    }
  },
  getters: {
  },
  mutations: {
    configChange(state, config) {
      state.config = config
    },
  },
  actions: {
  },
  modules: {
  }
})
