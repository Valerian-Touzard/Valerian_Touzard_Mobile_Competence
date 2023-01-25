import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonPage, IonToolbar, IonHeader, IonTitle, IonBackButton, IonButtons } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { competenceService } from "../services/Competences.service";
import { Competence } from "../type/Competence.type";

const DetailCompetence: React.FC = () => {

    const [competence, setCompetence] = useState<Competence>();
    const { id } = useParams() as { id: string };
    useEffect(() => {
        getOneCompetence();
    }, [])

    /**
     * Récupère une compétence en fonction de l'id placer en paramètre de l'URl
     */
    const getOneCompetence = () => {
        competenceService.getOneCompetence(id as string)
            .then(data => setCompetence(data))
            .catch(err => console.error(err));
    }

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/"></IonBackButton>
                </IonButtons>
                <IonTitle>Détaille compétences</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{competence?.nom}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {competence?.desc}
            </IonCardContent>
        </IonCard>
    </IonPage>

}

export default DetailCompetence;