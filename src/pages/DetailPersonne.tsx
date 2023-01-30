import { IonCard, IonCardTitle, IonPage, IonToolbar, IonHeader, IonTitle, IonBackButton, IonButtons, IonCardContent, IonCardHeader, IonCardSubtitle } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { personneService } from "../services/Personnes.service";
import { Personne } from "../type/Personne.type";

const DetailPersonne: React.FC = () => {

    const [personne, setPersonne] = useState<Personne>();
    const { id } = useParams() as { id: string };

    useEffect(() => {
        getOnePersonne();
    }, [])

    /**
     * Récupère une personne en fonction de l'id placer en paramètre de l'URl
     */
    const getOnePersonne = () => {
        personneService.getOnePersonne(id as string)
            .then(data => setPersonne(data))
            .catch(err => console.error(err));
    }

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/personnes"></IonBackButton>
                </IonButtons>
                <IonTitle>Détail utilisateur</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonCard>
            <IonCardTitle>{personne?.nom}</IonCardTitle>
        </IonCard>
        {personne?.niveauCompetence.map((competence, index) => {
            return <IonCard key={index}>
                <IonCardHeader>
                    <IonCardTitle>{competence.nomCompetence} : {competence.niveau}</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        })}

    </IonPage>

}

export default DetailPersonne;