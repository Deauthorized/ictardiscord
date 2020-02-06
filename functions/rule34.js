const rq = require('request');
const blacklistedtags = 
[
    "cub",
    "loli",
    "lolicon",
    "shota",
    "shotacon",
    "guro",
    "gore",
    "underage"
]
module.exports = {
    name: 'rule34',
        get(query)
        {
            query = query.replace(" ", "+")
            rq.get(`https://r34-json-api.herokuapp.com/posts?limit=1&tags=${query}`, {json: true}, (e,r,body) =>
            {
                if (body === "[]")
                {
                    return "API_DOWN";
                }
                for (i of blacklistedtags)
                {
                    if (body[0].tags.includes(i))
                    {
                        return "BLACKLISTED_TAG";
                    }
                }
                return body;
            })
        }
};
