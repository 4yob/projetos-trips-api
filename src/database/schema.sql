CREATE DATABASE trips_db;

\c trips_db;

CREATE TABLE trips (
	id SERIAL PRIMARY KEY,
    photo TEXT,
    title VARCHAR(100),
    start_date VARCHAR(10),
    end_date VARCHAR(10),
    created_at TIMESTAMP
);

INSERT INTO trips (photo, title, start_date, end_date, created_at) VALUES
('paris.jpg', 'Aventura em Paris', '15-07-2021', '25-07-2021', NOW()),
('ipanema.jpg', 'Vibras Cariocas', '10-01-2021', '20-01-2021', NOW()),
('kyoto.jpg', 'Explorando Kyoto', '05-11-2022', '18-11-2022', NOW()),
('macchupicchu.jpg', 'Mistérios Incas', '22-03-2022', '30-03-2022', NOW()),
('santorini.jpg', 'Charme Grego', '01-09-2023', '08-09-2023', NOW()),
('newyork.jpg', 'Aventura na Big Apple', '12-05-2023', '20-05-2023', NOW()),
('barcelona.jpg', 'Cores da Catalunha', '02-08-2024', '11-08-2024', NOW()),
('islandia.jpg', 'Terra do Gelo e Fogo', '18-02-2024', '26-02-2024', NOW()),
('roma.jpg', 'História Romana', '10-10-2025', '17-10-2025', NOW()),
('bangkok.jpg', 'Encantos Tailandeses', '05-04-2025', '15-04-2025', NOW());