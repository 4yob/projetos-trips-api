CREATE DATABASE travels_db

\c travels_db

CREATE TABLE trips (
	id SERIAL PRIMARY KEY,
    photo TEXT,
    title VARCHAR(100),
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP
);

INSERT INTO trips (photo, title, start_date, end_date, created_at) VALUES
('paris.jpg', 'Aventura em Paris', '2023-07-15', '2023-07-25', NOW()),
('ipanema.jpg', 'Vibras Cariocas', '2024-01-10', '2024-01-20', NOW()),
('kyoto.jpg', 'Explorando Kyoto', '2023-11-05', '2023-11-18', NOW()),
('macchupicchu.jpg', 'Mistérios Incas', '2024-03-22', '2024-03-30', NOW()),
('santorini.jpg', 'Charme Grego', '2023-09-01', '2023-09-08', NOW()),
('newyork.jpg', 'Aventura na Big Apple', '2024-05-12', '2024-05-20', NOW()),
('barcelona.jpg', 'Cores da Catalunha', '2023-08-02', '2023-08-11', NOW()),
('islandia.jpg', 'Terra do Gelo e Fogo', '2024-02-18', '2024-02-26', NOW()),
('roma.jpg', 'História Romana', '2023-10-10', '2023-10-17', NOW()),
('bangkok.jpg', 'Encantos Tailandeses', '2024-04-05', '2024-04-15', NOW());