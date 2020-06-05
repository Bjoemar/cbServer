const secret = {
	url : 'mongodb+srv://joemar12:joemar12@torrent-oh6ud.mongodb.net/joemar12?retryWrites=true&w=majority',
	secretKey : 'ChatBoxApp',
}

const getSecret = key => secret[key];

module.exports = getSecret;