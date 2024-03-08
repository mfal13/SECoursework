

# Class Diagram

## Classes:
- User
- Country
- City
- Report
- Dataset

## Relationships👫:
1. User -* Generates (Report)
1. User -* Filters (Country, City)
1. Country -* Has Many (City)
1. Dataset -* Provides Data For (Report)
1. Country - Has Attribute (Population)
1. City - Has Attribute (Population)

## Description:

- The class diagram represents the core entities and relationships within the Population Information System.
- The User class represents a system user who can generate reports and filter data by country or city.
- The Country class represents a country entity with attributes like population.
- The City class represents a city entity within a country, also with a population attribute.
- The Report class represents a generated report containing population information based on user selections.
- The Dataset class represents a data source that provides information for report generation.

## Relationships👫:

- A User can generate multiple reports (-* Generates).
- A User can filter data for multiple countries or cities (-* Filters).
- A Country can have many City instances within its borders (-* Has Many).
- A Dataset can provide data for multiple reports (-* Provides Data For).
- Country and City classes have attributes like Population.

# This⏫ is only a guide of steps to complete our class diagram
