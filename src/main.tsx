import ReactDOM from 'react-dom/client'
// redux toolkit 
import { Provider } from 'react-redux';
import { store, persistor } from "@store/index";

import { PersistGate } from "redux-persist/integration/react";

//axios
import "@services/axios-global.js";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from './routers/AppRouter';



ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);