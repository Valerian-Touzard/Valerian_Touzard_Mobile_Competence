import { useIonViewDidEnter } from "@ionic/react";
import React, { useState } from 'react'
import UnePersonne from '../layout/unePersonne';
import { personneService } from '../services/Personnes.service';
import { Personne } from '../type/Personne.type';

export const ListPersonnes: React.FC = () => {
    const [listePersonnes, setListPersonnes] = useState<Personne[]>();

    useIonViewDidEnter(() =>{
        getAllPersonnes();
    })


    const getAllPersonnes = () => {
        personneService.getAllPersonne()
            .then(data => setListPersonnes(data))
            .catch(err => console.error(err));
    }


    return <>
        {listePersonnes && listePersonnes.map((personne, index)=>{
            return <div key={index}>
                <UnePersonne personne={personne}/>
            </div>
        })}
    </>
}

export default ListPersonnes;