# Software Engineering Backlog for Population Information System
Project: Population Information System
Team: 2 Cybersecurity Students, 1 Software Developer
Methodology: Scrum
Tools: PUG, Node.js, Express.js, SQL Database, Git, GitHub, Docker
Database: Provided SQL database containing population information -  
Requirements:
Functional:
# Data Access:
	All countries in the world, ordered by population (largest to smallest).
	All countries in a continent, ordered by population (largest to smallest).
	All countries in a region, ordered by population (largest to smallest).
	Top N populated countries in the world (N provided by user).
	Top N populated countries in a continent (N provided by user).
	Top N populated countries in a region (N provided by user).
	All cities in the world, ordered by population (largest to smallest).
	All cities in a continent, ordered by population (largest to smallest).
	All cities in a region, ordered by population (largest to smallest).
	All cities in a country, ordered by population (largest to smallest).
	All cities in a district, ordered by population (largest to smallest).
	Top N populated cities in the world (N provided by user).
	Top N populated cities in a continent (N provided by user).
	Top N populated cities in a region (N provided by user).
	Top N populated cities in a country (N provided by user).
	Top N populated cities in a district (N provided by user).
	All capital cities in the world, ordered by population (largest to smallest).
	All capital cities in a continent, ordered by population (largest to smallest).
	All capital cities in a region, ordered by population (largest to smallest).
	Top N populated capital cities in the world (N provided by user).
	Top N populated capital cities in a continent (N provided by user).
	Top N populated capital cities in a region (N provided by user).
	Population of people, people living in cities, and people not living in cities in each continent.
	Population of people, people living in cities, and people not living in cities in each region.
	Population of people, people living in cities, and people not living in cities in each country.
	Population of the world.
	Population of a continent.
	Population of a region.
	Population of a country.
	Population of a district.
	Population of a city.
	Number of people speaking specific languages (Chinese, English, Hindi, Spanish, Arabic), ordered by number (largest to smallest) with percentage of world population.
	Country report with: Code, Name, Continent, Region, Population, Capital.

# User Interface:
	Responsive web application accessible on different devices.
	User-friendly interface for selecting and displaying data.
	Search functionality for countries, cities, and languages.
	Sorting and filtering options for data visualization.
	Downloadable reports in various formats (CSV, PDF).

# Non-Functional:

Performance - Fast response times for data retrieval and display.
Security - Secure user authentication, data access control, and protection against unauthorized data modification.

Scalability - Ability to handle increasing data volume and user traffic.
Maintainability - Easy to understand and update codebase with proper documentation.

# Prioritization:
# 1.	Core functionalities:
	Accessing basic population data (world, continent, region, country, district, city).
	Top N countries/cities reports.
	Country report.
# 2.	Advanced functionalities:
	Capital city reports.
	Population distribution reports.
	Language speaker statistics.
# 3.	Enhancements:
	Downloadable reports.
	Search and filtering functionalities.
	Additional data visualization options.

4.	Implement City Report and Capital City Report features.
5.	Implement Population Report feature with detailed information.
6.	Secure application with login functionality and access control.
7.	Implement functionality to add new datasets securely.
8.	Enhance user interface and data visualization options.
9.	Implement additional relevant functionalities (ideate with team and stakeholders).

# Task Allocation:
Sprint 1: 
The aim of this sprint is to check that the project workflow is set-up for the team. You may choose to meet some of the feature requirements during this review point, but it is not as necessary. 
The following must be in place:  
	GitHub project for coursework set-up 
	Product Backlog created § Dockerfile for project set-up and works 
	Correct branches for GitFlow workflow created - includes `master`, `develop`, and `release` branches 
	First release created on GitHub § Code of Conduct defined

Sprint 2:
The aim of this sprint is to check that task management is set-up and that the initial requirements gathering has taken place via user stories and use cases. You should have completed at least 25% of the work for the project at this point based on your own estimates.
The following must be in place: 
	Issues being used on GitHub 
	Tasks defined as user stories 
	Project integrated with Zube.io 
	Kanban/Project Board being used § Sprint Boards being used 
	Full use cases defined 
	Use case diagram created
Sprint 3:
The aim of this Sprint is to have a working prototype of your application, showing good progress in the technical deliverables of the project, and providing a proof of concept for your idea.
The following must be in place: 
	Suitable unit tests defined 
	Suitable integration tests defined 
	Tests running on Travis CI § Updated task board of user stories showing progress in the technical deliverables 
	Github repository showing work from all members of the team 
o	Implementation progress towards final version of application: Database design o Database implementation with pre-filled data 
o	 HTML pages available generated from PUG, perhaps with some static content 
o	 At least some dynamic content being pulled from your database to your templates via Pug - concentrate on views of your data
Sprint 4:
The aim of this Sprint is to deliver the final version of your application. The final version of your application will be pulled automatically from GitHub. The final submission will be assessed based on the following criteria.
The following must be in place: 
	Overall application quality and success at meeting the aims set out during the design process 
	Metrics from GitHub: used to assess individual contribution 
	Application deployable using a docker-compose file, data can be provided separately 
	Final version of the task board and project requirements met 
	Deployment working 
	Bug reporting system set-up 
	A group report (maximum 10 pages), where you need to present your work as a team
Scope:
The project scope remains focused on developing a secure and user-friendly population information system with enhanced reporting capabilities and data management options. Additional functionalities will be considered based on team capacity and stakeholder input, ensuring they align with the core project goals.

This backlog is a starting point and will be modified and refined throughout the development process based on team progress, stakeholder feedback, and emerging needs.

# Personas for Population Information System Project
## 1.	Data Analyst (Primary User):
	Name: Lisa Haskel
	Age: 30
	Occupation: Data Analyst for a government agency
	Technical Skills: Proficient in data analysis tools and familiar with SQL queries
	Needs: Efficient access to accurate and detailed population data by country, region, city, and other geographical levels. Needs to generate reports with various breakdowns (urban/rural, language distribution) for policy analysis and decision-making.
	Wants: User-friendly interface for data exploration, customizable reports, and ability to download data in different formats.
	Concerns: Data accuracy and security, system performance and reliability, ease of learning and using the system.

## 2.	Researcher (Secondary User):
	Name: Dr. Arturo 
	Age: 45
	Occupation: Demographer at a research university
	Technical Skills: Advanced knowledge of statistics and demographic analysis
	Needs: In-depth population data for specific regions and countries, including historical trends and projections. Needs to access and analyse data by various demographic characteristics (age, gender, ethnicity).
	Wants: Powerful data filtering and querying options, ability to visualize data trends, and export data for further analysis.
	Concerns: Data quality and consistency, ability to perform complex data manipulation, system compatibility with existing research tools.

## 3.	Policymaker (Indirect User):

	Name: Charles Clarke
	Age: 50
	Occupation: Member of the government responsible for formulating policies
	Technical Skills: Limited technical knowledge relies on advisors for data analysis.
	Needs: Summary information about population demographics and trends to inform policy decisions related to healthcare, education, infrastructure development, etc.
	Wants: Clear and concise reports with key findings and visualizations, easy access to relevant data without requiring technical expertise.
	Concerns: Data reliability and credibility, trustworthiness of the system as a source of information for policymaking.

## 4.	IT Security Specialist (Internal User):

	Name: Andrea Matthews
	Age: 29
	Occupation: IT Security Specialist for the organization responsible for the system
	Technical Skills: Expert in cybersecurity and system administration
	Needs: Secure deployment and maintenance of the system, ensuring data protection and user access control.
	Wants: Clearly defined security protocols, automated tools for monitoring and logging system activity, easy integration with existing security infrastructure.
	Concerns: Potential vulnerabilities and security risks, compliance with data privacy regulations, ability to quickly respond to security incidents.

Understanding the various user requirements and expectations for the population information system may be initiated by using these personas. They may be used to prioritise features, direct the development process, and guarantee that the finished product is usable and accessible to the target market.
