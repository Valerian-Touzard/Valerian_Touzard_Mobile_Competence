import { Personne } from "../type/Personne.type";

class PersonneService{

    /**
     * Retourne la liste complète des personnes
     */
    getAllPersonne = async () =>{
        return await fetch(process.env.REACT_APP_URI_PERSONNE as string)
                .then((response)=> response.json())
                .catch((error)=>console.error(error))
    }

    /**
     * Retourne une compétence en fontion de son id
     * @param {*} id string
     * @returns Une personne
     */
    getOnePersonne = async (id: string) =>{
        return await fetch(`${process.env.REACT_APP_URI_PERSONNE}/${id}`)
                    .then((response)=> response.json())
                    .catch((error)=>error.json());

    }

    /**
     * Ajoute une personne à la BDD
     * @param {*} personne Personne
     * @returns 
     */
    addPersonne = async (personne: Personne) => {
        return await fetch(process.env.REACT_APP_URI_PERSONNE as string,{
            method:"POST",
            body: JSON.stringify(personne),
            headers: {"Content-Type":"application/json"}
        })
        .then((response)=> response.json()).catch((error)=> console.error(error));
    }
}

export const personneService = Object.freeze(new PersonneService());