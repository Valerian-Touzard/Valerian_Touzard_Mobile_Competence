import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonPage, IonToolbar, IonHeader, IonTitle, IonBackButton, IonButtons, IonContent, IonList } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { competenceService } from "../services/Competences.service";
import { personneService } from "../services/Personnes.service";
import { Competence } from "../type/Competence.type";
import { Personne } from "../type/Personne.type";

const DetailPersonne: React.FC = () => {

    const [personne, setPersonne] = useState<Personne>();
    const [competences, setCompetences] = useState<Competence[]>([]);
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
                <IonTitle>Détail utilisateur</IonTitle>
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
            <IonList>
                {competences && competences.map((competence, index) => {
                    return <IonCard key={index}>
                        <IonCardHeader>
                            <IonCardTitle>{competence.nom}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>{competence.desc}</p>
                        </IonCardContent>
                    </IonCard>
                })}
            </IonList>
        </IonContent>

    </IonPage>

}

export default DetailPersonne;