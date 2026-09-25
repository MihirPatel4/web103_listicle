import pool from './database.js';
import './dotenv.js';
import mobData from '../data/mobs.js';

const createMobsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS mobs;

    DROP TYPE IF EXISTS behavior_type;

    CREATE TYPE behavior_type AS ENUM ('Hostile', 'Neutral', 'Passive');

    CREATE TABLE IF NOT EXISTS mobs (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      health INTEGER NOT NULL,
      behavior behavior_type NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log('Mobs table created successfully');
  }
  catch (err) {
    console.error('Error creating mobs table', err);
  }
}

const seedMobsTable = async () => {
  await createMobsTable();

  mobData.forEach((mob) => {
    const insertQuery = {
      text: 'INSERT INTO mobs (name, health, behavior, image) VALUES ($1, $2, $3, $4)'
    };

    const values = [mob.name, mob.health, mob.behavior, mob.image];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('Error inserting mob', err);
        return;
      }
      console.log(`${mob.name} added successfully`);
    });
  });
};

seedMobsTable();