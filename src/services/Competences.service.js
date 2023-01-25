import { Competence } from "../type/Competence.type";


class CompetenceService{

    getAllCompetences = async () =>{
        return await fetch(process.env.REACT_APP_URI_COMPETENCE)
                .then((response)=> response.json())
                .catch((error)=>console.error(error))
    }


    addCompetence = async (competence) =>{
        console.log(competence);
        return await fetch(process.env.REACT_APP_URI_COMPETENCE,{
            method:"POST",
            body: JSON.stringify(competence),
            headers: {"Content-Type":"application/json"}
        })
        .then((response)=> response.json()).catch((error)=> console.error(error));
    }
}

export const competenceService = Object.freeze(new CompetenceService())