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
            rq.get(`https://r34-json-api.herokuapp.com/posts?limit=5&tags=${query}`, {json: true}, (e,r,b) =>
            {
                if (b === "[]")
                {
                    return "API_DOWN";
                }
                for (i of blacklistedtags)
                {
                    if (b[0].tags.includes(i))
                    {
                        return "BLACKLISTED_TAG";
                    }
                }
                return b;
            })
        }
};
