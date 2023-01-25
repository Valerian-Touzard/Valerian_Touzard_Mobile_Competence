import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import { Competence } from "../type/Competence.type";

export type uneCompetence = {
    competence: Competence
}


const UneCompetence: React.FC<uneCompetence> = (props: uneCompetence) => {
    

    return <Link to={`competences/${props.competence.id as string}`}>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.competence.nom}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {props.competence.desc}
            </IonCardContent>
        </IonCard>
    </Link>
}

export default UneCompetence;