var def = require.s.contexts._.defined,
	sub_api = null,
	socket_event= null;
	
(function getContextModules(){
	var k = Object.keys(def);
	
	for (var j in k){
		if (!def[k[j]] || typeof def[k[j]] == 'function' || !Object.keys(def[k[j]]).length || (Object.keys(def[k[j]]).length <= 3 && !def[k[j]].length && !def[k[j]].emojify))
			continue;
		
		var obj = def[k[j]];
		if ( obj.chatDelete){
			socket_event = obj;
			continue;
		}
		if ( obj._events && obj._events['chat:receive'] ){
			sub_api = obj;
			continue;
		}
	}
})();

var backup = socket_event.chatDelete;

socket_event.chatDelete = function(obj){
	var modDel = API.getUser(obj.mi),
		userDelID = obj.c.substring(0,obj.c.indexOf('-'));
		userdel = API.getUser(userDelID);
	
	API.chatLog((modDel.username||obj.mi)+' excluiu a mensagem '+obj.c+' de '+(userdel.username||userDelID));
	backup(obj);
}
sub_api._events['force:reconnect'][0].callback();
