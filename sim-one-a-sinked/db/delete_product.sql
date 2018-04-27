UPDATE products
SET product_name = null,
    price = null
WHERE shelf_id = $1 AND bin_id = $2;