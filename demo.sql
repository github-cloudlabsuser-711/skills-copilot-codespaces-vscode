-- Create a table for 5 products with product names and prices
CREATE TABLE products(
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    product_price DECIMAL(10,2)
);

-- Insert 5 records into the table
INSERT INTO products(product_id, product_name, product_price) VALUES
(1, 'Product 1', 100.00),
(2, 'Product 2', 200.00),
(3, 'Product 3', 300.00),
(4, 'Product 4', 400.00),
(5, 'Product 5', 500.00);