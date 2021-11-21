CREATE TABLE users(
    user_id INT IDENTITY(1, 1) PRIMARY KEY,
    email VARCHAR(30),
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    password VARCHAR(100),
);