-- HIDE AND SEEK
-- 1. Create a new table called wordassociation
CREATE TABLE wordassociation (
	author INT NOT NULL,
	word1 VARCHAR NOT NULL,
	word2 VARCHAR NOT NULL,
	source VARCHAR NOT NULL,
	PRIMARY KEY (author)
);
-- 2. Import data from WordAssociation_AC.csv
SELECT * FROM wordassociation
-- 3. Create a query where word1 = stone
SELECT *
FROM wordassociation
WHERE word1 = 'stone';
-- 4. Create a query that collects all rows in which the author is within the range 0-10
SELECT *
FROM wordassociation
WHERE (author BETWEEN 0 AND 10)
-- 5. Create a query that searches for any rows that have 'pie' in word1 or word2
SELECT *
FROM wordassociation
WHERE (word1 OR word2) = ('pie')