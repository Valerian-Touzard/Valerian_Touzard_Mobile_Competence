
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'
import { Link } from 'react-router-dom';
import ListPersonnes from '../components/ListPersonnes';

export const Personnes: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liste des utilisateurs</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Link color="success" to='addPersonne'>Ajouter un utilisateur</Link>
                <ListPersonnes />
            </IonContent>
        </IonPage>
    )
}

export default Personnes;
