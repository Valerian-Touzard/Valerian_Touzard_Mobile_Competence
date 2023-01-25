import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';
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

      <Link color="success" to='addCompetence'>Ajouter une compétence</Link>
      <ListCompetences />
    </IonPage>
  );
};

export default Home;
