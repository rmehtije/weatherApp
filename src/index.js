import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/stateService';

// react sostoitsa iz dvuh glavnyh paketov eto react i react-dom
// berjotsa DOM / document index.html ottuda vydeljajetsa div s id root i otprvoljajetsa v react-dom
// react-dom eto most mezdhu nashemi komponentami i 4istym html i js.
const root = ReactDOM.createRoot(document.getElementById('root'));

// root render otrisovajet ves' nash projekt v virtual'nyj dom

// Provider - eto vspomogatel'nyj komponent on react-redux dlja svjazyvanija reacta s redux. 
// V nego my peredajom nashe oblako sostojanija redux.

// BrowserRouter - eto vspomogatel'nyj komponent react-router-dom kotoryj kotrolirujet otrisovku komponenetov zavisimosti ot url
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
