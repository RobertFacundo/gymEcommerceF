export type TranslatedText = {
    en: string;
    es: string;
};

export interface Category {
    slug: string;
    name: TranslatedText;
    description: TranslatedText;
    image: string;
}