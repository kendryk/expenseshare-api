### Création de l'application expenseShare-api

Fonctionnalités

Les fonctionnalités de l’application resteront relativement classiques :

    - [ ] Pouvoir ajouter une personne dans un groupe (Nom + Prénom) sans effectuer de vérification. Il ne sera pas possible de faire de lien entre une personne d’un groupe et celle d’un autre groupe. Il faudra donc recréer chaque personne dans chaque groupe.
    
    - [ ] Pouvoir ajouter une dépense (chaque dépense à un titre, un montant, une date, une catégorie et est associée à une personne).
    
    - [ ] Pouvoir trier / filtrer les dépenses par catégorie, personne ou montant.
    
    - [ ] Pouvoir fermer un groupe (empêcher d’ajouter des dépenses).
    
    - [ ] Calculer qui doit combien à qui.
    
    - [ ] Pouvoir marquer une dette comme réglée.

### mise en place de l'installation note pour moi même()
  - [X] Installation de react-router

````shell script
npm install react-router-dom
````
  - [X] Modifier le fichier index.js pour charger le router :

````shell script
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
````
   - [X] Installation de Redux
````shell script
npm install --save redux react-redux redux-devtools-extension
````
  - [X] Créer un fichier reducer :
````shell script
const initialState = {

};

function monReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}

export default monReducer;
````

  - [X] Créer le fichier pour combiner les reducers :
````shell script
import {combineReducers} from 'redux';
import monReducer from './monReducer';

export default combineReducers({ monReducer });
````
- [X] Créer un fichier contenant les actions.
````shell script
Configurer Redux dans le fichier index.js :

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
````
  - [X] Installation de Redux Thunk

Redux thunk permet de faire des fetchs dans les actions Redux.
````shell script
npm install --save redux-thunk
````

  - [X] Installation de node-sass et modifier les css en scss et importer Bootstrap
````shell script
npm install node-sass@4.14.1

npm i bootstrap


@import "~bootstrap";
````

- [X] Mise en place du lien .env
REACT_APP_API_URL = http://expenseshare.api.pierre-jehan.com

