var _ = require('lodash')
var async = require('async')
var db = require('final-db')
var users = new db.Collection({dirName: __dirname + '/db'})

var menschen = [
  'Sebastian',
  'Josef',
  'Michael',
  'Konrad',
  'Daniel',
  'Alexander',
  'Viktoria',
  'Magdalena',
  'Vera',
  'Bernhard',
  'Stefanie',
  'Adam',
  'Ryan',
  'Nico'
]

// set cnt values
function fill(mensch, done) {
  users
    .find(mensch)
    .then(function(user) {
      if (!user.cnt || user.cnt === 0) {
        user.cnt = 1
        return users
          .save(user)
          .flush()
      }
    })
    .then(function() {
      done(null)
    })
    .otherwise(done)
}

// inc
function inc(mensch, done) {
  users
    .find(mensch.id)
    .then(function(user) {
      if (!user.cnt) {
        user.cnt = 0
      }
      user.cnt += 1
      return users
        .save(user)
        .flush()
    })
    .then(function() {
      done()
    })
    .otherwise(done)
}

// select by pseudo-random (with weights)
function select(done) {
  users
    .find()
    .then(function(allUsers) {
      var max = _.reduce(allUsers, function(max, user) {
        if (max < user.cnt) {
          max = user.cnt
        }
        return max
      }, 0)
      var weights = _.map(allUsers, function(user) {
        return {
          id: user.id,
          weight: max - (user.cnt || 0)
        }
      })
      var selection = []
      var maxWeight = 0
      _.forEach(_.sortBy(weights, 'weight').reverse(), function(user) {
        if (user.weight > maxWeight) {
          maxWeight = user.weight
        }
        if (user.weight < maxWeight && selection.length > 5) {
          return false
        }
        selection.push(user)
      })
      return _.shuffle(selection).slice(0, 6)
    })
    .then(function(pick) {
      done(null, pick)
    })
    .otherwise(done)
}

// fill db
async.forEach(menschen, function(mensch, done) {
  // create users (if not exists)
  users
    .find(mensch)
    .then(function(mensch) {
      done(null)
    })
    .otherwise(function() {
      users
        .save({
          id: mensch,
          cnt: 0
        })
        .flush()
        .then(function() {
          done()
        })
        .otherwise(done)
    })
}, function(err) {
  if (err) {
    return console.error(err)
  }

  // prefill
  async.each([
    'Magdalena',
    'Nico',
    'Alexander',
    'Michael',
    'Viktoria',
    'Sebastian'
  ], fill, function(err) {
    if (err) {
      return console.error(err)
    }

    select(function(err, pick) {
      if (err) {
        return console.error(err)
      }

      async.each(pick, inc, function(err) {
        if (err) {
          return console.error(err)
        }
        console.log(pick)
      })
    })
  })
})
