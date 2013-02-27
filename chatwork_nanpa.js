if(_CW===undefined) var _CW ={};
String.prototype.replaceAll = function (s1, s2) {
    return this.split(s1).join(s2);
}
_CW.Aspect = {
    _after : function(target, methodName, aspect) {
        var method = target[methodName];
        //overwrite the method.
        target[methodName] = function () {
            var args = Array.prototype.slice.call(arguments), result;
            result = method.apply(this, arguments);
            args.push(result);
            args.push({
                target: CW,
                methodName: methodName,
                method: method
            });
            return aspect.apply(this, args);
        };
    },
    _before : function(target, methodName, aspect) {
        var method = target[methodName];
        //overwrite the method.
        target[methodName] = function () {
            var args = Array.prototype.slice.call(arguments),
                result;
            result = aspect.apply(null, args);
            args.push(result);
            args.push({
                target: CW,
                methodName: methodName,
                method: method,
                "cancelled": false
            });
            return (args["cancelled"]) ? args["result"] : method.apply(this, arguments);
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
    set_keyword : function (room){
        var k;
        if(room.type=="my" && room.description){
            var dk = {};
            matches = room.description.match(/\[Highlight:(.*)\]/m);
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
            matches = room.description.match(/\[Keyword:(.*)\]/m);
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
        var dk = this.hkeyword
        for(var i=0; i<dk.length; i++){
            var matches = msg.match( new RegExp( dk[i], 'i' ) );
            if(matches!=null){
                for(var v=0;v<matches.length;v++){
                    if(!msg.match('<span class="chrome_extension_highlight">'+matches[v]+'</span>')){
                        msg = msg.replaceAll( matches[v], '<span class="chrome_extension_highlight">'+matches[v]+'</span>');
                    }
                }
            }
        }
        return msg;
    }
}

window.addEventListener('load',function(e){
    var aspect = function(invocation){
        var a = invocation;
        var ch_notification = (location.hash.indexOf('rid') > -1)? location.hash.match(/rid([0-9]*)/)[1]: false;
        for (j in a) {
            var rval = a[j];
            RL.rooms[j] == void 0 && (RL.rooms[j] = new Room(j));
            if(RL.rooms[j]===undefined) continue;
            var g = RL.rooms[j],
                k = g.getUnreadNum();
            g.keyword_num = 0;
            _CW.ex_notice.set_keyword(g);
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
        var nohighlight = (location.hash.indexOf('rid')>-1)? location.hash.match(/rid([0-9]*)/)[1]: null;
        invocation.forEach(function(v,i){
            var room = RL.rooms[v];
            _CW.ex_notice.set_keyword(room);
            if(room.timeline!==null && room.timeline.chat_list!==null){
                var r = room.timeline.chat_list;
                if(room.id == nohighlight){
                    for(var i=0;i<r.length;i++){
                        /* room timeline highlight */
                        var target = $('#cw_c'+r[i].id+' pre');
                        var msg = _CW.ex_notice.highlight(target.html());
                        if( msg!=null ){
                            target.html(msg);
                        }
                        
                    }
                }
            }
        });
        $('#cw_r'+nohighlight).removeClass('ui_chat_highlight');
        return;
    };
    _CW.Aspect.after(RL.view, ["build"], aspect_hilight);
});
