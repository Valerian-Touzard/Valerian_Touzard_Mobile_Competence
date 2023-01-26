import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonPage, IonToolbar, IonHeader, IonTitle, IonBackButton, IonButtons, IonContent } from "@ionic/react";
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
                    <IonBackButton defaultHref="/"></IonBackButton>
                </IonButtons>
                <IonTitle>Détaille utilisateur</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{personne?.nom}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <p>ceci est une desc temp</p>
                </IonCardContent>
            </IonCard>
        </IonContent>

    </IonPage>

}

export default DetailPersonne;