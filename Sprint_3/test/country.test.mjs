import Country from './Country';

describe('Country class', () => {
  it('should create a new instance of Country with provided properties', () => {
    const code = 'USA';
    const name = 'United States';
    const continent = 'North America';
    const region = 'Western Europe';
    const population = 328200000;

    const country = new Country(code, name, continent, region, population);

    expect(country.code).toBe(code);
    expect(country.name).toBe(name);
    expect(country.continent).toBe(continent);
    expect(country.region).toBe(region);
    expect(country.population).toBe(population);
  });
});
