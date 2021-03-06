/*
 * Copyright (c) 2018 TopCoder, Inc. All rights reserved.
 */
/**
 * This defines user model.
 */
'use strict';

const _ = require('lodash');
const dynamoose = require('dynamoose');
const constants = require('../constants');

const Schema = dynamoose.Schema;

const schema = new Schema({
  id: {
    type: String,
    hashKey: true,
    required: true
  },
  userProviderId: {
    type: Number,
    required: true,
    index: {
      global: true,
      rangeKey: 'id',
      project: true,
      name: 'UsesProviderIdIndex'
    }
  },
  userProviderIdStr: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true,
    index: {
      global: true,
      rangeKey: 'id',
      project: true,
      name: 'UsernameIndex'
    }
  },
  role: {
    type: String,
    required: true,
    enum: _.values(constants.USER_ROLES),
    index: {
      global: true,
      project: true,
      name: 'RoleIndex',
      rangeKey: 'id'
    }
  },
  type: {
    type: String,
    required: true,
    enum: _.values(constants.USER_TYPES),
    index: {
      global: true,
      rangeKey: 'id',
      name: 'TypeIndex',
      project: true
    }
  },
  // gitlab token data
  accessToken: {type: String, required: false},
  accessTokenExpiration: {type: Date, required: false},
  refreshToken: {type: String, required: false}
});

module.exports = schema;
