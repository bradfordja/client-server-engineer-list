// graphql.js
const { buildSchema } = require('graphql');
const engineerModel = require('./engineerModel');
const siteModel = require('./siteModel');

const schema = buildSchema(`
  type Engineer {
    userId: Int!
    firstName: String!
    lastName: String!
    fullName: String!
    title: String!
    status: String!
    siteId: Int!
  }

  type SiteLocation {
    siteId: Int!
    siteName: String!
    address: String!
    city: String!
    state: String!
    status: String!
  }

  type Query {
    engineerByName(firstName: String!, lastName: String!): [Engineer!]!
    engineerBySite(siteId: Int!): [Engineer!]!
  }
`);

const resolvers = {
  engineerByName: ({ firstName, lastName }) => engineerModel.getEngineerByName(firstName, lastName),
  engineerBySite: ({ siteId }) => siteModel.getEngineerBySite(siteId),
};

module.exports = { schema, resolvers };
