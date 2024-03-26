import City from './City';

describe('City class', () => {
  it('should create a new instance of City with provided properties', () => {
    const id = 1;
    const name = 'New York';
    const countryCode = 'US';
    const district = 'New York';
    const population = 8000000;

    const city = new City(id, name, countryCode, district, population);

    expect(city.id).toBe(id);
    expect(city.name).toBe(name);
    expect(city.countryCode).toBe(countryCode);
    expect(city.district).toBe(district);
    expect(city.population).toBe(population);
  });
});