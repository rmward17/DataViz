-- 1. What is the average cost to rent a film in the Sakila stores?
SELECT AVG(rental_rate)
FROM film;
-- 2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? Most expensive?
SELECT rating, AVG(rental_rate)
FROM film
GROUP BY rating
ORDER BY AVG(rental_rate);
-- 3. How much would it cost to replace all the films in the database?
SELECT SUM(replacement_cost)
FROM film;
-- 4. How much would it cost to replace all the films in each ratings category?
SELECT rating, SUM(replacement_cost)
FROM film
GROUP BY rating;
-- 5. How long is the longest movie in the database? The shortest?
SELECT title, MIN(length)
FROM film
GROUP BY title
ORDER BY MIN(length);

-- Select count of actors first names in descending order
SELECT first_name, count(first_name)
FROM actor
GROUP BY first_name
ORDER BY count(first_name) DESC;
-- Select the average duration of movies by rating
SELECT rating, AVG(length)
FROM film
GROUP BY rating;
-- Select top ten replace costs for the length of the movie
SELECT replacement_cost, length
FROM film
ORDER BY replacement_cost DESC
LIMIT(10);
-- Select the count of countries
SELECT count(country)
FROM country;
-- # cities in each country
SELECT count(city.city),
country.country
FROM city
INNER JOIN country
ON (city.country_id = country.country_id)
GROUP BY country.country
ORDER BY count(city.city) DESC;

-- 1. Retreive the latest rental for each customer's first and last name and email address. 
SELECT DISTINCT rental.last_update, customer.first_name,
	customer.last_name,
	customer.email
FROM rental
INNER JOIN customer
ON (rental.customer_id = customer.customer_id);

-- 2. Retrieve the latest rental date for each title. 
SELECT DISTINCT ON (film.title)
	film.title,
	rental.rental_date
FROM rental
INNER JOIN inventory
ON (rental.inventory_id = inventory.inventory_id)
INNER JOIN film
ON (inventory.film_id = film.film_id);

-- Bonus:
-- Query 2 only returned 958 movies, which means 42 movies are not being rented. 
-- We know that there are 1,000 movies in the `film` table. 
-- Retrieve the film titles of the 42 movies that are not in the `inventory` table. 
SELECT title, film_id
FROM film
WHERE film_id NOT IN (SELECT film_id FROM inventory);
