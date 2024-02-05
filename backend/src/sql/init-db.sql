-- Create the Users table
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    password TEXT NOT NULL
);

-- Insert sample data into the Users table
INSERT INTO Users ( username, firstName, lastName, password) VALUES
    ( 'Echo', 'Echo', 'Martinez', 'nono'),
    ( 'Yuraj', 'Yuraj', 'Kharche', 'lolo' ),
    ( 'Billy', 'Billy', 'TheButcher', 'yoyo'),
    ('Natalia', 'Natalia' , 'Sharp' , 'momo' );

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

