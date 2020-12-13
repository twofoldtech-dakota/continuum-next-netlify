const axios = require('axios');
//require('dotenv').config();

module.exports = async (query, variables) => {
    console.log(`Bearer ${process.env.FAUNADB_SERVER_SECRET}`);
    const {
        data: { data, errors },
    } = await axios({
        url: 'https://graphql.fauna.com/graphql',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.FAUNADB_SERVER_SECRET}`,
        },
        data: {
            query,
            variables,
        },
    });
    if (errors) {
        console.error(errors);
        throw new Error('Something went wrong sending the query to fauna');
    }
    return data;
};