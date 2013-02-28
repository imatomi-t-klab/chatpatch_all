if(_CW===undefined) var _CW ={};
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
    hkeyword : {},
    keyword : {},
    once : [],
    get_keyword : function( id ){
        if(id == undefined || id == 0) return;
        if( this.once.indexOf(id) == -1 ){
            this.once.push(id);
            var params = {cmd: "load_chat",room_id: id,last_chat_id: 0,first_chat_id: 0,unread_num: 0, desc:1};
            CW.getSync("gateway.php", params, function(res) {
                _CW.ex_notice.set_keyword(id, res.description);
            });
        }
    },
    set_keyword : function ( id, res ){
        if(id===undefined || res===undefined) return;
        var k, dk = {};
        matches = res.match(/\[Highlight:(.*)\]/m);
        if(matches!==null){
            k = (this.hkeyword[id]!=undefined)? this.hkeyword[id]: [];
            if(matches.length>0 && matches[1].length > 0){
                dk = matches[1].split(',');
                dk.forEach(function(v,i){
                    if(k.indexOf(v)==-1) k.push(v);
                });
                _CW.ex_notice.hkeyword[id] = k;
            }
        }
        matches = res.match(/\[Keyword:(.*)\]/m);
        if(matches!==null){
            k = (this.keyword[id]!=undefined)? this.keyword[id]: [];
            if(matches.length>0 && matches[1].length > 0){
                dk = matches[1].split(',');
                dk.forEach(function(v,i){
                    if(k.indexOf(v)==-1) k.push(v);
                });
                _CW.ex_notice.keyword[id] = k;
            }
        }
    },
    exist_highlight : function (id, str){
        var k = this.hkeyword[id], gb = this.keyword[AC.getRoomId(AC.myid)];
        if(k===undefined) return false;
        gb.forEach(function(v,i){
            if(k.indexOf(v) == -1) k.push(v);
        });
        for(var i=0; i<k.length; i++){
            if( str.match( new RegExp( k[i], 'i' ) ) ) return true; 
        }
        return false;
    },
    exist_keyword : function (id, str){
        var k = this.keyword[id], gb = this.keyword[AC.getRoomId(AC.myid)];
        if(k===undefined) return false;
        gb.forEach(function(v,i){
            if(k.indexOf(v) == -1) k.push(v);
        });
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
    highlight : function( id, msg ){
        if(msg===undefined || !msg) return;
        if( msg.match(/>([^<>]*)/g) != void 0){
            msg = msg.replace( />([^<>]*)/g, function(args){
                return _CW.ex_notice.get_highlight(id, args);
            });
        } else {
            msg = this.get_highlight(id, msg);
        }
        return msg;
    },
    get_highlight : function( id, msg ){
        if(id===undefined || msg===undefined) return msg;
        var dk = this.hkeyword[id], gb = this.keyword[AC.getRoomId(AC.myid)];
        if(dk===undefined) return msg;
        dk.forEach(function(v,i){
            if(gb.indexOf(v) > -1) gb.splice(gb.indexOf(v), 1);
        });
        dk.forEach(function(v,i){
            var reg = new RegExp( '(' + v + ')', 'g');
            msg = msg.replace( reg, "<span class='chrome_extension_group_highlight'>" + v + "</span>" );
        });
        gb.forEach(function(v,i){
            var reg = new RegExp( '(' + v + ')', 'g');
            msg = msg.replace( reg, "<span class='chrome_extension_highlight'>" + v + "</span>" );
        });
        return msg;
    }
}

window.addEventListener('load',function(e){
    var aspect_notice = function(invocation){
        var a = invocation.arguments[0];
        _CW.ex_notice.get_keyword( AC.getRoomId(AC.myid) );
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
                    if(_CW.ex_notice.exist_keyword(j, rval.chat_list[v].msg)){
                        /* popup */
                        g.keyword_num++;
                        if (window.webkitNotifications){
                            _CW.ex_notice.popup(j,rval.chat_list[v].id,CW.getAvatarPanel(rval.chat_list[v].aid, {src: !0}),g.getName(),AC.getName(rval.chat_list[v].aid) + ":" + rval.chat_list[v].msg);
                        }
                        /* room group highlight */
                        if(_CW.ex_notice.highlight_group===undefined){
                            _CW.ex_notice.highlight_group = [];
                        }
                        _CW.ex_notice.highlight_group.push(j);
                    }
                }
            }
        }
    };
    _CW.Aspect.before(RL, ["updateRoomData"], aspect_notice);
    var aspect_highlight = function(invocation){
        if(invocation.result.length==0) return;
        /* timeline highlight */
        _CW.ex_notice.get_keyword( RM.id );
        return _CW.ex_notice.highlight( RM.id, invocation.result);
    };
    _CW.Aspect.after(CW, ["renderMessage"], aspect_highlight);
    var aspect_group_highlight = function(invocation){
        if(_CW.ex_notice.highlight_group===undefined || _CW.ex_notice.highlight_group.length==0) return;
        _CW.ex_notice.get_keyword( RM.id );
        
        /* output room group highlight */
        do {
            d = $('#cw_r'+_CW.ex_notice.highlight_group.shift()).not('dev_selected');
            if(!d.hasClass('chrome_extension_ghighlight')){
                d.addClass("chrome_extension_ghighlight");
            }
        } while( _CW.ex_notice.highlight_group.length != 0 );
        return;
    };
    _CW.Aspect.after(RL.view, ["build"], aspect_group_highlight);
});
