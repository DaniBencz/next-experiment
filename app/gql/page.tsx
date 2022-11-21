'use client';

import { useState, useEffect } from "react";
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

const click = () => {
    console.log('click');
};

const Countries = () => {
    const [countries, setCountries] = useState<TCountry[]>([]);

    useEffect(() => {
        console.log('using effect');
        getCountries()
            .then((res) => {
                const { countries } = res.data;
                setCountries(countries);
            });

        return () => {
            console.log('cleaning up');
        };
    }, []);

    if (countries.length === 0) return <p>Loading countries...</p>;
    console.log(countries.slice(0, 6));

    return (
        <>
            <h3>Fetched from <a href="https://countries.trevorblades.com">countries.trevorblades.com</a> GraphQL API</h3>
            <div className={styles.grid}>
                {countries.slice(0, 6).map((country: any) => (
                    <div key={country.code} onClick={click} className={styles.card}>
                        <h3>{country.name}</h3>
                        <p>{country.code} - {country.emoji}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Countries;
