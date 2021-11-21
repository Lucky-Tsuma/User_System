CREATE TABLE tasks(
    task_id INT IDENTITY(1, 1) PRIMARY KEY,
    project_id INT,
    task_name VARCHAR(100),
    task_description VARCHAR(250),
    FOREIGN KEY(project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);