const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = GraphQLObjectType({
  name: "UserType",
  fields: {
    email: { type: GraphQLString },
  },
});

module.exports = UserType;
