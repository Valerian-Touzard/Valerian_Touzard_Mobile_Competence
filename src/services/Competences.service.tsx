import { Competence } from "../type/Competence.type";

class CompetenceService{

    /**
     * Retourne la liste complète des compétences
     */
    getAllCompetences = async () =>{
        return await fetch(process.env.REACT_APP_URI_COMPETENCE as string)
                .then((response)=> response.json())
                .catch((error)=>console.error(error))
    }

    /**
     * Retourne une compétence en fontion de son id
     * @param {*} id string
     * @returns Une compétence
     */
    getOneCompetence = async (id: string) =>{
        return await fetch(`${process.env.REACT_APP_URI_COMPETENCE}/${id}`)
                    .then((response)=> response.json())
                    .catch((error)=>error.json());

    }

    /**
     * Ajoute une compétence à la BDD
     * @param {*} competence Competence
     * @returns 
     */
    addCompetence = async (competence: Competence) => {
        return await fetch(process.env.REACT_APP_URI_COMPETENCE as string,{
            method:"POST",
            body: JSON.stringify(competence),
            headers: {"Content-Type":"application/json"}
        })
        .then((response)=> response.json()).catch((error)=> console.error(error));
    }
}

export const competenceService = Object.freeze(new CompetenceService());