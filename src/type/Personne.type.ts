export interface NiveauCompetence{
    idCompetence: string;
    niveau: string;
}

export interface Personne{
    id: string;
    nom: string;
    niveauCompetence: NiveauCompetence[];
}