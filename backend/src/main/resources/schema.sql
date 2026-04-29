CREATE TABLE IF NOT EXISTS employee (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL
);
