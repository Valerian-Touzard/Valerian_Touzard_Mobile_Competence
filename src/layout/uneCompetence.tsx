import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import React from "react";
import { Competence } from "../type/Competence.type";

export type uneCompetence = {
    competence: Competence
}


const UneCompetence: React.FC<uneCompetence> = (props: uneCompetence) => {



    return <IonCard>
        <IonCardHeader>
            <IonCardTitle>{props.competence.nom}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
            {props.competence.desc}
        </IonCardContent>
    </IonCard>
}

export default UneCompetence;