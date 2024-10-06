import * as request from 'supertest';
import app = require('./app');

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({ message: 'Hello World!' });
        done();
      });
  });
});