const assert = require('assert')
import User from '../models/User'

describe('Reading records',  () => {
  let leo: any;

  beforeEach((done) => {
    leo = new User({name: 'Leo'})
    leo.save()
      .then(() => done())
  })
  it('finds all users with the name of leo',  (done) => {
    User.find({name: 'Leo'})
      .then((users) => {
        assert(users[0]._id.toString() === leo._id.toString())
        done()
      })
  })
})