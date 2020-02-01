module.exports = {
    name: 'parsechannel',
        getChannelFromMention(chnl, client)
        {
        if (!chnl) return;
        
        if (chnl.startsWith('<#') && chnl.endsWith('>')) {
            chnl = chnl.slice(2, -1);
    
            if (chnl.startsWith('!')) {
                chnl = chnl.slice(1);
            }
        
            return client.channels.fetch(chnl);
        }
        else
        {
            return client.channels.fetch(chnl);
        }
    }
};