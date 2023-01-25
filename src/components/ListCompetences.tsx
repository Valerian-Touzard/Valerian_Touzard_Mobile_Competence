import { IonButton } from "@ionic/react";
import { useEffect, useState } from "react";
import UneCompetence from "../layout/uneCompetence";
import { competenceService } from "../services/Competences.service";
import { Competence } from "../type/Competence.type";


const ListCompetences: React.FC = () => {

    const [competences, setListCompetences] = useState<Competence[]>();

    useEffect(() => {
        getAllCompetences();
    }, [])


    const getAllCompetences = () => {
        competenceService.getAllCompetences()
            .then(data => setListCompetences(data))
            .catch(err => console.error(err));
    }


    return <>
        {competences && competences.map((competence, index)=>{
            return <div key={index}>
                <UneCompetence competence={competence}/>
            </div>
        })}
    </>
}

export default ListCompetences;