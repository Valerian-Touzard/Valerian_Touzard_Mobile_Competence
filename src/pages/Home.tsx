import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListCompetences from '../components/ListCompetences';
import './Home.css';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Competence</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ListCompetences />
    </IonPage>
  );
};

export default Home;
