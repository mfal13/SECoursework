import mysql from "mysql2/promise";
import City from "../models/city.mjs";
import Country from "../models/country.mjs";

export default class DatabaseService {
    conn;

    constructor(conn) {
        this.conn = conn;
    }

    /* Establish database connection and return the instance */
    static async connect() {
        const conn = await mysql.createConnection({
            host: process.env.DATABASE_HOST || "localhost",
            user: "user",
            password: "password",
            database: "world",
        });

        return new DatabaseService(conn);
    }

    /* Get a list of all cities */
    async getCities() {
        try {
            // Fetch cities from database
            const data = await this.conn.execute("SELECT * FROM `city`");
            return data;
        } catch (err) {
            // Handle error...
            console.error(err);
            return undefined;
        }
    }

    /* Get a particular city by ID, including country information */
    async getCity(cityId) {
        const sql = `
        SELECT city.*, country.Name AS Country, country.Region, country.Continent, country.Population as CountryPopulation
        FROM city
        INNER JOIN country ON country.Code = city.CountryCode
        WHERE city.ID = ${cityId}
    `;
        const [rows, fields] = await this.conn.execute(sql);
        /* Get the first result of the query (we're looking up the city by ID, which should be unique) */
        const data = rows[0];
        const city = new City(
            data.ID,
            data.Name,
            data.CountryCode,
            data.District,
            data.Population
        );
        const country = new Country(
            data.Code,
            data.Country,
            data.Continent,
            data.Region,
            data.CountryPopulation
        );
        city.country = country;
        return city;
    }

    /* Delete a city by ID */
    async removeCity(cityId) {
        const res = await this.conn.execute(
            `DELETE FROM city WHERE id = ${cityId}`
        );
        console.log(res);
        return res;
    }

    /* Get a particular country by its ID */
    async getCountry(countryId) {
        try {
            // Fetch the country from the database
            const sql = `SELECT * FROM \`country\` WHERE \`Code\` = '${countryId}'`;
            const [rows, fields] = await this.conn.execute(sql);
            
            // Check if the country exists
            if (rows.length === 0) {
                return null; // Country not found
            }

            // Extract data for the country
            const data = rows[0];
            const country = new Country(
                data.Code,
                data.Name,
                data.Continent,
                data.Region,
                data.Population
            );

            return country;
        } catch (err) {
            // Handle error...
            console.error(err);
            return null;
        }
    }
    
   /* Get a list of countries */
    async getCountries() {
        try {
            // Fetch countries from the database
            const data = await this.conn.execute("SELECT * FROM `country`");
            return data;
        } catch (err) {
            // Handle error...
            console.error(err);
            return undefined;
        }
    }
}
