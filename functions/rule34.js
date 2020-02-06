const rq = require('request');
const blacklistedtags = 
[
    "cub",
    "loli",
    "shota",
    "guro",
    "gore"
]
module.exports = {
    name: 'rule34',
        get(query)
        {
            query = query.replace(" ", "+")
            rq.get(`https://r34-json-api.herokuapp.com/posts?limit=10&tags=${query}`, {json:true}, function(e,r,b)
            {
                return r;
            })
            
        }
};
