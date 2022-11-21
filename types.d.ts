export type TArticle = {
    id: string,
    title: string,
    excerpt: string,
    body: string;
};

enum TypeName {
    Country = 'Country'
}

type TCountry = {
    __typename?: TypeName.Country,
    code: string,
    name: string,
    emoji: string;
};
