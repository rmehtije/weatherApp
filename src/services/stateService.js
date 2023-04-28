import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const initialState = {
    showSideBar: false,
    forecastDateTimeSelect: null,
};

export const setShowSideBar = createAction("setShowSideBar");
export const setForecastDateTimeSelect = createAction("setForecastDateTimeSelect");

const reducer = createReducer(initialState, {
    [setShowSideBar]: (state, action) => {
        state.showSideBar = action.payload;
    },
    [setForecastDateTimeSelect]: (state, action) => {
        state.forecastDateTimeSelect = action.payload;
    }
});

export const store = configureStore({ reducer });
