
class CompetenceService{

    getAllCompetences = async () =>{
        return await fetch(process.env.REACT_APP_URI_COMPETENCE)
                .then((response)=> response.json())
                .catch((error)=>console.error(error))
    }

}

export const competenceService = Object.freeze(new CompetenceService())