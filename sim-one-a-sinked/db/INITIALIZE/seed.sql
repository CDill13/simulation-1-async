--------------------------------------------
--------------------------------------------
--UNCOMMENT THIS SHIT TO MAKE MAGIC HAPPEN--
--------------------------------------------
--------------------------------------------

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    shelf_id VARCHAR(1),
    bin_id VARCHAR(1),
    product_name VARCHAR(32),
    price VARCHAR(32)
)


INSERT INTO products (shelf_id, bin_id, product_name)
VALUES
    ('A', '1', null),
    ('A', '2', null),
    ('A', '3', null),
    ('A', '4', null),
    ('A', '5', null),
    ('B', '1', null),
    ('B', '2', null),
    ('B', '3', null),
    ('B', '4', null),
    ('B', '5', null),
    ('C', '1', null),
    ('C', '2', null),
    ('C', '3', null),
    ('C', '4', null),
    ('C', '5', null),
    ('D', '1', null),
    ('D', '2', null),
    ('D', '3', null),
    ('D', '4', null),
    ('D', '5', null);