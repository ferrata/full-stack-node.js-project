CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name TEXT,
    surname TEXT,
    email TEXT,
    date_of_birth DATE,
    PRIMARY KEY(ID)
);
INSERT INTO users (name, surname, email, date_of_birth)
VALUES (
        "Alexander",
        "Smith",
        "a.smith@mail.com",
        "1990-10-29"
    );
CREATE TABLE events (
    id INT NOT NULL AUTO_INCREMENT,
    name TEXT,
    date_starts DATETIME,
    date_ends DATETIME,
    event_img_url text,
    PRIMARY KEY(ID)
);
-- select id, name, surname, email, DATE_FORMAT(date_of_birth, '%Y-%m-%d') as date_of_birth, TIMESTAMPDIFF(YEAR,date_of_birth,CURDATE()) as age from users
-- CREATE TABLE eventsevents (
--     id INT NOT NULL AUTO_INCREMENT,
--     name TEXT,
--     date_starts DATE,
--     date_ends DATE,
--     PRIMARY KEY(ID)
-- );
INSERT INTO events (name, date_starts, date_ends)
VALUES (
        "Istorijos miestui ir pasauliui",
        "2023-04-06 18:00:00",
        "2023-04-06 22:00:00"
    );
-- delete from events where id <> 0
-- select * from events
CREATE TABLE event_participants (
    event_id INT NOT NULL,
    user_id INT NOT NULL,
    date_of_registration DATETIME NOT NULL,
    PRIMARY KEY(event_id, user_id)
);
-- select * from users; select * from events
-- insert into event_participants (event_id, user_id, date_of_registration)
-- values (1, 1, "2023-03-23 20:00");
-- select users., event_participants.date_of_registration from users inner join event_participants on users.id = event_participants.user_id where event_participants.event_id = 4
-- select from users
create table admin (
    id int not null auto_increment,
    name text,
    password text,
    primary key(id)
);