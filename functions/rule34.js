const rq = require('request');
module.exports = {
    name: 'rule34',
        get(query)
        {
            query = query.replace(" ", "+")
            return query;
        }
};
