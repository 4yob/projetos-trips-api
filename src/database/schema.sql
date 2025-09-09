CREATE DATABASE trips_db;

\c trips_db;

CREATE TABLE trips (
	id SERIAL PRIMARY KEY,
    photo TEXT,
    title VARCHAR(100),
    place VARCHAR(100),
    country VARCHAR(100),
    start_date VARCHAR(10),
    end_date VARCHAR(10),
    created_at TIMESTAMP
);

INSERT INTO trips (photo, title, place, country, start_date, end_date, created_at) VALUES
('paris.jpg', 'Aventura em Paris', 'Paris', 'FR', '15-07-2021', '25-07-2021', NOW()),
('ipanema.jpg', 'Vibras Cariocas', 'Ipanema', 'BR', '10-01-2021', '20-01-2021', NOW()),
('kyoto.jpg', 'Explorando Kyoto', 'Kyoto', 'JP', '05-11-2022', '18-11-2022', NOW()),
('macchupicchu.jpg', 'Mistérios Incas', 'Machu Picchu', 'PE', '22-03-2022', '30-03-2022', NOW()),
('santorini.jpg', 'Charme Grego', 'Santorini', 'GR', '01-09-2023', '08-09-2023', NOW()),
('newyork.jpg', 'Aventura na Big Apple', 'Nova York', 'US', '12-05-2023', '20-05-2023', NOW()),
('barcelona.jpg', 'Cores da Catalunha', 'Barcelona', 'ES', '02-08-2024', '11-08-2024', NOW()),
('islandia.jpg', 'Terra do Gelo e Fogo', 'Islândia', 'IS', '18-02-2024', '26-02-2024', NOW()),
('roma.jpg', 'História Romana', 'Roma', 'IT', '10-10-2025', '17-10-2025', NOW()),
('bangkok.jpg', 'Encantos Tailandeses', 'BangKok', 'TH', '05-04-2025', '15-04-2025', NOW());