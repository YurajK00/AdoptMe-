-- Create the Users table
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    firstName TEXT ,
    lastName TEXT ,
    password TEXT NOT NULL,
    confirmedPassword TEXT NOT NULL,
    email TEXT NOT NULL
);

-- Insert sample data into the Users table
INSERT INTO Users ( username, firstName, lastName, email, password , confirmedPassword) VALUES
    ( 'Echo', 'Echo', 'Martinez', 'echo@gmail.com', 'nono','nono'),
    ( 'Yuraj', 'Yuraj', 'Kharche','yuraj@gmail.com', 'lolo','lolo' ),
    ( 'Billy', 'Billy', 'TheButcher','yuraj@gmail.com', 'yoyo', 'yoyo'),
    ('Natalia', 'Natalia' , 'Sharp' , 'yuraj@gmail.com','momo','momo' );

-- Create the Articles table
CREATE TABLE IF NOT EXISTS Articles (
    article_id INTEGER NOT NULL PRIMARY KEY,
    article_content TEXT NOT NULL,
    article_title TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    author_name VARCHAR(255),
    likes INTEGER,
    dislikes INTEGER,
    date_published DATE NOT NULL,
    image_path VARCHAR(255),
    FOREIGN KEY (author_id) REFERENCES Users(id)
);

-- Insert sample data into the Articles table
INSERT INTO Articles (article_content, article_title, author_name, author_id, likes, dislikes, date_published, image_path) VALUES (
   '<p><b>Introduction:</b><br> Meet Dorothy, a charming yellow cat with an energetic personality. I found Dorothy on the streets, and she quickly won my heart with her playful nature and affectionate demeanor. Despite my deep attachment to her, my frequent relocations prevent me from providing the stable home she deserves. As a result, I am reaching out to you, dear readers, in the hopes of finding a loving forever home for this delightful feline companion.</p>',
   'Adoption of cat',
   'Natalia Sharp',
   1, 0, 0, '2024-01-26', '/src/images/YellowCat.png'
);

-- Create the Publish table
CREATE TABLE IF NOT EXISTS Publish (
    publisher_id INTEGER NOT NULL PRIMARY KEY,
    username TEXT NOt Null,
    article_content TEXT NOT NULL,
    article_title TEXT NOT NULL,
    article_id INTEGER NOT NULL,
    FOREIGN KEY (publisher_id) REFERENCES Users(id),
    FOREIGN KEY (article_id) REFERENCES Articles(article_id)
);

-- Insert sample data into the Publish table
INSERT INTO Publish (publisher_id,username, article_content, article_title, article_id) VALUES (
  1, 'Echo' , 'Whats on your Mind today', 'Your Title', 1
),
(
  2, 'Yuraj' , 'Whats on your Mind today', 'Your Title', 1
),
(3,
   'Billy' , 'Whats on your Mind today', 'Your Title', 1
),
(4,
   'Natalia' , 'Whats on your Mind today', 'Your Title', 1
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
    comment_id INTEGER NOT NULL PRIMARY KEY,
    article_id INTEGER NOT NULL,
    comment_content VARCHAR(249) NOT NULL,
    commentor_id INTEGER NOT NULL,
    likes INTEGER,
    dislikes INTEGER,
    date_posted VARCHAR(50) NOT NULL,
    nestedComment_content VARCHAR(249),
    nestedComment_id INTEGER,
    FOREIGN KEY (commentor_id) REFERENCES users(id)
);


INSERT INTO comments (article_id, comment_content, commentor_id, likes, dislikes, date_posted, nestedComment_content, nestedComment_id) VALUES
    (1,'I love the rabbit', 1, 23, 0, '2001-03-23', 'Me, too!', 2),
    (2,'Such a cute turtle!', 1, 219, 39, '04/03/2024', 'Are you serious?', 21);

