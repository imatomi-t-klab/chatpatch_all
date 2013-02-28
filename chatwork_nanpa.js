if(_CW===undefined) var _CW ={};
String.prototype.replaceAll = function (s1, s2) {
    return this.split(s1).join(s2);
}
_CW.Aspect = {
    _after : function(target, methodName, aspect) {
        var method = target[methodName];
        //overwrite the method.
        target[methodName] = function () {
            var args = {
                'target': CW,
                'methodName': methodName,
                'method': method,
				'arguments':arguments,
            }, result;
			args["result"] = method.apply(target, arguments);
            return aspect.apply(null, [args]);
        };
    },
    _before : function(target, methodName, aspect) {
        var method = target[methodName];
        //overwrite the method.
        target[methodName] = function () {
            var args = {
                'target': CW,
                'methodName': methodName,
                'method': method,
				'arguments':arguments,
                'cancelled': false
            };
			aspect.apply(null, [args]);
            return (args["cancelled"]) ? args["result"] : method.apply(target, arguments);
        };
    },
    _apply : function(func, target, methodNames, aspect) {
        if (Object.prototype.toString.call(methodNames) !== '[object Array]') {
            methodNames = [methodNames];
        }
        var i = 0, mName;
        for (; mName = methodNames[i]; i++) {
            func(target, mName, aspect);
        }
    },
    before : function(target, methodNames, aspect) {
        this._apply(this._before, target, methodNames, aspect);
    },
    after : function(target, methodNames, aspect) {
        this._apply(this._after, target, methodNames, aspect);
    }
}
_CW.ex_notice = {
    arr : [],
    hkeyword : [],
    keyword : [],
	once : true,
	get_keyword : function(){
		if( AC.getRoomId(AC.myid)!=0 && this.once ){
			this.once = false;
			var params = {cmd: "load_chat",room_id: AC.getRoomId(AC.myid),last_chat_id: 0,first_chat_id: 0,unread_num: 0, desc:1};
			CW.getSync("gateway.php", params, function(res) {
				_CW.ex_notice.set_keyword(res.description);
			});
		} 
	},
    set_keyword : function ( res ){
		if(res===undefined) return;
        var k, dk = {};
		matches = res.match(/\[Highlight:(.*)\]/m);
		if(matches!==null){
			k = this.hkeyword;
			if(matches.length>0 && matches[1].length > 0){
				dk = matches[1].split(',');
				dk.forEach(function(v,i){
					if(k.indexOf(v)==-1) k.push(v);
				});
				_CW.ex_notice.hkeyword = k;
			}
		}
		matches = res.match(/\[Keyword:(.*)\]/m);
		if(matches!==null){
			k = this.keyword;
			if(matches.length>0 && matches[1].length > 0){
				dk = matches[1].split(',');
				dk.forEach(function(v,i){
					if(k.indexOf(v)==-1) k.push(v);
				});
				_CW.ex_notice.keyword = k;
			}
		}
    },
    exist_highlight : function (str){
        var k = this.hkeyword;
        for(var i=0; i<k.length; i++){
            if( str.match( new RegExp( k[i], 'i' ) ) ) return true; 
        }
        return false;
    },
    exist_keyword : function (str){
        var k = this.keyword;
        for(var i=0; i<k.length; i++){
            if( str.match( new RegExp( k[i], 'i' ) ) ) return true; 
        }
        return false;
    },
    popup : function(id, tm, a, b ,c){
        if(window.webkitNotifications.checkPermission() == 0){
            if(this.arr.indexOf(id+'-'+tm) == -1){
                var popup = window.webkitNotifications.createNotification(a, b ,c);
                popup.room_id = id;
                popup.tm = tm;
                popup.onclick = function(){
                    window.focus();
                    RL.selectRoom(this.room_id,this.tm);
                    this.cancel();
                };
                popup.show();
            }
        }
    },
    highlight : function(msg){
        if(msg===undefined || !msg) return;
		if(msg.match(/>([^<>]*)</g) != null){
			msg = msg.replace( />([^<>]*)</g, function(args){ 
				if(args[args.length-1].match("<span class='chrome_extension_highlight'>")==null){
					for(var i=1; i<args.length-2; i++){
						return '>'+_CW.ex_notice.get_highlight(arguments[i])+'<';
					}
				}
			});
		} else {
			msg = this.get_highlight(msg);
		}
        return msg;
    },
	get_highlight : function( msg ){
		if(msg===undefined) return msg;
		var dk = this.hkeyword;
		dk.forEach(function(v,i){
			var reg = new RegExp( '(' + v + ')', 'g');
			msg = msg.replace( reg, "<span class='chrome_extension_highlight'>" + v + "</span>" );
		});
		return msg;
	}
}

window.addEventListener('load',function(e){
    var aspect = function(invocation){
        var a = invocation.arguments[0];
        var ch_notification = (location.hash.indexOf('rid') > -1)? location.hash.match(/rid([0-9]*)/)[1]: false;
        _CW.ex_notice.get_keyword( );
        for (j in a) {
            var rval = a[j];
            RL.rooms[j] == void 0 && (RL.rooms[j] = new Room(j));
            if(RL.rooms[j]===undefined) continue;
            var g = RL.rooms[j],
                k = g.getUnreadNum();
            g.keyword_num = 0;
            if (rval.chat_list && rval.chat_list.length > 0) {
                for (var v = rval.chat_list.length-1, cnt=0; cnt < k; v--, cnt++){
                    if(rval.chat_list[v] === undefined) continue;
                    if(_CW.ex_notice.exist_keyword(rval.chat_list[v].msg)){
                        /* popup */
                        g.keyword_num++;
                        if (window.webkitNotifications){
                            _CW.ex_notice.popup(j,rval.chat_list[v].id,CW.getAvatarPanel(rval.chat_list[v].aid, {src: !0}),g.getName(),AC.getName(rval.chat_list[v].aid) + ":" + rval.chat_list[v].msg);
                        }
                        /* room group highlight */
                        d = $('#cw_r'+j);
                        if(!d.hasClass('ui_chat_highlight')){
                            d.addClass("selected");
                        }
                    }
                }
            }
        }
    };
    _CW.Aspect.before(RL, ["updateRoomData"], aspect);
    var aspect_hilight = function(invocation){
		if(invocation.length==0) return;
		return _CW.ex_notice.highlight(invocation.result);
    };
    _CW.Aspect.after(CW, ["renderMessage"], aspect_hilight);
});
