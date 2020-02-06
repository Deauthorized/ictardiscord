const rq = require('request');
const blacklistedtags = 
[
    "cub",
    "loli",
    "shota",
    "guro",
    "gore",
    "underage"
]
module.exports = {
    name: 'rule34',
        get(query)
        {
            query = query.replace(" ", "+")
            rq.get(`https://r34-json-api.herokuapp.com/posts?limit=1&tags=${query}`, {json: true}, (e,r,b) =>
            {
                console.log(b)
                console.log(e)
                console.log(r)
                return r.statusCode;
            })
        }
};
