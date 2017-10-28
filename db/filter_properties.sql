SELECT * FROM properties
    WHERE desired_rent > $1
    ORDER BY desired_rent;