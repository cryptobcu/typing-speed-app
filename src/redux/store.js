import { configureStore } from "@reduxjs/toolkit";
import wordSlicer from "./wordSlicer";

export const store = configureStore({
    reducer: {
        words: wordSlicer
    }
})