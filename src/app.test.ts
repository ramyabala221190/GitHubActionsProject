import request from 'supertest';
import express from 'express';
import { Server } from 'http';

// Import your app directly OR create a function to start it
// For simplicity, we'll recreate the app here
const app = express();

app.get('/hello', (req, res) => {
  res.send('Express application running on port 3000');
});

describe('Express App Test Suite', () => {
  let server: Server;

  // Start server before tests
  beforeAll((done) => {
    server = app.listen(4000, () => {
      console.log('Test server running on port 4000');
      done();
    });
  });

  // Close server after tests
  afterAll((done) => {
    server.close(done);
  });

  test('GET /hello should return status 200', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
  });

  test('GET /hello should return correct message', async () => {
    const response = await request(app).get('/hello');
    expect(response.text).toBe('Express application running on port 3000');
  });

  test('GET /unknown should return 404', async () => {
    const response = await request(app).get('/unknown');
    expect(response.status).toBe(404);
  });
});
