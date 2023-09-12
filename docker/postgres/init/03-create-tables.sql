CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    userLevel VARCHAR(255) NOT NULL,
);

GRANT ALL PRIVILEGES ON user TO ticketsuser;