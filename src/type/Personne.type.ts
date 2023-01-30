export interface NiveauCompetence{
    idCompetence: string;
    nomCompetence: string;
    niveau: string;
}

export interface Personne{
    id: string;
    nom: string;
    niveauCompetence: NiveauCompetence[];
}