const graphiql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphiql;

//lodash is used to update and query the data in the dummay data
const _ = require('lodash');

// Schema file is a collection of all the types and queries
// its purpose it to store object types, relationships between types, and queries

//dummy data
var books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'},
    {name: 'The Hero of Ages', genre: 'Fantasy', id: '4'},
    {name: 'The Colour of Magic', genre: 'Fantasy', id: '5'},
    {name: 'The Light Fantastic', genre: 'Fantasy', id: '6'},
    {name: 'The Way of Kings', genre: 'Fantasy', id: '7'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}, 
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(books, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})