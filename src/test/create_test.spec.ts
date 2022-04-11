const assert = require('assert')
import User from '../models/User'

describe('Creating records',  () => {
  it('Saves a user',  (done) => {
    const leo = new User({name: 'Leo'})
    leo.save().then(() => {
      assert(!leo.isNew)
      done()
    })
  })
})