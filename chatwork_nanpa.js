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
    key : ['今冨','Imatomi','Tomoki','newfantasy','deploy'],
    keyword : {},
    notification : {},
    exist_keyword : function (str){
        var k = this.key;
        for(var i=0; i<k.length; i++){
            if( str.match( new RegExp( k[i], 'i' ) ) ) return true; 
        }
        return false;
    },
    exist_notifications : function (str){
        var k = this.key, dk;
        var id = (location.hash.indexOf('rid') > -1)? location.hash.match(/rid([0-9]*)/)[1]: false;
        if(id && this.notification[id]!==undefined){
            dk = this.notification[id];
            for(var i=0; i<dk.length; i++){
                if( str.match( new RegExp( dk[i], 'i' ) ) ) return true; 
            }
        }
        for(var i=0; i<k.length; i++){
            if( str.match( new RegExp( k[i], 'i' ) ) ) return true; 
        }
        return false;
    },
    popup : function(id, tm, a, b ,c){
        if(window.webkitNotifications.checkPermission() == 0){
            if(this.arr.indexOf(id+'-'+tm) == -1){
                this.arr.push(id+'-'+tm);
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
    room : function(){
        if(!RM.description) return;
        var id = RM.id, des = RM.description;
        if(this.keyword[id]===undefined){
            this.keyword[id] = [];
            matches = des.match(/\[Keyword:(.*)\]/m);
            if(matches!==null){
                if(matches.length>0 && matches[1].length > 0){
                    this.keyword[id] = matches[1].split(',');
                }
            }
        }
        if(this.notification[id]===undefined){
            this.notification[id] = [];
            matches = des.match(/\[Notification:(.*)\]/m);
            if(matches!==null){
                if(matches.length>0 && matches[1].length > 0){
                    this.notification[id] = matches[1].split(',');
                }
            }
        }
    },
    room_keyword_exist : function(str){
        if(str===undefined) return;
        if(this.keyword[RM.id]!==undefined){
            var dk = this.keyword[RM.id];
            for(var i=0; i<dk.length; i++){
                if( str.match( new RegExp( dk[i], 'i' ) ) ) return true; 
            }
        }
        return false;
    },
    room_keyword : function(msg){
        if(msg===undefined) return;
        if(this.keyword[RM.id]!==undefined){
            var dk = this.keyword[RM.id];
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
        return null;
    }
}

$(function() {
    var aspect = function(invocation){
        var a = invocation, ti = this;
        var i = !1, n = !1, h = {}, j;
        var ch_notification = (location.hash.indexOf('rid') > -1)? location.hash.match(/rid([0-9]*)/)[1]: false;
        for (j in a) {
            rval = a[j];
            RL.rooms[j] == void 0 && (RL.rooms[j] = new Room(j));
            var g = RL.rooms[j],
                k = g.getUnreadNum();
            if (rval.chat_list && rval.chat_list.length > 0) {
                for (var v = rval.chat_list.length-1, cnt=0; cnt < k; v--, cnt++){
                    if(rval.chat_list[v] === undefined) continue;
                    if(_CW.ex_notice.exist_notifications(rval.chat_list[v].msg)){
                        g.keyword_num++;
                        if (window.webkitNotifications){
                            _CW.ex_notice.popup(j,rval.chat_list[v].id,CW.getAvatarPanel(rval.chat_list[v].aid, {src: !0}),RL.rooms[j].getName(),AC.getName(rval.chat_list[v].aid) + ":" + rval.chat_list[v].msg);
                        }
                    }
                    if(g.keyword_num===k) break;
                }
            }
        }
    };
    _CW.Aspect.before(RL, ["updateRoomData"], aspect);
    var aspect_hilight = function(invocation){
        if(invocation.length==0) return;
        var glist = invocation,
            nohighlight = (location.hash.indexOf('rid')>-1)? location.hash.match(/rid([0-9]*)/)[1]: null;
        for(var v=0;v<glist.length;v++){
            var room = RL.rooms[glist[v]];
            if(room.timeline!==null && room.timeline.chat_list!==null){
                var r = room.timeline.chat_list, d, unread = room.getUnreadNum();
                /* room group highlight */
                for(var i=room.timeline.chat_list.length-1,cnt=0 ;cnt<unread;i--,cnt++){
                    d = $('#cw_r'+glist[v]);
                    $.data(d,'unread',false);
                    if(!d.hasClass('ui_chat_highlight') && _CW.ex_notice.exist_keyword(r[i].msg)){
                        d.addClass("ui_chat_highlight");
                        $.data(d,'unread',true);
                    }
                }
                /* room timeline highlight */
                if(room.id == nohighlight){
                    _CW.ex_notice.room();
                    for(var i=0;i<room.timeline.chat_list.length;i++){
                        if(_CW.ex_notice.room_keyword_exist(r[i].msg)){
                            var msg = _CW.ex_notice.room_keyword(r[i].msg);
                            if( msg!=null ){
                                $('#cw_c'+r[i].id+' pre').html(msg);
                            }
                        }
                    }
                }
            }
        }
        $('#cw_r'+nohighlight).removeClass('ui_chat_highlight');
        return;
    };
    _CW.Aspect.after(RL.view, ["build"], aspect_hilight);
});