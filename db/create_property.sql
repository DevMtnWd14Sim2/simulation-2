INSERT INTO properties (name, user_id, description, address, city, state, zip, image_url, loan_amnt, month_mortgage, desired_rent)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);