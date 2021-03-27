CREATE TABLE IF NOT EXISTS public.characters
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    pic VARCHAR(2048) UNIQUE NOT NUll,
    homeworld VARCHAR(50),
    votes INT
);
