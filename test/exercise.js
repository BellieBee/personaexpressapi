import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index'
import faker from 'faker'

chai.use(chaiHttp)

describe('GET /api/personas', () => {
    it('should GET all personas', (done) => {
        chai.request(app)
            .get('/api/personas')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).be.a('array')
                expect(res.body).not.have.lengthOf(0)
                done()
            })
    })
})

describe('GET /api/persona/:id', () => {
    it('should GET a persona', (done) => {
        chai.request(app)
            .get('/api/personas/1')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.property('persona')
                expect(res.body.persona.id).to.equal(1)
                done()
            })
    })
})

describe('POST /api/personas', () => {
    it('should POST a new persona', (done) => {
        let persona = {
            title: faker.lorem.word(),
            description: faker.lorem.text(),
            img: faker.image.sports()
        }
        chai.request(app)
            .post('/api/personas')
            .send(persona)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).be.a('object')
                expect(res.body).to.have.property('persona')
                done()
            })
    })
})