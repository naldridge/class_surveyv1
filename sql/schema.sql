CREATE TABLE rankings (
    id serial PRIMARY KEY,
    ranking_title TEXT NOT NULL
);

CREATE TABLE topics (
    id serial PRIMARY KEY,
    topic_name TEXT,
    topic_score INTEGER REFERENCES rankings(id) DEFAULT 6
);