import request from 'supertest'
import express from 'express'
import routes from '../routes'

describe('Auth Routes', () => {
  let app

  beforeAll(() => {
    app = express()
    app.use(express.json())
    app.use('/v1/api/auth', routes)
  })

  it('GET / should return 200 and Hello message', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.text).toEqual('Hello, This is Auth Service!')
  })

  it('POST /signUp should return 400 if invalid input', async () => {
    const invalidUserData = {
      email: 'email.com',
      password: 'basic',
      confirmPassword: 'password',
      firstName: 'John',
      lastName: 'Doe',
      dob: '2000-01-01',
      streetAddress: '123 Main St',
      country: 'USA',
      state: 'CA',
      city: 'Los Angeles',
      zipCode: '12345',
      phone: '+1234567890',
      sinNumber: '123456789',
    }

    const res = await request(app).post('/v1/api/auth/signUp').send(invalidUserData)

    expect(res.status).toBe(400)
  })

  it('POST /signUp should return 200 if valid input', async () => {
    const validUserData = {
      email: 'test@example.com',
      password: 'Test@123',
      confirmPassword: 'Test@123',
      firstName: 'tushar',
      lastName: 'tushar',
      dob: '1990-01-01',
      streetAddress: '123 Main St',
      country: 'USA',
      state: 'CA',
      city: 'Los Angeles',
      zipCode: '12345',
      phone: '+1234567890',
      sinNumber: '123456789',
    }

    const res = await request(app).post('/v1/api/auth/signUp').send(validUserData)

    expect(res.status).toBe(200)
  })

  it('POST /login should return 400 if invalid input', async () => {
    const invalidLoginData = {
      email: 'heygmail.com',
      password: 'password',
    }

    const res = await request(app).post('/v1/api/auth/login').send(invalidLoginData)

    expect(res.status).toBe(400)
  })

  it('POST /login should return 200 if valid input', async () => {
    const validLoginData = {
      email: 'test@example.com',
      password: 'Test@123',
    }

    const res = await request(app).post('/v1/api/auth/login').send(validLoginData)

    expect(res.status).toBe(200)
  })
})
