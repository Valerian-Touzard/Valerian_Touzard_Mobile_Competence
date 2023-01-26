import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { competenceService } from "../services/Competences.service";
import { personneService } from "../services/Personnes.service";
import { Competence } from "../type/Competence.type";
import { NiveauCompetence, Personne } from "../type/Personne.type";


const AjoutPersonne: React.FC = () => {
    const [nomPersonne, setNomPersonne] = useState<string>(); // nom de la personne à enregistrer
    const [niveauCompetence, setNiveauCompetence] = useState<NiveauCompetence[]>([]); // la liste de competence de la personne avec leur niveau
    const [selectedCompetences, setSelectedCompetences] = useState<Competence[]>([]); // la liste de composant sélectionnée
    const [competences, setCompetences] = useState<Competence[]>([]); // la liste de toutes les compétences

    useEffect(() => {
        getAllCompetences();
    }, [])

    /**
     * Méthode qui permet le bon fonctionnement du selecteur multiple
     * @param o1 Competence
     * @param o2 Competence
     * @returns 
     */
    const compareWith = (o1: Competence, o2: Competence) => {
        if (!o1 || !o2) {
            return o1 === o2;
        }

        if (Array.isArray(o2)) {
            return o2.some((o) => o.id === o1.id);
        }

        return o1.id === o2.id;
    };

    /**
     * Récupère la liste de toute les compétences
     */
    const getAllCompetences = () => {
        competenceService.getAllCompetences()
            .then(data => setCompetences(data))
            .catch(err => console.error(err));
    }

    /**
     * Modifie la valeur du state "nomPersonne" à la modification de l'input pour le nom
     */
    const handleChangeNom = (e: any) => {
        setNomPersonne(e.target.value as string);
    }

    /**
     * Modifie la valeur du state "niveauCompetence" à la modification 
     * @param e 
     */
    const handleNiveauCompetenceChange = (e: any, competence: Competence) => {
        let newNiveauCompetence: NiveauCompetence = {
            idCompetence: competence.id,
            niveau: e.target.value
        }        
        
        if(niveauCompetence.length == 0){
            setNiveauCompetence([...niveauCompetence, newNiveauCompetence])
        }else{
            let niveauCompetenceTmp: NiveauCompetence[] = niveauCompetence.filter((e) => e.idCompetence != newNiveauCompetence.idCompetence);
            // console.log(niveauCompetenceTmp);
            
            while(niveauCompetence.length > 0){
                niveauCompetence.pop();
            }
            setNiveauCompetence([...niveauCompetenceTmp, newNiveauCompetence]);
        }
    }

    /**
     * Modifie la valeur du state "selectedCompetences" à la modification des choix 
     * de compétences de l'utilisateur
     * @param comp 
     */
    const modifySelectedCompetence = (comp: any) => {
        if (selectedCompetences.length == 0) {
            setSelectedCompetences([...selectedCompetences, ...comp.detail.value]);
        } else {
            // on vide la liste du state
            while (selectedCompetences.length > 0) {
                selectedCompetences.pop()
            }
            setSelectedCompetences([...selectedCompetences, ...comp.detail.value]);
        }
    }

    /**
     * Fait un appelle au service pour ajouter une compétences à la bdd
     */
    const ajoutPeronne = (e: React.MouseEvent<HTMLIonButtonElement>) => {
        e.preventDefault();

        let newCompetence: Personne = {
            id: uuidv4(),
            nom: nomPersonne as string,
            niveauCompetence: niveauCompetence
        }
        personneService.addPersonne(newCompetence);
        setNomPersonne("");
    }

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/personnes"></IonBackButton>
                </IonButtons>
                <IonTitle>Ajout Utilisateur</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonList>
                <IonItem>
                    <IonLabel>Nom de la personne: </IonLabel>
                    <IonInput placeholder="Jean..." onIonInput={handleChangeNom} value={nomPersonne}></IonInput>
                </IonItem>

                <IonItem>
                    <IonSelect
                        placeholder="Séléctionner une compétences"
                        multiple={true}
                        compareWith={compareWith}
                        onIonChange={(comp) => modifySelectedCompetence(comp)}>

                        {competences && competences.map((competence) => {
                            return <IonSelectOption key={competence.id} value={competence}>
                                {competence.nom}
                            </IonSelectOption>
                        })}
                    </IonSelect>
                </IonItem>

                {selectedCompetences && selectedCompetences.map((competence) => {

                    return <IonItem key={competence.id}>
                        <IonText>{competence.nom}: </IonText>
                        <IonSelect placeholder="intermédiaire..." onIonChange={(e) => handleNiveauCompetenceChange(e, competence)}>
                            <IonSelectOption value={"DEBUTANT"}>Débutant</IonSelectOption>
                            <IonSelectOption value={"INTERMEDIAIRE"}>Intermédiaire</IonSelectOption>
                            <IonSelectOption value={"EXPERT"}>Expert</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                })}

                <IonButton color="success" onClick={ajoutPeronne}>Ajout</IonButton>
            </IonList>
        </IonContent>
    </IonPage>

}

export default AjoutPersonne;