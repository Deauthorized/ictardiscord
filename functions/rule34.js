const rq = require('request');
module.exports = {
    name: 'rule34',
        get(query)
        {
            query = query.replace(" ", "+")
            rq.get(`https://r34-json-api.herokuapp.com/posts?limit=1&tags=${query}`, {json: true}, (e,r,b) =>
            {
                if (b === undefined)
                {
                    return "API_DOWN";
                }
                for (i of blacklistedtags)
                {
                    if (b[0].tags.some("loli") || b[0].tags.some("shota") || b[0].tags.some("guro"))
                    {
                        return "BLACKLISTED_TAG";
                    }
                }
                return b;
            })
        }
};
