import { Sequelize } from "sequelize";

class dbRepository {
    constructor(private database) {
      this.database = database;
    }
  
    // Retrieve a user by their ID
    findById(id) {
      return this.database.query(`SELECT * FROM users WHERE id = ?`, [id]);
    }
  
    // Add a new user
    create(user) {
      return this.database.query(`INSERT INTO users (username, email) VALUES (?, ?)`, [user.username, user.email]);
    }
  
    // Update an existing user
    update(user) {
      return this.database.query(`UPDATE users SET username = ?, email = ? WHERE id = ?`, [user.username, user.email, user.id]);
    }
  
    // Delete a user
    delete(id) {
      return this.database.query(`DELETE FROM users WHERE id = ?`, [id]);
    }
  }
  