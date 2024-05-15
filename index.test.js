const request = require('supertest');
const {app,server} = require('./index');
const process = require('node:process');
const db = require('./db');


beforeAll(() => {
    
});

afterAll( (done) => {
  server.close(done);
  db.close();
  done();
});

test('TextEncoder is globally defined in Jest', () => {
    expect(global.TextEncoder).toBeDefined();
  });

it('returns a list of users', (done) => {
        request(app).post('/user')
        //request(app).post('/user')
        //.set('Accept','application/json')
        //.set('Content-Type','application/json')
        .send({"name":"john", "email":"john@gmail.com", "age":"14"})
        .end( (err,res) => {
            const {name, email, age} = res.body;
            expect({"name":name, "email":email, "age":age}).toEqual({"name":"john", "email":"john@gmail.com", "age":14});
            if(err) done(err);
            done();
        });
        //.then( (msg) => console.log("Then: " + msg))
       // .catch( (error) => console.log(error));
        /*.expect( (res)=>{
            res.body.name = "John";
            res.body.email = "john@gmail.com";
            res.body.age = 14;
        })
        .end( (err,res) => {
            if(err) return done(err);
            return done();
        },15000);*/
   // const {name, email, age} = await response.body;
   // expect({"name":name, "email":email, "age":age}).toEqual({"name":"john", "email":"john@gmail.com", "age":14});

});

