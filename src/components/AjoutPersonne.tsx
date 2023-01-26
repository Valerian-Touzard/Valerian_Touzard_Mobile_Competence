import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { personneService } from "../services/Personnes.service";
import { Personne } from "../type/Personne.type";


const AjoutPersonne: React.FC = () => {
    const [nomPersonne, setNomPersonne] = useState<string>()


    /**
     * Modifie la valeur du state "nomPersonne" à la modification de l'input pour le nom
     */
    const handleChangeNom = (e: any) => {
        setNomPersonne(e.target.value as string);        
    }

    /**
     * Fait un appelle au service pour ajouter une compétences à la bdd
     */
    const ajoutPeronne = (e: React.MouseEvent<HTMLIonButtonElement>) => {
        e.preventDefault();
       
        let newCompetence: Personne = {
            id: uuidv4(),
            nom: nomPersonne as string,
        }
        personneService.addPersonne(newCompetence);
        setNomPersonne("");
    }

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/personnes"></IonBackButton>
                </IonButtons>
                <IonTitle>Ajout Utilisateur</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonList>
                <IonItem>
                    <IonLabel>Nom de la personne: </IonLabel>
                    <IonInput placeholder="Jean..." onIonInput={handleChangeNom} value={nomPersonne}></IonInput>
                </IonItem>

                <IonButton color="success" onClick={ajoutPeronne}>Ajout</IonButton>
            </IonList>
        </IonContent>
    </IonPage>

}

export default AjoutPersonne;

