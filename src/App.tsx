import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AjoutCompetence from './components/AjoutCompetence';
import DetailCompetence from './pages/DetailCompetence';
import Personnes from './pages/Personnes';
import AjoutPersonne from './components/AjoutPersonne';
import DetailPersonne from './pages/DetailPersonne';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/addCompetence">
          <AjoutCompetence />
        </Route>
        <Route exact path="/personnes">
          <Personnes />
        </Route>
        <Route exact path="/addPersonne">
          <AjoutPersonne />
        </Route>
        <Route path="/competences/:id" component={DetailCompetence} />
        <Route path="/personnes/:id" component={DetailPersonne} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
