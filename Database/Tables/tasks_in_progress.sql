CREATE TABLE tasks_in_progress(
    user_id INT,
    task_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (task_id) REFERENCES tasks(task_id) ON DELETE CASCADE,
    PRIMARY KEY(user_id, task_id)
);