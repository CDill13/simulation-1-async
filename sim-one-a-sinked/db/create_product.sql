UPDATE products
SET product_name = $1,
    price = $2
WHERE shelf_id = $3 AND bin_id = $4;