const secret = {
	url : 'mongodb://127.0.0.1:27017/chatbox',
	secretKey : 'ChatBoxApp',
}

//ONLINE 'mongodb+srv://joemar12:joemar12@torrent-oh6ud.mongodb.net/joemar12?retryWrites=true&w=majority',
const getSecret = key => secret[key];

module.exports = getSecret;