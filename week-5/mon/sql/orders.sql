-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
CREATE TABLE orders(
  order_id SERIAL PRIMARY KEY,
  person_id UNIQUE INTEGER,
  product_name TEXT,
  product_price FLOAT,
  quantity INTEGER
);

-- Add 5 orders to the orders table.
INSERT INTO orders(person_id, product_name, product_price, quantity)
VALUES(1, 'laser', 50.99, 2),
(1, 'enunciator', 5000, 1),
(2, 'VS500', 100, 1),
(3, 'Xbox', 50, 1),
(4, 'PS4', 500, 1);

-- Make orders for at least two different people.

-- person_id should be different for different people.

-- Select all the records from the orders table.
SELECT * FROM orders;

-- Calculate the total number of products ordered.
SELECT SUM(quantity) FROM orders;

-- Calculate the total order price.
SELECT SUM(product_price) FROM orders;

-- Calculate the total order price by a single person_id.
SELECT SUM(product_price) FROM orders
WHERE person_id = 1;