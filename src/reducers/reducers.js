import { combineReducers } from 'redux';

import { SET_SCORES, SET_TOTAL, SET_AVERAGE } from '../actions/actions';

function scores(state = [], action) {
    switch (action.type) {
        case SET_SCORES:
            return [...state, action.score];
        default:
            return state;
    }
}

function total(state = 0, action) {
    switch (action.type) {
        case SET_TOTAL:
            return action.scores.reduce((acc, score) => acc + score, 0);
        default:
            return state;
    }
}

function average(state = 0, action) {
    switch (action.type) {
        case SET_AVERAGE:
            return Math.round((action.total / action.scores.length) * 10) / 10
        default:
            return state;
    }
}

export default archeryApp = combineReducers({
    scores,
    total,
    average,
});