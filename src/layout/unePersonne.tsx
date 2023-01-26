import { IonCard, IonCardHeader, IonCardTitle} from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Personne } from '../type/Personne.type'

export type unePersonne = {
    personne: Personne
}

const UnePersonne: React.FC<unePersonne> = (props: unePersonne) => {
  return (
    <Link to={`personnes/${props.personne.id as string}`}>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.personne.nom}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
    </Link>
  )
}

export default UnePersonne;