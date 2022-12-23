import { createSlice } from "@reduxjs/toolkit";
import data from "./words.json"

const wordSlicer = createSlice({
    name: "words",
    initialState: {
        items: [],
        timer: 60,
        time: "01:00",
        isFinish: false,
        lang: "turkish",
        correct: 0,
        inCorrect: 0,
        wordindexnumber: 0,
        ticknumb: 0,
        corTick: 0,
        inCorTick: 0,


    },
    reducers: {
        downTime: (state) => {
            state.timer -= 1;
            state.timer < 60 && state.timer > 9 ? state.time = `00:${state.timer}` : state.time = `00:0${state.timer}`
            if (state.timer < 1) {
                state.isFinish = true;
                state.correct = state.items.slice(0, state.wordindexnumber).filter(w => w.status === "correct").length
                state.inCorrect = state.items.slice(0, state.wordindexnumber).filter(w => w.status === "incorrect").length
                state.corTick = state.items.slice(0, state.wordindexnumber).filter(w => w.status === "correct").reduce((a, b) => a + b.word.length, 0);
                state.inCorTick = state.ticknumb - state.corTick
            } else {
                state.isFinish = false
            }
        },
        changeLang: (state, action) => {
            state.lang = action.payload;

        },
        getWords: (state, action) => {
            data.words.sort(() => Math.random() - 0.5);
            state.items = action.payload === "turkish" ? data.words.map(w => ({ "word": w.turkish, "status": "", "nowWords": false, })) : data.words.map(w => ({ "word": w.english, "status": "", "nowWords": false, }))
            state.items[0].nowWords = true;

        },
        increWordIndex: (state) => {
            state.wordindexnumber += 1;
            state.items.forEach(w => w.nowWords = false);
            state.items[state.wordindexnumber].nowWords = true
            state.ticknumb -= 1
        },
        HandleWords: (state, action) => {
            state.ticknumb += 1
            if (state.items[state.wordindexnumber].word[0].toLowerCase() === action.payload[0].toLowerCase()) {
                if (state.items[state.wordindexnumber].word.toLowerCase() === action.payload.trim().toLowerCase()) {
                    state.items[state.wordindexnumber].status = "correct"
                } else {
                    state.items[state.wordindexnumber].status = "incorrect"

                }
            } else {
                state.items[state.wordindexnumber].status = "incorrect"
            }

        }



    }
})

export default wordSlicer.reducer;
export const { downTime, changeLang, getWords, increWordIndex, HandleWords } = wordSlicer.actions