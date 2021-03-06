'use strict'

var jwt = require('jsonwebtoken')
var config = require('../config')
var tokenOptions = {
  expiresIn: '1h',
  issuer: 'https://auth.t-fk.no'
}
var data = {
  dn: 'uid=riemann,dc=example,dc=com',
  controls: [],
  objectClass: [ 'inetOrgPerson', 'organizationalPerson', 'person', 'top' ],
  cn: 'Bernhard Riemann',
  sn: 'Riemann',
  uid: 'riemann',
  mail: 'riemann@ldap.forumsys.com'
}

var token = jwt.sign(data, config.JWT_SECRET, tokenOptions)

console.log(token)

// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODk4NzY2LCJ1c2VyIjoiYm9iIiwiaWF0IjoxNDQ5NDk2NDYwLCJleHAiOjE0NDk1MDAwNjAsImlzcyI6Imh0dHBzOi8vYXV0aC50LWZrLm5vIn0.3n2GtV8pISL92lzRgFgZqRogklRHwy_YQ2Prv7OGISM
