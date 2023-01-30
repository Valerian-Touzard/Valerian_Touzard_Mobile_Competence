import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom';
import { personneService } from '../services/Personnes.service';
import { Personne } from '../type/Personne.type';

const ModifierCompetenceAssocier: React.FC = () => {
    const { id, index } = useParams() as { id: string, index: string };
    const [personneAModif, setPersonneAModif] = useState<Personne>();
    const [niveau, setNiveau] = useState<string>();

    useEffect(() => {
        getPersonne();
    }, [])

    const getPersonne = () => {
        personneService.getOnePersonne(id)
            .then((data) => setPersonneAModif(data))
            .catch((err) => console.error(err));
    }


    /**
     * Modifie la valeur du state "niveauCompetence" à la modification 
     * @param e 
     */
    const handleNiveauCompetenceChange = (e: any) => {
        setNiveau(e.target.value as string)
    }

    const saveNiveau = (e: any) => {
        e.preventDefault();
        let newPersonne = personneAModif;
        if (newPersonne != undefined) {
            newPersonne.niveauCompetence[parseInt(index)].niveau = niveau as string;
            personneService.saveNiveau(personneAModif as Personne, id)
                .then((data) => console.log(data))
                .catch((err) => console.error(err));
        }

        
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref={`/personnes/${id}`}></IonBackButton>
                    </IonButtons>
                    <IonTitle>Modification du niveau utilisateur</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>Competence: {personneAModif?.niveauCompetence[parseInt(index)].nomCompetence}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Niveau: </IonLabel>
                        <IonSelect placeholder="intermédiaire..." onIonChange={handleNiveauCompetenceChange}>
                            <IonSelectOption value={"DEBUTANT"}>Débutant</IonSelectOption>
                            <IonSelectOption value={"INTERMEDIAIRE"}>Intermédiaire</IonSelectOption>
                            <IonSelectOption value={"EXPERT"}>Expert</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
                <IonButton onClick={saveNiveau}>Enregistrer les modifications</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default ModifierCompetenceAssocier