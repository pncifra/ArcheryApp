export const SET_SCORES = "SET_SCORES";
export const SET_TOTAL = "SET_TOTAL";
export const SET_AVERAGE = "SET_AVERAGE";

export function setScores(score) {
    return { type: SET_SCORES, score }
}

export function setTotal(scores) {
    return { type: SET_TOTAL, scores }
}

export function setAverage(scores, total) {
    return { type: SET_AVERAGE, scores, total }
}