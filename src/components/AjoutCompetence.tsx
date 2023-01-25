import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { competenceService } from "../services/Competences.service";
import { Competence } from "../type/Competence.type";
import { v4 as uuidv4 } from 'uuid';


const AjoutCompetence: React.FC = () => {
    const [nomCompetence, setNomCompetence] = useState<string>()
    const [descCompetence, setDescCompetence] = useState<string>()


    /**
     * Modifie la valeur du state "nomCompetence" à la modification de l'input pour le nom
     */
    const handleChangeNom = (e: any) => {
        setNomCompetence(e.target.value as string);        
    }

    /**
     * Modifie la valeur du state "descCompetence" à la modification de l'input pour le nom
     */
    const handleChangeDesc = (e: any) => {
        setDescCompetence(e.target.value as string)
    }

    /**
     * Fait un appelle au service pour ajouter une compétences à la bdd
     */
    const ajoutCompetence = (e: React.MouseEvent<HTMLIonButtonElement>) => {
        e.preventDefault();
        console.log(nomCompetence);
        
        let newCompetence: Competence = {
            id: uuidv4(),
            nom: nomCompetence as string,
            desc: descCompetence as string
        }
        competenceService.addCompetence(newCompetence);
        setNomCompetence("");
        setDescCompetence("");
    }

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/"></IonBackButton>
                </IonButtons>
                <IonTitle>Ajout competence</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonList>
                <IonItem>
                    <IonLabel>Nom du language: </IonLabel>
                    <IonInput placeholder="Java..." onIonInput={handleChangeNom} value={nomCompetence}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel>Description:</IonLabel>
                    <IonTextarea placeholder="entrer la description..." onIonChange={handleChangeDesc} value={descCompetence}></IonTextarea>
                </IonItem>
                <IonButton color="success" onClick={ajoutCompetence}>Ajout</IonButton>
            </IonList>
        </IonContent>
    </IonPage>

}

export default AjoutCompetence;

