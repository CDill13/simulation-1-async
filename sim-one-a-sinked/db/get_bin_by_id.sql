SELECT shelf_id, bin_id, product_name, price 
FROM products
WHERE shelf_id = $1 AND bin_id = $2;