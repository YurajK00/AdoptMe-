-- Create the Users table
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    birthday DATE,
    password TEXT NOT NULL,
    confirmedPassword TEXT NOT NULL,
    email TEXT NOT NULL,
    Introduction TEXT,
    profilePicture TEXT
    
);

-- Insert sample data into the Users table
INSERT INTO Users ( username, firstName, lastName, email, password , confirmedPassword,birthday,Introduction, profilePicture) VALUES
    ( 'Echo', 'Echo', 'Martinez', 'echo@gmail.com', '$2a$10$we.xr5S.l/Ralx0FiGgKoOe62wdwOsmkOBc1vlGN60D.a.7wTplc2','$2a$10$we.xr5S.l/Ralx0FiGgKoOe62wdwOsmkOBc1vlGN60D.a.7wTplc2' , '1990-01-20', 'Hello I am Echo', '/src/lib/image/defaultPP-cat.png'),
    ( 'Yuraj', 'Yuraj', 'Kharche','yuraj@gmail.com', 'lolo','lolo','1990-01-20','Hello I am Yuraj','/src/lib/image/defaultPP-dog.png' ),
    ( 'Billy', 'Billy', 'TheButcher','billy@gmail.com', 'yoyo', 'yoyo','1990-01-20','Hello I am Billy','/src/lib/image/defaultPP-duck.png'),
    ('Natalia', 'Natalia' , 'Sharp' , 'natalia@gmail.com','momo','momo','1990-01-20','Hello I am Natalia' ,'/src/lib/image/defaultPP-hamster.png');

-- Create the Articles table

CREATE TABLE IF NOT EXISTS Articles (
    article_id INTEGER NOT NULL PRIMARY KEY,
    article_content TEXT NOT NULL,
    article_title TEXT NOT NULL,
    author_id INTEGER ,
    author_name TEXT NOT NULL,
    likes INTEGER,
    dislikes INTEGER,
    date_published DATE,
    image_path VARCHAR(255),
    FOREIGN KEY (author_id) REFERENCES Users(id)
   

   
);

-- Insert sample data into the Articles table
INSERT INTO Articles (article_content, article_title, author_name, author_id, likes, dislikes, date_published, image_path) VALUES (
   '<p><b>Introduction:</b><br> Meet Dorothy, a charming yellow cat with an energetic personality. I found Dorothy on the streets, and she quickly won my heart with her playful nature and affectionate demeanor. Despite my deep attachment to her, my frequent relocations prevent me from providing the stable home she deserves. As a result, I am reaching out to you, dear readers, in the hopes of finding a loving forever home for this delightful feline companion.</p>',
   'Adoption of cat',
   'Natalia Sharp',
   1, 0, 0, '2024-01-26', '/src/images/YellowCat.png'
),
    ('test',
    'Adopt a cat from Auckland',
    'Nancy',
    2, 0, 0, "2024-02-06", '/src/images/YellowCat.png'
),

    ('test',
    'Do you want a dog from Hamilton?',
    'Nancy',
    2, 0, 0, "2024-02-06", '/src/images/YellowCat.png'
),

    ('test',
    'Finding a new home for a cute rabbit!',
    'Nancy',
    2, 0, 0, "2024-02-06", '/src/images/YellowCat.png'
),

('test',
    'My life, my rules, my style, my attitude',
    'Nancy',
    2, 0, 0, "2024-02-06", '/src/images/YellowCat.png'
),

('test',
    'Just call me Angel my morning Angel',
    'Nancy',
    2, 0, 0, "2024-02-06", '/src/images/YellowCat.png'
),

('test',
    'One Piece is Peak Fiction',
    'Nancy',
    2, 0, 0, "2024-02-06", '/src/images/YellowCat.png'
);



-- Create the Publish table
-- CREATE TABLE IF NOT EXISTS Publish (
--     publisher_id INTEGER NOT NULL PRIMARY KEY,
--     username TEXT,
--     article_content TEXT NOT NULL,
--     article_title TEXT NOT NULL,
--     FOREIGN KEY (publisher_id) REFERENCES Users(id)
  
-- );

-- -- Insert sample data into the Publish table
-- INSERT INTO Publish (publisher_id,username, article_content, article_title) VALUES (
--   1, 'Echo' , 'Whats on your Mind today', 'Your Title' 
-- ),
-- (
--   2, 'Yuraj' , 'Whats on your Mind today', 'Your Title' 
-- ),
-- (3,
--    'Billy' , 'Whats on your Mind today', 'Your Title'
-- ),
-- (4,
--    'Natalia' , 'Whats on your Mind today', 'Your Title'
-- );

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
    comment_id INTEGER NOT NULL PRIMARY KEY,
    article_id INTEGER, 
    comment_content TEXT,
    commentor_id INTEGER,
    likes INTEGER,
    dislikes INTEGER,
    date_posted VARCHAR(50),
    nestedComment_content VARCHAR(249),
    nestedComment_id INTEGER

  
    );


INSERT INTO comments (article_id, comment_content, commentor_id, likes, dislikes, date_posted, nestedComment_content, nestedComment_id) VALUES
    (1,'I love the rabbit', 1, 23, 0, '2001-03-23', 'Me, too!', 2),
    (2,'Such a cute turtle!', 1, 219, 39, '04/03/2024', 'Are you serious?', 21);




-- Drop the table if it exists
DROP TABLE IF EXISTS likes;

-- Create the likes table
CREATE TABLE likes (
    like_id INTEGER NOT NULL PRIMARY KEY , -- Assuming SQLite, adjust for other databases\
    article_id Integer,
    likes INTEGER DEFAULT 0,
    dislikes INTEGER DEFAULT 0,
    FOREIGN KEY(article_id) REFERENCES Articles(article_id)
);

-- Insert initial values


