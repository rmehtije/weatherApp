import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const initialState = {
    showSideBar: false,
    forecastDateTimeSelect: null,
};

// v redux action eto izmenenije sostojanija. CreateAction sozdajot funkciju kotoraja mozhet menjat' sostojanije i kotoraja peredajot
// objekt s dvumja svojstvami
// 1. type = gde napisano nazvanije akshena.
// 2. payload = v kotorom novoje sostojanije
// Akshen eto vsegolish trigger, i eto trigger reducera

export const setShowSideBar = createAction("setShowSideBar");
export const setForecastDateTimeSelect = createAction("setForecastDateTimeSelect");

// Reducer po svojej suti javljajetsa hranilishem funkcqj kotorqje vypolnjajutsa pri zapuske akshena.
// U kazhdogo akshena dolzhen bqt' svoj reducer v kotorym my opishem izmenenije sostojanija.
const reducer = createReducer(initialState, {
    [setShowSideBar]: (state, action) => {
        state.showSideBar = action.payload;
    },
    [setForecastDateTimeSelect]: (state, action) => {
        state.forecastDateTimeSelect = action.payload;
    }
});

// store on hranilishe vsego redux sostojanija. I on sledit za nashem reaktom i rabotajet vmeste s react-redux.
export const store = configureStore({ reducer });
