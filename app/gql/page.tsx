import { gql } from "@apollo/client";
import countriesGqlClient from "../../countries-apollo-client";
import styles from "../../styles/Article.module.css";
import { TCountry } from "../../types";

const getCountries = async (): Promise<{ data: { countries: TCountry[]; }; }> => {
    return countriesGqlClient.query({
        query: gql`
            query Countries {
                countries {
                    code
                    name
                    emoji
                }
            }
        `,
    });
};

const Countries = async () => {
    const { countries } = (await getCountries()).data;
    console.log(countries.slice(0, 6));

    return (
        <>
            <h3>Fetched from <a href="https://countries.trevorblades.com">https://countries.trevorblades.com</a> GraphQL API</h3>
            <div className={styles.grid}>
                {countries.slice(0, 6).map((country: any) => (
                    <div key={country.code} className={styles.card}>
                        <h3>{country.name}</h3>
                        <p>{country.code} - {country.emoji}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Countries;
