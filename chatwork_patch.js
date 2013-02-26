 /*
 ChatWork http://www.chatwork.com/
 Copyright (c) 2013 EC studio,Inc.

 -- Using Libraries. thanks a lot! --
 jquery.layout 1.3.0 - Release Candidate 29.15
 $Date: 2011-06-25 08:00:00 (Sat, 25 Jun 2011) $
 $Rev: 302915 $

 Copyright (c) 2010 
 Fabrizio Balliano (http://www.fabrizioballiano.net)
 Kevin Dalman (http://allpro.net)

 Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.


 jQuery.ScrollTo
 Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 Dual licensed under MIT and GPL.
 Date: 5/25/2009


 jQuery JSONP Core Plugin 2.2.0 (2010-12-11)

 http://code.google.com/p/jquery-jsonp/

 Copyright (c) 2011 Julian Aubourg

 This document is licensed as free software under the terms of the
 MIT License: http://www.opensource.org/licenses/mit-license.php


 jQuery JSON Plugin
 version: 2.3 (2011-09-17)

 This document is licensed as free software under the terms of the
 MIT License: http://www.opensource.org/licenses/mit-license.php

 Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 website's http://www.json.org/json2.js, which proclaims:
 "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 I uphold.

 It is also influenced heavily by MochiKit's serializeJSON, which is
 copyrighted 2005 by Bob Ippolito.
*/
var L = {emoticon_smile: "\u7b11\u9854",emoticon_sad: "\u60b2\u3057\u3044",emoticon_more_smile: "\u3082\u3063\u3068\u30b9\u30de\u30a4\u30eb",emoticon_lucky: "\u3084\u3063\u305f\u306d",emoticon_surprise: "\u3073\u3063\u304f\u308a",emoticon_wink: "\u30a6\u30a3\u30f3\u30af",emoticon_tears: "\u30a6\u30a7\uff5e\u3093",emoticon_sweat: "\u6c57",emoticon_mumu: "\u3080\u3080",emoticon_kiss: "\u30c1\u30e5\uff01",emoticon_tongueout: "\u3079\u30fc",emoticon_blush: "\u6065\u305a\u304b\u3057\u3044",emoticon_wonder: "\u4f55\u306a\u306b",
    emoticon_snooze: "\u7720\u3044",emoticon_love: "\u604b\u3057\u3066\u307e\u3059",emoticon_grin: "\u30cb\u30e4\u30c3",emoticon_talk: "\u8a71\u3059",emoticon_yawn: "\u3042\u304f\u3073",emoticon_puke: "\u30b2\u30fc\u30c3",emoticon_ikemen: "\u30a4\u30b1\u30e1\u30f3",emoticon_otaku: "\u30aa\u30bf\u30af",emoticon_ninmari: "\u30cb\u30f3\u30de\u30ea",emoticon_nod: "\u3046\u3093\u3046\u3093",emoticon_shake: "\u3044\u3084\u3044\u3084",emoticon_wry_smile: "\u82e6\u7b11\u3044",emoticon_whew: "\u3084\u308c\u3084\u308c",emoticon_clap: "\u62cd\u624b",
    emoticon_bow: "\u304a\u3058\u304e",emoticon_roger: "\u4e86\u89e3\uff01",emoticon_muscle: "\u7b4b\u8089\u30e2\u30ea\u30e2\u30ea",emoticon_dance: "\u30c0\u30f3\u30b9",emoticon_komanechi: "\u30b3\u30de\u30cd\u30c1",emoticon_devil: "\u60aa\u9b54",emoticon_star: "\u661f",emoticon_heart: "\u30cf\u30fc\u30c8",emoticon_flower: "\u82b1",emoticon_cracker: "\u30af\u30e9\u30c3\u30ab\u30fc",emoticon_cake: "\u30b1\u30fc\u30ad",emoticon_coffee: "\u30b3\u30fc\u30d2\u30fc",emoticon_beer: "\u30d3\u30fc\u30eb",emoticon_handshake: "\u63e1\u624b",
    emoticon_yes: "\u306f\u3044",emoticon_ec14: "EC14",raise_error: "\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f",deleted_user: "\u89e3\u7d04\u6e08\u30e6\u30fc\u30b6\u30fc",nickname_prefix: "",nickname_suffix: "\u3055\u3093",dateformat: "Y\u5e74m\u6708d\u65e5",chatroom_error_no_member: "\u81ea\u5206\u304c\u30e1\u30f3\u30d0\u30fc\u306b\u5165\u3063\u3066\u3044\u306a\u3044\u30c1\u30e3\u30c3\u30c8\u306e\u305f\u3081\u3001\u8868\u793a\u3067\u304d\u307e\u305b\u3093",chat_category_allchat: "\u3059\u3079\u3066\u306e\u30c1\u30e3\u30c3\u30c8",
    directchat: "\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8",groupchat: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8",chat_category_mytaskchat: "\u30de\u30a4\u30bf\u30b9\u30af\u304c\u3042\u308b\u30c1\u30e3\u30c3\u30c8",notifier_newmessage: "\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5c4a\u304d\u307e\u3057\u305f",mychat: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8",chatsend_quote: "\u5f15\u7528",button_ok: "OK",button_cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",sending: "\u9001\u4fe1\u4e2d\u2026",newbrowser_title: "\u6700\u65b0\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044",
    contact_cwid_error_myself: "\u81ea\u5206\u81ea\u8eab\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093",contact_cwid_error_already: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID:%%chatwork_id%% \u306f\u3059\u3067\u306b\u30b3\u30f3\u30bf\u30af\u30c8\u8ffd\u52a0\u6e08\u307f\u3067\u3059",contact_cwid_error_noexist: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID:%%chatwork_id%% \u306f\u5b58\u5728\u3057\u307e\u305b\u3093",chatwork_update: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u307e\u3057\u305f\u3002\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u53cd\u6620\u3055\u305b\u308b\u306b\u306f\u30d6\u30e9\u30a6\u30b6\u3092\u518d\u8aad\u307f\u8fbc\u307f(\u66f4\u65b0)\u3057\u3066\u304f\u3060\u3055\u3044",
    chatwork_do_update: "\u6700\u65b0\u7248\u3078\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",connection_error_logout: "\u73fe\u5728\u30ed\u30b0\u30a2\u30a6\u30c8\u3055\u308c\u3066\u3044\u307e\u3059",error_cant_login_ip: "\u3053\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af(IP\u30a2\u30c9\u30ec\u30b9)\u304b\u3089\u306e\u30a2\u30af\u30bb\u30b9\u306f\u3001\u7ba1\u7406\u8005\u8a2d\u5b9a\u306b\u3088\u308a\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u8a31\u53ef\u3055\u308c\u3066\u3044\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304b\u3089\u63a5\u7d9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    connection_error_invalid_user: "\u73fe\u5728\u5225\u306e\u30e6\u30fc\u30b6\u30fc\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u3059",connection_error_invalid_token: "\u73fe\u5728\u30ed\u30b0\u30a4\u30f3\u72b6\u614b\u304c\u4e0d\u5b89\u5b9a\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u518d\u8aad\u307f\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044\u3002",connection_error_offline: "\u73fe\u5728\u30aa\u30d5\u30e9\u30a4\u30f3\u306b\u306a\u3063\u3066\u3044\u307e\u3059",message_open_message: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",
    message_open_chat: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3078\u79fb\u52d5",message_open_mindmanager: "MindManager\u3067\u958b\u304f",message_open_googledocview: "Google Document Viewer\u3067\u958b\u304f",message_open_movie: "\u52d5\u753b\u3092\u518d\u751f\u3059\u308b",contactpanel_call_skype: "Skype\u3067%%skypeid%%\u3078\u30b3\u30fc\u30eb",contactpanel_show_twitter: "twitter\u3067%%twitterid%%\u306e\u30c4\u30a4\u30fc\u30c8\u3092\u8868\u793a",contactpanel_show_facebook: "facebook\u3067%%facebookuname%%\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u8868\u793a",
    open_direct_chat: "\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u958b\u304f",contactpanel_add_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0",contact_requesting: "\u627f\u8a8d\u4f9d\u983c\u4e2d",file_not_found: "\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u307e\u305b\u3093",file_reading_image: "\u753b\u50cf\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",button_edit: "\u7de8\u96c6",button_delete: "\u524a\u9664",jump_to_addpoint: "\u8ffd\u52a0\u6642\u70b9\u3078\u79fb\u52d5",
    file_deleted: "\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f",task_not_found: "\u30bf\u30b9\u30af\u304c\u5b58\u5728\u3057\u307e\u305b\u3093",task_label_done: "[\u5b8c\u4e86]",task_limittip: "\u671f\u9650\uff1a",task_deleted: "\u3053\u306e\u30bf\u30b9\u30af\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f",file: "\u30d5\u30a1\u30a4\u30eb",task: "\u30bf\u30b9\u30af",message: "\u30e1\u30c3\u30bb\u30fc\u30b8",storage_cancel_send_object: "\u9001\u4fe1\u3057\u3088\u3046\u3068\u3057\u305f%%object%%\u306f\u3001\u73fe\u5728\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8d85\u3048\u308b%%object%%\u30b5\u30a4\u30ba\u306e\u305f\u3081\u3001\u9001\u4fe1\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f\u3002<br /><br />\u3053\u306e%%object%%\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001",
    storage_cancel_send_cancel: "%%object%%\u304c\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",menu_feedback: "\u3054\u610f\u898b\u30fb\u3054\u8981\u671b",button_send_long: "\u9001\u4fe1\u3059\u308b",feedback_thankyou: '\u9001\u4fe1\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f\u3002<br /><br />\u9001\u4fe1\u3044\u305f\u3060\u3044\u305f\u8cb4\u91cd\u306a\u3054\u610f\u898b\u306f\u3001\u4eca\u5f8c\u306e\u6539\u5584\u306e\u53c2\u8003\u3068\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002<br />\u4eca\u5f8c\u3068\u3082\u3069\u3046\u305e\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002<img class="ui_emoticon" alt="(bow)" title="\u304a\u3058\u304e (bow)" src="./image/emoticon/emo_bow.gif">',
    storage_cancel_send_object_suffix_upgrade: "\u73fe\u5728\u306e\u5229\u7528\u30d7\u30e9\u30f3\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",storage_cancel_upgrade_label: "\u5229\u7528\u30d7\u30e9\u30f3\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",storage_cancel_send_object_suffix_tell_admin: "\u3054\u5229\u7528\u30d7\u30e9\u30f3\u306e\u7ba1\u7406\u8005\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002",storage_cancel_send_object_suffix_add_storage: "\u8ffd\u52a0\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002",
    storage_cancel_add_storage_label: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8ffd\u52a0",contact_request_message_default: "\u30b3\u30f3\u30bf\u30af\u30c8\u627f\u8a8d\u3092\u304a\u9858\u3044\u3057\u307e\u3059",contact_invite_message_default: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u62db\u5f85\u3057\u307e\u3057\u305f\u3002\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u7121\u6599\u3067\u5229\u7528\u3067\u304d\u308b\u30af\u30e9\u30a6\u30c9\u578b\u30d3\u30b8\u30cd\u30b9\u30c1\u30e3\u30c3\u30c8\u30c4\u30fc\u30eb\u3067\u3059\u3002\u65b0\u898f\u767b\u9332\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002",
    menu_contact_admin: "\u30b3\u30f3\u30bf\u30af\u30c8\u7ba1\u7406",contact_add: "\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0",contact_error_cantadd: "\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",contact_error_planlimit: "%%plan_name%%\u3067\u306f%%limit_num%%\u4eba\u307e\u3067\u3057\u304b\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002<br>\u65b0\u3057\u304f\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u3054\u691c\u8a0e\u304f\u3060\u3055\u3044\u3002",
    contact_rest_number: "...\u4ed6%%rest_number%%\u4ef6",contact_error_is_not_mailaddress: "\u306f\n\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093",contact_error_is_over_contactnum: "\u306f\n\u5229\u7528\u3057\u3066\u3044\u308b\u30d7\u30e9\u30f3\u306e\u30b3\u30f3\u30bf\u30af\u30c8\u6570\u5236\u9650\u3092\u8d8a\u3048\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002",contact_error_is_disable_external: "\u306f\n\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u3084\u308a\u3068\u308a\u304c\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093",
    contact_error_own_mailaddress: "\u81ea\u5206\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u4ee5\u5916\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",contact_already_added: "\u8ffd\u52a0\u6e08\u307f",contact_mail_not_found_listed: "\u4e0b\u8a18\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002<br />\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u767b\u9332\u3092\u6848\u5185\u3059\u308b\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u4e0b\u8a18\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u9001\u4fe1\u3057\u307e\u3059\u304b\uff1f",
    contact_do_request: "\u627f\u8a8d\u4f9d\u983c\u3092\u884c\u3046",contact_confirm_delete: "\u672c\u5f53\u306b\u300c%%name%%\u300d\u3092\u30b3\u30f3\u30bf\u30af\u30c8\u304b\u3089\u524a\u9664\u3057\u307e\u3059\u304b\uff1f\n\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u3082\u540c\u6642\u306b\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u203b\u5143\u306b\u623b\u305b\u307e\u305b\u3093\uff01",contact_confirm_cancel_request: "\u672c\u5f53\u306b\u300c%%name%%\u300d\u3078\u306e\u627f\u8a8d\u4f9d\u983c\u3092\u53d6\u308a\u6d88\u3057\u3057\u307e\u3059\u304b\uff1f",
    contact_confirm_reject_request: "\u672c\u5f53\u306b\u300c%%name%%\u300d\u304b\u3089\u306e\u627f\u8a8d\u4f9d\u983c\u3092\u62d2\u5426\u3057\u307e\u3059\u304b\uff1f",nickname_title: "\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u306e\u8a2d\u5b9a",button_save_long: "\u4fdd\u5b58\u3059\u308b",facebook_apprequests_message: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u62db\u5f85\u304c\u5c4a\u304d\u307e\u3057\u305f\u3002\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u30c1\u30e3\u30c3\u30c8\u30fb\u30bf\u30b9\u30af\u7ba1\u7406\u30fb\u30d5\u30a1\u30a4\u30eb\u5171\u6709\u304c\u3067\u304d\u308b\u3001\u7121\u6599\u306e\u30af\u30e9\u30a6\u30c9\u578b\u30d3\u30b8\u30cd\u30b9\u30c1\u30e3\u30c3\u30c8\u30c4\u30fc\u30eb\u3067\u3059",
    contact_search_from_facebook_complete: "Facebook\u3078\u62db\u5f85\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f",contact_myrequest: "\u30b3\u30f3\u30bf\u30af\u30c8\u627f\u8a8d\u4f9d\u983c",contact_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u306e\u9001\u4fe1",word_separator: "\u30fb",contact_is_completed: "\u3092\u3057\u307e\u3057\u305f",button_accept_long: "\u627f\u8a8d\u3059\u308b",button_reject_long: "\u62d2\u5426\u3059\u308b",button_add_long: "\u8ffd\u52a0\u3059\u308b",contact_add_all_hint: "\u81ea\u5206\u3068\u540c\u3058\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306b\u3044\u308b\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u3066\u3044\u306a\u3044\u30e1\u30f3\u30d0\u30fc\u3067\u3059",
    contact_show_more: "\u3055\u3089\u306b\u8868\u793a",contact_show_more_remain: "\u6b8b\u308a%%num%%\u4ef6",find_friends_from_third_party_service_reconnect_error: "%%provider%%\u304b\u3089\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u30d6\u30e9\u30a6\u30b6\u3092\u5b8c\u5168\u306b\u9589\u3058\u3066\u304b\u3089\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044",contact_mail_not_found: "\u6307\u5b9a\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002<br />\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u767b\u9332\u3092\u6848\u5185\u3059\u308b\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u3053\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u9001\u4fe1\u3057\u307e\u3059\u304b\uff1f",
    contact_do_invite: "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1",contact_error_notselect: "\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u305f\u3044\u4eba\u3092\u9078\u629e\u3057\u3066\u4e0b\u3055\u3044",contact_error_search_user_not_found: "\u8a72\u5f53\u30e6\u30fc\u30b6\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",menu_profile_setting: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb",profile_error_no_displayname: "\u8868\u793a\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
    profile_error_invalid_cwid: "\u4f7f\u7528\u3067\u304d\u306a\u3044\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059",saving: "\u4fdd\u5b58\u4e2d...",menu_personal_setting: "\u52d5\u4f5c\u8a2d\u5b9a",mailaddress: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",error_maxlength: "%%length%%\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",error_invalidchar: "\u534a\u89d2\u306e\u82f1\u6570\u5b57\u3068 - _ \u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059",
    error_already_used: "\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059",available: "\u4f7f\u7528\u3067\u304d\u307e\u3059",sound_no_support: "\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u901a\u77e5\u97f3\u306e\u518d\u751f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n(Google Chrome,Firefox,Safari,Opera\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059)",lang_title: "\u8a00\u8a9e\u8a2d\u5b9a",announce_button_close: "\u3053\u306e\u544a\u77e5\u3092\u975e\u8868\u793a\u306b\u3059\u308b",
    announce_confirm_close: "\u3053\u306e\u544a\u77e5\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\u304b\uff1f",menu_theme_setting: "\u30c6\u30fc\u30de\u8a2d\u5b9a",button_back: "\u623b\u308b",button_next: "\u6b21\u3078",button_close: "\u9589\u3058\u308b",stepguide_welcome_title: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u3088\u3046\u3053\u305d",stepguide_start_stepguide_title: "\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3092\u306f\u3058\u3081\u3088\u3046",loading: "\u8aad\u307f\u8fbc\u307f\u4e2d...",
    stepguide_bonus_storage_added: "\u53d6\u5f97\u6e08\u307f",stepguide_complete_title: "\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01\u8ffd\u52a0\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u30a2\u30c3\u30d7\uff01",desktopalert_no_support: "\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u901a\u77e5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n(Google Chrome\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059)",
    menu_desktopalert: "\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u901a\u77e5",menu_current: "\u73fe\u5728\uff1a",stepguide_profile_picture: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf",ChatWorkId: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID",menu_sound: "\u901a\u77e5\u97f3",turn_off_popup_blocker: "\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u30d6\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3057\u3066\u304f\u3060\u3055\u3044",file_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u300c%%file_name%%\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    file_edit_title: "\u30d5\u30a1\u30a4\u30eb\u540d\u306e\u7de8\u96c6",file_error_empty: "\u30d5\u30a1\u30a4\u30eb\u540d\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",error_upload_executable: "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u306b\u3088\u308a\u3001\u5b9f\u884c\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093",error_illegal_filename: '\u30d5\u30a1\u30a4\u30eb\u540d\u306b\u306f\u6b21\u306e\u6587\u5b57\u306f\u4f7f\u3048\u307e\u305b\u3093\n \\ / : * ? " < > |',
    file_preview_open_newwindow: "\u753b\u50cf\u3092\u65b0\u3057\u3044\u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u8868\u793a",file_preview_download: "\u753b\u50cf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",file_loading: "\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",file_preview_original: "\u30af\u30ea\u30c3\u30af\u3057\u3066\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u5927\u304d\u3055\u3067\u8868\u793a",menu_file: "\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406",error_upload_over_max_filesize: "\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c %%max_size%%\u3088\u308a\u5927\u304d\u3044\u30d5\u30a1\u30a4\u30eb\u306f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3002\n\uff08\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3088\u3046\u3068\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\uff1a%%size%%\uff09",
    error_upload_image: "\u753b\u50cf\u5f62\u5f0f\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044 (JPEG,GIF,PNG\u304c\u4f7f\u3048\u307e\u3059)",file_nothing: "\u30d5\u30a1\u30a4\u30eb\u306f\u73fe\u5728\u3042\u308a\u307e\u305b\u3093",storage_limit_warning_message: "[\u91cd\u8981]\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u6a5f\u80fd\u3092\u505c\u6b62\u3057\u307e\u3057\u305f",storage_limit_warning_body: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u5236\u9650\u306e\u4e0a\u9650\u306b\u9054\u3057\u3066\u304b\u30891\u9031\u9593\u304c\u7d4c\u904e\u3057\u305f\u305f\u3081\u3001<br />\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u6a5f\u80fd\u3092\u505c\u6b62\u3057\u307e\u3057\u305f\u3002<br /><br />\u3054\u5229\u7528\u3092\u7d99\u7d9a\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001<br />",
    storage_limit_warning_title: "\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u6a5f\u80fd\u3092\u505c\u6b62\u3057\u307e\u3057\u305f",storage_limit_notice_message: "[\u6ce8\u610f]\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u306e\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f",storage_limit_notice_footer: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u5236\u9650\u306b\u9054\u3057\u305f\u307e\u307e1\u9031\u9593(%%date%%)\u304c\u7d4c\u904e\u3059\u308b\u3068\u3001<br />\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u9001\u4fe1\u304c\u884c\u3048\u306a\u304f\u306a\u308a\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002",
    storage_limit_notice_body: "\u73fe\u5728\u306e\u3054\u5229\u7528\u30d7\u30e9\u30f3\u3067\u306f\u3053\u308c\u4ee5\u4e0a\u30d5\u30a1\u30a4\u30eb\u9001\u4fe1\u3092\u884c\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002<br /><br />\u3054\u5229\u7528\u3092\u7d99\u7d9a\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001<br />",storage_limit_notice_title: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f",
    storage_activity_ratio_label: "\u30b9\u30c8\u30ec\u30fc\u30b8\u4f7f\u7528\u7387",storage_used: "\u4f7f\u7528",storage_other_user: "\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc",storage_show_all_user: "\u4e00\u89a7\u3092\u8868\u793a",storage_add_link: "\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8ffd\u52a0\u3059\u308b",task_edit_title: "\u30bf\u30b9\u30af\u306e\u7de8\u96c6",task_error_empty: "\u30bf\u30b9\u30af\u5185\u5bb9\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",task_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30bf\u30b9\u30af\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    error_no_login_action: "\u6b63\u5e38\u306b\u30ed\u30b0\u30a4\u30f3\u3055\u308c\u3066\u3044\u306a\u3044\u70ba\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093",menu_mytask: "\u30bf\u30b9\u30af\u7ba1\u7406",task_incharge: "\u62c5\u5f53\u8005",task_client: "\u4f9d\u983c\u8005",task_loading: "\u30bf\u30b9\u30af\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",task_nothing: "\u30bf\u30b9\u30af\u306f\u73fe\u5728\u3042\u308a\u307e\u305b\u3093",chat_category_create: "\u30ab\u30c6\u30b4\u30ea\u3092\u65b0\u898f\u4f5c\u6210",
    button_create_long: "\u4f5c\u6210\u3059\u308b",multiselect_label: "\u500b\u9078\u629e\u4e2d",chat_category_edit: "\u30ab\u30c6\u30b4\u30ea\u306e\u7de8\u96c6",chat_category_error_no_name: "\u30ab\u30c6\u30b4\u30ea\u540d\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",chat_category_error_no_chats: "\u30c1\u30e3\u30c3\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093",chat_category_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30ab\u30c6\u30b4\u30ea\u300c%%category_name%%\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chatroom_member_requests_notice: "\u53c2\u52a0\u672a\u627f\u8a8d\u306e\u30e1\u30f3\u30d0\u30fc\u304c\u3044\u307e\u3059 (%%request_num%%\u4ef6)",chat_rest_roomtip: "\u6b8b\u308a\u306e\u30c1\u30e3\u30c3\u30c8\u6570:",chat_show_more: "\u3055\u3089\u306b\u8868\u793a",joinpublicchat_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u306e\u53c2\u52a0",joinpublicchat_join: "\u3053\u306e\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u53c2\u52a0\u3059\u308b",joinpublicchat_request_sent: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u7ba1\u7406\u8005\u3078\u53c2\u52a0\u4f9d\u983c\u3092\u9001\u308a\u307e\u3057\u305f\u3002\u7ba1\u7406\u8005\u304c\u627f\u8a8d\u3059\u308b\u3068\u3001\u305d\u306e\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u53c2\u52a0\u3067\u304d\u307e\u3059\u3002",
    chatroom_not_only_internal: "\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u30c1\u30e3\u30c3\u30c8",room_request_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u306e\u53c2\u52a0\u30ea\u30af\u30a8\u30b9\u30c8\u4e00\u89a7",role: "\u6a29\u9650",admin: "\u7ba1\u7406\u8005",member: "\u30e1\u30f3\u30d0\u30fc",readonly: "\u95b2\u89a7\u306e\u307f",chat_loading: "\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",chat_edited_log: "\u30e1\u30c3\u30bb\u30fc\u30b8\u306f%%date%%\u306b\u7de8\u96c6\u3055\u308c\u307e\u3057\u305f",
    chat_deleted: "\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f",chat_deleted_log: "\u30e1\u30c3\u30bb\u30fc\u30b8\u306f%%date%%\u306b\u524a\u9664\u3055\u308c\u307e\u3057\u305f",chatroom_filelist_maxresults: "(\u6700\u5927100\u4ef6\u307e\u3067)",chatroom_tasklist_maxresults: "(\u6700\u5927100\u4ef6\u307e\u3067)",chatroom_error_noadmin: "1\u4eba\u4ee5\u4e0a\u306e\u7ba1\u7406\u8005\u304c\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",chatroom_error_noself: "\u81ea\u5206\u304c\u5165\u3063\u3066\u3044\u306a\u3044\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093",
    adding: "\u8ffd\u52a0\u4e2d\u2026",chatroom_error_cant_add: "\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",chatroom_error_planlimit: "%%plan_name%%\u3067\u306f%%limit_num%%\u500b\u307e\u3067\u3057\u304b\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002<br>\u65b0\u3057\u304f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u3054\u691c\u8a0e\u304f\u3060\u3055\u3044\u3002",
    error_upload_filesize: "\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3059\u304e\u308b\u305f\u3081\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",error_upload_filetype: "\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5f62\u5f0f\u306e\u305f\u3081\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",chatroom_desc_explain: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u8aac\u660e\u3084\u30e1\u30e2\u3001\u95a2\u9023\u3059\u308b\u30ea\u30f3\u30af\u306a\u3069\u3092\u8a18\u5165\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",
    chatroom_add_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u65b0\u898f\u8ffd\u52a0",chatroom_add_member: "\u30e1\u30f3\u30d0\u30fc\u8ffd\u52a0\uff1a",chatroom_addchat_same_members_confirm: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30f3\u30d0\u30fc\u306b\u306f\u30b3\u30f3\u30bf\u30af\u30c8\u3067\u306f\u306a\u3044\u30e1\u30f3\u30d0\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\n\u30b3\u30f3\u30bf\u30af\u30c8\u306b\u306a\u3063\u3066\u3044\u308b\u30e1\u30f3\u30d0\u30fc\u306e\u307f\u3067\u30c1\u30e3\u30c3\u30c8\u3092\u65b0\u898f\u8ffd\u52a0\u3057\u307e\u3059\u304b\uff1f",
    error_no_select: "\u30c1\u30e3\u30c3\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093",chatroom_confirm_delete_html: '\u672c\u5f53\u306b\u300c%%room_name%%\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f\n\n\u3053\u306e\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306b\u53c2\u52a0\u3057\u3066\u3044\u308b<strong>\u30e1\u30f3\u30d0\u30fc\u5168\u54e1</strong>\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3001\u30bf\u30b9\u30af\u3001\u30d5\u30a1\u30a4\u30eb\u306f\u3059\u3079\u3066\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u81ea\u5206\u3060\u3051\u304c\u30e1\u30f3\u30d0\u30fc\u304b\u3089\u629c\u3051\u305f\u3044\u5834\u5408\u306f\u3001\u524a\u9664\u3067\u306f\u306a\u304f\u9000\u5e2d\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002\n<span style="color:red;font-weight:bold">\u203b\u4e00\u5ea6\u524a\u9664\u3059\u308b\u3068\u5143\u306b\u623b\u305b\u307e\u305b\u3093\uff01</span>',
    chatroom_confirm_leave: "\u672c\u5f53\u306b\u300c%%room_name%%\u300d\u304b\u3089\u9000\u5e2d\u3057\u307e\u3059\u304b\uff1f\n\u9000\u5e2d\u3059\u308b\u3068\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u5185\u5bb9\u3092\u95b2\u89a7\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002\n\u518d\u5ea6\u53c2\u52a0\u3057\u305f\u3044\u5834\u5408\u306f\u53c2\u52a0\u30e1\u30f3\u30d0\u30fc\u306b\u62db\u5f85\u3057\u3066\u3082\u3089\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n(\u203b\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306b\u3042\u308b\u81ea\u5206\u304c\u62c5\u5f53\u8005\u306e\u30bf\u30b9\u30af\u3001\u304a\u3088\u3073\u9001\u4fe1\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306f\u524a\u9664\u3055\u308c\u307e\u3059)",
    chatroom_change_directchat: "\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u306e\u60c5\u5831\u3092\u7de8\u96c6",chatroom_change_mychat: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8\u306e\u60c5\u5831\u3092\u5909\u66f4",chatroom_change_groupchat: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u60c5\u5831\u3092\u7de8\u96c6",groupcall: "\u30b0\u30eb\u30fc\u30d7\u901a\u8a71",groupcall_call: "\u901a\u8a71\u958b\u59cb",groupcall_error_no_select: "\u30b0\u30eb\u30fc\u30d7\u901a\u8a71\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u4e00\u4eba\u4ee5\u4e0a\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
    adminsetting_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u516c\u958b\u30fb\u6a29\u9650\u8a2d\u5b9a",adminsetting_error_invalid_link_name: "\u4f7f\u7528\u3067\u304d\u306a\u3044\u30ea\u30f3\u30af\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059",guest: "\u30b2\u30b9\u30c8",chatroom_show_limit_member_num: "(\u6700\u5927%%num%%\u4eba\u8868\u793a)",chatroom_member_role_admin_desc: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u540d\u3001\u6982\u8981\u3001\u30e1\u30f3\u30d0\u30fc\u306e\u5909\u66f4\u304c\u3067\u304d\u307e\u3059\u3002",
    chatroom_member_role_member_desc: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u540d\u3001\u6982\u8981\u3001\u30e1\u30f3\u30d0\u30fc\u306e\u5909\u66f4\u306f\u3067\u304d\u307e\u305b\u3093\u3002",chatroom_member_role_readonly_desc: "\u95b2\u89a7\u306e\u307f\u3067\u304d\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u9001\u4fe1\u306f\u3067\u304d\u307e\u305b\u3093\u3002",chatroom_member_count_unit: "\u540d",groupcall_no_members: "Skype\u901a\u8a71\u53ef\u80fd\u306a\u30e6\u30fc\u30b6\u30fc\u306f\u3044\u307e\u305b\u3093",
    chatsend_task_explain: "\u3053\u3053\u306b\u30bf\u30b9\u30af\u5185\u5bb9\u3092\u5165\u529b",chatsend_chat_explain: "\u3053\u3053\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9\u3092\u5165\u529b",chatsend_enter_action_explain_enter: "\n(Shift + Enter\u30ad\u30fc\u3067\u6539\u884c)",chatsend_shift_multiselect: "Shift\u30ad\u30fc\u3067\u9023\u7d9a\u9078\u629e",chatsend_file_sending: "\u9001\u4fe1\u4e2d...",upload_cancel_send_message: "\u4e00\u6642\u7684\u306b\u30d5\u30a1\u30a4\u30eb\u9001\u4fe1\u304c\u884c\u3048\u306a\u3044\u72b6\u614b \u3082\u3057\u304f\u306f\u3001\u9001\u4fe1\u3057\u3088\u3046\u3068\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u304c\u73fe\u5728\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8d85\u3048\u3066\u3044\u308b\u305f\u3081\u3001\u9001\u4fe1\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f\u3002<br /><br />\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\uff1a%%size%%<br /><br />\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u8d85\u3048\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u7ba1\u7406\u3088\u308a\u4e0d\u8981\u306a<br />\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664\u3092\u884c\u3046\u304b\u3001",
    chatsend_filesend: "\u30d5\u30a1\u30a4\u30eb\u9001\u4fe1",chat_action_copy_title: "\u30e1\u30c3\u30bb\u30fc\u30b8\u5185\u5bb9",chatsend_error_no_exist_for_edit: "\u7de8\u96c6\u3057\u3088\u3046\u3068\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u5b58\u5728\u3057\u307e\u305b\u3093",chatsend_delete_filetip: "\u524a\u9664\u5bfe\u8c61\u306e\u30d5\u30a1\u30a4\u30eb\uff1a",chatsend_confirm_delete_with_file: "\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u4e00\u7dd2\u306b\u30d5\u30a1\u30a4\u30eb\u3082\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
    chatsend_button_delete_with_file: "\u30d5\u30a1\u30a4\u30eb\u3082\u4e00\u7dd2\u306b\u524a\u9664",chatsend_button_delete_message_only: "\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u307f\u524a\u9664",chatsend_delete_tasktip: "\u524a\u9664\u5bfe\u8c61\u306e\u30bf\u30b9\u30af\uff1a",chatsend_confirm_delete_with_task: "\u901a\u77e5\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u4e00\u7dd2\u306b\u30bf\u30b9\u30af\u3082\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",chatsend_button_delete_with_task: "\u30bf\u30b9\u30af\u3082\u4e00\u7dd2\u306b\u524a\u9664",
    chatsend_confirm_delete: "\u672c\u5f53\u306b\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",chatsend_error_no_incharge: "\u62c5\u5f53\u8005\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044",chatsend_error_send: "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u4e0d\u5b89\u5b9a\u3067\u30c1\u30e3\u30c3\u30c8\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u518d\u5ea6\u9001\u4fe1\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    chatsend_error_send_task: "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u4e0d\u5b89\u5b9a\u3067\u30bf\u30b9\u30af\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u518d\u5ea6\u9001\u4fe1\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002",button_send: "\u9001\u4fe1",button_add: "\u8ffd\u52a0",search_trial_button: "\u304a\u8a66\u3057\u5229\u7528\u3057\u3066\u307f\u308b(%%rest_num%%\u56de)",search_title: "\u30e1\u30c3\u30bb\u30fc\u30b8\u691c\u7d22",
    search_speaker_all: "\u3059\u3079\u3066",search_result_bychat_openall: "\u3059\u3079\u3066\u958b\u304f",search_result_bychat_closeall: "\u3059\u3079\u3066\u9589\u3058\u308b",search_result_unit: "\u4ef6",chat_action_quote_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5f15\u7528\u3059\u308b",chat_action_quote: "\u5f15\u7528",search_result_not_found: "%%keyword%% \u306b\u4e00\u81f4\u3059\u308b\u691c\u7d22\u7d50\u679c\u306f\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",stepguide_complete_reload_confirm: "\u7372\u5f97\u3057\u305f\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u53cd\u6620\u3059\u308b\u305f\u3081\u306b\u306f\u30d6\u30e9\u30a6\u30b6\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3044\u307e\u3059\u3050\u518d\u8aad\u307f\u8fbc\u307f\u3057\u307e\u3059\u304b\uff1f",
    userguide_title: "%%service_name%%\u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",file_uploaded: "\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3057\u305f\u3002",task_edited: "\u30bf\u30b9\u30af\u3092\u7de8\u96c6\u3057\u307e\u3057\u305f\u3002",chatroom_adminsetting_edited: "\u30c1\u30e3\u30c3\u30c8\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",chatroom_chatname_is: "\u30c1\u30e3\u30c3\u30c8\u540d\u3092\u300c",chatroom_set: "\u300d\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u3002",
    chatroom_description_is: "\u6982\u8981\u3092\u300c",chatroom_over_groupchatnum: "\u306f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u5236\u9650\u6570\u3092\u8d8a\u3048\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002",chatroom_disable_external: "\u306f\u7d44\u7e54\u5916\u30e6\u30fc\u30b6\u30fc\u3068\u306e\u3084\u308a\u3068\u308a\u304c\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
    chatroom_member_is: "\u30e1\u30f3\u30d0\u30fc\u300c",chatroom_added: "\u300d\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",chatroom_contact_added: "\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",chatroom_mychat_created: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002",chatroom_groupchat_created: "\u65b0\u3057\u304f\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002",chatroom_changed: "\u300d\u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_priv_changed: "\u300d\u306e\u6a29\u9650\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",chatroom_deleted: "\u300d\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002",chatroom_icon_updated: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",chatroom_chat_edited: "\u30c1\u30e3\u30c3\u30c8\u60c5\u5831\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",chatroom_resigned_priv_change: "\u300d\u304c\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u89e3\u7d04\u3057\u305f\u305f\u3081\u3001\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u3092\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u304b\u3089\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3078\u3068\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
    chatroom_leaved: "\u300d\u304c\u9000\u5e2d\u3057\u307e\u3057\u305f\u3002",chatroom_resigned_priv_change_all: "\u3053\u306e\u30c1\u30e3\u30c3\u30c8\u306e\u7ba1\u7406\u8005\u304c\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001\u30e1\u30f3\u30d0\u30fc\u5168\u54e1\u306e\u6a29\u9650\u3092\u7ba1\u7406\u8005\u3078\u3068\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",task_added: "\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002",task_done: "\u30bf\u30b9\u30af\u3092\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002",
    task_reverted: "\u30bf\u30b9\u30af\u3092\u672a\u5b8c\u4e86\u306b\u623b\u3057\u307e\u3057\u305f\u3002",file_edited: "\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u7de8\u96c6\u3057\u307e\u3057\u305f\u3002",chatroom_chat_joined: "\u30c1\u30e3\u30c3\u30c8\u306b\u53c2\u52a0\u3057\u307e\u3057\u305f\u3002",mychat_default_desc: "\u30de\u30a4\u30c1\u30e3\u30c3\u30c8\u306f\u81ea\u5206\u5c02\u7528\u306e\u30c1\u30e3\u30c3\u30c8\u3067\u3059\u3002\u81ea\u5206\u7528\u306e\u30e1\u30e2\u3084\u30bf\u30b9\u30af\u7ba1\u7406\u3001\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u30fc\u3068\u3057\u3066\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",
    third_party_service_setting_error_connected_another_account: "\u3059\u3067\u306b\u4ed6\u306e\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u9023\u643a\u6e08\u307f\u3067\u3059",third_party_service_setting_error_already_connected: "\u3059\u3067\u306b\u9023\u643a\u6e08\u307f\u3067\u3059",find_friends_from_third_party_service_error_different_user: "\u73fe\u5728\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b%%provider%%\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u3001\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u9023\u643a\u3067\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3068\u7570\u306a\u308b\u305f\u3081\u3001\u77e5\u308a\u5408\u3044\u691c\u7d22\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002\n\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u9023\u643a\u306e\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    profile_setting_privacy_public: "\u516c\u958b",profile_setting_privacy_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u307f",lang_typetip: "\u4f7f\u7528\u3059\u308b\u8a00\u8a9e:",lang_dateformattip: "\u65e5\u4ed8\u306e\u66f8\u5f0f:",lang_ja: "\u65e5\u672c\u8a9e",lang_ja_change_confirm: "\u8a00\u8a9e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\u30d6\u30e9\u30a6\u30b6\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3059\u308b\u3068\u53cd\u6620\u3055\u308c\u307e\u3059\u3002\n\u3044\u307e\u3059\u3050\u518d\u8aad\u307f\u8fbc\u307f\u3057\u307e\u3059\u304b\uff1f",
    lang_ja_button_ok: "OK",lang_ja_button_cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",lang_en: "English",lang_en_change_confirm: "Your language has been changed but your browser needs to be refreshed for the change to be reflected.\nWould you like to refresh now?",lang_en_button_ok: "OK",lang_en_button_cancel: "Cancel","lang_zh-cn": "\u7b80\u4f53\u4e2d\u6587 (beta)",lang_zh_cn: "\u7b80\u4f53\u4e2d\u6587 (beta)","lang_zh-cn_change_confirm": "\u8bed\u8a00\u8bbe\u5b9a\u8fdb\u884c\u4e86\u53d8\u66f4\u3002\u5bf9\u6d4f\u89c8\u5668\u8fdb\u884c\u5237\u65b0\u540e\u5c06\u5f97\u5230\u663e\u793a\u3002\n\u73b0\u5728\u9a6c\u4e0a\u5237\u65b0\u5417\uff1f",
    "lang_zh-cn_button_ok": "OK","lang_zh-cn_button_cancel": "\u53d6\u6d88",lang_vi: "Ti\u1ebfng Vi\u1ec7t (beta)",lang_vi_change_confirm: "Thay \u0111\u1ed5i c\u00e0i \u0111\u1eb7t ng\u00f4n ng\u1eef. Ph\u1ea7n c\u00e0i \u0111\u1eb7t s\u1ebd \u0111\u01b0\u1ee3c k\u00edch ho\u1ea1t sau khi l\u00e0m m\u1edbi trang web.\nB\u1ea1n c\u00f3 mu\u1ed1n l\u00e0m m\u1edbi l\u1ea1i trang ch\u1ee7 kh\u00f4ng?",lang_vi_button_ok: "OK",lang_vi_button_cancel: "H\u1ee7y",stepguide_step_profile: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u8a2d\u5b9a\u3057\u3088\u3046",
    stepguide_step_profile_title: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u8a2d\u5b9a\u3057\u3088\u3046",stepguide_step_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u30924\u4eba\u8ffd\u52a0\u3057\u3088\u3046",stepguide_step_contact_title: "\u30b3\u30f3\u30bf\u30af\u30c8\u30924\u4eba\u8ffd\u52a0\u3057\u3088\u3046",stepguide_step_group: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u30924\u3064\u8ffd\u52a0\u3057\u3088\u3046",stepguide_step_group_title: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u30924\u3064\u8ffd\u52a0\u3057\u3088\u3046",
    stepguide_note: "\u30b9\u30c6\u30c3\u30d7\u5b8c\u4e86\u3067\u5bb9\u91cf\u30a2\u30c3\u30d7\uff01",stepguide_note_mini: "140MB\u306b\u5bb9\u91cf\u30a2\u30c3\u30d7\uff01",stepguide_show_howto_set: "\u8a2d\u5b9a\u65b9\u6cd5\u3092\u898b\u308b",stepguide_show_howto_add: "\u8ffd\u52a0\u65b9\u6cd5\u3092\u898b\u308b",stepguide_complete_button: "14MB \u2192 140MB\u306b\u30a2\u30c3\u30d7",stepguide_profile: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u8a2d\u5b9a",stepguide_profile_about: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u8a2d\u5b9a\u3068\u306f",
    stepguide_profile_about_content: "<p>\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u8a2d\u5b9a\u3067\u306f\u3001\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u3001\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u306e\u8a2d\u5b9a\u306a\u3069\u304c\u3067\u304d\u307e\u3059\u3002\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u72ec\u81ea\u306eURL\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30de\u30a4\u30da\u30fc\u30b8\u3092\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u4f9d\u983c\u304c\u7c21\u5358\u306b\u3067\u304d\u307e\u3059\u3002</p><p>\uff08\u4f8b\uff09http://chatwork.com/[\u8a2d\u5b9a\u3057\u305f\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID]</p><p>\u307e\u305f\u3001\u8a2d\u5b9a\u3057\u305f\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u3067\u30b3\u30f3\u30bf\u30af\u30c8\u691c\u7d22\u304c\u3067\u304d\u308b\u306e\u3067\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u53d6\u308a\u305f\u3044\u76f8\u624b\u304c\u898b\u3064\u3051\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002</p><p>\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3067\u306f\u3001\u300c\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u300d\u300c\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u300d\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u30b9\u30c6\u30c3\u30d7\u5b8c\u4e86\u3068\u306a\u308a\u307e\u3059\u3002</p>",
    stepguide_profile_open_setting: "\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u9762\u3092\u958b\u304f",stepguide_profile_open_setting_content: "<p>\u753b\u9762\u53f3\u4e0a\u306e\u81ea\u5206\u306e\u540d\u524d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30d7\u30eb\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u306e\u300c\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u300d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u8a2d\u5b9a\u753b\u9762\u304c\u958b\u304d\u307e\u3059\u3002</p>",
    stepguide_profile_upload_image: "\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",stepguide_profile_upload_image_content: "<p>\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u60c5\u5831\u306b\u3042\u308b\u300c\u753b\u50cf\u300d\u306e\u300c\u25bc\u5909\u66f4\u3059\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u300c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u753b\u50cf\u3092\u6307\u5b9a\u3057\u300c\u4fdd\u5b58\u3059\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001PC\u306b\u4fdd\u5b58\u3057\u3066\u3044\u308b\u753b\u50cf\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002</p>",
    stepguide_profile_chatworkid: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u306e\u8a2d\u5b9a",stepguide_profile_chatworkid_content: "<p>\u300c\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID\u300d \u306e\u7b87\u6240\u306b\u3001\u4efb\u610f\u306e\u534a\u89d2\u82f1\u6570\u5b57\u3092\u5165\u529b\u3057\u3001\u30da\u30fc\u30b8\u4e0b\u90e8\u306e\u300c\u4fdd\u5b58\u300d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3067\u3059\u3002</p>",stepguide_profile_chatworkid_content_after: "<p>\u8a2d\u5b9a\u306b\u306f\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u4ed6\u306b\u300c\u30c1\u30e3\u30c3\u30c8\u300d\u300c\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u300d\u8a2d\u5b9a\u304c\u3042\u308a\u307e\u3059\u3002\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u306bID\u3092\u767b\u9332\u3057\u3066\u304a\u304f\u3068\u3001\u8fd1\u65e5\u4e2d\u306b\u53cb\u9054\u304b\u3089\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u30e6\u30fc\u30b6\u30fc\u3092\u63a2\u305b\u308b\u3088\u3046\u306b\u306a\u308a\u3001\u975e\u5e38\u306b\u4fbf\u5229\u3067\u3059\u3002</p>",
    stepguide_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u8ffd\u52a0",stepguide_contact_about: "\u30b3\u30f3\u30bf\u30af\u30c8\u3068\u306f",stepguide_contact_about_content: "<p>\u30b3\u30f3\u30bf\u30af\u30c8\u3068\u306f\u3001\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3067\u4e00\u7dd2\u306b\u30c1\u30e3\u30c3\u30c8\u3057\u305f\u3044\u76f8\u624b\u3092\u767b\u9332\u3059\u308b\u9023\u7d61\u5e33\u3067\u3059\u3002\u30b3\u30f3\u30bf\u30af\u30c8\u3068\u3057\u3066\u767b\u9332\u3057\u3066\u304a\u304f\u3068\u3001\u305d\u306e\u4eba\u30681\u5bfe1\u3067\u3064\u306a\u304c\u308b\u30c0\u30a4\u30ec\u30af\u30c8\u30c1\u30e3\u30c3\u30c8\u304c\u81ea\u52d5\u3067\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002</p><p>\u307e\u305f\u3001\u8907\u6570\u4eba\u3067\u3084\u308a\u3068\u308a\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306b\u30e1\u30f3\u30d0\u30fc\u8ffd\u52a0\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002<br />\u203b\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u8ffd\u52a0\u306b\u306f\u76f8\u624b\u306e\u627f\u8a8d\u304c\u5fc5\u8981\u3067\u3059\u3002</p><p>\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3067\u306f\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u30924\u4eba\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001\u30b9\u30c6\u30c3\u30d7\u5b8c\u4e86\u3068\u306a\u308a\u307e\u3059\u3002</p>",
    stepguide_contact_add_people: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u308b\u76f8\u624b\u3092\u8ffd\u52a0\u3059\u308b",stepguide_contact_open_add: "\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u8ffd\u52a0\u753b\u9762\u3092\u958b\u304f",stepguide_contact_open_add_content: "<p>\u753b\u9762\u5de6\u4e0a\u306e[\u8ffd\u52a0]\u3001\u6b21\u306b[\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0]\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u8ffd\u52a0\u753b\u9762\u304c\u958b\u304d\u307e\u3059\u3002</p>",
    stepguide_contact_search_user: "\u8ffd\u52a0\u3057\u305f\u3044\u30e6\u30fc\u30b6\u30fc\u3092\u691c\u7d22",stepguide_contact_search_user_content: "<p>\u8ffd\u52a0\u3057\u305f\u3044\u30e6\u30fc\u30b6\u30fc\u304c\u3059\u3067\u306b\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001[\u540d\u524d]\u3001[\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9]\u3001[\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30afID]\u3067\u691c\u7d22\u3067\u304d\u307e\u3059\u3002</p><p>\u307e\u305f\u3001\u300cFacebook\u300d\u3084\u300cTwitter\u300d\u304b\u3089\u3082\u77e5\u308a\u5408\u3044\u3092\u691c\u7d22\u3067\u304d\u307e\u3059\u3002</p>",
    stepguide_contact_request: "\u627f\u8a8d\u4f9d\u983c\u3092\u884c\u3046",stepguide_contact_request_content: "<p>\u691c\u7d22\u7d50\u679c\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u3093\u3067[\u627f\u8a8d\u4f9d\u983c\u3092\u884c\u3046]\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u9078\u629e\u3057\u305f\u76f8\u624b\u306b\u627f\u8a8d\u4f9d\u983c\u304c\u9001\u3089\u308c\u307e\u3059\u3002\u9001\u3063\u305f\u76f8\u624b\u304c\u627f\u8a8d\u3059\u308b\u3068\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u30011\u4eba\u3068\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002</p>",
    stepguide_contact_invite_people: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u76f8\u624b\u3092\u62db\u5f85\u3059\u308b",stepguide_contact_send_invitation: "\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u308b",stepguide_contact_send_invitation_content: "<p>\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u76f8\u624b\u3092\u62db\u5f85\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u691c\u7d22\u30dc\u30c3\u30af\u30b9\u306b\u62db\u5f85\u3057\u305f\u3044\u76f8\u624b\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3001[\u691c\u7d22]\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u62db\u5f85\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8a18\u5165\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002</p>",
    stepguide_contact_accept_request: "\u672a\u627f\u8a8d\u306e\u4f9d\u983c\u3092\u627f\u8a8d\u3059\u308b",stepguide_contact_open_contact: "\u30b3\u30f3\u30bf\u30af\u30c8\u7ba1\u7406\u753b\u9762\u3092\u958b\u304f",stepguide_contact_open_contact_content: "<p>\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u627f\u8a8d\u4f9d\u983c\u304c\u3042\u308b\u5834\u5408\u3001\u4e0a\u90e8\u30e1\u30cb\u30e5\u30fc\u306e\u30b3\u30f3\u30bf\u30af\u30c8\u7ba1\u7406\u306b\u6570\u5b57\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u300c\u30b3\u30f3\u30bf\u30af\u30c8\u7ba1\u7406\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u300c\u672a\u627f\u8a8d\u300d\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u672a\u627f\u8a8d\u306e\u30e6\u30fc\u30b6\u30fc\u4e00\u89a7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002</p><p>\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u627f\u8a8d\u4f9d\u983c\u304c\u3042\u308b\u5834\u5408\u3001\u4e0a\u90e8\u30e1\u30cb\u30e5\u30fc\u306e\u30b3\u30f3\u30bf\u30af\u30c8\u7ba1\u7406\u306b\u6570\u5b57\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u300c\u30b3\u30f3\u30bf\u30af\u30c8\u7ba1\u7406\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u300c\u672a\u627f\u8a8d\u300d\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u672a\u627f\u8a8d\u306e\u30e6\u30fc\u30b6\u30fc\u4e00\u89a7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002</p>",
    stepguide_contact_accept: "\u4f9d\u983c\u3092\u627f\u8a8d\u3059\u308b",stepguide_contact_accept_content: "<p>\u8ffd\u52a0\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u300c\u627f\u8a8d\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u300c\u627f\u8a8d\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30b3\u30f3\u30bf\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u30671\u4eba\u3068\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002</p>",
    stepguide_group: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u306e\u8ffd\u52a0",stepguide_group_about: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3068\u306f",stepguide_group_about_content_head: "<p>\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3068\u306f\u3001\u8907\u6570\u4eba\u3067\u30c1\u30e3\u30c3\u30c8\u304c\u3067\u304d\u308b\u6a5f\u80fd\u3067\u3059\u3002\u30c1\u30e3\u30c3\u30c8\u3067\u304d\u308b\u4eba\u6570\u306b\u5236\u9650\u306f\u306a\u304f\u3001\u4f55\u4eba\u3067\u3082\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002</p><p>\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u76ee\u7684\u306b\u5fdc\u3058\u3066\u4f5c\u6210\u3059\u308b\u306e\u304c\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u3046\u307e\u304f\u6d3b\u7528\u3059\u308b\u30b3\u30c4\u3067\u3059\u3002\u6b21\u306e\u3088\u3046\u306a\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u3063\u3066\u306f\u3044\u304b\u304c\u3067\u3057\u3087\u3046\u304b\u3002</p>",
    stepguide_group_about_for_business: "\u304a\u4ed5\u4e8b\u3067",stepguide_group_about_for_business_eg: "<li>\u4f1a\u793e\u306e\u90e8\u7f72\u3084\u30c1\u30fc\u30e0\u306e\u30e1\u30f3\u30d0\u30fc\u3068\u9023\u7d61\u7528\u30c1\u30e3\u30c3\u30c8</li><li>\u3084\u308a\u3068\u308a\u306e\u591a\u3044\u53d6\u5f15\u5148\u3068\u306e\u9023\u7d61\u30c1\u30e3\u30c3\u30c8</li><li>\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3084\u6848\u4ef6\u3054\u3068\u306e\u30c1\u30e3\u30c3\u30c8</li>",stepguide_group_about_for_private: "\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u3067",
    stepguide_group_about_for_private_eg: "<li>\u3054\u5bb6\u65cf\u3084\u3001\u3044\u3064\u3082\u306e\u98f2\u307f\u4ef2\u9593\u3068\u306e\u4ea4\u6d41\u30c1\u30e3\u30c3\u30c8</li><li>\u30a4\u30d9\u30f3\u30c8\u3084\u3001\u65c5\u884c\u306e\u8a08\u753b\u3092\u7acb\u3066\u308b\u30c1\u30e3\u30c3\u30c8</li>",stepguide_group_about_content_foot: '\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3067\u306f\u3001<span class="ui_attention">2\u4eba\u4ee5\u4e0a</span>\u306e\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u30924\u3064\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3001\u30b9\u30c6\u30c3\u30d7\u5b8c\u4e86\u3068\u306a\u308a\u307e\u3059\u3002',
    stepguide_group_open_add: "\u30c1\u30e3\u30c3\u30c8\u306e\u8ffd\u52a0\u753b\u9762\u3092\u958b\u304f",stepguide_group_open_add_content: "\u753b\u9762\u5de6\u4e0a\u306e[\u8ffd\u52a0]\u3001\u6b21\u306b[\u30c1\u30e3\u30c3\u30c8\u3092\u8ffd\u52a0]\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u8ffd\u52a0\u753b\u9762\u304c\u958b\u304d\u307e\u3059\u3002",stepguide_group_input_info: "\u30c1\u30e3\u30c3\u30c8\u60c5\u5831\u3092\u5165\u529b\u3059\u308b",stepguide_group_input_info_content: "\u30c1\u30e3\u30c3\u30c8\u540d\u3001\u30e1\u30f3\u30d0\u30fc\u3001\u6982\u8981\uff08\u4efb\u610f\uff09\u3001\u30a2\u30a4\u30b3\u30f3\u753b\u50cf\uff08\u4efb\u610f\uff09\u3001\u30c1\u30e3\u30c3\u30c8\u30e1\u30f3\u30d0\u30fc\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",
    stepguide_group_add: "\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u8ffd\u52a0\u3059\u308b",stepguide_group_add_content: "[\u8ffd\u52a0\u3059\u308b]\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002",stepguide_welcome_head: "\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3092\u5b8c\u4e86\u3055\u305b\u3066\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u30a2\u30c3\u30d7\uff01",stepguide_welcome_content: "<p>\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u521d\u3081\u3066\u4f7f\u3046\u65b9\u306e\u305f\u3081\u306b\u3001<br />\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u304c\u5b66\u3079\u308b\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u304c\u3042\u308a\u307e\u3059\u3002</p><p>\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u306e\u624b\u9806\u3092\u5168\u3066\u5b8c\u4e86\u3055\u305b\u308b\u3068\u3001<br />\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u304c140MB\u307e\u3067\u5897\u3048\u308b\u30dc\u30fc\u30ca\u30b9\u304c\u3042\u308a\u307e\u3059\u3002</p><p>\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u30de\u30b9\u30bf\u30fc\u3059\u308b\u305f\u3081\u306b\u3001<br />\u307e\u305a\u306f\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3092\u5b8c\u4e86\u3055\u305b\u307e\u3057\u3087\u3046\u3002</p>",
    stepguide_welcome_start: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u958b\u59cb\u3059\u308b",stepguide_start_stepguide_content: "<p>\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u3055\u3089\u306b\u6d3b\u7528\u3059\u308b\u305f\u3081\u306b\u3001<br />\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u304c\u5b66\u3079\u308b\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3092\u3054\u7528\u610f\u3057\u307e\u3057\u305f\u3002</p><p>\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u306e\u624b\u9806\u3092\u5168\u3066\u5b8c\u4e86\u3055\u305b\u308b\u3068\u3001<br />\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u304c140MB\u307e\u3067\u5897\u3048\u308b\u30dc\u30fc\u30ca\u30b9\u304c\u3042\u308a\u307e\u3059\u3002</p><p>\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3092\u5b8c\u4e86\u3055\u305b\u3066\u3001\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u3092\u5897\u3084\u3057\u307e\u3057\u3087\u3046\u3002</p>",
    stepguide_start_stepguide_start: "\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9\u3092\u958b\u59cb\u3059\u308b",stepguide_complete_hint: "\u3055\u3089\u306b\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u6d3b\u7528\u3059\u308b\u305f\u3081\u306e\u30d2\u30f3\u30c8",stepguide_complete_suggest_mobile: "\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u30a2\u30d7\u30ea\u3092\u4f7f\u3063\u3066\u307f\u307e\u305b\u3093\u304b\uff1f",stepguide_complete_mobile_content: "<p>iPhone\u3001Android\u3092\u3054\u5229\u7528\u306e\u65b9\u5411\u3051\u306b\u4fbf\u5229\u306a\u30a2\u30d7\u30ea\u304c\u3042\u308a\u307e\u3059\u3002<p><p>AppStore\u3001Android\u30de\u30fc\u30b1\u30c3\u30c8\u3067\u3001\u300c\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u300d\u3068\u691c\u7d22\u3057\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002</p>",
    stepguide_complete_suggest_social: "Twitter\u30fbFacebook\u30fbGoogle+\u306e\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u516c\u5f0f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044",stepguide_complete_social_content: "\u30c1\u30e3\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u6700\u65b0\u60c5\u5831\u3084\u3001\u4fbf\u5229\u306aTips\u3092\u3092\u304a\u4f1d\u3048\u3057\u3066\u3044\u307e\u3059\u306e\u3067\u3001<br />\u300c\u30d5\u30a9\u30ed\u30fc\u300d\u300c\u3044\u3044\u306d\uff01\u300d\u300c+1\u300d\u306a\u3069\u3092\u3057\u3066\u3044\u305f\u3060\u3051\u307e\u3059\u3068\u5e78\u3044\u3067\u3059\u3002",
    stepguide_error_bonus_already_added: "\u3059\u3067\u306b\u5bb9\u91cf\u30a2\u30c3\u30d7\u306f\u5b8c\u4e86\u3057\u3066\u3044\u307e\u3059",stepguide_error_bonus_not_cleared: "\u5bb9\u91cf\u30a2\u30c3\u30d7\u306b\u5fc5\u8981\u306a\u30b9\u30c6\u30c3\u30d7\u3092\u30af\u30ea\u30a2\u3067\u304d\u3066\u3044\u307e\u305b\u3093",stepguide_error_not_free: "\u30d5\u30ea\u30fc\u30d7\u30e9\u30f3\u3067\u306f\u306a\u3044\u30d7\u30e9\u30f3\u3067\u30dc\u30fc\u30ca\u30b9\u30b9\u30c8\u30ec\u30fc\u30b8\u304c\u7533\u3057\u8fbc\u307e\u308c\u307e\u3057\u305f",
    chat_action_reply: "\u8fd4\u4fe1",chat_action_reply_long: "\u8fd4\u4fe1\u3059\u308b",chat_action_reply_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u8fd4\u4fe1\u3059\u308b",chat_action_quote_long: "\u5f15\u7528\u3059\u308b",chat_action_edit: "\u7de8\u96c6",chat_action_edit_long: "\u7de8\u96c6\u3059\u308b",chat_action_edit_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u7de8\u96c6\u3059\u308b",chat_action_task: "\u30bf\u30b9\u30af",chat_action_task_long: "\u30bf\u30b9\u30af\u5316\u3059\u308b",
    chat_action_task_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30bf\u30b9\u30af\u5316\u3059\u308b",chat_action_more: "\u305d\u306e\u4ed6",chat_action_unread: "\u672a\u8aad",chat_action_unread_long: "\u672a\u8aad\u306b\u3059\u308b",chat_action_unread_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u307e\u3067\u3092\u672a\u8aad\u306b\u3059\u308b",chat_action_link: "\u30ea\u30f3\u30af",chat_action_link_long: "\u30ea\u30f3\u30af\u3092\u633f\u5165\u3059\u308b",chat_action_link_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u306e\u30ea\u30f3\u30af\u3092\u633f\u5165\u3059\u308b",
    chat_action_move: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",chat_action_move_long: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",chat_action_move_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u79fb\u52d5",chat_action_copy: "\u30b3\u30d4\u30fc",chat_action_copy_long: "\u30c6\u30ad\u30b9\u30c8\u3092\u30b3\u30d4\u30fc\u3059\u308b",chat_action_copy_desc: "\u30c6\u30ad\u30b9\u30c8\u3092\u30b3\u30d4\u30fc\u3059\u308b",chat_action_delete: "\u524a\u9664",chat_action_delete_long: "\u524a\u9664\u3059\u308b",
    chat_action_delete_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u524a\u9664\u3059\u308b",chat_action_mail: "\u30e1\u30fc\u30eb",chat_action_mail_long: "\u30e1\u30fc\u30eb\u3059\u308b",chat_action_mail_desc: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30e1\u30fc\u30eb\u3059\u308b",chat_action_title: "\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u5bfe\u3059\u308b\u64cd\u4f5c"}, datepicker_regional = {closeText: "\u9589\u3058\u308b",prevText: "&#x3c;\u524d",nextText: "\u6b21&#x3e;",currentText: "\u4eca\u65e5",
    monthNames: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],monthNamesShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],dayNames: ["\u65e5\u66dc\u65e5", "\u6708\u66dc\u65e5", "\u706b\u66dc\u65e5", "\u6c34\u66dc\u65e5", "\u6728\u66dc\u65e5", "\u91d1\u66dc\u65e5", "\u571f\u66dc\u65e5"],dayNamesShort: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", 
        "\u571f"],dayNamesMin: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],weekHeader: "\u9031",firstDay: 0,isRTL: !1,showMonthAfterYear: !0,yearSuffix: "\u5e74"}, jquery_layout_regional = {Open: "\u958b\u304f",Close: "\u9589\u3058\u308b",Resize: "\u30ea\u30b5\u30a4\u30ba",Slide: "\u30b9\u30e9\u30a4\u30c9\u30aa\u30fc\u30d7\u30f3",Pin: "\u56fa\u5b9a\u3059\u308b",Unpin: "\u56fa\u5b9a\u3092\u89e3\u9664",noRoomToOpenTip: "\u3053\u306e\u30da\u30a4\u30f3\u3067\u958b\u304f\u30eb\u30fc\u30e0\u306f\u3042\u308a\u307e\u305b\u3093",
    pane: "pane",selector: "selector",errButton: "Error Adding Button\n\nInvalid ",errContainerMissing: "UI Layout Initialization Error\n\nThe specified layout-container does not exist.",errContainerHeight: "UI Layout Initialization Warning\n\nThe layout-container \"CONTAINER\" has no height.\n\nTherefore the layout is 0-height and hence 'invisible'!",errCenterPaneMissing: "UI Layout Initialization Error\n\nThe center-pane element does not exist.\n\nThe center-pane is a required element."};
function escape_html(b) {
    if (!b || !b.replace)
        return b;
    b = b.replace(/&/g, "&amp;");
    b = b.replace(/"/g, "&quot;");
    b = b.replace(/'/g, "&#039;");
    b = b.replace(/</g, "&lt;");
    return b = b.replace(/>/g, "&gt;")
}
function unescape_html(b) {
    if (!b || !b.replace)
        return b;
    b = b.replace(/&quot;/g, '"');
    b = b.replace(/&#039;/g, "'");
    b = b.replace(/&lt;/g, "<");
    b = b.replace(/&gt;/g, ">");
    return b = b.replace(/&amp;/g, "&")
}
function sort_for_string(b, a) {
    for (var b = b.toLowerCase(), a = a.toLowerCase(), f = 0, e = 0, d; e == 0; ) {
        e = b.charCodeAt(f);
        d = a.charCodeAt(f);
        if (isNaN(e))
            if (isNaN(d))
                return 0;
            else {
                e = -1;
                continue
            }
        else if (isNaN(d)) {
            e = 1;
            continue
        }
        e = b.charCodeAt(f) - a.charCodeAt(f);
        f++
    }
    return e
}
function bytename(b, a, f, e) {
    a == void 0 && (a = "B");
    unim = ["", "K", "M", "G", "T", "P"];
    f == void 0 && (f = 2);
    var d;
    if (e != void 0)
        for (var i in unim)
            unim[i] == e && (d = i);
    for (c = 0; b >= 1024; )
        c++, b /= 1024;
    if (d) {
        e = c - d;
        if (e > 0)
            for (; e > 0; )
                e--, b *= 1024;
        else if (e < 0)
            for (; e < 0; )
                e++, b /= 1024;
        c = d
    }
    return number_format(b, c ? f : 0, ".", ",") + " " + unim[c] + a
}
function trim_width(b, a, f, e) {
    a && (b = b.substr(a));
    b.length > f && (b = b.substr(0, f), e == void 0 && (e = "..."), b += e);
    return b
}
function get_memory_usage() {
    var b = 0, a;
    for (a in window)
        typeof a == "object" && a.getMemoryUsage && (b += a.getMemoryUsage());
    return b
}
function strtotime_format(b, a) {
    var f = a.match(/(Y|m|d)/g), e = RegExp(b.replace(/[0-9]+/g, "([0-9]+)"), "g").exec(b), d = {};
    d[f[0]] = parseInt(e[1], 10);
    d[f[1]] = parseInt(e[2], 10);
    d[f[2]] = parseInt(e[3], 10);
    return Math.floor((new Date(d.Y, d.m - 1, d.d)).getTime() / 1E3)
}
function is_empty_object(b) {
    for (var a in b)
        return !1;
    return !0
}
function get_time() {
    return time()
}
function encode_url() {
    return urlencode()
}
function trim(b, a) {
    var f, e = 0, d = 0;
    b += "";
    a ? (a += "", f = a.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1")) : f = " \n\r\t\u000c\u000b\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
    e = b.length;
    for (d = 0; d < e; d++)
        if (f.indexOf(b.charAt(d)) === -1) {
            b = b.substring(d);
            break
        }
    e = b.length;
    for (d = e - 1; d >= 0; d--)
        if (f.indexOf(b.charAt(d)) === -1) {
            b = b.substring(0, d + 1);
            break
        }
    return f.indexOf(b.charAt(0)) === -1 ? b : ""
}
function rtrim(b, a) {
    a = !a ? " \\s\u00a0" : (a + "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "\\$1");
    return (b + "").replace(RegExp("[" + a + "]+$", "g"), "")
}
function count(b, a) {
    var f, e = 0;
    if (b === null || typeof b === "undefined")
        return 0;
    else if (b.constructor !== Array && b.constructor !== Object)
        return 1;
    a === "COUNT_RECURSIVE" && (a = 1);
    a != 1 && (a = 0);
    for (f in b)
        if (b.hasOwnProperty(f) && (e++, a == 1 && b[f] && (b[f].constructor === Array || b[f].constructor === Object)))
            e += this.count(b[f], 1);
    return e
}
function array_unique(b) {
    var a = "", f = {}, e = "", d = function(a, b) {
        var d = "";
        for (d in b)
            if (b.hasOwnProperty(d) && b[d] + "" === a + "")
                return d;
        return !1
    };
    for (a in b)
        b.hasOwnProperty(a) && (e = b[a], !1 === d(e, f) && (f[a] = e));
    return f
}
function in_array(b, a, f) {
    var e = "";
    if (f)
        for (e in a) {
            if (a[e] === b)
                return !0
        }
    else
        for (e in a)
            if (a[e] == b)
                return !0;
    return !1
}
function array_search(b, a, f) {
    var e = !!f, d = "";
    if (a && typeof a === "object" && a.change_key_case)
        return a.search(b, f);
    if (typeof b === "object" && b.exec) {
        e || (b = RegExp(b.source, "i" + (b.global ? "g" : "") + (b.multiline ? "m" : "") + (b.sticky ? "y" : "")));
        for (d in a)
            if (b.test(a[d]))
                return d;
        return !1
    }
    for (d in a)
        if (e && a[d] === b || !e && a[d] == b)
            return d;
    return !1
}
function urlencode(b) {
    b = (b + "").toString();
    return encodeURIComponent(b).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
}
function number_format(b, a, f, e) {
    var b = !isFinite(+b) ? 0 : +b, a = !isFinite(+a) ? 0 : Math.abs(a), e = typeof e === "undefined" ? "," : e, f = typeof f === "undefined" ? "." : f, d = "", d = (a ? function(a, b) {
        var d = Math.pow(10, b);
        return "" + Math.round(a * d) / d
    }(b, a) : "" + Math.round(b)).split(".");
    d[0].length > 3 && (d[0] = d[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, e));
    if ((d[1] || "").length < a)
        d[1] = d[1] || "", d[1] += Array(a - d[1].length + 1).join("0");
    return d.join(f)
}
function round(b, a, f) {
    var e, d, i;
    a |= 0;
    a = Math.pow(10, a);
    b *= a;
    i = b > 0 | -(b < 0);
    d = b % 1 === 0.5 * i;
    e = Math.floor(b);
    if (d)
        switch (f) {
            case "PHP_ROUND_HALF_DOWN":
                b = e + (i < 0);
                break;
            case "PHP_ROUND_HALF_EVEN":
                b = e + e % 2 * i;
                break;
            case "PHP_ROUND_HALF_ODD":
                b = e + !(e % 2);
                break;
            default:
                b = e + (i > 0)
        }
    return (d ? b : Math.round(b)) / a
}
function time() {
    return Math.floor((new Date).getTime() / 1E3)
}
function microtime(b) {
    var a = (new Date).getTime() / 1E3, f = parseInt(a, 10);
    return b ? a : Math.round((a - f) * 1E3) / 1E3 + " " + f
}
function md5(b) {
    var a = function(a, b) {
        var d, e, f, l, g;
        f = a & 2147483648;
        l = b & 2147483648;
        d = a & 1073741824;
        e = b & 1073741824;
        g = (a & 1073741823) + (b & 1073741823);
        if (d & e)
            return g ^ 2147483648 ^ f ^ l;
        return d | e ? g & 1073741824 ? g ^ 3221225472 ^ f ^ l : g ^ 1073741824 ^ f ^ l : g ^ f ^ l
    }, f = function(b, d, e, f, l, g, h) {
        b = a(b, a(a(d & e | ~d & f, l), h));
        return a(b << g | b >>> 32 - g, d)
    }, e = function(b, d, e, f, l, g, h) {
        b = a(b, a(a(d & f | e & ~f, l), h));
        return a(b << g | b >>> 32 - g, d)
    }, d = function(b, d, e, f, l, g, h) {
        b = a(b, a(a(d ^ e ^ f, l), h));
        return a(b << g | b >>> 32 - g, d)
    }, i = function(b, d, e, f, l, g, h) {
        b = a(b, 
        a(a(e ^ (d | ~f), l), h));
        return a(b << g | b >>> 32 - g, d)
    }, n = function(a) {
        var b = "", d = "", e;
        for (e = 0; e <= 3; e++)
            d = a >>> e * 8 & 255, d = "0" + d.toString(16), b += d.substr(d.length - 2, 2);
        return b
    }, h = [], j, g, k, q, v, l, m, p, o, b = this.utf8_encode(b), h = function(a) {
        var b, d = a.length;
        b = d + 8;
        for (var e = ((b - b % 64) / 64 + 1) * 16, f = Array(e - 1), l = 0, g = 0; g < d; )
            b = (g - g % 4) / 4, l = g % 4 * 8, f[b] |= a.charCodeAt(g) << l, g++;
        f[(g - g % 4) / 4] |= 128 << g % 4 * 8;
        f[e - 2] = d << 3;
        f[e - 1] = d >>> 29;
        return f
    }(b);
    l = 1732584193;
    m = 4023233417;
    p = 2562383102;
    o = 271733878;
    b = h.length;
    for (j = 0; j < b; j += 16)
        g = l, k = 
        m, q = p, v = o, l = f(l, m, p, o, h[j + 0], 7, 3614090360), o = f(o, l, m, p, h[j + 1], 12, 3905402710), p = f(p, o, l, m, h[j + 2], 17, 606105819), m = f(m, p, o, l, h[j + 3], 22, 3250441966), l = f(l, m, p, o, h[j + 4], 7, 4118548399), o = f(o, l, m, p, h[j + 5], 12, 1200080426), p = f(p, o, l, m, h[j + 6], 17, 2821735955), m = f(m, p, o, l, h[j + 7], 22, 4249261313), l = f(l, m, p, o, h[j + 8], 7, 1770035416), o = f(o, l, m, p, h[j + 9], 12, 2336552879), p = f(p, o, l, m, h[j + 10], 17, 4294925233), m = f(m, p, o, l, h[j + 11], 22, 2304563134), l = f(l, m, p, o, h[j + 12], 7, 1804603682), o = f(o, l, m, p, h[j + 13], 12, 4254626195), p = f(p, o, l, m, h[j + 
        14], 17, 2792965006), m = f(m, p, o, l, h[j + 15], 22, 1236535329), l = e(l, m, p, o, h[j + 1], 5, 4129170786), o = e(o, l, m, p, h[j + 6], 9, 3225465664), p = e(p, o, l, m, h[j + 11], 14, 643717713), m = e(m, p, o, l, h[j + 0], 20, 3921069994), l = e(l, m, p, o, h[j + 5], 5, 3593408605), o = e(o, l, m, p, h[j + 10], 9, 38016083), p = e(p, o, l, m, h[j + 15], 14, 3634488961), m = e(m, p, o, l, h[j + 4], 20, 3889429448), l = e(l, m, p, o, h[j + 9], 5, 568446438), o = e(o, l, m, p, h[j + 14], 9, 3275163606), p = e(p, o, l, m, h[j + 3], 14, 4107603335), m = e(m, p, o, l, h[j + 8], 20, 1163531501), l = e(l, m, p, o, h[j + 13], 5, 2850285829), o = e(o, l, m, p, 
        h[j + 2], 9, 4243563512), p = e(p, o, l, m, h[j + 7], 14, 1735328473), m = e(m, p, o, l, h[j + 12], 20, 2368359562), l = d(l, m, p, o, h[j + 5], 4, 4294588738), o = d(o, l, m, p, h[j + 8], 11, 2272392833), p = d(p, o, l, m, h[j + 11], 16, 1839030562), m = d(m, p, o, l, h[j + 14], 23, 4259657740), l = d(l, m, p, o, h[j + 1], 4, 2763975236), o = d(o, l, m, p, h[j + 4], 11, 1272893353), p = d(p, o, l, m, h[j + 7], 16, 4139469664), m = d(m, p, o, l, h[j + 10], 23, 3200236656), l = d(l, m, p, o, h[j + 13], 4, 681279174), o = d(o, l, m, p, h[j + 0], 11, 3936430074), p = d(p, o, l, m, h[j + 3], 16, 3572445317), m = d(m, p, o, l, h[j + 6], 23, 76029189), l = d(l, 
        m, p, o, h[j + 9], 4, 3654602809), o = d(o, l, m, p, h[j + 12], 11, 3873151461), p = d(p, o, l, m, h[j + 15], 16, 530742520), m = d(m, p, o, l, h[j + 2], 23, 3299628645), l = i(l, m, p, o, h[j + 0], 6, 4096336452), o = i(o, l, m, p, h[j + 7], 10, 1126891415), p = i(p, o, l, m, h[j + 14], 15, 2878612391), m = i(m, p, o, l, h[j + 5], 21, 4237533241), l = i(l, m, p, o, h[j + 12], 6, 1700485571), o = i(o, l, m, p, h[j + 3], 10, 2399980690), p = i(p, o, l, m, h[j + 10], 15, 4293915773), m = i(m, p, o, l, h[j + 1], 21, 2240044497), l = i(l, m, p, o, h[j + 8], 6, 1873313359), o = i(o, l, m, p, h[j + 15], 10, 4264355552), p = i(p, o, l, m, h[j + 6], 15, 2734768916), 
        m = i(m, p, o, l, h[j + 13], 21, 1309151649), l = i(l, m, p, o, h[j + 4], 6, 4149444226), o = i(o, l, m, p, h[j + 11], 10, 3174756917), p = i(p, o, l, m, h[j + 2], 15, 718787259), m = i(m, p, o, l, h[j + 9], 21, 3951481745), l = a(l, g), m = a(m, k), p = a(p, q), o = a(o, v);
    return (n(l) + n(m) + n(p) + n(o)).toLowerCase()
}
function utf8_encode(b) {
    if (b === null || typeof b === "undefined")
        return "";
    b += "";
    var a = "", f, e, d = 0;
    f = e = 0;
    for (var d = b.length, i = 0; i < d; i++) {
        var n = b.charCodeAt(i), h = null;
        n < 128 ? e++ : h = n > 127 && n < 2048 ? String.fromCharCode(n >> 6 | 192) + String.fromCharCode(n & 63 | 128) : String.fromCharCode(n >> 12 | 224) + String.fromCharCode(n >> 6 & 63 | 128) + String.fromCharCode(n & 63 | 128);
        h !== null && (e > f && (a += b.slice(f, e)), a += h, f = e = i + 1)
    }
    e > f && (a += b.slice(f, d));
    return a
}
function strtotime(b, a) {
    var f, e, d;
    d = "";
    b = b.replace(/\s{2,}|^\s|\s$/g, " ");
    b = b.replace(/[\t\r\n]/g, "");
    if (b === "now")
        return a === null || isNaN(a) ? (new Date).getTime() / 1E3 | 0 : a | 0;
    else if (isNaN(d = Date.parse(b)))
        a = a ? new Date(a * 1E3) : new Date;
    else
        return d / 1E3 | 0;
    var b = b.toLowerCase(), i = {day: {sun: 0,mon: 1,tue: 2,wed: 3,thu: 4,fri: 5,sat: 6},mon: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]}, n = function(b) {
        var d = b[2] && b[2] === "ago", e = (e = b[0] === "last" ? -1 : 1) * (d ? -1 : 1);
        switch (b[0]) {
            case "last":
            case "next":
                switch (b[1].substring(0, 
                3)) {
                    case "yea":
                        a.setFullYear(a.getFullYear() + e);
                        break;
                    case "mon":
                        a.setMonth(a.getMonth() + e);
                        break;
                    case "wee":
                        a.setDate(a.getDate() + e * 7);
                        break;
                    case "day":
                        a.setDate(a.getDate() + e);
                        break;
                    case "hou":
                        a.setHours(a.getHours() + e);
                        break;
                    case "min":
                        a.setMinutes(a.getMinutes() + e);
                        break;
                    case "sec":
                        a.setSeconds(a.getSeconds() + e);
                        break;
                    default:
                        d = i.day[b[1].substring(0, 3)], typeof d !== "undefined" && (d -= a.getDay(), d === 0 ? d = 7 * e : d > 0 ? b[0] === "last" && (d -= 7) : b[0] === "next" && (d += 7), a.setDate(a.getDate() + d))
                }
                break;
            default:
                if (/\d+/.test(b[0]))
                    switch (e *= 
                    parseInt(b[0], 10), b[1].substring(0, 3)) {
                        case "yea":
                            a.setFullYear(a.getFullYear() + e);
                            break;
                        case "mon":
                            a.setMonth(a.getMonth() + e);
                            break;
                        case "wee":
                            a.setDate(a.getDate() + e * 7);
                            break;
                        case "day":
                            a.setDate(a.getDate() + e);
                            break;
                        case "hou":
                            a.setHours(a.getHours() + e);
                            break;
                        case "min":
                            a.setMinutes(a.getMinutes() + e);
                            break;
                        case "sec":
                            a.setSeconds(a.getSeconds() + e)
                    }
                else
                    return !1
        }
        return !0
    };
    d = b.match(/^(\d{2,4}-\d{1,2}-\d{1,2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
    if (d !== null)
        return d[2] ? d[3] || (d[2] += ":00") : 
        d[2] = "00:00:00", f = d[1].split(/-/g), f[1] = i.mon[f[1] - 1] || f[1], f[0] = +f[0], f[0] = f[0] >= 0 && f[0] <= 69 ? "20" + (f[0] < 10 ? "0" + f[0] : f[0] + "") : f[0] >= 70 && f[0] <= 99 ? "19" + f[0] : f[0] + "", parseInt(this.strtotime(f[2] + " " + f[1] + " " + f[0] + " " + d[2]) + (d[4] ? d[4] / 1E3 : ""), 10);
    d = b.match(RegExp("([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?", 
    "gi"));
    if (d === null)
        return !1;
    f = 0;
    for (e = d.length; f < e; f++)
        if (!n(d[f].split(" ")))
            return !1;
    return a.getTime() / 1E3 | 0
}
function ucfirst(b) {
    b += "";
    return b.charAt(0).toUpperCase() + b.substr(1)
}

function get_highlight_words(){
    var highlights =[];
    for (var i in RL.rooms) {
        if(RL.rooms[i].type=='my' && RL.rooms[i].description.length > 0){
            var matches = RL.rooms[i].description.match(/\[Highlight:(.*)\]/m);
            if( matches && matches.length>0 && matches[1].length > 0 ){
                highlights = matches[1].split(',');
            }
        }
    }
    return highlights;
}
function is_highlight(str){
    var highlights = get_highlight_words();
    for(var i=0; i<highlights.length; i++){
        if( str.match( new RegExp( highlights[i], 'i' ) ) ) return true; 
    }
    return false;
}
function get_highlight_msg(str){
    var highlights = get_highlight_words();
    for(var i=0; i<highlights.length; i++){
        var reg = new RegExp( '(' + highlights[i] + ')', 'g');
        str = str.replace( reg, "<span class='ui_chat_highlight_word'>" + highlights[i] + "</span>" );
    }
    return str;
}

function ChatWork(b) {
    var a = this, f = !0, e = !0;
    a.is_patched = !0;
    a.based_client_version = '1.80a';
    a.version = b;
    a.api_version = 4;
    a.announce_id = void 0;
    a.is_first_load = !0;
    a.init_loaded = !1;
    a.stop_watching = !1;
    a.watching = !1;
    a.watch_timer = null;
    a.watch_lasttime = 0;
    a.online_status_timer = null;
    a.delay = 1E3;
    a.last_id = 0;
    a.enable_popup = !1;
    a.last_timeline_buildkey = "";
    a.last_tasklist_buildkey = "";
    a.last_filelist_buildkey = "";
    a.ajax_lasttime = 0;
    a.ajax_cmd_count = {};
    a.error_count = 0;
    a.reg_cmp = [];
    a.plan = "";
    a.is_business = !1;
    a.is_admin = !1;
    a.is_admin_user = !1;
    a.is_security = !1;
    a.security_dat = 
    {};
    var d = {};
    a.emoticon = [];
    a.secret_emoticon = [];
    if(b != a.based_client_version){
        alert('ChatWorkのバージョンが一致しません。正常に動作しない可能性があります。\nChatPatchプラグインを無効にしてリロードして下さい。');
    }
    a.prepare = function() {
        a.emoticon = [{title: L.emoticon_smile,key: ":)",regex: /:\)/g,src: "emo_smile.gif"}, {title: L.emoticon_sad,key: ":(",regex: /:\(/g,src: "emo_sad.gif"}, {title: L.emoticon_more_smile,key: ":D",regex: /:D/g,src: "emo_more_smile.gif"}, {title: L.emoticon_lucky,key: "8-)",regex: /8-\)/g,src: "emo_lucky.gif"}, {title: L.emoticon_surprise,key: ":o",regex: /:o/g,src: "emo_surprise.gif"}, {title: L.emoticon_wink,key: ";)",regex: /;\)/g,src: "emo_wink.gif"}, {title: L.emoticon_tears,
                key: ";(",regex: /;\(/g,src: "emo_tears.gif"}, {title: L.emoticon_sweat,key: "(sweat)",regex: /\(sweat\)/g,src: "emo_sweat.gif"}, {title: L.emoticon_mumu,key: ":|",regex: /:\|/g,src: "emo_mumu.gif"}, {title: L.emoticon_kiss,key: ":*",regex: /:\*/g,src: "emo_kiss.gif"}, {title: L.emoticon_tongueout,key: ":p",regex: /:p/g,src: "emo_tongueout.gif"}, {title: L.emoticon_blush,key: "(blush)",regex: /\(blush\)/g,src: "emo_blush.gif"}, {title: L.emoticon_wonder,key: ":^)",regex: /:\^\)/g,src: "emo_wonder.gif"}, {title: L.emoticon_snooze,key: "|-)",
                regex: /\|-\)/g,src: "emo_snooze.gif"}, {title: L.emoticon_love,key: "(inlove)",regex: /\(inlove\)/g,src: "emo_love.gif"}, {title: L.emoticon_grin,key: "]:)",regex: /\]:\)/g,src: "emo_grin.gif"}, {title: L.emoticon_talk,key: "(talk)",regex: /\(talk\)/g,src: "emo_talk.gif"}, {title: L.emoticon_yawn,key: "(yawn)",regex: /\(yawn\)/g,src: "emo_yawn.gif"}, {title: L.emoticon_puke,key: "(puke)",regex: /\(puke\)/g,src: "emo_puke.gif"}, {title: L.emoticon_ikemen,key: "(emo)",regex: /\(emo\)/g,src: "emo_ikemen.gif"}, {title: L.emoticon_otaku,
                key: "8-|",regex: /8\-\|/g,src: "emo_otaku.gif"}, {title: L.emoticon_ninmari,key: ":#)",regex: /:#\)/g,src: "emo_ninmari.gif"}, {title: L.emoticon_nod,key: "(nod)",regex: /\(nod\)/g,src: "emo_nod.gif"}, {title: L.emoticon_shake,key: "(shake)",regex: /\(shake\)/g,src: "emo_shake.gif"}, {title: L.emoticon_wry_smile,key: "(^^;)",regex: /\(\^\^\;\)/g,src: "emo_wry_smile.gif"}, {title: L.emoticon_whew,key: "(whew)",regex: /\(whew\)/g,src: "emo_whew.gif"}, {title: L.emoticon_clap,key: "(clap)",regex: /\(clap\)/g,src: "emo_clap.gif"}, {title: L.emoticon_bow,
                key: "(bow)",regex: /\(bow\)/g,src: "emo_bow.gif"}, {title: L.emoticon_roger,key: "(roger)",regex: /\(roger\)/g,src: "emo_roger.gif"}, {title: L.emoticon_muscle,key: "(flex)",regex: /\(flex\)/g,src: "emo_muscle.gif"}, {title: L.emoticon_dance,key: "(dance)",regex: /\(dance\)/g,src: "emo_dance.gif"}, {title: L.emoticon_komanechi,key: "(:/)",regex: /\(:\/\)/g,src: "emo_komanechi.gif"}, {title: L.emoticon_devil,key: "(devil)",regex: /\(devil\)/g,src: "emo_devil.gif"}, {title: L.emoticon_star,key: "(*)",regex: /\(\*\)/g,src: "emo_star.gif"}, 
            {title: L.emoticon_heart,key: "(h)",regex: /\(h\)/g,src: "emo_heart.gif"}, {title: L.emoticon_flower,key: "(F)",regex: /\(F\)/g,src: "emo_flower.gif"}, {title: L.emoticon_cracker,key: "(cracker)",regex: /\(cracker\)/g,src: "emo_cracker.gif"}, {title: L.emoticon_cake,key: "(^)",regex: /\(\^\)/g,src: "emo_cake.gif"}, {title: L.emoticon_coffee,key: "(coffee)",regex: /\(coffee\)/g,src: "emo_coffee.gif"}, {title: L.emoticon_beer,key: "(beer)",regex: /\(beer\)/g,src: "emo_beer.gif"}, {title: L.emoticon_handshake,key: "(handshake)",regex: /\(handshake\)/g,
                src: "emo_handshake.gif"}, {title: L.emoticon_yes,key: "(y)",regex: /\(y\)/g,src: "emo_yes.gif"}];
        a.secret_emoticon = [{title: L.emoticon_ec14,key: "(ec14)",regex: /\(ec14\)/g,src: "emo_ceo.gif"}];
        a.view = new ChatWorkView(a);
        a.request = new Request;
        a.storage = new Storage;
        a.view.prepare()
    };
    var i = !1;
    a.prepareRegExp = function() {
        a.reg_cmp.push({key: /&/g,rep: "~~~CW-ESCAPE-START~~~&amp;~~~CW-ESCAPE-END~~~"});
        a.reg_cmp.push({key: /'/g,rep: "~~~CW-ESCAPE-START~~~&#039;~~~CW-ESCAPE-END~~~"});
        a.reg_cmp.push({key: /"/g,rep: " ~~~CW-NOURL-ESCAPE-START~~~&quot;~~~CW-NOURL-ESCAPE-END~~~ "});
        a.reg_cmp.push({key: /</g,rep: " ~~~CW-NOURL-ESCAPE-START~~~&lt;~~~CW-NOURL-ESCAPE-END~~~ "});
        a.reg_cmp.push({key: />/g,rep: " ~~~CW-NOURL-ESCAPE-START~~~&gt;~~~CW-NOURL-ESCAPE-END~~~ "});
        PLATFORM == "mobile-iphone" || PLATFORM == "mobile-android" ? (a.reg_cmp.push({key: /(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+|tel:?\d+)/gi,rep: '<a href="$1" title="$1" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',reptxt: "$1"}), a.reg_cmp.push({key: /\[qt\]/g,
            rep: '<div class="dev_quote">',reptxt: '"'}), a.reg_cmp.push({key: /\[\/qt\]/g,rep: "</div>",reptxt: '"'}), a.reg_cmp.push({key: /\[qtmeta aid=(\d+) time=(\d+)\]/g,rep: '<div class="dev_qmeta">[picon:$1] - [date:$2]</div>',reptxt: ""}), a.reg_cmp.push({key: /\[qtmeta aid=(\d+)\]/g,rep: '<div class="dev_qmeta">[piconname:$1]</div>',reptxt: ""})) : (a.reg_cmp.push({key: /\[qt\]/g,rep: '<fieldset class="dev_quote">',reptxt: '"'}), a.reg_cmp.push({key: /\[\/qt\]/g,rep: "</fieldset>",reptxt: '"'}), a.reg_cmp.push({key: /\[qtmeta aid=(\d+) time=(\d+)\]/g,
            rep: "<legend>[piconname:$1] - [date:$2]</legend>",reptxt: ""}), a.reg_cmp.push({key: /\[qtmeta aid=(\d+)\]/g,rep: "<legend>[piconname:$1]</legend>",reptxt: ""}));
        a.reg_cmp.push({key: /\[info\]/g,rep: '<div class="dev_info">',reptxt: "["});
        a.reg_cmp.push({key: /\[\/info\]/g,rep: "</div>",reptxt: "]"});
        a.reg_cmp.push({key: /\[title\]/g,rep: '<div class="title">',reptxt: ""});
        a.reg_cmp.push({key: /\[\/title\]/g,rep: "</div>",reptxt: ":"});
        a.reg_cmp.push({key: /\[\/task\]/g,rep: "</div>",reptxt: "]"});
        a.reg_cmp.push({key: /\[task:\d+\]/g,
            rep: "",reptxt: ""});
        a.reg_cmp.push({key: /\[To:(\d+)\]/g,rep: '<span class="ui_to">To:</span>[picon:$1]',reptxt: "[To]"});
        a.reg_cmp.push({key: /\[rp aid=(\d+) to=\d+-\d+\]/g,rep: '<span class="ui_to">To:</span>[picon:$1]',reptxt: "[To]"});
        CW.security_dat.disable_download_file ? (a.reg_cmp.push({key: /\[download:(\d+)\]/g,rep: '<div class="cw_file_download">',reptxt: ""}), a.reg_cmp.push({key: /\[\/download\]/g,rep: "</div>",reptxt: ""}), a.reg_cmp.push({key: /\[preview id=(\d+) ht=(\d+)\]/g,rep: "",reptxt: ""})) : PLATFORM == 
        "mobile-iphone" || PLATFORM == "mobile-android" || PLATFORM == "mobile-web" ? (a.reg_cmp.push({key: /\[download:(\d+)\]/g,rep: '<div class="cw_file_download"><a href="' + SERVER_PATH + '/gateway.php?cmd=download_file&bin=1&preview=1&file_id=$1" target="_blank">',reptxt: ""}), a.reg_cmp.push({key: /\[\/download\]/g,rep: "</a></div>",reptxt: ""}), a.reg_cmp.push({key: /\[preview id=(\d+) ht=(\d+)\]/g,rep: '<div><a href="' + SERVER_PATH + '/gateway.php?cmd=download_file&bin=1&preview=1&file_id=$1" target="_blank"><img class="cw_file_preview_img" style="height:$2px" src="' + 
            SERVER_PATH + '/gateway.php?cmd=preview_file&bin=1&file_id=$1"/></a></div>',reptxt: ""})) : (a.reg_cmp.push({key: /\[download:(\d+)\]/g,rep: '<div class="cw_file_download"><a href="gateway.php?cmd=download_file&bin=1&file_id=$1" class="cw_filename">',reptxt: ""}), a.reg_cmp.push({key: /\[\/download\]/g,rep: "</a></div>",reptxt: ""}), a.reg_cmp.push({key: /\[preview id=(\d+) ht=(\d+)\]/g,rep: '<div><img class="cw_file_preview_img" style="height:$2px" src="gateway.php?cmd=preview_file&bin=1&file_id=$1"/></div>',reptxt: ""}));
        a.reg_cmp.push({key: /\[piconname:(\d+)\]/g,rep: "[picon:$1] [pname:$1]",reptxt: "[pname:$1]"});
        a.reg_cmp.push({key: /\[hr\]/g,rep: '<hr size="1"/>',reptxt: " --- "});
        for (var b = [], d = 0; d < a.emoticon.length; d++)
            b.push({key: a.emoticon[d].key,regex: a.emoticon[d].regex,src: a.emoticon[d].src,title: a.emoticon[d].title});
        for (d = 0; d < a.secret_emoticon.length; d++)
            b.push({key: a.secret_emoticon[d].key,regex: a.secret_emoticon[d].regex,src: a.secret_emoticon[d].src,title: a.secret_emoticon[d].title});
        var e = function(a) {
            var b = 
            {"&#58;": /:/g,"&#40;": /\(/g,"&#41;": /\)/g,"&#91;": /\[/g,"&#93;": /\]/g,"&#45;": /-/g,"&#124;": /\|/g,"&#42;": /\*/g,"&#94;": /\^/g}, d;
            for (d in b)
                a = a.replace(b[d], d);
            return a
        };
        b.sort(function(a, b) {
            return b.key.length - a.key.length
        });
        for (var d = 0, f = b.length; d < f; d++) {
            var l = e(b[d].key);
            a.reg_cmp.push({key: b[d].regex,rep: '<img src="./image/emoticon/' + b[d].src + '" title="' + b[d].title + " " + l + '" alt="' + l + '" class="ui_emoticon"/>',reptxt: b[d].key})
        }
        PLATFORM == "web" ? a.reg_cmp.push({key: /(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+)/gi,
            rep: '<a href="$1" title="$1" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',reptxt: "$1"}) : PLATFORM == "mobile-web" && (a.reg_cmp.push({key: /(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+|tel:\d+)/gi,rep: '<a href="$1" title="$1" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',reptxt: "$1"}), a.reg_cmp.push({key: /(tel(\d+))/gi,rep: '<a href="tel:$2" title="tel:$2" target="_blank" class="ui_sp_favicon_parent"><link_title>$1</link_title></a>',
            reptxt: "$1"}));
        a.reg_cmp.push({key: /(?: ~~~CW-NOURL-ESCAPE-START~~~|~~~CW-NOURL-ESCAPE-END~~~ )/g,rep: ""});
        a.reg_cmp.push({key: /~~~CW-ESCAPE-(?:START|END)~~~/g,rep: ""});
        i = !0
    };
    a.alert = function(a, b) {
        typeof a == "object" && (a = a.length > 0 ? a.join("\n") : L.raise_error);
        if (!a)
            a = L.raise_error;
        CW.view.alert(a, b)
    };
    a.confirm = function(a, b, d) {
        CW.view.confirm(a, b, d)
    };
    a.showProgress = function(a) {
        CW.view.showProgress(a)
    };
    a.hideProgress = function() {
        CW.view.hideProgress()
    };
    var n = {};
    a.read = function(b, d) {
        var e;
        b == void 0 && (b = 
        4E3);
        if (a.isLogin() && (e = d == void 0 ? RM : RL.rooms[d]) && e.read_lock != !0) {
            a.cancelRead(e.id);
            var f = e.getUnreadNum();
            if (f > 0) {
                var l = RL.rooms[e.id], g = l.getViewStat();
                l.reading = !0;
                n[e.id] = setTimeout(function() {
                    RM && RM.id == l.id ? g = RM.getViewStat() : f = l.getUnreadNum();
                    f > g.noview_num && CW.get("gateway.php", {cmd: "read",room_id: l.id,mid: l.mid,last_chat_id: g.last_read_id}, function(a) {
                        if (a.read_num) {
                            var b = l.getUnreadNum();
                            l.read_num = a.read_num;
                            var d = l.getUnreadNum(), e = l.getMentionNum();
                            l.mention_num = a.mention_num;
                            a = l.getMentionNum();
                            b > 0 && d == 0 ? RL.unread_room_sum-- : b == 0 && d > 0 && RL.unread_room_sum++;
                            e > 0 && a == 0 ? RL.mention_room_sum-- : e == 0 && a > 0 && RL.mention_room_sum++;
                            RL.view.updateUnreadNum(l.id);
                            l.timeline.read(f);
                            RL.view.updateSumNumbers()
                        }
                        l.reading = !1
                    }, function(a, b) {
                        if (b && b.error && b.error == "no_member") {
                            var d = l.id;
                            CW.post("gateway.php", {cmd: "is_room_member",rid: d}, function(a) {
                                a.is_room_member == !1 && (RL.deleteRoom(d), RL.build())
                            })
                        }
                        l.reading = !1
                    });
                    RM && RM.getUnreadNum() > 0 && CW.read()
                }, b)
            }
        }
    };
    a.cancelRead = function(a) {
        n[a] && clearTimeout(n[a])
    };
    a.sendFeedback = function(a, b, d) {
        CW.post("gateway.php", {cmd: "send_feedback",message: a}, function() {
            typeof b == "function" && b()
        }, function() {
            typeof d == "function" && d()
        })
    };
    a.popup = function(b, d, e, f) {
        return a.view.popup(b, d, e, f)
    };
    a.playSound = function(b, d) {
        return a.view.playSound(b, d)
    };
    var h = !0, j = !1;
    a.watch = function(b) {
        if (!a.watching) {
            a.watching = !0;
            a.watch_timer && clearTimeout(a.watch_timer);
            a.watch_timer = setTimeout(function() {
                a.watch(!0)
            }, 3E5);
            if (a.last_id == 0) {
                if (!RL)
                    return;
                h && (h = !1, a.view.firstWatch());
                CW.get("gateway.php", 
                {cmd: "init_load",rid: RL.lazy_select,type: RL.load_type,"new": 1}, function(a) {
                    CW.setInitData(a)
                })
            } else
                CW.get("gateway.php", {cmd: "get_update",account_id: AC.myid,last_id: a.last_id,ver: a.version,"new": 1}, function(d) {
                    if (a.last_id != d.last_id) {
                        a.last_id = d.last_id;
                        var e = d.update_info, f = {}, l;
                        for (l in e) {
                            var g = e[l];
                            switch (l) {
                                case "room":
                                    for (var h in g) {
                                        if (g[h].rd && (RL.deleteRoom(h), !g[h].a))
                                            continue;
                                        g[h].lt != void 0 && RL.setLastUpdateTime(h, g[h].lt);
                                        g[h].i && RL.setInfoUpdate(h);
                                        g[h].p && RL.setPersonalUpdate(h);
                                        g[h].d && RL.setDescUpdate(h);
                                        g[h].m && RL.setMemberUpdate(h);
                                        g[h].t && RL.setTaskUpdate(h);
                                        if (g[h].cd)
                                            for (var n in g[h].cd)
                                                if (RL.rooms[h].timeline && (RL.rooms[h].timeline.deleteChat(n), RL.setUpdate(!0)), RM && h == RM.id)
                                                    f.RM = !0;
                                        if (g[h].ce)
                                            for (n in g[h].ce)
                                                if (!g[h].cd || !g[h].cd[n])
                                                    if (RL.rooms[h].timeline && (RL.rooms[h].timeline.refreshChat(n), RL.setUpdate(!0)), RM && h == RM.id)
                                                        f.RM = !0;
                                        if (g[h].fe)
                                            for (var o in g[h].fe)
                                                (!g[h].fd || !g[h].fd[o]) && FL.refreshFile(o);
                                        if (g[h].fd)
                                            for (o in g[h].fd)
                                                if (FL.deleteFileStat(o), RM && 
                                                h == RM.id)
                                                    f.RM = !0;
                                        if (g[h].tc)
                                            for (var i in g[h].tc)
                                                (!g[h].td || !g[h].td[i]) && TK.checkTask(i, g[h].tc[i], !0);
                                        if (g[h].te)
                                            for (i in g[h].te)
                                                (!g[h].td || !g[h].td[i]) && TK.refreshTask(i);
                                        if (g[h].td)
                                            for (i in g[h].td)
                                                TK.deleteTaskStat(i);
                                        if (g[h].s != void 0)
                                            RL.rooms[h].sticky = g[h].s, RL.setUpdate(!0)
                                    }
                                    break;
                                case "account":
                                    if (g.a) {
                                        var k = [], m;
                                        for (m in g.a)
                                            k.push(parseInt(m, 10));
                                        AC.refreshAccount(k, !0)
                                    }
                                    g.s && ST.getSetting();
                                    if (g.r)
                                        for (h in k = g.r, AC.account_dat[k] && AC.refreshContactList(), RL.rooms)
                                            RL.rooms[h].member_dat[k] && 
                                            RL.setMemberUpdate(h);
                                    g.n && ST.getAnnounce();
                                    g.ss && ST.refreshSocialConnectStatus();
                                    break;
                                case "contact":
                                    g.l && AC.refreshContactList();
                                    if (g.m) {
                                        k = [];
                                        for (m in g.m)
                                            k.push(parseInt(m, 10));
                                        AC.refreshMentionInfo(k)
                                    }
                                    g.a && g.a.length > 0 && AC.client_addContact(g.a);
                                    g.d && g.d.length > 0 && AC.client_deleteContact(g.d);
                                    break;
                                case "category":
                                    g.l && RL.refreshCategory()
                            }
                        }
                        f.RM && RM.build();
                        RL.hasUpdate() && RL.build();
                        a.watch_lasttime = microtime(!0);
                        b && a.comet()
                    }
                    if (a.announce_id != d.announce_id)
                        a.announce_id = d.announce_id, ST.getAnnounce();
                    d.update != void 0 && (j || (e = d.update.replace("a", ""), d.update.indexOf("a") == -1 && a.view.alertUpdated(e), a.view.showUpdated(e)), j = !0)
                });
            a.watching = !1
        }
    };
    a.comet = function() {
        a.request.comet()
    };
    a.postLoad = function() {
        a.view.postLoad()
    };
    a.isOnline = function() {
        return f
    };
    a.isLogin = function() {
        return e
    };
    a.setOnline = function() {
        e = f = !0;
        a.view.setOnline()
    };
    a.setConnectionError = function(b) {
        f = b == "NO LOGIN" ? !0 : b == "INVALID USER" ? !0 : b == "INVALID TOKEN" ? !0 : b == "NO TOKEN" ? !0 : b == "IP ERROR" ? !0 : !1;
        e = !1;
        a.view.setConnectionError(b)
    };
    a.initRoomLoad = function() {
        a.view.initRoomLoad()
    };
    a.initComplete = function() {
        a.view.initComplete()
    };
    a.post = function(b, d, e, f) {
        return a.ajax({type: "POST",dataType: "json",async: !0,url: b,data: d,success: e,error: f})
    };
    a.postSync = function(b, d, e, f) {
        return a.ajax({type: "POST",dataType: "json",async: !1,url: b,data: d,success: e,error: f})
    };
    a.get = function(b, d, e, f) {
        return a.ajax({type: "GET",dataType: "json",async: !0,url: b,data: d,success: e,error: f})
    };
    a.getSync = function(b, d, e, f) {
        return a.ajax({type: "GET",dataType: "json",
            async: !1,url: b,data: d,success: e,error: f})
    };
    a.ajax = function(b) {
        CW.isOnline() || CW.checkOnline(function() {
        }, 1);
        if (AC) {
            var e = "";
            b.data.cmd && (b.url += "?cmd=" + b.data.cmd, e = b.data.cmd.toString(), delete b.data.cmd);
            e && d[e] ? (b.dataType = "jsonp", b.url = ACCOUNT_SERVER_PATH + "/" + b.url) : b.url = SERVER_PATH + "/" + b.url;
            b.url += "&myid=" + AC.myid + "&_v=" + a.version + "&_av=" + a.api_version + "&_t=" + ACCESS_TOKEN + "&ln=" + LANGUAGE;
            b.timeout = 3E5;
            if (CW.isLogin()) {
                if (typeof b.error != "function")
                    b.error = function(b) {
                        a.ajax_lasttime = microtime(!0);
                        typeof b == "object" && (b = b.length != void 0 ? b.join("\n") : "");
                        if (b)
                            switch (b) {
                                case "NO LOGIN":
                                case "INVALID USER":
                                case "NO TOKEN":
                                case "INVALID TOKEN":
                                case "BAD LOGIN INFO":
                                case "UUID ERROR":
                                case "IP ERROR":
                                case "LOCK":
                                case "OFFLINE":
                                case "TIMEOUT":
                                    break;
                                default:
                                    CW.alert(b)
                            }
                        CW.checkOnline()
                    };
                else {
                    var f = b.error;
                    b.error = function(b, d) {
                        a.ajax_lasttime = microtime(!0);
                        f(b, d);
                        CW.checkOnline()
                    }
                }
                if (typeof b.success != "function")
                    b.success = function() {
                        a.ajax_lasttime = microtime(!0)
                    };
                else {
                    var l = b.success;
                    b.success = function(d) {
                        if (d && 
                        d.status.success == !0)
                            a.ajax_lasttime = microtime(!0), l(d.result);
                        else {
                            var e = "";
                            if (d && (e = d.status.message, e == "NO LOGIN" || e == "INVALID USER" || e == "NO TOKEN" || e == "INVALID TOKEN" || e == "IP ERROR"))
                                CW.setConnectionError(e), CW.checkOnline();
                            b.error(e, d.result)
                        }
                    }
                }
                return a.request.ajax(b)
            } else
                typeof b.error == "function" && b.error()
        }
    };
    var g = !1, k = null, q = 1E4;
    a.checkOnline = function(b, d) {
        typeof b != "function" && (b = function() {
        });
        d && (k && (clearTimeout(k), k = null), g = !1);
        if (g === !1) {
            g = !0;
            var e = function() {
                g = !1;
                CW.setOnline();
                b()
            }, f = function(d) {
                d == void 0 && (d = q);
                q *= q < 10 ? 3 : 1.2;
                k || (k = setTimeout(function() {
                    g = !1;
                    k = null;
                    a.checkOnline(b)
                }, d))
            };
            setTimeout(function() {
                a.request.checkOnline(function() {
                    e();
                    q = 1E4
                }, function(a) {
                    CW.setConnectionError(a);
                    a == "NO LOGIN" || a == "INVALID USER" || a == "NO TOKEN" || a == "INVALID TOKEN" || a == "BAD LOGIN INFO" || a == "UUID ERROR" || a == "IP ERROR" || a == "LOCK" ? CW.view.showLoginDialog(e, f, a) : a == "OFFLINE" ? CW.view.showOfflineDialog(e, f) : a == "TIMEOUT" ? CW.view.showTimeoutDialog(e, f) : f()
                })
            }, 1E3)
        }
    };
    a.renderMessage = function(b, 
    d) {
        if (!b || b.length == void 0)
            return "";
        d == void 0 && (d = {});
        i || a.prepareRegExp();
        return a.view.renderMessage(b, d)
    };
    var v = new Date;
    a.getDate = function(a, b) {
        v.setTime(a * 1E3);
        var d = v.getFullYear(), e = v.getMonth() + 1, f = v.getDate(), l = v.getHours(), g = v.getMinutes(), h = v.getSeconds();
        l < 10 && (l = "0" + l);
        g < 10 && (g = "0" + g);
        h < 10 && (h = "0" + h);
        b == void 0 && (b = ST.data.dateformat + " H:i");
        return b.replace("Y", d).replace("m", e).replace("d", f).replace("H", l).replace("i", g).replace("s", h)
    };
    var l = {hovertip: !0,clicktip: !0,small: !1,ui: !1,
        src: !1};
    a.getAvatarPanel = function(b, d) {
        if (b) {
            if (d == void 0)
                d = l;
            else
                for (var e in l)
                    d[e] == void 0 && (d[e] = l[e]);
            return a.view.getAvatarPanel(b, d)
        }
    };
    a.getName = function(b) {
        return a.view.getName(b)
    };
    a.getOrgName = function(b) {
        return a.view.getOrgName(b)
    };
    a.getDepartment = function(b) {
        return a.view.getDepartment(b)
    };
    a.getOrgTitle = function(b) {
        return a.view.getOrgTitle(b)
    };
    a.getFullName = function(b) {
        return a.view.getFullName(b)
    };
    a.getChatWorkId = function(b) {
        return a.view.getChatWorkId(b)
    };
    a.getChatWorkIdLink = function(b) {
        return a.view.getChatWorkIdLink(b)
    };
    a.getSkypeLink = function(b, d) {
        return a.view.getSkypeLink(b, d)
    };
    a.getTwitterLink = function(b, d) {
        return a.view.getTwitterLink(b, d)
    };
    a.getFacebookLink = function(b, d) {
        return a.view.getFacebookLink(b, d)
    };
    a.getEmailLink = function(b) {
        return a.view.getEmailLink(b)
    };
    a.getOrgTellLink = function(b) {
        return a.view.getOrgTellLink(b)
    };
    a.getExtensionTelLink = function(b) {
        return a.view.getExtensionTelLink(b)
    };
    a.getMobileTelLink = function(b) {
        return a.view.getMobileTelLink(b)
    };
    a.isEmail = function(a) {
        if (a.match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/))
            return !0;
        return !1
    };
    a.isTelNumber = function(a) {
        if (a.match(/^[0-9]+[0-9-]+[0-9]+$/))
            return !0;
        return !1
    };
    a.getRoomName = function(b) {
        if (b && (b = RL.rooms[b]))
            return b.type == "contact" ? a.getName(b.getAccountId()) : escape_html(b.getName())
    };
    var m = {chatlink: !0,webservice: !0,request_contact: !0};
    a.getContactPanel = function(b, d) {
        if (b) {
            if (d == void 0)
                d = m;
            else
                for (var e in m)
                    d[e] == void 0 && (d[e] = m[e]);
            return a.view.getContactPanel(b, d)
        }
    };
    a.registerAvatar = function(b) {
        a.view.registerAvatar(b)
    };
    var p = {type: "timeline"};
    a.getFilePanel = 
    function(b, d) {
        if (d == void 0)
            d = p;
        else
            for (var e in p)
                d[e] == void 0 && (d[e] = p[e]);
        return a.view.getFilePanel(FL.file_id2file_dat[b] == void 0 ? !1 : FL.file_id2file_dat[b], d)
    };
    var o = {type: "timeline"};
    a.getTaskPanel = function(b, d) {
        if (!b)
            return !1;
        if (d == void 0)
            d = o;
        else
            for (var e in o)
                d[e] == void 0 && (d[e] = o[e]);
        return a.view.getTaskPanel(TK.task_id2task_dat[b] == void 0 ? !1 : TK.task_id2task_dat[b], d)
    };
    a.buildLayout = function() {
        a.view.buildLayout()
    };
    a.resizeLayout = function() {
        a.view.resizeLayout()
    };
    a.getMemoryUsage = function() {
        return 0
    };
    a.showStorageLimitDialog = function(b) {
        a.view.showStorageLimitDialog(b)
    };
    a.setLimitDialog = function(b, d) {
        a.view.setLimitDialog(b, d)
    };
    a.setInitData = function(b) {
        a.last_id = b.last_id;
        a.announce_id = b.announce_id;
        a.plan = b.plan;
        a.is_admin = b.is_admin;
        a.is_admin_user = b.is_admin_user;
        a.is_business = b.is_business;
        a.is_security = b.is_security;
        a.contact_limit_num = b.contact_limit_num;
        a.group_limit_num = b.group_limit_num;
        if (a.is_security)
            a.security_dat = b.security_dat;
        ST.updateSetting(b.setting_data);
        AC.updateContactList(b.contact_dat, 
        b.mention_dat, b.myrequest_dat, b.request_dat);
        RL.updateCategory(b.cat_dat);
        RL.updateRoomData(b.room_dat);
        b.announce_dat && ST.updateAnnounce(b.announce_dat);
        CW.postLoad();
        FL.updateStorageInfo(b.storage, b.storage_limit, b.storage_limit_time, b.is_storage_limit);
        if (!a.init_loaded) {
            for (var b = RL.getSortedRoomList(), d = 0, e = 0; e < b.length; e++) {
                var f = b[e];
                RL.rooms[f].getUnreadNum() > 0 && (d++, RL.setInfoUpdate(f));
                if (d > 100)
                    break
            }
            RL.build()
        }
        a.init_loaded = !0;
        a.comet()
    };
    a.isMatchedWithKeyList = function(a, b) {
        for (var d = b.toLowerCase(), 
        e = a.length; e--; )
            if (d.indexOf(a[e]) == -1)
                return !1;
        return !0
    };
    a.splitWithSpace = function(a) {
        return a.split(/[ \u3000]+/)
    }
}
function Account(b) {
    var a = this, f = {};
    a.myid = parseInt(b, 10);
    a.account_dat = {};
    a.unknown_flag = {};
    a.contact_list = [];
    a.contact_flag = {};
    a.myrequest_dat = {};
    a.request_dat = {};
    a.facebook_app_id = "";
    a.prepare = function() {
        a.facebook_app_id = is_local_env ? "194987520565581" : "270897682951829";
        a.view = new AccountView(a);
        a.view.prepare()
    };
    a.setName = function(b, d) {
        a.setParam(b, "nm", d)
    };
    a.setOrgName = function(b, d) {
        a.setParam(b, "onm", d)
    };
    a.setDepartment = function(b, d) {
        a.setParam(b, "dp", d)
    };
    a.setTitle = function(b, d) {
        a.setParam(b, 
        "tt", d)
    };
    a.setChatWorkId = function(b, d) {
        a.setParam(b, "cwid", d)
    };
    a.setGroupId = function(b, d) {
        a.setParam(b, "gid", d)
    };
    a.setAvatarId = function(b, d) {
        a.setParam(b, "av", d)
    };
    a.setRoomId = function(b, d) {
        a.setParam(b, "rid", parseInt(d, 10))
    };
    a.setNickName = function(b, d) {
        a.setParam(b, "nn", d)
    };
    a.setMentionNum = function(b, d) {
        a.setParam(b, "mn", d)
    };
    a.setSkype = function(b, d) {
        a.setParam(b, "sp", d)
    };
    a.setTwitter = function(b, d) {
        a.setParam(b, "tw", d)
    };
    a.setFacebook = function(b, d) {
        a.setParam(b, "fb", d)
    };
    a.setUrl = function(b, d) {
        a.setParam(b, 
        "url", d)
    };
    a.setAddress = function(b, d) {
        a.setParam(b, "ad", d)
    };
    a.setIntroduction = function(b, d) {
        a.setParam(b, "intro", d)
    };
    a.setEmail = function(b, d) {
        a.setParam(b, "mail", d)
    };
    a.setOrgTel = function(b, d) {
        a.setParam(b, "otel", d)
    };
    a.setExtensionTel = function(b, d) {
        a.setParam(b, "etel", d)
    };
    a.setMobileTel = function(b, d) {
        a.setParam(b, "mtel", d)
    };
    a.setParam = function(b, d, e) {
        b = parseInt(b, 10);
        a.account_dat[b] == void 0 && (a.account_dat[b] = {});
        a.account_dat[b][d] = e
    };
    a.getName = function(b) {
        var d = a.getParam(b, "nm", !1);
        if (d === !1)
            a.unknown_flag[b] = 
            !0, d = "Loading... ";
        else if (d == "")
            return L.deleted_user;
        return d
    };
    a.getOrgName = function(b) {
        return a.getParam(b, "onm", "")
    };
    a.getDepartment = function(b) {
        return a.getParam(b, "dp", "")
    };
    a.getTitle = function(b) {
        return a.getParam(b, "tt", "")
    };
    a.getFullName = function(b) {
        var d = a.getOrgName(b);
        d && (d += " ");
        return d + a.getName(b)
    };
    a.getOrgTitle = function(b) {
        var d = a.getOrgName(b);
        d && (d += " ");
        return d + a.getDepartment(b)
    };
    a.getChatWorkId = function(b) {
        return a.getParam(b, "cwid", "")
    };
    a.getGroupId = function(b) {
        return a.getParam(b, 
        "gid", 0)
    };
    a.getNickName = function(b, d) {
        if (d)
            return a.getParam(b, "nn", "");
        else {
            var e = a.getParam(b, "nn", "");
            if (e === "")
                return L.nickname_prefix + AC.getName(b) + L.nickname_suffix;
            return e
        }
    };
    a.getDefaultNickName = function(a) {
        return L.nickname_prefix + AC.getName(a) + L.nickname_suffix
    };
    a.getMentionNum = function(b) {
        return a.getParam(b, "mn", 0)
    };
    var e = ["blue", "green", "orange", "red", "violet", "yellow"];
    a.getAvatarId = function(b) {
        var d = a.getParam(b, "av", "0/.");
        d == "0/." && (d = a.isDeleted(b) ? "ico_avatar_notfound.png" : "ico_default_" + 
        e[b % e.length] + ".png");
        return d
    };
    a.getSkype = function(b) {
        return a.getParam(b, "sp", "")
    };
    a.getTwitter = function(b) {
        return a.getParam(b, "tw", "")
    };
    a.getFacebook = function(b) {
        return a.getParam(b, "fb", "")
    };
    a.getUrl = function(b) {
        return a.getParam(b, "url", "")
    };
    a.getAddress = function(b) {
        return a.getParam(b, "ad", "")
    };
    a.getIntroduction = function(b) {
        return a.getParam(b, "intro", "")
    };
    a.getEmail = function(b) {
        return a.getParam(b, "mail", "")
    };
    a.getOrgTel = function(b) {
        return a.getParam(b, "otel", "")
    };
    a.getExtensionTel = function(b) {
        return a.getParam(b, 
        "etel", "")
    };
    a.getMobileTel = function(b) {
        return a.getParam(b, "mtel", "")
    };
    a.getOrgNamePriv = function(b) {
        return a.getParam(b, "onm_priv", "")
    };
    a.getDepartmentPriv = function(b) {
        return a.getParam(b, "dp_priv", "")
    };
    a.getTitlePriv = function(b) {
        return a.getParam(b, "tt_priv", "")
    };
    a.getAvatarPriv = function(b) {
        return a.getParam(b, "av_priv", "")
    };
    a.getSkypePriv = function(b) {
        return a.getParam(b, "sp_priv", "")
    };
    a.getTwitterPriv = function(b) {
        return a.getParam(b, "tw_priv", "")
    };
    a.getFacebookPriv = function(b) {
        return a.getParam(b, 
        "fb_priv", "")
    };
    a.getUrlPriv = function(b) {
        return a.getParam(b, "url_priv", "")
    };
    a.getAddressPriv = function(b) {
        return a.getParam(b, "ad_priv", "")
    };
    a.getIntroductionPriv = function(b) {
        return a.getParam(b, "intro_priv", "")
    };
    a.getEmailPriv = function(b) {
        return a.getParam(b, "mail_priv", "")
    };
    a.getOrgTelPriv = function(b) {
        return a.getParam(b, "otel_priv", "")
    };
    a.getExtensionTelPriv = function(b) {
        return a.getParam(b, "etel_priv", "")
    };
    a.getMobileTelPriv = function(b) {
        return a.getParam(b, "mtel_priv", "")
    };
    a.getParam = function(b, 
    d, e) {
        if (b == void 0)
            return !1;
        b = parseInt(b, 10);
        return a.account_dat[b] != void 0 && a.account_dat[b][d] != void 0 ? a.account_dat[b][d] : e
    };
    a.getSortedMemberList = function() {
        var b = [], d;
        for (d in a.account_dat)
            d != 0 && d != AC.myid && !AC.isDeleted(d) && b.push(d);
        b.sort(function(b, d) {
            return a.isContact(b) ? a.isContact(d) ? AC.getMentionNum(d) - AC.getMentionNum(b) : -1 : a.isContact(d) ? 1 : AC.getMentionNum(d) - AC.getMentionNum(b)
        });
        return b
    };
    a.isContact = function(b) {
        b = parseInt(b, 10);
        if (a.contact_flag[b])
            return !0;
        return !1
    };
    a.client_addContact = 
    function(b) {
        for (var d, e = [], f = 0; f < b.length; f++)
            d = parseInt(b[f], 10), e.push(d), a.account_dat[d] = void 0, a.isContact(d) || (a.contact_list.push(d), a.contact_flag[d] = !0, a.myrequest_dat != void 0 && a.myrequest_dat[d] != void 0 && delete a.myrequest_dat[d], a.request_dat != void 0 && a.request_dat[d] != void 0 && delete a.request_dat[d]);
        e.length > 0 && a.refreshAccount(e, !0, function() {
            a.buildMyContact()
        })
    };
    a.client_deleteContact = function(b) {
        for (var d, e = [], f = 0; f < b.length; f++)
            if (d = parseInt(b[f], 10), a.isContact(d)) {
                for (f = 0; f < a.contact_list.length; f++)
                    if (a.contact_list[f] == 
                    d) {
                        a.contact_list.splice(f, 1);
                        break
                    }
                delete a.contact_flag[d];
                a.account_dat[d] = void 0;
                e.push(d)
            }
        e.length > 0 && a.refreshAccount(e, !1, function() {
            a.buildMyContact()
        })
    };
    a.isDeleted = function(b) {
        if (a.getParam(b, "nm", !1) == "")
            return !0;
        return !1
    };
    a.getRoomId = function(b) {
        b = parseInt(b, 10);
        return a.account_dat[b] != void 0 && a.account_dat[b].rid != void 0 ? a.account_dat[b].rid : 0
    };
    a.hasUnknown = function() {
        for (var b in a.unknown_flag)
            if (a.isUnknown(b))
                return !0;
            else
                delete a.unknown_flag[b];
        return !1
    };
    a.isUnknown = function(b) {
        if (a.account_dat[b] == 
        void 0 || a.account_dat[b].nm == void 0)
            return !0;
        return !1
    };
    var d = {};
    a.getUnknown = function(b) {
        var e = [], f;
        for (f in a.unknown_flag)
            a.isUnknown(f) ? d[f] == void 0 && (e.push(parseInt(f, 10)), d[f] = !0) : delete a.unknown_flag[f];
        e.length > 0 ? a.refreshAccount(e, !1, b) : typeof b == "function" && b()
    };
    a.refreshAccount = function(b, d, e) {
        b.length > 0 && CW.post("gateway.php", {cmd: "get_account_info",aid: b,get_private_data: d ? 1 : 0}, function(d) {
            for (var f in d.account_dat)
                a.setAccountDat(f, d.account_dat[f]);
            a.unknown_flag = {};
            typeof e == "function" && 
            e(d.account_dat);
            a.view.updateAvatar(b);
            a.view.updateName(b);
            CW.is_business ? a.refreshInternal() : RL.build()
        })
    };
    a.refreshAccountDetailData = function(b, d, e) {
        CW.post("gateway.php", {cmd: "get_detail_account_info",aid: b,get_priv_setting: d}, function(d) {
            d.account_dat && a.setAccountDat(b, d.account_dat, !0);
            typeof e == "function" && e()
        })
    };
    var i = {nm: a.setName,name: a.setName,onm: a.setOrgName,orgname: a.setOrgName,dp: a.setDepartment,tt: a.setTitle,av: a.setAvatarId,avid: a.setAvatarId,gid: a.setGroupId,rid: a.setRoomId,tw: a.setTwitter,
        fb: a.setFacebook,sp: a.setSkype,cwid: a.setChatWorkId,ad: a.setAddress,url: a.setUrl,intro: a.setIntroduction,mail: a.setEmail,otel: a.setOrgTel,etel: a.setExtensionTel,mtel: a.setMobileTel};
    a.setAccountDat = function(b, d, e) {
        var g = "", k;
        for (k in i)
            d[k] != void 0 && (i[k](b, d[k]), g = k + "_priv", d[g] != void 0 && a.setParam(b, g, d[g]));
        f[b] = e ? !0 : !1
    };
    a.hasDetailData = function(a) {
        if (f[a])
            return !0;
        return !1
    };
    a.refreshMentionInfo = function(b) {
        CW.get("gateway.php", {cmd: "get_mention_info",a: b}, function(b) {
            for (var d in b.mention_dat)
                a.setNickName(d, 
                b.mention_dat[d].nn), a.setMentionNum(d, b.mention_dat[d].mn);
            for (var e in RL.rooms)
                if (b = RL.rooms[e], b.sorted_member_list != null)
                    b.sorted_member_list = null
        })
    };
    a.refreshContactList = function() {
        CW.get("gateway.php", {cmd: "get_contact_list"}, function(b) {
            a.updateContactList(b.contact_dat, b.mention_dat, b.myrequest_dat, b.request_dat)
        })
    };
    a.updateContactList = function(b, d, e, f) {
        for (var i = {}, q = {}, v = [], l = 0; l < a.contact_list.length; l++)
            i[a.contact_list[l]] = !0, q[a.contact_list[l]] = !0;
        a.contact_list = [];
        a.contact_flag = 
        {};
        a.setName(0, "ChatWork");
        for (var m in a.account_dat)
            a.setRoomId(m, 0);
        for (m in b)
            m = parseInt(m, 10), a.contact_flag[m] = !0, CW.registerAvatar(m), a.contact_list.push(m), a.setAccountDat(m, b[m]), delete i[m], q[m] || v.push(m);
        v && (a.view.updateAvatar(v), a.view.updateName(v));
        for (m in d)
            a.setNickName(m, d[m].nn), a.setMentionNum(m, d[m].mn);
        for (m in e)
            a.setAccountDat(m, e[m]);
        a.myrequest_dat = e;
        d = [];
        for (m in f)
            a.setAccountDat(m, f[m]), CW.init_loaded && !a.request_dat[m] && d.push(m);
        d && (a.view.updateAvatar(d), a.view.updateName(d));
        if (CW.init_loaded) {
            d = [];
            for (m in a.request_dat)
                !f[m] && !b[m] && (a.account_dat[m] = void 0, d.push(m));
            for (m in i)
                a.account_dat[m] = void 0, d.push(m);
            d.length > 0 && a.refreshAccount(d)
        }
        a.request_dat = f;
        a.refreshInternal();
        a.buildMyStatus();
        a.buildMyContact()
    };
    a.showChatWorkIdRequestDialog = function(b) {
        a.view.showChatWorkIdRequestDialog(b)
    };
    a.refreshInternal = function() {
        if (CW.is_business) {
            for (var a in RL.rooms)
                RL.rooms[a].is_internal = -1;
            RL.build()
        }
    };
    a.buildMyStatus = function() {
        a.view.buildMyStatus()
    };
    a.buildMyContact = 
    function() {
        a.view.buildMyContact()
    };
    a.searchSocialContactList = function(b) {
        typeof a.view.searchSocialContactList == "function" && a.view.searchSocialContactList(b)
    };
    a.saveInviteInfo = function(a, b) {
        CW.post("gateway.php", {cmd: "save_invite_info",type: a,invite_data: b})
    };
    a.isMatchedWithKeyList = function(b, d) {
        var e = a.getName(d) + " " + a.getOrgName(d) + " " + a.getDepartment(d);
        return CW.isMatchedWithKeyList(b, e)
    }
}
function Setting() {
    var b = this;
    b.data = {};
    b.notification_data = {};
    b.loaded = !1;
    b.announce_dat = {};
    b.dateformat2short = {"Y\u5e74m\u6708d\u65e5": "m\u6708d\u65e5","m/d/Y": "m/d","d/m/Y": "d/m","Y/m/d": "m/d","m-d-Y": "m-d","d-m-Y": "d-m","Y-m-d": "m-d","m.d.Y": "m.d","d.m.Y": "d.m","Y.m.d": "m.d","m/d-Y": "m/d"};
    b.prepare = function() {
        b.view = new SettingView(b);
        b.view.prepare()
    };
    b.isLoaded = function() {
        return b.loaded
    };
    b.getSetting = function(a) {
        CW.get("gateway.php", {cmd: "get_setting"}, function(f) {
            f.setting_data && b.updateSetting(f.setting_data, 
            a)
        })
    };
    b.updateSetting = function(a, f) {
        var e = {}, d;
        for (d in a)
            b.data[d] != a[d] && (e[d] = b.data[d] == void 0 ? 1 : 2), b.data[d] = a[d];
        if (b.data.enter_action == void 0)
            b.data.enter_action = "br";
        b.data.desktop_alert = b.data.desktop_alert == void 0 ? 0 : parseInt(b.data.desktop_alert, 10);
        b.data.notifier_message = b.data.notifier_message == void 0 ? 1 : parseInt(b.data.notifier_message, 10);
        b.data.popup_sound = b.data.popup_sound == void 0 ? 1 : parseInt(b.data.popup_sound, 10);
        if (b.data.sound_type == void 0)
            b.data.sound_type = "mallet";
        if (b.data.sound_volume == 
        void 0)
            b.data.sound_volume = 0.5;
        b.data.startup_help = b.data.startup_help == void 0 ? 1 : parseInt(b.data.startup_help, 10);
        b.data.notifier_duration = b.data.notifier_duration == void 0 ? 10 : parseInt(b.data.notifier_duration, 10);
        b.data.notifier_onlyto = b.data.notifier_onlyto == void 0 ? 0 : parseInt(b.data.notifier_onlyto, 10);
        b.data.allow_search = b.data.allow_search == void 0 ? 1 : parseInt(b.data.allow_search, 10);
        b.data.notify_term = b.data.notify_term == void 0 ? 1 : parseInt(b.data.notify_term, 10);
        b.data.faviconstat = b.data.faviconstat == 
        void 0 ? 0 : parseInt(b.data.faviconstat, 10);
        b.data.show_delmessage = b.data.show_delmessage == void 0 ? 0 : parseInt(b.data.show_delmessage, 10);
        b.data.show_external = b.data.show_external == void 0 ? 1 : parseInt(b.data.show_external, 10);
        b.data.private_nickname = b.data.private_nickname == void 0 ? 1 : parseInt(b.data.private_nickname, 10);
        b.data.shorten_url = b.data.shorten_url == void 0 ? 1 : parseInt(b.data.shorten_url, 10);
        b.data.show_stepguide = b.data.show_stepguide == void 0 ? 1 : parseInt(b.data.show_stepguide, 10);
        b.data.welcome = b.data.welcome == 
        void 0 ? 0 : parseInt(b.data.welcome, 10);
        b.data.announce == void 0 ? b.data.announce = 0 : b.data.desktop_alert = parseInt(b.data.desktop_alert, 10);
        if (b.data.dateformat == void 0)
            b.data.dateformat = L.dateformat;
        b.data.dateformat_short = b.dateformat2short[b.data.dateformat];
        b.loaded = !0;
        e.announce == 2 && b.getAnnounce();
        if (CW.init_loaded) {
            if ((e.show_delmessage != void 0 || e.shorten_url != void 0) && RM)
                CW.last_timeline_buildkey = "", RM.build();
            if (e.faviconstat != void 0 && ST.data.faviconstat) {
                d = 0;
                if (RM && RM.id)
                    d = RM.id;
                RL.view.updateTitle(d)
            }
            e.show_external != 
            void 0 && RL.build()
        }
        ST.view.updateSetting();
        typeof f == "function" && f()
    };
    b.sendChatSetting = function(a, b) {
        typeof b != "function" && (b = function() {
        });
        CW.post("gateway.php", {cmd: "send_chat_setting",data: a}, b)
    };
    b.getAnnounce = function() {
        CW.get("gateway.php", {cmd: "get_announce",announce: ST.data.announce}, function(a) {
            a.announce_dat && b.updateAnnounce(a.announce_dat)
        })
    };
    b.closeAnnounce = function() {
        if (b.announce_dat.id != void 0)
            b.sendChatSetting({announce: b.announce_dat.id}), b.announce_dat = {}, b.view.updateAnnounce()
    };
    b.updateAnnounce = function(a) {
        b.announce_dat = a;
        b.view.updateAnnounce()
    };
    b.refreshSocialConnectStatus = function(a) {
        CW.post("gateway.php", {cmd: "get_social_info"}, function(f) {
            f.social_info != void 0 && b.view.refreshSocialConnectStatus(f.social_info);
            typeof a == "function" && a()
        })
    };
    b.loadNotificationSetting = function() {
        CW.get("gateway.php", {cmd: "set_notification_data",account_id: myid,notification_id: NOTIFICATION_ID,device_type: DEVICE_TYPE,model: Ti.Platform.model,target_token: DEVICE_TOKEN,is_first_load: !0}, function(a) {
            if (a.notification_id != 
            void 0)
                NOTIFICATION_ID = a.notification_id, Ti.App.Properties.setString("notification_id", NOTIFICATION_ID);
            if (a.notification_dat != void 0) {
                b.notification_data = a.notification_dat;
                if (Ti.App.Properties.hasProperty("last_notification_status") && (a = Ti.App.Properties.getString("last_notification_status"), Ti.App.Properties.setString("last_notification_status", null), a == "open"))
                    b.notification_data.notification_status = "open", CW.post("gateway.php", {cmd: "set_notification_data",account_id: myid,notification_id: NOTIFICATION_ID,
                        device_type: DEVICE_TYPE,status: "open"});
                b.view.setNotificationSetting()
            }
        })
    };
    b.openSocialConnectWindow = function(a, f) {
        typeof b.view.openSocialConnectWindow == "function" && b.view.openSocialConnectWindow(a, f)
    }
}
function File() {
    var b = this;
    b.file_id2file_dat = {};
    b.unknown_flag = {};
    b.storage = {used: 0,limit: 0,available: 0};
    b.myfile_load_flag = {loading: !1,loaded: !1};
    b.prepare = function() {
        b.view = new FileView(b);
        b.view.prepare()
    };
    b.registerFile = function(a) {
        b.file_id2file_dat[a] == void 0 && (b.unknown_flag[a] = !0)
    };
    b.hasUnknown = function() {
        for (var a in b.unknown_flag)
            b.file_id2file_dat[a] != void 0 && delete b.unknown_flag[a];
        for (a in b.unknown_flag)
            if (b.file_id2file_dat[a] == void 0)
                return !0;
        return !1
    };
    b.getUnknown = function(a) {
        var f = 
        [], e;
        for (e in b.unknown_flag)
            b.file_id2file_dat[e] == void 0 ? f.push(e) : delete b.unknown_flag[e];
        f.length && CW.postSync("gateway.php", {cmd: "get_file",file_id: f}, function(d) {
            for (var e in d.file_dat)
                b.file_id2file_dat[e] = d.file_dat[e], delete b.unknown_flag[e];
            typeof a == "function" && a(d.file_dat)
        })
    };
    b.setFile = function(a) {
        b.file_id2file_dat[a.id] = a
    };
    b.deleteFile = function(a, f, e) {
        CW.get("gateway.php", {cmd: "delete_file",file_id: a}, function(d) {
            d.storage != void 0 && d.storage_limit != void 0 && b.updateStorageInfo(d.storage, 
            d.storage_limit, d.storage_limit_time, d.is_storage_limit);
            b.deleteFileStat(a);
            typeof f == "function" && f(d)
        }, function(a) {
            typeof e == "function" && e(a)
        })
    };
    b.deleteFileStat = function(a) {
        if (b.hasFile(a) && b.file_id2file_dat[a].st != "deleted")
            b.file_id2file_dat[a].st = "deleted", delete b.file_id2file_dat[a].fn, b.buildByFileId(a, !0)
    };
    b.hasFile = function(a) {
        return b.file_id2file_dat[a] != void 0 ? !0 : !1
    };
    b.sortFileList = function(a) {
        a.sort(function(a, e) {
            return b.file_id2file_dat[e].id - b.file_id2file_dat[a].id
        })
    };
    b.getMyFileList = 
    function() {
        var a = [], b;
        for (b in FL.file_id2file_dat)
            a.push(b);
        return a
    };
    b.editFile = function(a, b, e, d) {
        CW.get("gateway.php", {cmd: "edit_file",file_id: a,filename: b}, function(a) {
            typeof e == "function" && e(a);
            CW.watch()
        }, function(a) {
            typeof d == "function" ? d(a) : CW.alert(a)
        })
    };
    b.refreshFile = function(a) {
        b.hasFile(a) && CW.get("gateway.php", {cmd: "get_file",file_id: [a]}, function(f) {
            for (var e in f.file_dat) {
                var d = !1, i;
                for (i in f.file_dat[e])
                    b.file_id2file_dat[e][i] != f.file_dat[e][i] && (b.file_id2file_dat[e][i] = f.file_dat[e][i], 
                    d = !0);
                d && b.buildByFileId(a)
            }
        })
    };
    b.loadAllMyFile = function() {
        if (!b.myfile_load_flag.loading) {
            b.myfile_load_flag.loading = !0;
            var a = b.getMyFileList(), a = a.length > 1E3 ? "" : a.join(",");
            CW.post("gateway.php", {cmd: "load_my_file",fid: a}, function(a) {
                if (a.file_dat) {
                    for (var e in a.file_dat)
                        b.setFile(a.file_dat[e]);
                    b.myfile_load_flag.loading = !1;
                    b.myfile_load_flag.loaded = time();
                    b.buildAllMyFile()
                }
            })
        }
    };
    b.buildByFileId = function(a) {
        b.view.buildByFileId(a)
    };
    b.buildAllMyFile = function() {
        b.view.buildAllMyFile()
    };
    b.getFileListRows = 
    function(a) {
        return b.view.getFileListRows(a)
    };
    b.updateStorageInfo = function(a, f, e, d) {
        b.view.updateStorageInfo(a, f, e, d);
        b.storage.used = a.total;
        b.storage.limit = f;
        b.storage.available = b.storage.limit - b.storage.used
    };
    b.isExecutableExtension = function(a) {
        var b = ["ade", "adp", "bat", "chm", "cmd", "com", "cpl", "exe", "hta", "ins", "isp", "jse", "lib", "mde", "msc", "msp", "mst", "pif", "scr", "sct", "shb", "sys", "vb", "vbe", "vbs", "vxd", "wsc", "wsf", "wsh"];
        if ((a = a.match(/\.([^\.]+)$/)) && in_array(a[1].toLowerCase(), b))
            return !0;
        return !1
    };
    b.containIllegalChar = function(a) {
        if (a.match(/[\\\/:\*\?"<>\|]/))
            return !0;
        return !1
    }
}
function Task() {
    var b = this;
    b.task_id2task_dat = {};
    b.mytask_load_flag = {loading: {openmy: !1,openassign: !1,donemy: !1,doneassign: !1},loaded: {openmy: 0,openassign: 0,donemy: 0,doneassign: 0}};
    b.prepare = function() {
        b.view = new TaskView(b);
        b.view.prepare()
    };
    b.checkTask = function(a, f, e) {
        if (b.hasTask(a)) {
            var d = parseInt(f, 10) > 0 ? "done" : "open";
            if (b.task_id2task_dat[a].st != d)
                b.task_id2task_dat[a].st = d, b.buildByTaskId(a, !0), e || (b.task_id2task_dat[a].aid == AC.myid || b.task_id2task_dat[a].bid == AC.myid) && CW.get("gateway.php", 
                {cmd: "check_task",task_id: a,to: f})
        }
    };
    b.setTask = function(a) {
        a.id = parseInt(a.id, 10);
        a.aid = parseInt(a.aid, 10);
        a.bid = parseInt(a.bid, 10);
        a.rid = parseInt(a.rid, 10);
        a.cid = parseInt(a.cid, 10);
        b.task_id2task_dat[a.id] = a
    };
    b.hasTask = function(a) {
        return b.task_id2task_dat[a] != void 0 ? !0 : !1
    };
    b.deleteTask = function(a, f, e) {
        CW.get("gateway.php", {cmd: "delete_task",task_id: a}, function(d) {
            d.storage != void 0 && d.storage_limit != void 0 && b.updateStorageInfo(d.storage, d.storage_limit, d.storage_limit_time, d.is_storage_limit);
            b.deleteTaskStat(a);
            typeof f == "function" && f(d)
        }, function(a) {
            typeof e == "function" && e(a)
        })
    };
    b.deleteTaskStat = function(a) {
        if (b.hasTask(a) && b.task_id2task_dat[a].st != "deleted")
            b.task_id2task_dat[a].st = "deleted", delete b.task_id2task_dat[a].tn, b.buildByTaskId(a)
    };
    b.refreshTask = function(a) {
        b.hasTask(a) && CW.get("gateway.php", {cmd: "get_task",tid_list: [a]}, function(f) {
            for (var e in f.task_dat) {
                var d = !1, i;
                for (i in f.task_dat[e])
                    b.task_id2task_dat[e][i] != f.task_dat[e][i] && (b.task_id2task_dat[e][i] = f.task_dat[e][i], d = !0);
                d && b.buildByTaskId(a)
            }
        })
    };
    b.buildByTaskId = function(a, f) {
        b.view.buildByTaskId(a, f)
    };
    b.getMyTaskList = function(a, b) {
        b == void 0 && (b = "my");
        var e = [], d;
        for (d in TK.task_id2task_dat)
            (b == "my" ? TK.task_id2task_dat[d].aid : TK.task_id2task_dat[d].bid) == AC.myid && TK.task_id2task_dat[d].st == a && e.push(d);
        return e
    };
    b.sortTaskList = function(a) {
        a.sort(function(a, e) {
            var d = 0, i = 0;
            b.task_id2task_dat[a].lt && (d = parseInt(b.task_id2task_dat[a].lt, 10));
            b.task_id2task_dat[e].lt && (i = parseInt(b.task_id2task_dat[e].lt, 10));
            if (d > 0 && i == 0)
                return -1;
            else if (i > 0 && 
            d == 0)
                return 1;
            if (d < i)
                return -1;
            else if (d > i)
                return 1;
            else {
                if (b.task_id2task_dat[a].aid == AC.myid && b.task_id2task_dat[e].aid != AC.myid)
                    return -1;
                else if (b.task_id2task_dat[a].aid != AC.myid && b.task_id2task_dat[e].aid == AC.myid)
                    return 1;
                return b.task_id2task_dat[a].id - b.task_id2task_dat[e].id
            }
        })
    };
    b.buildAllMyTask = function(a, f) {
        b.view.buildAllMyTask(a, f)
    };
    b.getTaskListRows = function(a, f) {
        return b.view.getTaskListRows(a, f)
    }
}
function RoomList() {
    var b = this;
    b.rooms = {};
    b.lazy_select = 0;
    b.lazy_select_chat = 0;
    b.has_update = !0;
    b.rebuild_room = !1;
    b.update_flag = {};
    b.last_update_time_dat = {};
    b.category_dat = {};
    b.load_type = "";
    b.focused_room_id = 0;
    b.filter_word = "";
    b.filter_readonly = !1;
    b.filter_category = "";
    b.category_defaults = {all: !0,contact: !0,group: !0,mytask: !0};
    b.role_map = {"1": "admin","2": "member","3": "readonly"};
    b.room_type_map = {"1": "group","2": "contact","3": "my"};
    b.preset_typemap = {"1": "group","2": "check","3": "document","4": "meeting",
        "5": "event","6": "project","7": "business","8": "study","9": "security","10": "star","11": "idea","12": "heart","13": "magcup","14": "beer","15": "music","16": "sports","17": "travel"};
    b.preset_type = {};
    for (var a in b.preset_typemap)
        b.preset_type[b.preset_typemap[a]] = !0;
    b.filtered_room_list = [];
    b.unread_total = 0;
    b.mytask_total = 0;
    b.unread_room_sum = 0;
    b.mention_room_sum = 0;
    b.mytask_room_sum = 0;
    var f = {}, e = !1;
    b.prepare = function() {
        b.view = new RoomListView(b);
        b.view.prepare()
    };
    b.getDefaultRoom = function() {
        var a = 0;
        if (b.lazy_select && 
        b.rooms[b.lazy_select])
            a = b.lazy_select;
        a || (a = AC.getRoomId(AC.myid));
        return b.rooms[a]
    };
    b.getSortedRoomList = function(a) {
        var e = [], f = [], h;
        for (h in b.rooms)
            b.rooms[h].sticky ? f.push(h) : e.push(h);
        switch (a) {
            case "name":
                e = b.sortByName(e);
                f = b.sortByName(f);
                break;
            default:
                e = b.sortByLastUpdateTime(e), f = b.sortByLastUpdateTime(f)
        }
        a = 0;
        for (h = e.length; a < h; a++)
            f.push(e[a]);
        return f
    };
    b.sortByName = function(a) {
        a.sort(function(a, d) {
            return sort_for_string(b.rooms[a].getName(), b.rooms[d].getName())
        });
        return a
    };
    b.sortByLastUpdateTime = 
    function(a) {
        a.sort(function(a, d) {
            var e = b.last_update_time_dat[d] - b.last_update_time_dat[a];
            return e > 0 ? 1 : e == 0 ? a - d : -1
        });
        return a
    };
    b.getSortedCategoryList = function() {
        var a = [], e;
        for (e in b.category_dat)
            a.push(e);
        a.sort(function(a, d) {
            return sort_for_string(b.category_dat[a].name, b.category_dat[d].name)
        });
        return a
    };
    b.setLastUpdateTime = function(a, e) {
        if (b.last_update_time_dat[a] == void 0 || b.last_update_time_dat[a] < e)
            b.last_update_time_dat[a] = parseInt(e, 10)
    };
    b.setInfoUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].info = 
        !0
    };
    b.setPersonalUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].personal = !0
    };
    b.setTaskUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].task = !0
    };
    b.setMemberUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].member = !0
    };
    b.setDescUpdate = function(a) {
        b.prepareUpdate(a);
        b.update_flag[a].desc = !0
    };
    b.deleteRoom = function(a) {
        b.has_update = !0;
        RM && RM.id == a && (RM = null);
        b.rooms[a] != void 0 && (b.rooms[a].free(), delete b.rooms[a]);
        RL.view.deleteRoom(a)
    };
    b.setUpdate = function(a) {
        b.has_update = a
    };
    b.hasUpdate = 
    function() {
        return b.has_update
    };
    b.prepareUpdate = function(a) {
        b.rooms[a] == void 0 && (b.rooms[a] = new Room(a));
        b.has_update = !0;
        b.update_flag[a] == void 0 && (b.update_flag[a] = {})
    };
    b.prepareRM = function() {
        if (!RM && (RM = RL.getDefaultRoom()))
            RM.rswitch = !0, b.rebuild_room = !0
    };
    b.selectRoom = function(a, e) {
        if (RL)
            RL.rooms[a] ? (b.view.selectRoom(a), RL.rooms[a].rswitch = !0, RL.rooms[a].build({jump_to_chat_id: e}), b.focusRoom(a)) : CW.alert(L.chatroom_error_no_member)
    };
    b.selectCategory = function(a) {
        b.filter_category = a;
        b.view.selectCategory()
    };
    b.getCategoryName = function(a) {
        switch (a) {
            case "all":
                return L.chat_category_allchat;
            case "contact":
                return L.directchat;
            case "group":
                return L.groupchat;
            case "mytask":
                return L.chat_category_mytaskchat;
            default:
                return b.category_dat[a].name
        }
    };
    b.setReadOnly = function(a) {
        b.filter_readonly = a;
        b.view.setReadOnly()
    };
    b.load = function() {
        var a = [], e = [], f = [], h = [], j = {}, g = !1, k;
        for (k in b.update_flag)
            RL.rooms[k] && (g = !0, b.update_flag[k].info != void 0 && a.push(k), b.update_flag[k].personal != void 0 && e.push(k), b.update_flag[k].member != 
            void 0 && f.push(k), b.update_flag[k].task != void 0 && (RL.rooms[k].tasklist ? (j[k] = RL.rooms[k].tasklist.getTaskList(), j[k].length == 0 && (j[k] = 1)) : j[k] = 1), b.update_flag[k].desc != void 0 && h.push(k));
        if (RM && b.update_flag[RM.id] != void 0)
            for (var q in b.update_flag[RM.id])
                if (q != "personal") {
                    b.rebuild_room = !0;
                    break
                }
        b.has_update = !1;
        b.update_flag = {};
        if (g) {
            g = {};
            if (a.length) {
                q = 0;
                for (var v = a.length; q < v; q++) {
                    k = a[q];
                    g[k] = {};
                    if (b.rooms[k]) {
                        var l = b.rooms[k];
                        g[k].c = l.chat_num;
                        g[k].u = l.getUnreadNum();
                        g[k].l = l.timeline ? b.rooms[k].timeline.getLastChatId() : 
                        0;
                        if (l.filelist) {
                            var m = l.filelist.getFileList();
                            g[k].f = m.length;
                            g[k].lf = l.filelist.getLastFileId()
                        }
                    } else
                        g[k].c = 0, g[k].u = 0, g[k].l = 0;
                    g[k].t = b.last_update_time_dat[k] ? b.last_update_time_dat[k] : 0
                }
            }
            CW.post("gateway.php", {cmd: "get_room_info",i: g,p: e,m: f,d: h,t: j,rid: RL.lazy_select,type: b.load_type}, function(a) {
                b.updateRoomData(a.room_dat)
            })
        } else
            b.has_update = !1, b.build()
    };
    b.updateRoomData = function(a) {
        var i = !1, n = !1, h = {}, j;
        for (j in a) {
            rval = a[j];
            RL.rooms[j] == void 0 && (RL.rooms[j] = new Room(j));
            var g = RL.rooms[j], 
            k = g.getUnreadNum();
            g.mid = rval.mid;
            if (rval.c != void 0)
                g.chat_num = parseInt(rval.c, 10), g.name = "", g.allow_see_member = 1, g.allow_upload_file = 1, g.allow_add_task = 1, g.allow_send_message = 1, g.join_need_accept = 1, g["public"] = 0, g.link_name = "", g.header = "", g.icon = b.preset_typemap[1], g.icon_preset = !0;
            if (rval.f != void 0)
                g.file_num = parseInt(rval.f, 10);
            if (rval.t != void 0)
                g.task_num = parseInt(rval.t, 10);
            rval.n != void 0 && g.setName(rval.n);
            if (rval.mid)
                g.read_num = 0, g.mytask_num = 0, g.mention_num = 0, g.highlight_num = 0, g.sticky = 0;
            if (rval.r != void 0)
                g.read_num = 
                parseInt(rval.r, 10);
            if (rval.mt != void 0)
                g.mytask_num = parseInt(rval.mt, 10);
            if (rval.mn != void 0)
                g.mention_num = parseInt(rval.mn, 10);
            if (rval.s != void 0)
                g.sticky = parseInt(rval.s, 10);
            if (rval.aml != void 0)
                g.allow_see_member = parseInt(rval.aml, 10);
            if (rval.af != void 0)
                g.allow_upload_file = parseInt(rval.af, 10);
            if (rval.at != void 0)
                g.allow_add_task = parseInt(rval.at, 10);
            if (rval.am != void 0)
                g.allow_send_message = parseInt(rval.am, 10);
            if (rval.ja != void 0)
                g.join_need_accept = parseInt(rval.ja, 10);
            rval.p != void 0 && (g["public"] = 
            parseInt(rval.p, 10));
            if (rval.ic != void 0)
                b.preset_typemap[rval.ic] ? (g.icon = b.preset_typemap[rval.ic], g.icon_preset = !0) : (g.icon = rval.ic, g.icon_preset = !1);
            if (rval.hr != void 0)
                g.header = rval.hr;
            if (rval.pd != void 0)
                g.public_description = rval.pd;
            if (rval.ln != void 0)
                g.link_name = rval.ln;
            if (rval.d != void 0)
                g.description = rval.d;
            if (rval.m != void 0) {
                for (var q in rval.m)
                    rval.m[q] = b.role_map[rval.m[q]], h[q] = !0;
                g.setMember(rval.m)
            }
            if (rval.mr != void 0)
                for (var v in g.member_request = rval.mr, g.member_request) {
                    var l = g.member_request[v];
                    AC.isUnknown(l.id) && AC.setAccountDat(l.id, l)
                }
            if (rval.tp != void 0)
                g.type = b.room_type_map[rval.tp];
            rval.lt != void 0 && RL.setLastUpdateTime(j, rval.lt);
            !k && k < g.getUnreadNum() && (n = !0);
            if (rval.task_dat) {
                if (!g.tasklist)
                    g.tasklist = new TaskList(g);
                var k = [], m;
                for (m in rval.task_dat)
                    TK.setTask(rval.task_dat[m]), k.push(m);
                if (k.length > 0)
                    TK.buildByTaskId(k), g.tasklist.loaded = !0
            }
            if (rval.file_list) {
                if (!g.filelist)
                    g.filelist = new FileList(g);
                v = 0;
                for (k = rval.file_list.length; v < k; v++)
                    g.filelist.insertFile(rval.file_list[v]);
                FL.myfile_load_flag.loaded && FL.buildAllMyFile()
            }
            if (rval.chat_list && rval.chat_list.length > 0) {
                if (!g.timeline)
                    g.timeline = new TimeLine(g);
                if (CW.enable_popup && !CW.is_first_load) {
                    v = 0;
                    for (k = rval.chat_list; v < k; v++)
                        h[rval.chat_list[v].aid] = !0
                }
                var p = "";
                v = 0;
                for (k = rval.chat_list.length; v < k; v++){
                    if(is_highlight(rval.chat_list[v].msg)){ 
                        g.highlight_num++
                    }
                    if (i = !0, g.timeline.addChat(rval.chat_list[v]), CW.enable_popup && !CW.is_first_load && (l = rval.chat_list[v], f[l.id] == void 0)) {
                        f[l.id] = !0;
                        var o = ST.data.notifier_message == "1" ? CW.renderMessage(l.msg, {text: !0}) : L.notifier_newmessage, 
                        p = o.length > 0 && AC.myid != l.aid ? {id: l.id,aid: l.aid,room_id: g.id,msg: o} : ""
                    }
                }
            }
            b.updateMasterData(j, rval)
        }
        a = function() {
            p && (!ST.data.notifier_onlyto || b.rooms[p.room_id].timeline.chat_id2chat_dat[p.id].mn || b.rooms[p.room_id].timeline.chat_id2chat_dat[p.id].hl) && CW.popup(CW.getAvatarPanel(p.aid, {src: !0}), RL.rooms[p.room_id].getName(), AC.getName(p.aid) + ":" + p.msg, p.room_id);
            !wfocus && i && !e && !CW.is_first_load && ST.data.popup_sound == 1 && audioObjSupport && (e = !0, ST.data.sound_type != "ashvoice" ? n ? CW.playSound(ST.data.sound_type) : CW.playSound(ST.data.sound_type + "2") : CW.playSound(ST.data.sound_type), 
            setTimeout(function() {
                e = !1
            }, 1E3));
            if (CW.is_first_load)
                CW.is_first_load = !1;
            b.build()
        };
        for (q in h)
            AC.getName(q);
        AC.hasUnknown() ? AC.getUnknown(a) : a();
        b.view.updateRoomData()
    };
    b.build = function() {
        if (b.has_update)
            return b.load();
        else {
            var a = b.getSortedRoomList();
            b.filtered_room_list = [];
            var e = null, f = !1, h = {};
            if (b.filter_category && !b.category_defaults[b.filter_category])
                for (var f = !0, e = 0, j = b.category_dat[b.filter_category].list.length; e < j; e++)
                    h[b.category_dat[b.filter_category].list[e]] = !0;
            b.unread_room_sum = 
            0;
            b.mention_room_sum = 0;
            b.mytask_room_sum = 0;
            b.unread_total = 0;
            b.mytask_total = 0;
            j = [];
            b.filter_word && (j = CW.splitWithSpace(b.filter_word));
            for (var g = 0; g < a.length; g++)
                if (a[g] != void 0) {
                    var e = b.rooms[a[g]], k = e.getUnreadNum(), q = 0;
                    k > 0 && (b.unread_total += k, b.unread_room_sum++, q = e.getMentionNum(), q > 0 && b.mention_room_sum++);
                    e.mytask_num > 0 && (b.mytask_total += e.mytask_num, b.mytask_room_sum++);
                    if (j.length > 0) {
                        k = e.getName();
                        if (!k)
                            continue;
                        if (e.type == "contact") {
                            if (!AC.isMatchedWithKeyList(j, e.getAccountId()))
                                continue
                        } else if (!CW.isMatchedWithKeyList(j, 
                        k))
                            continue
                    } else {
                        if (!b.filter_readonly)
                            if (f) {
                                if (h[e.id] != !0)
                                    continue
                            } else {
                                if (b.filter_category == "contact" && e.type != "contact")
                                    continue;
                                if (b.filter_category == "group" && e.type != "group")
                                    continue;
                                if (b.filter_category == "mytask" && e.mytask_num == 0)
                                    continue
                            }
                        if (b.filter_readonly && k == 0)
                            continue
                    }
                    b.filtered_room_list.push(a[g])
                }
            b.view.build(b.filtered_room_list);
            b.view.updateSumNumbers();
            b.lazy_select ? b.rooms[b.lazy_select] != void 0 ? (b.selectRoom(b.lazy_select, b.lazy_select_chat), b.lazy_select = 0, b.lazy_select_chat = 
            0) : RM && CW.alert(L.chatroom_error_no_member, function() {
                b.selectRoom(RM.id);
                b.lazy_select = 0;
                b.lazy_select_chat = 0
            }) : b.rebuild_room && RM && RM.build();
            b.rebuild_room = !1
        }
    };
    b.refreshCategory = function() {
        CW.get("gateway.php", {cmd: "get_category"}, function(a) {
            b.updateCategory(a.cat_dat)
        })
    };
    b.updateCategory = function(a) {
        b.category_dat = {};
        for (var e in a)
            b.category_dat[e] = a[e];
        RL.buildCategory()
    };
    b.buildCategory = function() {
        b.filter_category && !b.category_defaults[b.filter_category] && b.category_dat[b.filter_category] == 
        void 0 && b.selectCategory("all");
        b.view.buildCategory()
    };
    b.getFocusedRoomId = function() {
        return b.focused_room_id
    };
    b.focusRoom = function(a) {
        b.focused_room_id = a;
        b.view.focusRoom(a)
    };
    b.clearFocusRoom = function() {
        b.focused_room_id = 0;
        b.view.clearFocusRoom()
    };
    b.showJoinPublicChatDialog = function(a) {
        b.rooms[a] != void 0 ? b.selectRoom(a) : CW.get("gateway.php", {cmd: "get_room_public_info",rid: a}, function(e) {
            if (e.error) {
                switch (e.error) {
                    case "joined":
                        b.selectRoom(a)
                }
                e.message && CW.alert(e.message)
            }
            if (e.room_dat != void 0)
                e = 
                e.room_dat, e.id = a, b.view.showJoinPublicChatDialog(e)
        })
    };
    b.updateMasterData = function(a, e) {
        b.view.updateMasterData(a, e)
    }
}
function Room(b) {
    this.view = new RoomView(this);
    this.id = b;
    this.mid = 0;
    this.tasklist = this.filelist = this.timeline = null;
    this.mytask_num = this.task_num = this.file_num = this.chat_num = this.mention_num = this.highlight_num = this.read_num = 0;
    this.description = !1;
    this.member_dat = {};
    this.member_request = [];
    this.sorted_member_list = null;
    this.is_internal = -1;
    this.icon = "";
    this.icon_preset = !1;
    this.header = "";
    this.join_need_accept = this.allow_send_message = this.allow_add_task = this.allow_upload_file = this.allow_see_member = 0;
    this["public"] = 0;
    this.type = 
    this.link_name = this.public_description = "";
    this.sending_id = 0;
    this.read_lock = this.rswitch = this.reading = this.sticky = !1;
    this._name = "";
    this.buildtime = this._account_id = 0
}
Room.prototype = {getUnreadNum: function() {
        var b = parseInt(this.chat_num - this.read_num, 10);
        b < 0 && (b = 0);
        return b
    },getMentionNum: function() {
        return this.mention_num
    },getHighlightNum: function() {
        return this.highlight_num
    },getViewStat: function() {
        return this.view.getViewStat()
    },isInternal: function() {
        this.is_internal == -1 && this.checkInternal();
        return this.is_internal == 1 ? !0 : !1
    },refreshTaskNum: function() {
        if (this.tasklist) {
            for (var b = this.tasklist.getTaskList("open"), a = 0, f = 0, e = b.length; f < e; f++)
                TK.task_id2task_dat[b[f]].aid == AC.myid && a++;
            this.task_num = b.length;
            this.mytask_num = 
            a
        }
    },getName: function(b) {
        var a = this.getAccountId();
        return a > 0 ? a == AC.myid ? L.mychat : b != void 0 && b.nameonly ? AC.getName(a) : AC.getFullName(a) : this._name
    },getSortedMemberList: function() {
        if (this.sorted_member_list)
            return this.sorted_member_list;
        var b = [], a;
        for (a in this.member_dat)
            b.push(a);
        this.sortMember(b);
        return this.sorted_member_list = b
    },sortMember: function(b) {
        b.sort(function(a, b) {
            if (a == AC.myid)
                return -1;
            if (b == AC.myid)
                return 1;
            return AC.getMentionNum(b) - AC.getMentionNum(a)
        })
    },setName: function(b) {
        this._name = 
        b
    },setMember: function(b) {
        this.member_dat = b;
        this.sorted_member_list = null;
        this.checkInternal();
        this._account_id = 0
    },checkInternal: function() {
        if (CW.is_business) {
            this.is_internal = 1;
            var b = AC.getGroupId(AC.myid), a;
            for (a in this.member_dat)
                if (AC.getGroupId(a) != b) {
                    this.is_internal = 0;
                    break
                }
        }
    },refreshMember: function() {
        var b = this, a = b.id;
        CW.post("gateway.php", {cmd: "get_room_info",m: [a]}, function(f) {
            if (f.room_dat[a].member_dat != void 0)
                b.member_dat = f.room_dat[a].member_dat, b.sorted_member_list = null, b.buildMemberList()
        })
    },
    getIcon: function(b, a) {
        a == void 0 && (a = "small");
        return this.view.getIcon(b, a)
    },getAccountId: function() {
        if (this._account_id != 0)
            return this._account_id;
        if (this.type == "my")
            return AC.myid;
        else if (this.type == "contact")
            for (var b in this.member_dat)
                if (AC.myid != b)
                    return b;
        return 0
    },getJoinLink: function() {
        return this["public"] ? CHATWORK_MYPAGE_PATH + "/g/" + (this.link_name != "" ? this.link_name : this.id) : !1
    },addSendingChat: function(b) {
        this.sending_id++;
        this.timeline.sending_chat_list.push({sid: this.sending_id,aid: AC.myid,
            mn: !1,msg: b,tm: time(),utm: 0,sent: !1});
        this.view.addSendingChat(this.sending_id);
        return this.sending_id
    },deleteSendingChat: function(b) {
        for (var a = !0, f = 0, e = this.timeline.sending_chat_list.length; f < e; f++) {
            var d = this.timeline.sending_chat_list[f];
            if (d.sid <= b && d.sent == !1)
                d.sent = !0;
            d.sent || (a = !1)
        }
        if (a)
            this.timeline.sending_chat_list = []
    },load: function(b) {
        var a = {cmd: "load_chat",room_id: this.id,last_chat_id: this.timeline.getLastChatId(),first_chat_id: this.timeline.getFirstChatId(),jump_to_chat_id: b,unread_num: this.getUnreadNum()};
        if (RL.load_type == "mobile")
            a.limit_num = 20;
        if (!this.filelist.loaded)
            this.file_num == 0 ? this.filelist.loaded = !0 : a.file = 1;
        if (!this.tasklist.loaded)
            this.task_num == 0 ? this.tasklist.loaded = !0 : a.task = 1;
        if (this.description === !1)
            a.desc = 1;
        var f = this;
        CW.get("gateway.php", a, function(a) {
            var d, i;
            if (a.task_dat)
                for (d in a.task_dat)
                    TK.setTask(a.task_dat[d]);
            if (a.file_list) {
                d = 0;
                for (i = a.file_list.length; d < i; d++)
                    f.filelist.insertFile(a.file_list[d])
            }
            if (b) {
                d = 0;
                for (i = a.chat_list.length; d < i; d++)
                    f.timeline.insertChat(a.chat_list[d])
            } else {
                d = 
                0;
                for (i = a.chat_list.length; d < i; d++)
                    f.timeline.addChat(a.chat_list[d])
            }
            if (a.description != void 0)
                f.description = a.description;
            if (a.public_description != void 0)
                f.public_description = a.public_description;
            if (RM && RM.id == f.id)
                f.rswitch = !0, f.build({jump_to_chat_id: b})
        })
    },build: function(b) {
        CW.cancelRead(this.id);
        b == void 0 && (b = {});
        if (this.id == 0)
            this.view.buildHome();
        else {
            if (!this.timeline)
                this.timeline = new TimeLine(this);
            if (!this.filelist)
                this.filelist = new FileList(this);
            if (!this.tasklist)
                this.tasklist = new TaskList(this);
            this.read_lock = b.read_lock ? !0 : !1;
            this.id && (b.jump_to_chat_id && this.chat_num > this.timeline.chat_list.length && !this.timeline.chat_id2chat_dat[b.jump_to_chat_id] ? this.load(b.jump_to_chat_id) : this.buildtime == 0 && this.load(), this.view.build(b))
        }
    },buildMemberList: function() {
        this.view.buildMemberList()
    },free: function() {
        for (var b in this)
            b != "id" && b != "del" && (this[b] && typeof this[b] == "object" && typeof this[b].free == "function" && this[b].free(), delete this[b])
    }};
function TimeLine(b) {
    this.view = new TimeLineView(this);
    this.room = b;
    this.chat_list = [];
    this.chat_id2chat_dat = {};
    this.sending_chat_list = [];
    this._loading = this.has_old = !1
}
TimeLine.prototype = {getLastChatId: function() {
        if (!this.chat_list.length)
            return 0;
        return this.chat_list[this.chat_list.length - 1].id
    },getFirstChatId: function() {
        if (!this.chat_list.length)
            return 0;
        return this.chat_list[0].id
    },addChat: function(b) {
        this.chat_id2chat_dat[b.id] == void 0 && (this.chat_list.push(b), this.chat_id2chat_dat[b.id] = b, this.setMention(b.id), this.setHighlight(b.id))
    },insertChat: function(b) {
        this.chat_id2chat_dat[b.id] == void 0 && (this.chat_list.unshift(b), this.chat_id2chat_dat[b.id] = b, this.setMention(b.id), this.setHighlight(b.id))
    },deleteChat: function(b) {
        if (this.chat_id2chat_dat[b] != 
        void 0)
            this.chat_id2chat_dat[b].msg = "[deleted]", this.chat_id2chat_dat[b].mn = !1, this.chat_id2chat_dat[b].utm = time()
    },refreshChat: function(b) {
        var a = this;
        this.chat_id2chat_dat[b] != void 0 && CW.getSync("gateway.php", {cmd: "get_chat",chat_id: b,rid: this.room.id}, function(f) {
            for (var e in f.chat_dat)
                a.chat_id2chat_dat[b][e] = f.chat_dat[e];
            a.setMention(b)
            a.setHighlight(b)
        })
    },setMention: function(b) {
        b = this.chat_id2chat_dat[b];
        if (b != void 0)
            b.mn = b.msg.indexOf("[To:" + AC.myid + "]") != -1 || b.msg.indexOf("[rp aid=" + AC.myid + " to=") != -1 ? !0 : 
            !1
    },setHighlight: function(b) {
        b = this.chat_id2chat_dat[b];
        if (b != void 0) b.hl = is_highlight(b.msg)
    },read: function(b) {
        this.view.read(b)
    },build: function(b, a, f, e) {
        this.room.id && this.view.build(b, a, f, e)
    },loadOld: function(b) {
        var a = this;
        if (this._loading)
            return !1;
        typeof b != "function" && (b = function() {
        });
        if (this.room.buildtime)
            this._loading = !0, CW.get("gateway.php", {cmd: "load_old_chat",room_id: this.room.id,first_chat_id: this.getFirstChatId()}, function(f) {
                for (var e = a.getFirstChatId(), d = {}, i = 0, n = f.chat_list.length; i < n; i++)
                    a.insertChat(f.chat_list[i]), d[f.chat_list[i].aid] = !0;
                for (var h in d)
                    AC.getName(h);
                f = function() {
                    b();
                    a.build(!1, e);
                    a._loading = !1
                };
                AC.hasUnknown() ? AC.getUnknown(f) : f()
            })
    },free: function() {
    }};
function FileList(b) {
    this.view = new FileListView(this);
    this.loaded = !1;
    this.room = b
}
FileList.prototype = {getLastFileId: function() {
        var b = this.getFileList();
        if (b.length) {
            for (var a = 0, f = 0; f < b.length; f++)
                a < b[f] && (a = b[f]);
            return a
        } else
            return 0
    },getFileList: function() {
        var b = [], a;
        for (a in FL.file_id2file_dat)
            FL.file_id2file_dat[a].rid == this.room.id && b.push(a);
        return b
    },insertFile: function(b) {
        FL.file_id2file_dat[b.id] == void 0 && (FL.file_id2file_dat[b.id] = b)
    },build: function() {
        this.view.build()
    },free: function() {
        for (var b in FL.file_id2file_dat)
            FL.file_id2file_dat[b].rid == this.room.id && delete FL.file_id2file_dat[b]
    }};
function TaskList(b) {
    this.view = new TaskListView(this);
    this.alltask_status = "open";
    this.loaded = !1;
    this.room = b
}
TaskList.prototype = {getTaskList: function(b) {
        b == void 0 && (b = "open");
        var a = [], f;
        for (f in TK.task_id2task_dat)
            TK.task_id2task_dat[f].rid == this.room.id && TK.task_id2task_dat[f].st == b && a.push(f);
        return a
    },build: function() {
        this.view.build()
    },free: function() {
        for (var b in TK.task_id2task_dat)
            TK.task_id2task_dat[b].rid == this.room.id && delete TK.task_id2task_dat[b]
    }};
function RoomDialog() {
    var b = this;
    b.prepare = function() {
        b.view = new RoomDialogView(b);
        b.view.prepare()
    };
    b.buildMember = function() {
        b.view.buildMember()
    }
}
function ChatSend() {
    var b = this;
    b.prepare = function() {
        b.view = new ChatSendView(b);
        b.view.prepare()
    };
    b.initChatText = function() {
        b.view.initChatText()
    };
    b.setChatEdit = function(a, f) {
        b.view.setChatEdit(a, f)
    };
    b.setChatEditColor = function(a) {
        b.view.setChatEditColor(a)
    };
    b.clearChatEdit = function(a) {
        b.view.clearChatEdit(a)
    };
    b.prepareUploadForm = function(a) {
        b.view.prepareUploadForm(a)
    };
    b.sendChat = function(a, b, e, d, i, n) {
        var h, e = d.read ? 1 : 0;
        h = d.edit_id ? d.edit_id : 0;
        var j = RL.rooms[a];
        CW.post("gateway.php", {cmd: "send_chat",
            text: b,room_id: a,last_chat_id: j.timeline.getLastChatId(),read: e,edit_id: h}, function(b) {
            if (b.chat_list)
                for (var d = 0, e = b.chat_list.length; d < e; d++)
                    j.timeline.addChat(b.chat_list[d]), RL.rooms[a].read_num++, RL.rooms[a].chat_num++;
            b.storage != void 0 && b.storage_limit != void 0 && FL.updateStorageInfo(b.storage, b.storage_limit, b.storage_limit_time, b.is_storage_limit);
            h && CW.watch();
            i(b)
        }, function(a, b) {
            b && b.is_storage_limit ? CW.showStorageLimitDialog("message") : n(a, b)
        })
    };
    b.deleteChat = function(a, b, e) {
        CW.get("gateway.php", 
        {cmd: "delete_chat",chat_id: a}, function(a) {
            typeof b == "function" && b(a);
            CW.watch()
        }, function(a) {
            typeof e == "function" ? e(a) : CW.alert(a)
        })
    };
    b.sendTask = function(a, b, e, d, i, n) {
        e ? e.toString().match(/^[0-9]+$/) || (e = strtotime_format(e, ST.data.dateformat)) : e = 0;
        CW.post("gateway.php", {cmd: "add_task",task: b,task_limit: e,assign: d,room_id: a}, function(a) {
            i(a);
            CW.watch()
        }, function(a) {
            n(a)
        })
    };
    b.editTask = function(a, b, e, d, i, n) {
        d ? d.match(/^[0-9]+$/) || (d = strtotime_format(d, ST.data.dateformat)) : d = 0;
        CW.post("gateway.php", {cmd: "edit_task",
            aid: b,task_id: a,task: e,task_limit: d}, function(a) {
            i(a);
            CW.watch()
        }, function(a) {
            n(a)
        })
    };
    b.convertToSend = function(a) {
        a = a.replace(RegExp("\\[" + L.chatsend_quote + " aid=", "g"), "[qt][qtmeta aid=");
        return a = a.replace(RegExp("\\[/" + L.chatsend_quote + "\\]", "g"), "[/qt]")
    };
    b.convertToEdit = function(a) {
        var a = a.replace(/\[qt\]\[qtmeta aid=/g, "[" + L.chatsend_quote + " aid="), a = a.replace(/\[\/qt\]/g, "[/" + L.chatsend_quote + "]"), b = a.match(/\[dtext:[^\]]+\]/g);
        if (b)
            for (var e = 0; e < b.length; e++) {
                var d = b[e].match(/\[dtext:([^\]]+)\]/)[1];
                L[d] && (a = a.replace("[dtext:" + d + "]", L[d]))
            }
        return a
    };
    b.setChatDraft = function(a, f, e) {
        CW.storage.setItem(b.getStorageKey(a, "text"), f);
        CW.storage.setItem(b.getStorageKey(a, "edit_id"), e)
    };
    b.setTaskDraft = function(a, f, e, d) {
        CW.storage.setItem(b.getStorageKey(a, "task_mode"), f);
        CW.storage.setItem(b.getStorageKey(a, "assign_list"), e);
        CW.storage.setItem(b.getStorageKey(a, "limit_date"), d)
    };
    b.getChatDraft = function(a) {
        return {text: CW.storage.getItem(b.getStorageKey(a, "text")),edit_id: CW.storage.getItem(b.getStorageKey(a, 
            "edit_id"))}
    };
    b.getTaskDraft = function(a) {
        return {task_mode: CW.storage.getItem(b.getStorageKey(a, "task_mode")),assign_list: CW.storage.getItem(b.getStorageKey(a, "assign_list")),limit_date: CW.storage.getItem(b.getStorageKey(a, "limit_date"))}
    };
    b.deleteChatDraft = function(a) {
        CW.storage.removeItem(b.getStorageKey(a, "text"));
        CW.storage.removeItem(b.getStorageKey(a, "edit_id"))
    };
    b.deleteTaskDraft = function(a) {
        CW.storage.removeItem(b.getStorageKey(a, "task_mode"));
        CW.storage.removeItem(b.getStorageKey(a, "assign_list"));
        CW.storage.removeItem(b.getStorageKey(a, "limit_date"))
    };
    b.getStorageKey = function(a, b) {
        return "draft_" + AC.myid + "_" + a + "_" + b
    };
    b.getTaskAssignList = function() {
        return b.view.getTaskAssignList()
    };
    b.setTaskAssign = function(a) {
        b.view.setTaskAssign(a)
    };
    b.clearTaskAssign = function() {
        b.view.clearTaskAssign()
    }
}
function Search() {
    var b = this;
    b.xhr = null;
    b.prepare = function() {
        b.view = new SearchView(b);
        b.view.prepare()
    };
    b.search = function(a, f, e) {
        b.xhr = CW.get("gateway.php", {cmd: "search_message",opt: a}, function(a) {
            f(a.msg_dat, a.trial_search_num)
        }, e)
    };
    b.cancelSearch = function() {
        if (b.xhr && b.xhr.abort)
            b.xhr.abort(), b.xhr = null
    }
}
function ChatWorkView(b) {
    var a = this;
    a.model = b;
    a.resize_delay_timer = null;
    a.show_promotion = !1;
    a.key = {};
    a.keyfunc = {};
    var f = "", e = !1, d = !1;
    a.prepare = function() {
        f = document.location.hash;
        for (var b = [], e = 0; e < a.model.emoticon.length; e++)
            b[e] = '<img src="image/emoticon/' + a.model.emoticon[e].src + '" class="ui_emoticon" title="' + a.model.emoticon[e].title + '" alt="' + a.model.emoticon[e].key + '"/>';
        $("#cw_emoticon_gallery").html(b.join(""));
        $C("body").on("offline", function() {
            CW.setConnectionError()
        }).on("click", function() {
            a.outboxStop || 
            a.unsetOutbox();
            a.outboxStop = !1
        }).on("change", ".cw_onlyimage", function() {
            FL.view.validateFile(this, {maxsize: 716800,onlyimage: !0})
        });
        $(window).on("beforeunload", function() {
            d = !0;
            setTimeout(function() {
                d = !1
            }, 3E3)
        }).on("resize", function() {
            if (a.resize_delay_timer === null)
                a.resize_delay_timer = setTimeout(a.model.resizeLayout, 300)
        });
        $("#cw_storage_limit_dialog").dialog({width: 550,height: "auto",title: "",autoOpen: !1,modal: !0,hide: "fade",resizable: !1,buttons: [DIALOG_CLOSE_BUTTON]});
        $("#cw_limit_error_dialog").dialog({autoOpen: !1,
            modal: !0,hide: "fade",resizable: !1,width: 500,height: 200,buttons: [DIALOG_CLOSE_BUTTON]});
        if (SERVICE_PLAN == "free") {
            if (time() - REG_TIME > 2592E3)
                a.show_promotion = !0;
            $("#cw_upgrade_footer").show()
        } else
            $("#cw_upgrade_footer").hide();
        var g = !0, o = null, h = null;
        $C("document").on("focus", "input,textarea", function() {
            g = !1;
            o = $(this)
        }).on("blur", "input,textarea", function() {
            g = !0;
            o = null
        }).keydown(function(b) {
            a.key.ctrl = typeof b.modifiers == "undefined" ? b.ctrlKey : b.modifiers & Event.CONTROL_MASK;
            a.key.shift = typeof b.modifiers == 
            "undefined" ? b.shiftKey : b.modifiers & Event.SHIFT_MASK;
            a.key.alt = typeof b.modifiers == "undefined" ? b.altKey : b.modifiers & Event.ALT_MASK;
            a.key.command = typeof b.modifiers == "undefined" ? b.metaKey : b.modifiers & Event.META_MASK;
            g ? o && o.offset().top != 0 && (g = !1) : o && o.offset().top == 0 && (g = !0);
            if (g && $(".ui-widget-overlay").length == 0) {
                var d = a.getKeyCombinationMap(b.keyCode, a.key.ctrl, a.key.shift, a.key.alt, a.key.command);
                if (a.keyfunc[d] != void 0)
                    return $C("#cw_all").click(), h = a.keyfunc[d], !1
            }
            if (b.keyCode == 27)
                return !1
        }).keyup(function(b) {
            a.key.ctrl = 
            typeof b.modifiers == "undefined" ? b.ctrlKey : b.modifiers & Event.CONTROL_MASK;
            a.key.shift = typeof b.modifiers == "undefined" ? b.shiftKey : b.modifiers & Event.SHIFT_MASK;
            a.key.alt = typeof b.modifiers == "undefined" ? b.altKey : b.modifiers & Event.ALT_MASK;
            a.key.command = typeof b.modifiers == "undefined" ? b.metaKey : b.modifiers & Event.META_MASK;
            h && (h(), h = null)
        });
        $(".cw_open_service_admin").click(function() {
            var b = "";
            $(this).hasClass("cw_service_admin_upgrade") && (b = "upgrade");
            a.showServiceAdmin(b)
        });
        $("#cw_storage_limit_link").click(function() {
            $("#cw_storage_limit_dialog").dialog("close");
            a.model.plan == "free" ? a.showServiceAdmin("upgrade") : a.showOptionPlanPrice()
        });
        $("#cw_feedback").click(function() {
            a.showFeedbackDialog()
        })
    };
    a.alert = function(a, b, d) {
        d ? $("#cw_alert_dialog_body").html(a) : $("#cw_alert_dialog_body").text(a);
        $("#cw_alert_dialog").dialog({title: "",modal: !0,hide: "fade",resizable: !1,autoOpen: !0,dialogClass: "ui-dialog-hide-title-bar",buttons: [{text: L.button_ok,click: function() {
                        $(this).dialog("close");
                        typeof b == "function" && b()
                    }}],open: function() {
                $(this).css("min-height", "")
            }})
    };
    a.confirm = function(a, b, d, e) {
        e ? $("#cw_confirm_dialog_body").html(a) : $("#cw_confirm_dialog_body").text(a);
        $("#cw_confirm_dialog").dialog({title: "",modal: !0,hide: "fade",resizable: !1,autoOpen: !0,dialogClass: "ui-dialog-hide-title-bar",buttons: [{text: L.button_cancel,click: function() {
                        typeof d == "function" && d();
                        $(this).dialog("close")
                    }}, {text: L.button_ok,click: function() {
                        b();
                        $(this).dialog("close")
                    }}],open: function() {
                $(this).css("min-height", "")
            }})
    };
    var i = null;
    a.showProgress = function(a) {
        $("#cw_progress_dialog_body").html('<img src="./image/ajax-loader-green.gif" class="ico_loading"/>' + 
        a);
        i = $("#cw_progress_dialog").dialog({title: "",modal: !0,resizable: !1,autoOpen: !0,closeOnEscape: !1,show: "fade",hide: "fade",dialogClass: "ui-dialog-hide-title-bar",open: function() {
                $(this).css("min-height", "")
            }})
    };
    a.hideProgress = function() {
        i && (i.dialog("close"), i = null)
    };
    a.registerKeyboardShortcut = function(b, d, e, f, g, h) {
        a.keyfunc[a.getKeyCombinationMap(b, d, e, f, g)] = h;
        return a
    };
    a.getKeyCombinationMap = function(a, b, d, e, f) {
        var g = "";
        g += b ? "1" : "0";
        g += d ? "1" : "0";
        g += e ? "1" : "0";
        g += f ? "1" : "0";
        g += a;
        return g
    };
    a.postLoad = 
    function() {
        CW.security_dat.disable_external == 1 && ($("#cw_search_contact_third_party").hide(), $("#cw_contact_type_box").hide());
        CW.security_dat.disable_send_file == 1 && ($C("#cw_send_file").remove(), $C("#cw_send_file_mask").remove());
        CW.security_dat.disable_download_file == 1 && ($("#cw_subinfo_tab_filelist").remove(), $("#cw_room_file_list").hide(), $("#cw_my_allfile_button").remove(), $("#cw_my_allfile_dialog").remove());
        CW.security_dat.disable_social_profile == 1 && $("#cw_profile_contact").find(".cw_social_profile").hide();
        if ($.browser.msie && parseInt($.browser.version, 10) <= 7)
            $("#cw_newbrowser_dialog").dialog({width: 600,height: 490,title: L.newbrowser_title,autoOpen: !0,resizable: !1,modal: !0,hide: "fade",buttons: [DIALOG_CLOSE_BUTTON]});
        else if (f.indexOf("contact_myrequest") != -1)
            $("#cw_contact_button").click(), $("#cw_my_contact_tab_myrequest").click();
        else if (f.indexOf("contact_request") != -1)
            $("#cw_contact_button").click(), $("#cw_my_contact_tab_request").click();
        else if (f.indexOf("join=") != -1) {
            var b = f.match(/join=([0-9]+)/);
            b && RL.showJoinPublicChatDialog(b[1])
        } else if (f.indexOf("contact=") != -1) {
            if (b = f.match(/contact=([^&\?]+)/)) {
                var d = b[1], b = !1;
                if (d == AC.getChatWorkId(AC.myid))
                    CW.alert(L.contact_cwid_error_myself), b = !0;
                else
                    for (var e = 0, g = AC.contact_list.length; e < g; e++)
                        if (d == AC.getChatWorkId(AC.contact_list[e])) {
                            CW.alert(L.contact_cwid_error_already.replace(/%%chatwork_id%%/, d));
                            b = !0;
                            break
                        }
                b || CW.get("gateway.php", {cmd: "get_account_info_by_cwid",cwid: d}, function(a) {
                    a.account_dat ? (AC.setAccountDat(a.account_dat.aid, a.account_dat), 
                    AC.showChatWorkIdRequestDialog(a.account_dat)) : CW.alert(L.contact_cwid_error_noexist.replace(/%%chatwork_id%%/, d))
                }, function(a) {
                    CW.alert(a)
                })
            }
        } else
            f.indexOf("contact") != -1 ? $("#cw_contact_button").click() : f.indexOf("mytask") != -1 ? $("#cw_my_alltask_button").click() : f.indexOf("chat_setting") != -1 ? ($("#cw_setting").click(), $("#cw_setting_tab_chat").click()) : f.indexOf("profile_setting") != -1 ? $("#cw_profile").click() : f.indexOf("service_admin") != -1 && a.showServiceAdmin()
    };
    var n = 9999, h = [];
    a.outboxStop = !1;
    a.setOutbox = 
    function(b, d, e) {
        typeof d == "function" && (outbox_close_callback = d);
        if (e) {
            var f = $("<div></div>");
            $C("body").prepend(f);
            f.css({position: "absolute",width: "100%",height: "100%","z-index": n++}).click(a.model.unsetOutbox);
            var g = b.css("z-index")
        }
        b.css("z-index", n++);
        h.push({obj: b,zindex: g,outbox: f,callback: d})
    };
    a.unsetOutbox = function() {
        if (h.length > 0) {
            var a = h.pop();
            typeof a.callback == "function" && a.callback();
            a.obj.css("z-index", a.zindex);
            a.outbox && a.outbox.remove();
            n -= 2
        }
    };
    var j = null, g = null;
    a.popup = function(a, 
    b, d, e) {
        d = d.replace(/<\w+(?:\s+\w+(?:\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)?(?:\s?\/)?>|<\/\w+>/g,'');
        if (!wfocus && window.webkitNotifications && window.webkitNotifications.checkPermission() == 0)
            j && (typeof j.cancel == "function" ? j.cancel() : typeof j.close == "function" && j.close()), j = window.webkitNotifications.createNotification(a, b, d), j.room_id = e, j.onclick = function() {
                window.focus();
                RL.selectRoom(this.room_id);
                this.cancel()
            }, j.show(), a = parseInt(ST.data.notifier_duration, 10) * 1E3, a > 0 && (g && (clearTimeout(g), g = null), g = setTimeout(function() {
                j && (typeof j.cancel == "function" ? j.cancel() : typeof j.close == "function" && 
                j.close())
            }, a))
    };
    a.playSound = function(a, b) {
        var d = document.getElementById("cw_audio_" + a);
        if (b == void 0)
            b = ST.data.sound_volume;
        d.volume = b;
        d.play()
    };
    var k = "";
    a.changeFavicon = function(a) {
        k != a && (k = a, $("#cw_favicon").remove(), $("head").append($('<link rel="shortcut icon" id="cw_favicon" href="' + a + '"  type="image/vnd.microsoft.icon" />')))
    };
    a.alertUpdated = function() {
        CW.alert(L.chatwork_update)
    };
    a.showUpdated = function() {
        $("#cw_version_update").html('<a href="./">' + L.chatwork_do_update + "</a>").show()
    };
    a.setOnline = 
    function() {
        $("#cw_offline").hide()
    };
    a.setConnectionError = function(b) {
        b == "NO LOGIN" || b == "NO TOKEN" || b == "IP ERROR" ? (d || $("#cw_offline").html('<a href="./">' + L.connection_error_logout + "</a>").show(), b == "IP ERROR" && (e || a.model.alert(L.error_cant_login_ip), e = !0)) : b == "INVALID USER" ? d || $("#cw_offline").html('<a href="./">' + L.connection_error_invalid_user + "</a>").show() : b == "INVALID TOKEN" ? d || $("#cw_offline").html('<a href="./">' + L.connection_error_invalid_token + "</a>").show() : d || $("#cw_offline").html('<a href="./">' + 
        L.connection_error_offline + "</a>").show()
    };
    a.firstWatch = function() {
        if (document.location.hash) {
            var a = document.location.hash.match(/#!rid(\d+)(?:-(\d+))?/);
            if (a) {
                var b = parseInt(a[1], 10), d = 0;
                a[2] && (d = parseInt(a[2], 10));
                RL.lazy_select = b;
                RL.lazy_select_chat = d
            }
        }
    };
    a.renderMessage = function(b, d) {
        time();
        for (var e in a.model.reg_cmp)
            b = d.text && a.model.reg_cmp[e].reptxt != void 0 ? b.replace(a.model.reg_cmp[e].key, a.model.reg_cmp[e].reptxt) : b.replace(a.model.reg_cmp[e].key, a.model.reg_cmp[e].rep);
        var f = b.match(/\[pname:\d+\]/g);
        if (f)
            for (e = 0; e < f.length; e++)
                var g = f[e].match(/\[pname:(\d+)\]/), g = g[1], h = d.text ? AC.getName(g) : CW.getName(g), b = b.replace("[pname:" + g + "]", h);
        if (f = b.match(/\[dtext:[^\]]+\]/g))
            for (e = 0; e < f.length; e++)
                g = f[e].match(/\[dtext:([^\]]+)\]/), g = g[1], L[g] != void 0 && (b = b.replace("[dtext:" + g + "]", L[g]));
        if (f = b.match(/\[picon:\d+\]/g))
            for (e = 0; e < f.length; e++)
                g = f[e].match(/\[picon:(\d+)\]/), g = g[1], b = b.replace("[picon:" + g + "]", CW.getAvatarPanel(g, {size: "small"}));
        if (f = b.match(/\[date:\d+\]/g))
            for (e = 0; e < f.length; e++)
                g = 
                f[e].match(/\[date:(\d+)\]/), g = g[1], b = b.replace("[date:" + g + "]", a.model.getDate(g));
        if (f = b.match(/\[task aid=[0-9,]+ st=[^\s]+ lt=-?[0-9]*\]/g))
            for (e = 0; e < f.length; e++)
                g = f[e].match(/\[task aid=([0-9,]+) st=([^\s]+) lt=(-?[0-9]*)\]/), d.text ? b = b.replace(g[0], "[") : (h = {aid: g[1],st: g[2],lt: parseInt(g[3], 10)}, h = a.getTaskPanel(h, {type: "timeline"}), b = b.replace(g[0], h));
        if (f = b.match(/<link_title>https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}]+[-_.!~*\'\(\)a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+<\/link_title>/g))
            for (e = 
            0; e < f.length; e++) {
                var g = f[e].match(/(<link_title>(https?:\/\/([^\/]+)[-_.!~*\'\(\)a-zA-Z0-9;\/?:\@&=+\$,%#\{\}]+)<\/link_title>)/), h = g[1], k = g[2], g = g[3], i = "", j = "";
                if (k.match(/\.([^\.]+)$/))
                    j = RegExp.$1;
                var v = 70;
                if (k.indexOf("www.chatwork.com") != -1 || k.indexOf("kcw.kddi.ne.jp") != -1) {
                    var r = k.match(/(#!rid\d+(\-\d+)?)$/), g = "chatwork.com";
                    r && (k = r[1], i = "", i = r[1].indexOf("-") != -1 ? L.message_open_message : L.message_open_chat, i = '</a> <a class="cw_link_append cw_room_link" href="' + r[1] + '">(' + i + ")</a>")
                }
                if ((g == 
                "secure.mindjet.com" || g == "www.mindjet.com") && k.indexOf("openlink") != -1)
                    v = 40, i = '</a><a class="cw_link_append" href="mj-link:' + k + '">(' + L.message_open_mindmanager + ")</a>";
                if ((g == "vision.mindjet.com" || g == "connect.mindjet.com") && k.indexOf("/link") != -1)
                    v = 40, i = '</a><a class="cw_link_append" href="mj-connect:' + k + '">(' + L.message_open_mindmanager + ")</a>";
                if (j == "pdf" || j == "ppt" || j == "tiff")
                    i = '</a> <a class="cw_link_append" href="http://docs.google.com/viewer?url=' + urlencode(k) + '" target="_blank">(' + L.message_open_googledocview + 
                    ")</a>";
                if (!$.browser.msie && (g == "video.google.com" && k.indexOf("contentId") != -1 || g == "www.youtube.com" && k.indexOf("watch?v=") != -1 || g == "vimeo.com" && k.match(/[0-9]+$/)))
                    i = '</a> <a class="cw_link_append cw_movie_link" href="' + k + '" target="_blank">(' + L.message_open_movie + ")</a>";
                ST.data.shorten_url && (k = trim_width(k, 0, v));
                b = b.replace(h, '<span class="ui_sp_favicon ui_sp_favicon_' + g.replace(/\./g, "_") + '"></span>' + k + i)
            }
        b = get_highlight_msg(b);
        $.browser.msie ? (e = document.createElement("span"), e.innerHTML = "<pre>" + b + "</pre>", b = e.childNodes[0].innerHTML) : 
        (e = document.createElement("span"), e.innerHTML = b, b = e.innerHTML);
        return b
    };
    a.registerAvatar = function() {
    };
    a.getAvatarPanel = function(a, b) {
        var d = S3_PATH + "/avatar/" + AC.getAvatarId(a), e = "";
        if (b.src)
            return d;
        b.hovertip && (e += " cw_avatar_hovertip");
        b.clicktip && (e += " cw_avatar_clicktip");
        e += b.size ? " ui_avatar ui_avatar_" + b.size : " ui_avatar";
        return '<img class="cw_avatar' + e + " cw_a" + a + '" src="' + d + '">'
    };
    a.getName = function(a) {
        return '<span class="cw_nm' + a + '">' + escape_html(AC.getName(a)) + "</span>"
    };
    a.getOrgName = function(a) {
        return '<span class="cw_onm' + 
        a + '">' + escape_html(AC.getOrgName(a)) + "</span>"
    };
    a.getDepartment = function(a) {
        return '<span class="cw_dept' + a + '">' + escape_html(AC.getDepartment(a)) + "</span>"
    };
    a.getOrgTitle = function(b) {
        return a.getOrgName(b) + " " + a.getDepartment(b)
    };
    a.getFullName = function(a) {
        return '<span class="cw_fnm' + a + '">' + escape_html(AC.getFullName(a)) + "</span>"
    };
    a.getChatWorkId = function(a) {
        if (AC.getChatWorkId(a))
            return '<span class="cw_cwid' + a + '">' + escape_html(AC.getChatWorkId(a)) + "</span>";
        return ""
    };
    a.getChatWorkIdLink = function(b) {
        var d = 
        AC.getChatWorkId(b);
        if (d)
            return '<span style="padding-right:0;">ID: </span><a class="ui_contact_cwid" href="' + CHATWORK_MYPAGE_PATH + "/" + d + '" target="_blank">' + a.getChatWorkId(b) + "</a>";
        return ""
    };
    a.getSkypeLink = function(a, b) {
        var d = escape_html(AC.getSkype(a));
        if (d) {
            var e = "";
            b && (e = d);
            return '<a href="skype:' + d + '?call" title="' + L.contactpanel_call_skype.replace(/%%skypeid%%/, d) + '"><span class="ui_sp_icon ui_sp_icon_skype ui_link_icon_right"></span>' + e + "</a>"
        }
        return ""
    };
    a.getTwitterLink = function(a, b) {
        var d = 
        escape_html(AC.getTwitter(a));
        if (d) {
            var e = "";
            b && (e = d);
            return '<a href="http://www.twitter.com/' + d + '" title="' + L.contactpanel_show_twitter.replace(/%%twitterid%%/, d) + '" target="_blank"><span class="ui_sp_icon ui_sp_icon_twitter ui_link_icon_right"></span>' + e + "</a>"
        }
        return ""
    };
    a.getFacebookLink = function(a, b) {
        var d = escape_html(AC.getFacebook(a));
        if (d) {
            var e = "";
            b && (e = d);
            return '<a href="http://www.facebook.com/' + d + '" title="' + L.contactpanel_show_facebook.replace(/%%facebookuname%%/, d) + '" target="_blank"><span class="ui_sp_icon ui_sp_icon_facebook ui_link_icon_right"></span>' + 
            e + "</a>"
        }
        return ""
    };
    a.getContactPanel = function(a, b) {
        var d = "";
        d += '<div class="ui_profile"><div class="ui_profile_figure">' + CW.getAvatarPanel(a, {hovertip: !1,clicktip: !1}) + "</div>";
        var e = "", f = AC.getRoomId(a), e = '<p class="cw_view_profile_link ui_view_profile_link cw_view_profile_a' + a + ' autotrim">' + CW.getName(a) + "</p>", g = AC.getOrgName(a), h = AC.getDepartment(a);
        d += '<p class="ui_profile_fullname">' + e + "</p>";
        var e = [], k = [];
        g && (e.push("<span>" + escape_html(g) + "</span>"), k.push(escape_html(g)));
        h && (e.push("<span>" + 
        escape_html(h) + "</span>"), k.push(escape_html(h)));
        e && (d += '<div class="ui_profile_organization autotrim" title="' + k.join(" ") + '">' + e.join(" ") + "</div>");
        d += "<p>" + CW.getChatWorkIdLink(a) + "</p>";
        d += '<p class="ui_profile_introduction"></p><ul class="ui_profile_webservice">';
        if (b.webservice) {
            if (g = AC.getSkype(a))
                escape_html(g), d += "<li>" + CW.getSkypeLink(a) + "</li>";
            AC.getTwitter(a) && (d += "<li>" + CW.getTwitterLink(a) + "</li>");
            AC.getFacebook(a) && (d += "<li>" + CW.getFacebookLink(a) + "</li>")
        }
        d += b.direct_chat_link && 
        AC.isContact(a) ? '</ul><div class="ui_directchat_button"><span class="ui_sp_icon ui_sp_icon_movechat"></span><a class="cw_room_link ui_link_icon" href="#!rid' + f + '">' + L.open_direct_chat + "</a></div></div>" : "</ul></div>";
        !AC.isDeleted(a) && b.request_contact && !AC.isContact(a) && (d += AC.myrequest_dat[a] == void 0 ? '<div class="ui_profile_request_contact cw_request_contact_a' + a + ' cw_request_contact"><span class="ui_sp_icon ui_sp_icon_addcontact"></span><a class="ui_link_icon">' + L.contactpanel_add_contact + "</a></div>" : 
        '<div class="ui_profile_myrequest_contact"><span>' + L.contact_requesting + "</span></div>");
        return d
    };
    a.getFilePanel = function(a, b) {
        var d = "";
        html = "";
        if (a === !1)
            html = '<div class="dev_delete">' + L.file_not_found + "</div>";
        else if (a.st != "deleted") {
            var e = a.fn.split("."), f = "";
            e.length > 1 && (f = e[e.length - 1].toLowerCase());
            if (b.type == "timeline") {
                html += '<div class="cw_file cw_fid' + a.id + '">';
                if (f == "gif" || f == "jpg" || f == "jpeg" || f == "png")
                    html += '<div class="cw_file_preview" id="cw_fp' + a.id + '"><span>' + L.file_reading_image + 
                    '</span><img class="cw_file_preview_img" style="display:none" onload="preview_resize(' + a.id + ')" src="gateway.php?cmd=preview_file&bin=1&file_id=' + a.id + '"/></div>';
                html += '<div class="cw_file_donwload"><a href="gateway.php?cmd=download_file&bin=1&file_id=' + a.id + '"><span class="cw_filename">' + escape_html(a.fn) + '</span> <span class="cw_filesize">(' + bytename(a.fz) + ")</span></a></div></div>"
            } else if (b.type == "filetable") {
                e = RL.rooms[a.rid];
                if (!e)
                    return "";
                a.aid == AC.myid && (d = '<span class="_fileEdit fileEdit">' + 
                L.button_edit + '</span><span class="cw_file_delete">' + L.button_delete + "</span>", date = a.tm ? CW.getDate(a.tm) : "", f = "#!rid" + a.rid, a.cid != 0 && (f += "-" + a.cid), html = '<tr class="cw_file cw_f' + a.id + '"><td class="cw_table_file clearfix"><div class="cw_table_task_cont"><pre><a href="' + SERVER_PATH + "/gateway.php?cmd=download_file&bin=1&file_id=" + a.id + '">' + escape_html(a.fn) + '</a></pre></div></td><td class="cw_table_chat"><div class="cw_table_chat_cont">' + e.getIcon() + '<a href="' + f + '" class="cw_table_file_jump cw_room_link">' + 
                escape_html(e.getName()) + '</a></div></td><td class="cw_table_upload_datetime cw_table_upload_datetime_cont">' + date + '</td><td class="cw_file_size ui_table_number">' + bytename(a.fz) + '</td><td class="cw_table_command ui_table_command_no_border">' + d + "</td></tr>")
            } else
                b.type == "filelist" && (a.aid == AC.myid && (d = '<span class="_fileEdit fileEdit">' + L.button_edit + '</span><span class="cw_file_delete">' + L.button_delete + "</span>"), html = '<div class="cw_file ui_tag ui_file cw_f' + a.id + '"><div class="ui_file_meta mod_clear">' + 
                CW.getAvatarPanel(a.aid, {size: "small"}) + "<span>" + CW.getDate(a.tm) + "</span>" + d + '</div><div class="ui_file_content"><a href="gateway.php?cmd=download_file&bin=1&file_id=' + a.id + '">' + escape_html(a.fn) + "</a></div>", a.cid != "0" && (html += '<div class="ui_file_jump"><a class="cw_room_link" href="#!rid' + a.rid + "-" + a.cid + '">' + L.jump_to_addpoint + "</a></div>"), html += "</div>")
        } else
            b.type == "timeline" && (html = '<div class="dev_delete">' + L.file_deleted + "</div>");
        return html
    };
    a.getTaskPanel = function(a, b) {
        var d = time();
        if (a === !1)
            html = '<div class="dev_delete ui_tag">' + L.task_not_found + "</div>";
        else if (a.st != "deleted") {
            var e = "", f = "", g = "", h = "", g = "";
            a.st == "done" ? (e += " ui_task_complete", g = ' checked="checked"') : g = "";
            var k = !1;
            if (a.aid == AC.myid || a.bid == AC.myid)
                f = '<input type="checkbox" class="cw_check_task"' + g + "/> ", h = ' <span class="ui_task_edit cw_task_edit">' + L.button_edit + '</span> <span class="ui_task_delete cw_task_delete">' + L.button_delete + "</span>";
            if (a.aid.indexOf && a.aid.indexOf(",") != -1)
                for (var i in a.aid = a.aid.split(","), 
                a.aid)
                    a.aid[i] == AC.myid && (k = !0);
            else
                a.aid == AC.myid && (k = !0);
            k && (e += " ui_task_mine");
            if (a.lt) {
                if (g = CW.getDate(a.lt, ST.data.dateformat), a.st == "open" && (a.lt <= d || g == CW.getDate(time(), ST.data.dateformat)))
                    g = '<span class="ui_task_date_limit">' + g + "</span>"
            } else
                g = "";
            if (b.type == "tasklist")
                taskname = CW.renderMessage(a.tn), g && (g = L.task_limittip + g), html = '<div class="cw_task ui_tag ui_task' + e + " cw_t" + a.id + '"><div class="ui_task_meta mod_clear">' + CW.getAvatarPanel(a.aid, {size: "small"}) + g + h + '</div><div class="ui_task_content"><pre>' + 
                f + taskname + "</pre></div>", a.cid && (html += '<div class="ui_task_jump"><a class="cw_room_link" href="#!rid' + a.rid + "-" + a.cid + '">' + L.jump_to_addpoint + "</a></div>"), html += "</div>";
            else if (b.type == "tasktable") {
                e = RL.rooms[a.rid];
                if (!e)
                    return;
                taskname = CW.renderMessage(a.tn);
                i = "#!rid" + a.rid;
                a.cid && (i += "-" + a.cid);
                html = '<tr class="cw_task cw_t' + a.id + '"><td class="cw_table_task clearfix"><div class="cw_table_task_check">' + f + '</div><div class="cw_table_task_cont"><pre>' + taskname + '</pre></div></td><td class="cw_table_chat"><div class="cw_table_chat_cont">' + 
                e.getIcon() + '<a href="' + i + '" class="cw_table_task_jump cw_room_link">' + escape_html(e.getName()) + "</a></div></td>";
                html += b.tabletype == "my" ? '<td class="cw_table_assign ui_table_name"><div class="cw_table_assign_cont">' + CW.getAvatarPanel(a.bid, {size: "small",clicktip: !1,hovertip: !1}) + escape_html(AC.getName(a.bid)) + "</div></td>" : '<td class="cw_table_assign ui_table_name"><div class="cw_table_assign_cont">' + CW.getAvatarPanel(a.aid, {size: "small",clicktip: !1,hovertip: !1}) + escape_html(AC.getName(a.aid)) + "</div></td>";
                html += '<td class="cw_table_limit ui_table_date">' + g + '</td><td class="cw_table_command ui_table_command">' + h + "</td></tr>"
            } else if (b.type == "preview") {
                taskname = CW.renderMessage(a.tn);
                g && (g = '<div class="cw_ui_task_limit">' + L.task_limittip + g + "</div>");
                f = "";
                if (typeof a.aid == "object")
                    for (i in a.aid)
                        f += CW.getAvatarPanel(a.aid[i], {size: "small"});
                else
                    f += CW.getAvatarPanel(a.aid, {size: "small",clicktip: !1,hovertip: !1});
                html = '<div class="ui_tag ' + e + '">' + g + f + taskname + "</div>"
            } else if (b.type == "timeline") {
                g && (g = 
                '<div class="cw_ui_task_limit">' + L.task_limittip + g + "</div>");
                f = "";
                if (typeof a.aid == "object")
                    for (i in a.aid)
                        f += CW.getAvatarPanel(a.aid[i], {size: "small"});
                else
                    f += CW.getAvatarPanel(a.aid, {size: "small"});
                html = '<div class="ui_tag ' + e + '">' + g + f
            }
        } else
            html = '<div class="dev_delete ui_tag">' + L.task_deleted + "</div>";
        return html
    };
    a.showLimitErrorDialog = function(a, b) {
        var d = $("#cw_limit_error_dialog");
        $("#cw_upgrade_message").html(b);
        d.dialog({title: a});
        d.dialog("open")
    };
    a.showServiceAdmin = function(a) {
        a == "upgrade" ? 
        window.open(ACCOUNT_SERVER_PATH + "/price.php") : window.open(ACCOUNT_SERVER_PATH + "/service_admin.php")
    };
    a.showOptionPlanPrice = function() {
        window.open(ACCOUNT_SERVER_PATH + "/subpackages/option/price.php")
    };
    a.showUserAdmin = function() {
        window.open(ACCOUNT_SERVER_PATH + "/user_list.php")
    };
    a.showStorageLimitDialog = function(b) {
        a.setLimitDialog(L.storage_cancel_send_object, b);
        $("#cw_storage_limit_footer").hide();
        var d = L.storage_cancel_send_cancel, d = d.replace(/%%object%%/, L[b]), b = $("#cw_storage_limit_dialog");
        b.dialog({title: d});
        b.dialog("open")
    };
    a.showLoginDialog = function(a, b) {
        b()
    };
    a.showOfflineDialog = function(a, b) {
        b(2E3)
    };
    a.showTimeoutDialog = function(a, b) {
        b()
    };
    a.showFeedbackDialog = function() {
        $("#cw_feedback_dialog").dialog({title: L.menu_feedback,width: 400,height: "auto",resizable: !1,autoOpen: !0,modal: !0,hide: "fade",buttons: [{text: L.button_send_long,click: function() {
                        var a = $(this), b = $("#cw_feedback_message").val();
                        b && (CW.showProgress(L.sending), CW.sendFeedback(b, function() {
                            CW.hideProgress();
                            $("#cw_feedback_message").val("");
                            a.dialog("close");
                            CW.view.alert(L.feedback_thankyou, null, !0)
                        }, function() {
                            CW.hideProgress();
                            CW.alert(L.raise_error)
                        }))
                    }}, DIALOG_CANCEL_BUTTON]})
    };
    a.buildLayout = function() {
        a.model.is_first_load && ($("#cw_layout").show(), $("#tm_footer_area").addClass("tm_footer_bg"));
        jquery_layout_regional && $.extend($.layout.language, jquery_layout_regional);
        outerLayout = $("#cw_layout").layout({showErrorMessages: !1,defaults: {enableCursorHotkey: !1,spacing_open: 0,spacing_closed: 0,resizeWhileDragging: !1},center: {paneSelector: "#cw_outer_center"},
            west: {paneSelector: "#cw_outer_west",size: 240,maxSize: 360,minSize: 240,closable: !1,resizable: !1},north: {spacing_open: 0,size: 40,closable: !1,resizable: !1},south: {spacing_open: 0,size: 30,closable: !1,resizable: !1}});
        menuLayout = $("#cw_outer_west").layout({defaults: {},center: {paneSelector: "#cw_leftmenu"},north: {closable: !1,resizable: !1,spacing_open: 0},south: {closable: !1,resizable: !1,spacing_open: 0},east: {size: 0,spacing_open: 0}});
        middleLayout = $("#cw_outer_center").layout({defaults: {spacing_open: 7,spacing_closed: 7,
                resizeWhileDragging: !1},center: {paneSelector: "#cw_middle_center"},north: {size: 31,closable: !1,resizable: !1,spacing_open: 0},east: {paneSelector: "#cw_middle_east",size: 240,minSize: 200,maxSize: 400,resizable: !0}});
        subLayout = $("#cw_middle_east").layout({defaults: {resizeWhileDragging: !0},center: {paneSelector: "#cw_subinfo"},north: {size: 240,minSize: 50,maxSize: 480,resizable: !0,onresize: a.resizeSubInfo,onclose: a.resizeSubInfo},south: {closable: !1,resizable: !0,spacing_open: 0}});
        innerLayout = $("#cw_middle_center").layout({defaults: {resizeWhileDragging: !0},
            center: {paneSelector: "#cw_timeline"},south: {spacing_open: 4,size: 100,minSize: 100,closable: !1,resizable: !0,onresize: a.resizeChatArea}});
        if (a.show_promotion) {
            var b = [{image: "cw220_140_01.gif",link: "https://www.chatwork.com/service/packages/chatwork/service_admin.php#cw_service_admin_changeplan?utm_source=cw_banner&utm_medium=cw&utm_campaign=banner"}, {image: "cw220_140_05.jpg",link: "http://www.chatwork.com/ja/case/funai.html?utm_source=cw_banner&utm_medium=cw&utm_campaign=case2"}, {image: "cw220_140_03.gif",
                    link: "https://www.chatwork.com/service/packages/chatwork/service_admin.php#cw_service_admin_changeplan?utm_source=cw_banner&utm_medium=cw&utm_campaign=banner3"}, {image: "cw220_140_06.jpg",link: "http://www.chatwork.com/ja/case/investors.html?utm_source=cw_banner&utm_medium=cw&utm_campaign=investor"}, {image: "ess220_140_02.jpg",link: "http://www.eset-smart-security.jp/?utm_source=cw_banner&utm_medium=cw&utm_campaign=ess1"}, {image: "cwc220_140_01.jpg",link: "http://www.chatwork-consulting.jp/?utm_source=cw_banner&utm_medium=cw&utm_campaign=cwconsul"}, 
                {image: "cw220_140_07.jpg",link: "http://manual-ja.chatwork.com/getting-started/stepguide?utm_source=cw_banner&utm_medium=cw&utm_campaign=stepguide"}, {image: "recruit220_140_01.jpg",link: "http://www.chatwork.com/ja/recruit.html"}, {image: "cw220_140_08.jpg",link: "http://www.chatwork.com/ja/case/kandamasanori.html?utm_source=cw_banner&utm_medium=cw&utm_campaign=kanda"}, {image: "cw220_140_09.jpg",link: "http://www.chatwork.com/ja/case/bhb.html?utm_source=cw_banner&utm_medium=cw&utm_campaign=bhb"}, {image: "cw220_140_10.jpg",
                    link: "http://www.chatwork.com/kddi/?utm_source=cw_banner&utm_medium=cw&utm_campaign=kcw"}], d = Math.floor(Math.random() * b.length), e = function(a) {
                var d = "", d = b[a].image.indexOf("https://") === 0 ? b[a].image : "image/promotion/" + b[a].image;
                return '<a href="' + b[a].link + '" target="_blank"><img src="' + d + '" /></a>'
            };
            $("#cw_promotion_content").html(e(d)).fadeIn("slow");
            setInterval(function() {
                d++;
                d >= b.length && (d = 0);
                $("#cw_promotion_content").fadeOut("slow", function() {
                    $(this).html(e(d)).fadeIn("slow")
                })
            }, 3E5)
        }
        a.resizeLayout()
    };
    a.resizeLayout = function() {
        a.resizeRoomList();
        a.resizeSubInfo();
        $("#cw_main").css("height", $("#cw_middle_center").innerHeight() + "px");
        $("#cw_room_title_wrapper").width($("#cw_room_header").innerWidth() - $("#cw_room_actions").outerWidth() - 30);
        var b = $C("body").innerWidth();
        b < 1E3 ? ($("#cw_search_name").hide(), $("#cw_stepguide_close_text").hide()) : ($("#cw_search_name").show(), $("#cw_stepguide_close_text").show());
        b < 900 ? ($("#cw_logo").animate({width: 24}, 500), $("#cw_newadd_button").animate({marginLeft: 5}, 
        500)) : ($("#cw_logo").animate({width: 152}, 500), $("#cw_newadd_button").animate({marginLeft: 10}, 500));
        a.resize_delay_timer = null
    };
    var q = !1;
    a.showFirstPage = function() {
    };
    a.closeFirstPage = function() {
        q && (q = !1, $C("#cw_room_title").text(" "), $("#cw_room_actions").show(), $("#cw_mainpage").hide(), $C("#cw_timeline").show(), middleLayout.show("east"), innerLayout.show("south"))
    };
    var v = !1;
    a.resizeRoomList = function() {
        setTimeout(function() {
            var b = $("#cw_leftmenu").outerHeight() - $("#cw_roomfilter_area").outerHeight();
            a.show_promotion && (v || (v = !0, $("#cw_promotion_area").show()), b -= $("#cw_promotion_area").outerHeight());
            $C("#cw_roomlist_items_area").height(b)
        }, 300)
    };
    a.resizeSubInfo = function() {
        setTimeout(function() {
            var a = $C("#cw_subinfo").innerHeight() - $C("#cw_subinfo_tab").outerHeight() - $C("#cw_room_show_mytask_area").outerHeight();
            $(".ui_subinfo_list").height(a)
        }, 300)
    };
    a.resizeChatArea = function() {
        CS.view.resizeChatArea()
    };
    a.setLimitDialog = function(b, d) {
        var e = "";
        a.model.plan == "free" ? (b += L.storage_cancel_send_object_suffix_upgrade, 
        e = L.storage_cancel_upgrade_label) : a.model.is_business && !a.model.is_admin ? (b += L.storage_cancel_send_object_suffix_tell_admin, $("#cw_storage_limit_button").hide()) : (b += L.storage_cancel_send_object_suffix_add_storage, e = L.storage_cancel_add_storage_label);
        d != void 0 && L[d] != void 0 && (b = b.replace(/%%object%%/g, L[d]));
        $("#cw_storage_limit_body").html(b);
        $("#cw_storage_limit_link").val(e)
    }
}
function AccountView(b) {
    var a = this, f = {contact: 80,myrequest: 80,request: 80,norequest: 80}, e = {}, d;
    for (d in f)
        e[d] = f[d];
    var i = 0;
    a.model = b;
    a.tab_type = "contact";
    a.contact_dialog_shown = !1;
    a.filter_word = "";
    a.checked_email_dat = {};
    a.request_account_id_list = [];
    a.noexist_email_dat = {};
    var n = L.contact_request_message_default, h = L.contact_invite_message_default;
    a.prepare = function() {
        CW.view.registerKeyboardShortcut(67, !1, !1, !1, !1, function() {
            $("#cw_contact_dialog").dialog("open")
        });
        $("#cw_my_contact").click(function() {
            CW.view.outboxStop = 
            !0
        });
        var b = $C("#cw_pftip");
        b.click(function() {
            CW.view.outboxStop = !0
        });
        $C("document").on("mouseover", ".cw_avatar_hovertip", function() {
            var a = $(this), b = a.attr("class").match(/cw_a([0-9]+)/)[1], d = a.offset(), e = 0, f = 0, g = $C("#cw_nametip");
            g.text(AC.getName(b));
            g.show();
            f = (g.outerWidth() - a.outerWidth()) / 2;
            f = d.left - f;
            f < 3 && (f = 3);
            b = g.outerHeight();
            e = d.top < b + 10 ? d.top + a.outerHeight() + 10 : d.top - b - 10;
            g.css({top: e + "px",left: f + "px"})
        }).on("mouseout", ".cw_avatar_hovertip", function() {
            $C("#cw_nametip").hide()
        }).on("click", 
        ".cw_avatar_clicktip", function() {
            var a = $(this), d = a.attr("class").match(/cw_a([0-9]+)/)[1], e = a.offset(), f = 0, h = 0;
            $("#cw_pftip_content").html(CW.getContactPanel(d, {direct_chat_link: !0}));
            b.removeClass("tm_tooltip_top");
            b.removeClass("tm_tooltip_bottom");
            b.show();
            f = b.outerHeight();
            e.top < f + 17 ? (f = parseInt(e.top + a.outerHeight() + 17 - 4, 10), b.addClass("tm_tooltip_top"), $("#cw_tooltip_triangle").removeClass("tm_tooltip_triangle")) : (f = parseInt(e.top - f - 17, 10), b.addClass("tm_tooltip_bottom"), $("#cw_tooltip_triangle").addClass("tm_tooltip_triangle"));
            f -= parseInt($C("body").css("padding-top").replace("px", ""), 10) + 40;
            d = b.outerWidth();
            a = (b.outerWidth() - a.outerWidth()) / 2;
            h = e.left - a;
            h -= parseInt($C("body").css("padding-left").replace("px", ""), 10);
            h < 3 ? (e = 6 - h, b.find(".tm_tooltip_triangle").css("left", d / 2 - e), h = 3) : (b.find(".tm_tooltip_triangle").css("left", "50%"), e = $C("body").width() - 3 - h - b.outerWidth(), e < 0 && (h += e, b.find(".tm_tooltip_triangle").css("left", d / 2 - e - 3)));
            b.css({top: f + "px",left: h + "px"});
            $C("#cw_nametip").hide();
            CW.view.setOutbox(b, function() {
                b.hide()
            });
            return !1
        });
        $C("document").on("click", ".cw_view_profile_link", function() {
            var a = $(this).attr("class").match(/cw_view_profile_a([0-9]+)/)[1];
            ST.view.view_profile_aid = a;
            $("#cw_profile_dialog").dialog("open")
        });
        $("#cw_profile_input_orgname").click(function() {
            $("#cw_profile_select_orgname_type_individual").click()
        });
        $C("#cw_timeline").on("click", ".cw_chat_name", function() {
            $(this).parents(".ui_chat").find(".cw_speaker .cw_avatar_clicktip").click();
            return !1
        });
        $("#cw_contact_search_result_list").on("click", 
        ".cw_contact_search_name", function() {
            $(this).parents(".cw_contact_search_row").find(".cw_avatar_clicktip").click();
            return !1
        }).on("click", ".cw_contact_search_select", function() {
            var a = $(this).parents(".cw_contact_search_row").find("input.cw_form_request_contact");
            a.prop("checked") ? a.prop("checked", "") : a.prop("checked", "checked");
            CW.view.unsetOutbox();
            return !1
        });
        var d = $("#cw_contactfilter");
        d.bind("update", function() {
            a.filter_word = !d.hasClass("ui_icsearch_blank") && d.val() != "" ? d.val().toLowerCase() : "";
            a.buildMyContact()
        });
        $("#cw_my_contact_dialog").dialog({title: L.menu_contact_admin,width: 550,height: 400,autoOpen: !1,modal: !0,hide: "fade",open: function() {
                a.contact_dialog_shown = !0;
                for (var b in f)
                    e[b] = f[b];
                a.buildMyContact();
                i.trigger("resize")
            },resize: function() {
                i.trigger("resize")
            },close: function() {
                a.contact_dialog_shown = !1;
                v.removeClass("ui_button_selected")
            }});
        var i = $("#cw_my_contact_dialog"), v = $("#cw_contact_button");
        v.click(function() {
            i.dialog("open");
            v.addClass("ui_button_selected")
        });
        i.bind("resize", 
        function() {
            var a = i.innerHeight(), b = i.find(".ui_table_filter").outerHeight() + i.find(".cw_table_header").outerHeight();
            i.find(".cw_table_body").height(a - b)
        });
        var l = $("#cw_contact_requestlist");
        $("#cw_contact_email").val("");
        $("#cw_contact_dialog").dialog({title: L.contact_add,width: 520,autoOpen: !1,resizable: !1,modal: !0,hide: "fade",open: function() {
                CW.is_admin_user ? $(".cw_user_add_desc").show() : $(".cw_user_add_desc").hide();
                $("#cw_go_contact_search").click();
                $(this).dialog("option", "buttons", [DIALOG_CANCEL_BUTTON])
            },
            close: function() {
                a.checked_email_dat = {};
                a.noexist_email_dat = {};
                a.request_account_id_list = [];
                $("#cw_contact_loading").hide();
                $("#cw_contact_search_loading").hide();
                $("#cw_go_contact_search").click()
            }});
        $("#cw_my_contact_tab a").click(function() {
            var b = this.id.match(/cw_my_contact_tab_(.+)/);
            a.tab_type = b[1];
            $("#cw_my_contact_tab a").removeClass("selected");
            $(this).addClass("selected");
            switch (a.tab_type) {
                case "contact":
                    $("#cw_my_contact_head_addcontact").show();
                    $("#cw_my_contact_head_allok").hide();
                    $("#cw_my_contact_head_alladd").hide();
                    break;
                case "myrequest":
                    $("#cw_my_contact_head_addcontact").show();
                    $("#cw_my_contact_head_allok").hide();
                    $("#cw_my_contact_head_alladd").hide();
                    break;
                case "request":
                    $("#cw_my_contact_head_addcontact").hide();
                    $("#cw_my_contact_head_allok").show();
                    $("#cw_my_contact_head_alladd").hide();
                    break;
                case "norequest":
                    $("#cw_my_contact_head_addcontact").hide(), $("#cw_my_contact_head_allok").hide(), $("#cw_my_contact_head_alladd").show()
            }
            a.buildMyContact()
        });
        $("#cw_setting_tab a").click(function() {
            var b = this.id.match(/cw_setting_tab_(.+)/);
            a.tab_type = b[1];
            $("#cw_setting_tab a").removeClass("selected");
            $(this).addClass("selected");
            switch (a.tab_type) {
                case "chat":
                    $("#cw_setting_otherservice").hide();
                    $("#cw_setting_preference").show();
                    break;
                case "social":
                    $("#cw_setting_otherservice").show(), $("#cw_setting_preference").hide(), $("#cw_setting_otherservice").find(".cw_social_connected").each(function() {
                        var a = $(this).find(".cw_social_display_name"), b = $(this).find(".cw_social_display_over");
                        ST.view.adjustDisplayNameWidth(a, b)
                    })
            }
        });
        $("#cw_profile_tab a").click(function() {
            var b = 
            this.id.match(/cw_profile_tab_(.+)/);
            a.tab_type = b[1];
            $("#cw_profile_tab a").removeClass("selected");
            $(this).addClass("selected");
            switch (a.tab_type) {
                case "basic":
                    $("#cw_profile_contact").hide();
                    $("#cw_profile_basic").show();
                    break;
                case "contact":
                    $("#cw_profile_contact").show(), $("#cw_profile_basic").hide()
            }
        });
        $(".cw_my_contact_addcontact").click(function() {
            if (CW.contact_limit_num && a.model.contact_list.length - 1 >= CW.contact_limit_num) {
                var b = L.contact_error_cantadd, d = L.contact_error_planlimit, d = d.replace(/%%plan_name%%/, 
                PLAN_NAME), d = d.replace(/%%limit_num%%/, CW.contact_limit_num);
                CW.view.showLimitErrorDialog(b, d)
            } else
                $("#cw_contact_dialog").dialog("open")
        });
        $("#cw_my_contact_allok").click(function() {
            var b = [], d;
            for (d in a.model.request_dat)
                b.push(d);
            b.length > 0 && ($C("#cw_my_contact_body").find("button").button("disable"), CW.post("gateway.php", {cmd: "accept_contact_request",a: b}, function(a) {
                if (a.error != void 0) {
                    var b = L.contact_error_cantadd, d = L.contact_error_planlimit, d = d.replace(/%%plan_name%%/, a.error.plan_name), d = 
                    d.replace(/%%limit_num%%/, a.error.limit_num);
                    CW.view.showLimitErrorDialog(b, d);
                    $C("#cw_my_contact_body").find("button").button("enable")
                }
            }, function(a) {
                CW.alert(a);
                $C("#cw_my_contact_body").find("button").button("enable")
            }))
        });
        $("#cw_my_contact_head_alladd").click(function() {
            a.setRequestList();
            l.trigger("update")
        });
        $("#cw_room_member_nocontact_area .cw_request_contact_room_alladd").click(function() {
            var b = RM.id;
            b && (a.setRequestList(b), l.trigger("update"))
        });
        $("#cw_contact_checkaddress").click(function() {
            var b = 
            trim($("#cw_contact_email").val());
            b && ($("#cw_contact_loading").show(), b = b.split("\n"), CW.post("gateway.php", {cmd: "check_address",a: b}, function(b) {
                if (b.error != void 0) {
                    var d = L.contact_error_cantadd, e = L.contact_error_planlimit, e = e.replace(/%%plan_name%%/, b.error.plan_name), e = e.replace(/%%limit_num%%/, b.error.limit_num);
                    CW.view.showLimitErrorDialog(d, e);
                    $("#cw_contact_loading").hide()
                } else {
                    for (d in b.address_dat) {
                        var f = b.address_dat[d].aid;
                        a.checked_email_dat[d] = {aid: f,name: b.address_dat[d].name};
                        AC.isUnknown(f) && 
                        AC.setAccountDat(f, b.address_dat[d])
                    }
                    f = [];
                    if (b.error_dat != void 0) {
                        var g = "";
                        for (e in b.error_dat) {
                            var h = b.error_dat[e].length;
                            if (e == "noexist")
                                for (var i = 0; i < h; i++)
                                    a.noexist_email_dat[b.error_dat[e][i]] = b.error_dat[e][i];
                            else {
                                f = f.concat(b.error_dat[e]);
                                g && (g += "\n\n");
                                var k = 0;
                                if (h > 3)
                                    var j = 3, k = h - 3;
                                else
                                    j = h;
                                h = "";
                                for (i = 0; i < j; i++)
                                    h && (h += ","), h += b.error_dat[e][i];
                                g += h;
                                k > 0 && (g += L.contact_rest_number.replace(/%%rest_number%%/, k));
                                e == "invalid" ? g += L.contact_error_is_not_mailaddress : e == "limited" ? g += L.contact_error_is_over_contactnum : 
                                e == "external" && (g += L.contact_error_is_disable_external)
                            }
                        }
                        g && CW.alert(g)
                    }
                    $("#cw_contact_loading").hide();
                    if (f.length == 0) {
                        b = count(a.noexist_email_dat);
                        e = 0;
                        for (d in a.checked_email_dat)
                            b++, e = a.checked_email_dat[d].aid;
                        b == 1 && e == AC.myid ? CW.alert(L.contact_error_own_mailaddress) : ($("#cw_contact_email").val(""), $("#cw_input_contact_address").hide(), $("#cw_go_contact_multi_add_input").show(), $("#cw_go_contact_search").hide(), l.trigger("update"))
                    } else
                        a.checked_email_dat = {}, a.noexist_email_dat = {}
                }
            }))
        });
        $("#cw_contact_search").click(function() {
            var b = 
            trim($("#cw_contact_search_value").val()), d = {aid_list: [],error: {}};
            $("#cw_contact_search_result").hide();
            $("#cw_contact_requestbox_message").hide();
            $("#cw_invitebox").hide();
            $("#cw_contact_dialog").dialog("option", "buttons", [DIALOG_CANCEL_BUTTON]);
            b && ($("#cw_contact_search_loading").show(), a.changeClickableContactSearchButton(!1), CW.post("gateway.php", {cmd: "search_contact",q: b}, function(b) {
                $("#cw_contact_search_loading").hide();
                if (b.error != void 0) {
                    var e = L.contact_error_cantadd, f = L.contact_error_planlimit, 
                    f = f.replace(/%%plan_name%%/, b.error.plan_name), f = f.replace(/%%limit_num%%/, b.error.limit_num);
                    CW.view.showLimitErrorDialog(e, f)
                } else {
                    for (e in b.account_dat)
                        d.aid_list.push(e), AC.isUnknown(e) && AC.setAccountDat(e, b.account_dat[e]);
                    if (b.error_dat)
                        d.error = b.error_dat;
                    j(d, !0)
                }
                a.changeClickableContactSearchButton(!0)
            }, function(b) {
                $("#cw_contact_search_loading").hide();
                CW.alert(b);
                a.changeClickableContactSearchButton(!0)
            }))
        });
        $("#cw_contact_search_value").keypress(function(a) {
            if (a.which && a.which == 13 || a.keyCode && 
            a.keyCode == 13)
                return $("#cw_contact_search").click(), !1
        });
        $C("document").on("click", ".cw_request_contact", function() {
            $("#cw_contact_dialog").dialog("open");
            $(".cw_add_contact_type").hide();
            $("#cw_search_contact").hide();
            $("#cw_input_contact_address").hide();
            b.hide();
            var d = $(this).prop("class").match(/cw_request_contact_a([0-9]+)/)[1];
            a.request_account_id_list.push(d);
            l.trigger("update")
        });
        $("#cw_go_contact_multi_add").click(function() {
            $(this).hide();
            $("#cw_go_contact_search").show();
            $("#cw_go_contact_multi_add_input").hide();
            $("#cw_contact_requestbox_list").hide();
            $("#cw_contact_requestbox_message").hide();
            $("#cw_invitebox").hide();
            $("#cw_input_contact_address").show();
            $("#cw_search_contact").hide();
            a.request_account_id_list = [];
            a.checked_email_dat = {};
            a.noexist_email_dat = {};
            $("#cw_contact_dialog").dialog("option", "buttons", [DIALOG_CANCEL_BUTTON]).dialog("option", "position", "center");
            $("#cw_contact_email").val("").focus()
        });
        $("#cw_go_contact_search").click(function() {
            $(this).hide();
            $("#cw_go_contact_multi_add").show();
            $("#cw_go_contact_multi_add_input").hide();
            $("#cw_contact_search_result").hide();
            $("#cw_contact_requestbox_list").hide();
            $("#cw_contact_requestbox_message").hide();
            $("#cw_invitebox").hide();
            $("#cw_input_contact_address").hide();
            $("#cw_search_contact").show();
            a.request_account_id_list = [];
            a.checked_email_dat = {};
            a.noexist_email_dat = {};
            $("#cw_contact_dialog").dialog("option", "buttons", [DIALOG_CANCEL_BUTTON]).dialog("option", "position", "center");
            $("#cw_contact_search_value").val("").focus()
        });
        $("#cw_go_contact_multi_add_input").click(function() {
            $(this).hide();
            var b = "", d = [];
            for (b in a.checked_email_dat)
                d.push(b);
            for (b in a.noexist_email_dat)
                d.push(b);
            $("#cw_go_contact_multi_add").click();
            $("#cw_contact_email").val(d.join("\n"))
        });
        $("#cw_invite_from_facebook").click(function() {
            a.openFacebookInviteWindow()
        });
        $(".cw_user_add_desc").click(function() {
            CW.view.showUserAdmin()
        });
        l.bind("update", function() {
            var b = [], d = !1, e = [], f = 0, g = [], i = [], k = 0;
            if (a.request_account_id_list.length)
                for (var j = a.request_account_id_list.length, v = 0; v < j; v++)
                    k = a.request_account_id_list[v], 
                    AC.account_dat[k] && (b.push(k), d = !0, g[f++] = '<div style="padding:3px"><span class="ui_room_icon">' + CW.getAvatarPanel(k, {size: "small",clicktip: !1,hovertip: !1}) + CW.getName(k) + "</div>");
            else {
                for (v in a.checked_email_dat) {
                    var k = a.checked_email_dat[v].aid, m = a.checked_email_dat[v].name, q = "", p = "", U = "ui_request_contact_unselectable";
                    if (AC.myid != k)
                        AC.isContact(k) ? (q = L.contact_already_added, p = '<input type="checkbox" disabled=disabled />') : a.model.myrequest_dat[k] != void 0 ? (q = L.contact_requesting, p = '<input type="checkbox" disabled=disabled />') : 
                        (d = !0, check_box_disable = U = "", p = '<input type="checkbox" class="cw_form_request_contact" checked=checked value="' + k + '" />'), g[f++] = '<label><div style="padding:3px" class="ui_select_request_contact ' + U + '">' + p + '<span class="ui_room_icon">' + CW.getAvatarPanel(k, {size: "small",clicktip: !1,hovertip: !1}) + CW.getName(k, m), q && (g[f++] = '<span style="float:right; margin-top: 6px; margin-right: 6px;">' + q + "</span>"), g[f++] = "</div></label>"
                }
                f = 0;
                for (j in a.noexist_email_dat)
                    i[f++] = '<label><div class="ui_select_request_contact" style="padding:3px;"><input type="checkbox" class="cw_form_invite_emails" id="cw_noexist_email_' + 
                    f + '" value="' + escape_html(j) + '" checked=checked />' + escape_html(j) + "</div></label>"
            }
            l.html(g.join(""));
            $("#cw_invite_emaillist").html(i.join(""));
            if (g.length > 0 || i.length > 0) {
                f = "";
                f = g.length > 0 ? $("#cw_contact_requestbox_list") : $("#cw_invitebox");
                if (f.css("display") == "none") {
                    $("#cw_contact_message").val(n);
                    $("#cw_invite_message").val(h);
                    var Q = $("#cw_contact_dialog"), ea = setInterval(function() {
                        Q.dialog("option", "position", "center")
                    }, 13), B = [];
                    (d || i.length > 0) && B.push({text: L.button_send_long,click: function() {
                            var f = 
                            "", g = [];
                            d && $("#cw_contact_requestlist input.cw_form_request_contact:checked").each(function() {
                                b.push(parseInt(this.value, 10))
                            });
                            b.length > 0 && (f = $("#cw_contact_message").val(), CW.post("gateway.php", {cmd: "request_contact",a: b,message: f}, function(b) {
                                if (b.error != void 0) {
                                    var d = L.contact_error_cantadd, f = L.contact_error_planlimit, f = f.replace(/%%plan_name%%/, b.error.plan_name), f = f.replace(/%%limit_num%%/, b.error.limit_num);
                                    CW.view.showLimitErrorDialog(d, f)
                                } else {
                                    for (d = 0; d < b.requested_list.length; d++) {
                                        var h = 
                                        b.requested_list[d];
                                        a.model.myrequest_dat[h] = {nm: AC.getName(h),mg: f};
                                        h == ST.view.view_profile_aid && ST.view.refreshProfileContactButton()
                                    }
                                    g.push("request_contact");
                                    e.length || a.showAddContactMessage(g);
                                    CW.watch()
                                }
                            }, function(a) {
                                CW.alert(a)
                            }), $("#cw_my_contact_tab_myrequest").click());
                            $("#cw_invite_emaillist input.cw_form_invite_emails:checked").each(function() {
                                e.push(this.value)
                            });
                            e.length > 0 && (f = $("#cw_invite_message").val(), CW.post("gateway.php", {cmd: "invite_contact",e: e,m: f,nm: AC.getName(AC.myid),av: CW.getAvatarPanel(AC.myid, 
                                {src: !0})}, function(b) {
                                if (b.error != void 0) {
                                    var d = L.contact_error_cantadd, e = L.contact_error_planlimit, e = e.replace(/%%plan_name%%/, b.error.plan_name), e = e.replace(/%%limit_num%%/, b.error.limit_num);
                                    CW.view.showLimitErrorDialog(d, e)
                                } else
                                    g.push("invite_contact");
                                g && a.showAddContactMessage(g)
                            }, function(a) {
                                CW.alert(a)
                            }));
                            $(this).dialog("close")
                        }});
                    B.push(DIALOG_CANCEL_BUTTON);
                    f.slideDown(function() {
                        clearInterval(ea);
                        Q.dialog("option", "position", "center");
                        Q.dialog("option", "buttons", B)
                    })
                }
                (b.length > 0 || d) && 
                $("#cw_contact_requestbox_message").show();
                i.length > 0 && ($("#cw_invitebox").show(), $("#cw_invitebox_emaillist").show(), $("#cw_invitebox_confirm").html(L.contact_mail_not_found_listed))
            }
        });
        $("#cw_contact_cwid_dialog").dialog({title: L.contact_add,width: 520,autoOpen: !1,resizable: !1,modal: !0,hide: "fade",buttons: [{text: L.contact_do_request,click: function() {
                        var b = $("#cw_contact_cwid_message").val(), d = [$("#cw_contact_cwid_aid").val()];
                        CW.post("gateway.php", {cmd: "request_contact",a: d,message: b,av: CW.getAvatarPanel(AC.myid, 
                            {src: !0})}, function(b) {
                            if (b.error != void 0) {
                                var d = L.contact_error_cantadd, e = L.contact_error_planlimit, e = e.replace(/%%plan_name%%/, b.error.plan_name), e = e.replace(/%%limit_num%%/, b.error.limit_num);
                                CW.view.showLimitErrorDialog(d, e)
                            } else {
                                for (var d = 0, f = b.requested_list.length; d < f; d++) {
                                    var g = b.requested_list[d];
                                    a.model.myrequest_dat[g] = {nm: AC.getName(g),mg: e}
                                }
                                a.showAddContactMessage(["request_contact"]);
                                CW.watch()
                            }
                        }, function(a) {
                            CW.alert(a)
                        });
                        $(this).dialog("close")
                    }}, DIALOG_CANCEL_BUTTON]});
        var m = function(a) {
            CW.confirm(L.contact_confirm_delete.replace(/%%name%%/, 
            AC.getName(a)), function() {
                $(this).button("disable");
                CW.post("gateway.php", {cmd: "delete_contact",aid: a}, function() {
                    CW.watch()
                })
            })
        };
        $("#cw_contact_delete").click(function() {
            var a = RM.getAccountId();
            m(a)
        });
        $C("#cw_my_contact_body").on("click", ".cw_my_contact_action", function() {
            var b = $(this).parents("#cw_my_contact_body .item")[0].id.match(/cw_my_contact_a([0-9]+)/)[1];
            switch (a.tab_type) {
                case "contact":
                    m(b);
                    break;
                case "myrequest":
                    $(this).button("disable");
                    CW.confirm(L.contact_confirm_cancel_request.replace(/%%name%%/, 
                    AC.getName(b)), function() {
                        CW.post("gateway.php", {cmd: "cancel_contact_request",aid: b}, function() {
                            CW.watch()
                        })
                    });
                    break;
                case "request":
                    var d = $(this).parent();
                    d.find("button").button("disable");
                    $(this).hasClass("cw_my_contact_action_accept") && CW.post("gateway.php", {cmd: "accept_contact_request",a: [b]}, function(a) {
                        if (a.error != void 0) {
                            var b = L.contact_error_cantadd, e = L.contact_error_planlimit, e = e.replace(/%%plan_name%%/, a.error.plan_name), e = e.replace(/%%limit_num%%/, a.error.limit_num);
                            CW.view.showLimitErrorDialog(b, 
                            e);
                            d.find("button").button("enable")
                        } else
                            CW.watch()
                    }, function(a) {
                        CW.alert(a);
                        d.find("button").button("enable")
                    });
                    $(this).hasClass("cw_my_contact_action_reject") && CW.confirm(L.contact_confirm_reject_request.replace(/%%name%%/, AC.getName(b)), function() {
                        CW.post("gateway.php", {cmd: "reject_contact_request",aid: b}, function() {
                            CW.watch()
                        })
                    }, function() {
                        d.find("button").button("enable")
                    });
                    break;
                case "norequest":
                    $("#cw_contact_dialog").dialog("open"), $(".cw_add_contact_type").hide(), $("#cw_search_contact").hide(), 
                    $("#cw_input_contact_address").hide(), a.request_account_id_list.push(b), l.trigger("update")
            }
        });
        $("#cw_nickname_dialog").dialog({title: L.nickname_title,width: 520,autoOpen: !1,resizable: !1,modal: !0,hide: "fade",buttons: [{text: L.button_save_long,click: function() {
                        var a = !1, b = {};
                        $("#cw_nickname_list input").each(function() {
                            var d = $(this).val(), e = this.id.substr(12);
                            AC.getNickName(e, !0) != d && (b[e] = d, a = !0)
                        });
                        a && CW.post("gateway.php", {cmd: "send_nickname",n: b}, function(a) {
                            for (var b in a.nickname_dat)
                                AC.setNickName(b, 
                                a.nickname_dat[b])
                        });
                        $(this).dialog("close")
                    }}, DIALOG_CANCEL_BUTTON],open: function() {
            },close: function() {
            }});
        $("#cw_mention_nickname").click(function() {
            var a = [], b = 0, d = [], e;
            for (e in RM.member_dat)
                e != AC.myid && d.push(e);
            d.sort(function(a, b) {
                if (a == AC.myid)
                    return -1;
                if (b == AC.myid)
                    return 1;
                return AC.getMentionNum(b) - AC.getMentionNum(a)
            });
            for (var b = 0, f = d.length; b < f; b++)
                e = d[b], a[b] = '<tr><td class="name">' + CW.getAvatarPanel(e, {size: "medium",clicktip: !1,hovertip: !1}) + " " + CW.getName(e) + '</td><td class="nickname"><input type="text" id="cw_nickname_' + 
                e + '" value="' + escape_html(AC.getNickName(e, !0)) + '"/></td></tr>';
            $("#cw_nickname_list").html(a.join("")).scrollTop(0);
            $("#cw_nickname_dialog").dialog("open");
            CW.view.unsetOutbox()
        });
        var p = $("#cw_mychat_button");
        p.click(function() {
            RL.selectRoom(AC.getRoomId(AC.myid))
        }).hover(function() {
            p.find(".ui_avatar").addClass("ui_avatar_hover")
        }, function() {
            p.find(".ui_avatar").removeClass("ui_avatar_hover")
        });
        $("#cw_search_contact_check_all").click(function() {
            $("#cw_contact_search_result_list input").each(function() {
                if (!this.disabled)
                    this.checked = 
                    !0
            })
        });
        $("#cw_search_contact_uncheck_all").click(function() {
            $("#cw_contact_search_result_list input").each(function() {
                if (!this.disabled)
                    this.checked = !1
            })
        });
        $("#cw_invite_emaillist_check_all").click(function() {
            $("#cw_invite_emaillist input").each(function() {
                if (!this.disabled)
                    this.checked = !0
            })
        });
        $("#cw_invite_emaillist_uncheck_all").click(function() {
            $("#cw_invite_emaillist input").each(function() {
                if (!this.disabled)
                    this.checked = !1
            })
        });
        $("#cw_contact_requestlist_check_all").click(function() {
            $("#cw_contact_requestlist input").each(function() {
                if (!this.disabled)
                    this.checked = 
                    !0
            })
        });
        $("#cw_contact_requestlist_uncheck_all").click(function() {
            $("#cw_contact_requestlist input").each(function() {
                if (!this.disabled)
                    this.checked = !1
            })
        });
        $("#cw_my_contact").on("click", "#cw_show_more_contact", function() {
            e[a.tab_type] += 80;
            a.buildMyContact()
        });
        window.fbAsyncInit = function() {
            FB.init({appId: a.model.facebook_app_id})
        };
        (function() {
            var a = document.createElement("script");
            a.src = document.location.protocol + "//connect.facebook.net/en_US/all.js";
            a.async = !0;
            document.getElementById("fb-root").appendChild(a)
        })()
    };
    a.openFacebookInviteWindow = function() {
        FB.ui({method: "apprequests",message: L.facebook_apprequests_message,filters: ["app_non_users"],display: "popup"}, function(b) {
            a.model.saveInviteInfo("facebook", b.request);
            CW.alert(L.contact_search_from_facebook_complete)
        })
    };
    a.updateAvatar = function(a) {
        for (var b = a.length; b--; ) {
            var d = a[b], e = CW.getAvatarPanel(d, {src: !0});
            $(".cw_a" + d).each(function() {
                this.src = e
            })
        }
        SERVICE_PLAN == "free" && ST.view.refreshStepGuide()
    };
    a.updateName = function(b) {
        for (var d = b.length; d--; ) {
            var e = 
            b[d], f = a.model.getName(e);
            $(".cw_nm" + e).each(function() {
                $(this).text(f)
            });
            var h = a.model.getOrgName(e);
            $(".cw_onm" + e).each(function() {
                $(this).text(h)
            });
            var i = a.model.getDepartment(e);
            $(".cw_dept" + e).each(function() {
                $(this).text(i)
            });
            var j = AC.getChatWorkId(e);
            $(".cw_cwid" + e).each(function() {
                $(this).text(j)
            })
        }
    };
    a.showAddContactMessage = function(a) {
        for (var b = [], d = 0, e = a.length; d < e; d++)
            switch (a[d]) {
                case "request_contact":
                    b.push(L.contact_myrequest);
                    break;
                case "invite_contact":
                    b.push(L.contact_invite)
            }
        b && 
        CW.alert(b.join(L.word_separator) + L.contact_is_completed)
    };
    a.showChatWorkIdRequestDialog = function(a) {
        a = a.aid;
        $("#cw_contact_cwid_aid").val(a);
        $("#cw_contact_cwid_avatar").html(CW.getAvatarPanel(a, {hovertip: !1,clicktip: !1}));
        a = CW.getName(a) + CW.getChatWorkIdLink(a);
        $("#cw_contact_cwid_name").html(a);
        $("#cw_contact_cwid_message").val(n);
        $("#cw_contact_cwid_dialog").dialog("open")
    };
    a.setRequestList = function(b) {
        var b = a.getNoRequestDat(b), d = [], e;
        for (e in b)
            d.push(e);
        if (d.length > 0)
            $("#cw_contact_dialog").dialog("open"), 
            $(".cw_add_contact_type").hide(), $("#cw_search_contact").hide(), $("#cw_input_contact_address").hide(), a.request_account_id_list = d
    };
    a.getNoRequestDat = function(b) {
        var d = {}, e = {};
        RL.rooms[b] ? e[b] = RL.rooms[b] : e = RL.rooms;
        for (var f in e) {
            var b = RL.rooms[f], h;
            for (h in b.member_dat)
                a.model.myid != h && !a.model.isContact(h) && !a.model.myrequest_dat[h] && (d[h] = a.model.account_dat[h])
        }
        return d
    };
    a.buildMyStatus = function() {
        var b = CW.getAvatarPanel(a.model.myid, {size: "small",hovertip: !1,clicktip: !1});
        $("#cw_mychat_button").html(b);
        $("#cw_mystatus_icon").html(b);
        $("#cw_mystatus_name").html(CW.getName(a.model.myid))
    };
    a.buildMyContact = function() {
        var b = count(a.model.request_dat);
        b > 0 ? $("#cw_request_num").html('<span class="cw_num_text">' + b + "</span>").show() : $("#cw_request_num").hide();
        RM && RM.build();
        if (a.contact_dialog_shown) {
            var d = a.getNoRequestDat(), f = {}, h = [], i = "", j = "", n = !1;
            switch (a.tab_type) {
                case "contact":
                    h = a.model.contact_list.slice();
                    h.sort(function(b, d) {
                        return sort_for_string(a.model.getName(b), a.model.getName(d))
                    });
                    f = AC.account_dat;
                    i = '<button class="cw_my_contact_action">' + L.button_delete + "</button>";
                    n = !0;
                    break;
                case "myrequest":
                    for (var o in a.model.myrequest_dat)
                        h.push(o);
                    h.sort(function(b, d) {
                        return sort_for_string(a.model.getName(b), a.model.getName(d))
                    });
                    f = a.model.myrequest_dat;
                    i = '<button class="cw_my_contact_action">' + L.button_cancel + "</button>";
                    break;
                case "request":
                    for (o in a.model.request_dat)
                        h.push(o);
                    h.sort(function(b, d) {
                        return sort_for_string(a.model.getName(b), a.model.getName(d))
                    });
                    f = a.model.request_dat;
                    i = '<button class="cw_my_contact_action cw_my_contact_action_accept">' + 
                    L.button_accept_long + '</button> <button class="cw_my_contact_action cw_my_contact_action_reject">' + L.button_reject_long + "</button>";
                    break;
                case "norequest":
                    f = a.getNoRequestDat();
                    for (o in f)
                        h.push(o);
                    h.sort(function(b, d) {
                        return sort_for_string(a.model.getName(b), a.model.getName(d))
                    });
                    i = '<button class="cw_my_contact_action">' + L.button_add_long + "</button>";
                    j = '<div style="color:#999;padding:8px 5px;font-size:11px;">' + L.contact_add_all_hint + "</div>"
            }
            a.model.contact_list.length > 1 ? $("#cw_my_contact_tab_contact_num").text("(" + 
            (a.model.contact_list.length - 1) + ")") : $("#cw_my_contact_tab_contact_num").text("");
            o = count(a.model.myrequest_dat);
            o > 0 ? $("#cw_my_contact_tab_myrequest_num").text("(" + o + ")") : $("#cw_my_contact_tab_myrequest_num").text("");
            b > 0 ? $("#cw_my_contact_tab_request_num").html('<span class="cw_num_text">' + b + "</span>").show() : $("#cw_my_contact_tab_request_num").hide();
            o = count(d);
            o > 0 ? $("#cw_my_contact_tab_norequest_num").text("(" + o + ")") : $("#cw_my_contact_tab_norequest_num").text("");
            var b = "", x = d = 0, z = [];
            a.filter_word && 
            (z = CW.splitWithSpace(a.filter_word));
            for (var I = 0; I < h.length; I++)
                if (o = h[I], o != a.model.myid && (!(z.length > 0) || a.model.isMatchedWithKeyList(z, o)))
                    d++, d > e[a.tab_type] || (x++, b += '<div class="item" id="cw_my_contact_a' + o + '">' + CW.getContactPanel(o, {request_contact: !1,direct_chat_link: n}), f[o].mg != void 0 && (b += '<pre class="message">' + escape_html(f[o].mg) + "</pre>"), b += '<div class="action">' + i + '</div><div class="ui_contact_action_area"></div></div>');
            d > e[a.tab_type] && (b += '<div class="ui_contact_show_more"><button id="cw_show_more_contact">' + 
            L.contact_show_more + '</button><span class="ui_contact_show_more_remain">' + L.contact_show_more_remain.replace("%%num%%", d - x) + "</span></div>");
            $C("#cw_my_contact_body").html(j + b);
            RM && RM.build();
            $("button").button()
        }
    };
    a.searchSocialContactList = function(b) {
        $("#cw_contact_search_loading").show();
        a.changeClickableContactSearchButton(!1);
        $("#cw_contact_dialog").dialog("option", "buttons", [DIALOG_CANCEL_BUTTON]);
        $("#cw_contact_search_result").hide();
        $("#cw_contact_requestbox_message").hide();
        $("#cw_invitebox").hide();
        var d = {aid_list: [],error: {}};
        CW.post("gateway.php", {cmd: "get_social_contact_list",provider: b}, function(b) {
            $("#cw_contact_search_loading").hide();
            if (b.error != void 0) {
                var e = L.contact_error_cantadd, f = L.contact_error_planlimit, f = f.replace(/%%plan_name%%/, b.error.plan_name), f = f.replace(/%%limit_num%%/, b.error.limit_num);
                CW.view.showLimitErrorDialog(e, f)
            } else {
                for (e in b.account_dat)
                    d.aid_list.push(e), AC.isUnknown(e) && AC.setAccountDat(e, b.account_dat[e]);
                if (b.error_dat)
                    d.error = b.error_dat;
                j(d, !1)
            }
            a.changeClickableContactSearchButton(!0)
        }, 
        function(d) {
            d != void 0 && d.length > 0 && $.inArray("no_connected", d) !== -1 ? (i++, i < 3 ? ST.openSocialConnectWindow(b, "social_contact") : (CW.alert(L.find_friends_from_third_party_service_reconnect_error.replace(/%%provider%%/, b)), $("#cw_contact_search_loading").hide(), a.resetSocialContactErrorCount())) : (CW.alert(d), $("#cw_contact_search_loading").hide());
            a.changeClickableContactSearchButton(!0)
        })
    };
    a.resetSocialContactErrorCount = function() {
        i = 0
    };
    a.changeClickableContactSearchButton = function(a) {
        var b = $("#cw_search_contact_from_third_party_service button"), 
        d = $("#cw_contact_search");
        a ? (b.button("enable").removeClass("ui-state-hover"), d.button("enable").removeClass("ui-state-hover")) : (b.button("disable"), d.button("disable"))
    };
    var j = function(b, d) {
        var e = "";
        if (b.error.noexist != void 0) {
            if (CW.is_security && CW.security_dat.disable_external)
                return j({aid_list: [],error: {}});
            e = "cw_invitebox";
            $("#cw_invitebox_emaillist").hide();
            $("#cw_invitebox_confirm").html(L.contact_mail_not_found);
            $("#cw_invite_message").val(h);
            var f = b.error.noexist;
            $("#cw_contact_dialog").dialog("option", 
            "buttons", [{text: L.contact_do_invite,click: function() {
                        message = $("#cw_invite_message").val();
                        CW.post("gateway.php", {cmd: "invite_contact",e: f,m: message,nm: AC.getName(AC.myid),av: CW.getAvatarPanel(AC.myid, {src: !0})}, function(b) {
                            b.error == void 0 && a.showAddContactMessage(["invite_contact"])
                        }, function(a) {
                            CW.alert(a)
                        });
                        $(this).dialog("close")
                    }}, DIALOG_CANCEL_BUTTON])
        } else {
            for (var e = "cw_contact_search_result", i = 0, m = "", p = "", o = !0, x = 0, z = 0; z < b.aid_list.length; z++) {
                var x = b.aid_list[z], o = !0, p = "ui_request_contact_unselectable", 
                I = CW.getAvatarPanel(x, {size: "small",clicktip: !0,hovertip: !1}), C = "", t = "", X = "ui_contact_search_result_name", r = "cw_contact_search_select";
                AC.isContact(x) || a.model.myrequest_dat[x] != void 0 ? d ? (t = "disabled=disabled", r = X = "", C = AC.isContact(x) ? L.contact_already_added : L.contact_requesting) : o = !1 : p = "";
                X = '<div><span class="cw_contact_search_name ' + X + '">' + CW.getName(x) + '</div><div class="ui_request_contact_orgtitle">' + CW.getOrgName(x) + " " + CW.getDepartment(x) + "</div>";
                o && (i++, m += '<tr class="cw_contact_search_row  ui_selectable_row ' + 
                p + '"><td class="ui_contact_search_row_content_checkbox"><input type="checkbox"  ' + t + ' id="cw_request_contact_check_' + x + '" class="cw_form_request_contact" value="' + x + '"/></td><td class="ui_contact_search_row_content_avatar">' + I + '</td><td class="' + r + '">' + X + '</td><td class="ui_contact_search_row_content_status ' + r + '">' + C + "</td>")
            }
            i ? (m = "<table>" + m + "</table>", $("#cw_contact_requestbox_message").show(), $("#cw_contact_message").val(n), $("#cw_contact_dialog").dialog("option", "buttons", [{text: L.contact_do_request,
                    click: function() {
                        var b = $("#cw_contact_message").val(), d = [];
                        $("#cw_contact_search_result_list").find("input.cw_form_request_contact:checked").each(function() {
                            d.push(parseInt(this.value, 10))
                        });
                        if (!d.length)
                            return CW.alert(L.contact_error_notselect), !1;
                        CW.post("gateway.php", {cmd: "request_contact",a: d,message: b,av: CW.getAvatarPanel(AC.myid, {src: !0})}, function(b) {
                            if (b.error != void 0) {
                                var d = L.contact_error_cantadd, e = L.contact_error_planlimit, e = e.replace(/%%plan_name%%/, b.error.plan_name), e = e.replace(/%%limit_num%%/, 
                                b.error.limit_num);
                                CW.view.showLimitErrorDialog(d, e)
                            } else {
                                for (var d = 0, f = b.requested_list.length; d < f; d++) {
                                    var g = b.requested_list[d];
                                    a.model.myrequest_dat[g] = {nm: AC.getName(g),mg: e}
                                }
                                a.showAddContactMessage(["request_contact"]);
                                CW.watch()
                            }
                        }, function(a) {
                            CW.alert(a)
                        });
                        $("#cw_my_contact_tab_myrequest").click();
                        $(this).dialog("close")
                    }}, DIALOG_CANCEL_BUTTON])) : m = '<div style="text-align:center; margin-top:40px;">' + L.contact_error_search_user_not_found + "</div>";
            i *= 40;
            i > 200 ? i = 200 : i < 100 && (i = 100);
            $("#cw_contact_search_result_list").height(i);
            $("#cw_contact_search_result_list").html(m)
        }
        var u = $("#cw_contact_dialog"), H = setInterval(function() {
            u.dialog("option", "position", "center")
        }, 13);
        $("#" + e).slideDown(function() {
            clearInterval(H);
            u.dialog("option", "position", "center")
        })
    }
}
function SettingView(b) {
    var a = this;
    a.is_valid_cwid = !1;
    a.model = b;
    a.total_progress_per = 0;
    a.stepguide_progress = {};
    a.debug_view_profile_aid = 0;
    a.view_profile_aid = 0;
    a.prepare = function() {
        if (SERVICE_PLAN != "business") {
            var b = $("#cw_show_external");
            b[0].disabled = !0;
            b.parent().find("label").css("color", "#888");
            b = $("#cw_private_nickname");
            b[0].disabled = !0;
            b.parent().find("label").css("color", "#888")
        }
        a.model.refreshSocialConnectStatus();
        var d = function(a, b) {
            b && $("#cw_profile_privacysetting_ico_" + a).removeClass().addClass("ui_sp_icon_privacysetting ui_sp_icon_privacysetting_" + 
            b)
        }, e = function() {
            $(".cw_profile_form_avatar").html(CW.getAvatarPanel(AC.myid, {clicktip: !1,hovertip: !1}));
            $("#cw_profile_input_name").val(AC.getName(AC.myid));
            $("#cw_profile_input_department").val(AC.getDepartment(AC.myid));
            $("#cw_profile_input_title").val(AC.getTitle(AC.myid));
            $("#cw_profile_input_cwid").val(AC.getChatWorkId(AC.myid));
            $("#cw_profile_input_skype").val(AC.getSkype(AC.myid));
            $("#cw_profile_input_twitter").val(AC.getTwitter(AC.myid));
            $("#cw_profile_input_facebook").val(AC.getFacebook(AC.myid));
            $("#cw_profile_input_address").val(AC.getAddress(AC.myid));
            $("#cw_profile_input_url").val(AC.getUrl(AC.myid));
            $("#cw_profile_input_email").val(AC.getEmail(AC.myid));
            $("#cw_profile_input_tel_organization").val(AC.getOrgTel(AC.myid));
            $("#cw_profile_input_tel_extension").val(AC.getExtensionTel(AC.myid));
            $("#cw_profile_input_tel_mobile").val(AC.getMobileTel(AC.myid));
            $("#cw_profile_input_introduction").val(AC.getIntroduction(AC.myid));
            var b = "";
            a.model.data.allow_search == "1" && (b = "checked");
            $("#cw_profile_allow_search").prop("checked", 
            b);
            $(".cw_profile_privacysetting_list").find('input[checked="checked"]').each(function() {
                this.checked = !1
            });
            $("#cw_profile_form_upload_type").find("option:selected").each(function() {
                this.selected = !1
            }).trigger("change");
            d("avatar", AC.getAvatarPriv(AC.myid));
            d("orgname", AC.getOrgNamePriv(AC.myid));
            d("department", AC.getDepartmentPriv(AC.myid));
            d("title", AC.getTitlePriv(AC.myid));
            d("url", AC.getUrlPriv(AC.myid));
            d("address", AC.getAddressPriv(AC.myid));
            d("introduction", AC.getIntroductionPriv(AC.myid));
            d("skype", 
            AC.getSkypePriv(AC.myid));
            d("twitter", AC.getTwitterPriv(AC.myid));
            d("facebook", AC.getFacebookPriv(AC.myid));
            d("email", AC.getEmailPriv(AC.myid));
            d("tel_organization", AC.getOrgTelPriv(AC.myid));
            d("tel_extension", AC.getExtensionTelPriv(AC.myid));
            d("tel_mobile", AC.getMobileTelPriv(AC.myid));
            a.is_valid_cwid = !0;
            h = "";
            $("#cw_profile_cwid_loading").hide();
            $("#cw_profile_cwid_used").text("")
        }, f = function() {
            $(".cw_profile_view").show();
            $(".cw_profile_form_avatar").html(CW.getAvatarPanel(a.view_profile_aid, {clicktip: !1,
                hovertip: !1}));
            $("#cw_profile_name").html(CW.getName(a.view_profile_aid));
            $("#cw_profile_cwid").html(CW.getChatWorkIdLink(a.view_profile_aid));
            var b = "";
            AC.getOrgName(a.view_profile_aid) && (b = CW.getOrgName(a.view_profile_aid));
            $(".cw_profile_orgname").html(b);
            $("#cw_profile_skype").html(CW.getSkypeLink(a.view_profile_aid, !0));
            $("#cw_profile_twitter").html(CW.getTwitterLink(a.view_profile_aid, !0));
            $("#cw_profile_facebook").html(CW.getFacebookLink(a.view_profile_aid, !0));
            $("#cw_profile_department").text(AC.getDepartment(a.view_profile_aid));
            $("#cw_profile_title").text(AC.getTitle(a.view_profile_aid));
            b = escape_html(AC.getUrl(a.view_profile_aid));
            b.match(/^https?:\/\/.+/) ? $("#cw_profile_url").html('<a href="' + b + '" target="_blank">' + b + "</a>") : $("#cw_profile_url").html(b);
            $("#cw_profile_email").text(AC.getEmail(a.view_profile_aid));
            $("#cw_profile_address").text(AC.getAddress(a.view_profile_aid));
            $("#cw_profile_introduction").text(AC.getIntroduction(a.view_profile_aid));
            $("#cw_profile_tel_organization").text(AC.getOrgTel(a.view_profile_aid));
            $("#cw_profile_tel_extension").text(AC.getExtensionTel(a.view_profile_aid));
            $("#cw_profile_tel_mobile").text(AC.getMobileTel(a.view_profile_aid))
        };
        $("#cw_profile_dialog").dialog({width: 600,height: 550,title: L.menu_profile_setting,autoOpen: !1,modal: !0,hide: "fade",resizable: !1,open: function() {
                var b = !1, d = function() {
                    b && AC.hasDetailData(a.view_profile_aid) && $("#cw_profile_edit_save_button").show()
                };
                $(".cw_profile_edit").hide();
                $(".cw_profile_view").hide();
                if (AC.hasDetailData(a.view_profile_aid))
                    a.view_profile_aid == 
                    AC.myid ? e() : f();
                else {
                    var g = !1;
                    a.view_profile_aid == AC.myid ? (g = !0, $(".cw_profile_edit").find("input,textarea").each(function() {
                        this.disabled = !0
                    }), e()) : f(!1);
                    AC.refreshAccountDetailData(a.view_profile_aid, g, function() {
                        a.view_profile_aid == AC.myid ? (e(), $(".cw_profile_edit").find("input,textarea").each(function() {
                            this.disabled = !1
                        }), d()) : f()
                    })
                }
                CW.view.unsetOutbox();
                a.view_profile_aid == AC.myid ? ($(".cw_profile_edit").show(), $(".cw_profile_view").hide(), $("#cw_profile_tab").removeClass().addClass("ui_table_filter ui_profile_tab"), 
                $(".cw_profile_select_orgname_type").hide(), AC.getOrgName(a.view_profile_aid), CW.is_business && CW.is_admin ? $("#cw_profile_setting_note_change_orgname").show() : $("#cw_profile_setting_note_change_orgname").hide(), CW.is_business ? CW.post("gateway.php", {cmd: "get_common_organizatin_info"}, function(e) {
                    e.onm !== "" && ($(".cw_profile_select_orgname_type").show(), $("#cw_profile_common_orgname").find("label").text(e.onm));
                    e.use_common ? ($("#cw_profile_select_orgname_type_common").attr("checked", "checked"), $("#cw_profile_input_orgname").val("")) : 
                    ($("#cw_profile_select_orgname_type_individual").attr("checked", "checked"), $("#cw_profile_input_orgname").val(AC.getOrgName(a.view_profile_aid)));
                    b = !0;
                    d()
                }) : ($("#cw_profile_input_orgname").val(AC.getOrgName(a.view_profile_aid)), b = !0), g = [{id: "cw_profile_edit_save_button",style: "display:none;",text: L.button_save_long,click: function() {
                            var b = [], d = trim($("#cw_profile_input_name").val());
                            $("#cw_profile_input_name").val(d);
                            d || b.push(L.profile_error_no_displayname);
                            d = trim($("#cw_profile_input_cwid").val());
                            $("#cw_profile_input_cwid").val(d);
                            d && (a.is_valid_cwid && j(d), a.is_valid_cwid || b.push(L.profile_error_invalid_cwid));
                            b.length ? CW.alert(b.join("\n")) : (b = $("#cw_profile_form"), d = "", $("#cw_profile_allow_search").prop("checked") == !1 && (d = $('<input type="hidden" name="__cwform_allow_search" value="0">'), b.append(d)), b.submit(), d && d.remove(), CW.showProgress(L.saving), $(this).dialog("close"))
                        }}, DIALOG_CLOSE_BUTTON], $(this).dialog("option", "buttons", g), d(), $(this).dialog({width: 600})) : ($("#cw_profile_tab").removeClass().addClass("ui_table_filter ui_profile_tab"), 
                $(this).dialog({width: 480}), a.refreshProfileContactButton(), $(this).dialog("option", "buttons", [DIALOG_CLOSE_BUTTON]))
            }});
        $(".cw_profile_privacysetting").click(function() {
            CW.view.unsetOutbox();
            var a = this.id.substr(26), b = $(this).find(".cw_profile_privacysetting_list");
            if (b.html().trim() == "") {
                var d = ["public", "contact"], e = [], f = 0;
                e[f++] = '<div class="ui_profile_privacysetting_list"><ul>';
                for (var g = 0; g < d.length; g++)
                    e[f++] = '<li class="cw_profile_privacysetting_list_box"  id="cw_profile_privacysetting_' + d[g] + 
                    "-" + a + '">', e[f++] = ' <span class="ui_sp_icon_privacysetting ui_sp_icon_privacysetting_' + d[g] + '"></span>' + L["profile_setting_privacy_" + d[g]], e[f++] = "</li>";
                e[f++] = ' </ul></div><input type="hidden" id="cw_profile_form_' + a + '_priv" name="__cwform_' + a + '_priv" value="' + d[g] + '">';
                a = $(e.join(""));
                b.html(a)
            } else
                a = b.find("div"), b.show();
            CW.view.setOutbox(a, function() {
                b.fadeOut("fast")
            }, !1);
            CW.view.outboxStop = !0
        }).mousedown(function() {
            return !1
        });
        $("#cw_profile_dialog").on("click", ".cw_profile_privacysetting_list_box", 
        function() {
            var a = this.id.match(/^cw_profile_privacysetting_(.+)\-(.+)$/);
            if (a) {
                var b = a[1], a = a[2];
                $("#cw_profile_privacysetting_ico_" + a).removeClass("ui_sp_icon_privacysetting_public ui_sp_icon_privacysetting_contact").addClass("ui_sp_icon_privacysetting_" + b);
                $("#cw_profile_form_" + a + "_priv").val(b)
            }
        });
        $("#cw_setting_dialog").dialog({width: 820,height: 550,title: L.menu_personal_setting,autoOpen: !1,modal: !0,hide: "fade",resizable: !1,open: function() {
                CW.view.unsetOutbox();
                a.is_valid_cwid = !0;
                $("#cw_form_upload_type").val("");
                $("#cw_profile_image_limit").hide();
                $("#cw_form_avatar").html(CW.getAvatarPanel(AC.myid, {clicktip: !1,hovertip: !1}));
                $("#cw_form_file").empty();
                $("#cw_setting_name").val(AC.getName(AC.myid));
                $("#cw_setting_orgname").val(AC.getOrgName(AC.myid));
                $("#cw_setting_cwid").val(AC.getChatWorkId(AC.myid));
                $("#cw_setting_skype").val(AC.getSkype(AC.myid));
                $("#cw_setting_twitter").val(AC.getTwitter(AC.myid));
                $("#cw_setting_facebook").val(AC.getFacebook(AC.myid));
                $("#cw_cwid_loading").hide();
                $("#cw_cwid_used").text("");
                var b = "";
                a.model.data.allow_search == "1" && (b = "checked");
                $("#cw_setting_allow_search").prop("checked", b);
                $('input[name="__cwform_data[enter_action]"]').each(function() {
                    if ($(this)[0].value == a.model.data.enter_action)
                        $(this)[0].checked = !0
                });
                $("#cw_notifier_duration").val(a.model.data.notifier_duration);
                $("#cw_sound_type").val(a.model.data.sound_type);
                a.model.data.popup_sound == 1 ? document.getElementById("cw_popup_sound").checked = !0 : document.getElementById("cw_popup_sound").checked = !1;
                a.model.data.desktop_alert == 
                1 ? document.getElementById("cw_notifier_show").checked = !0 : document.getElementById("cw_notifier_show").checked = !1;
                a.model.data.notifier_message == 1 ? document.getElementById("cw_notifier_message").checked = !0 : document.getElementById("cw_notifier_message").checked = !1;
                a.model.data.notifier_onlyto == 1 ? document.getElementById("cw_notifier_onlyto").checked = !0 : document.getElementById("cw_notifier_onlyto").checked = !1;
                a.model.data.faviconstat == 1 ? document.getElementById("cw_faviconstat").checked = !0 : document.getElementById("cw_faviconstat").checked = 
                !1;
                a.model.data.show_delmessage == 1 ? document.getElementById("cw_show_delmessage").checked = !0 : document.getElementById("cw_show_delmessage").checked = !1;
                a.model.data.show_external == 1 ? document.getElementById("cw_show_external").checked = !0 : document.getElementById("cw_show_external").checked = !1;
                a.model.data.private_nickname == 1 ? document.getElementById("cw_private_nickname").checked = !0 : document.getElementById("cw_private_nickname").checked = !1;
                a.model.data.shorten_url == 1 ? document.getElementById("cw_shorten_url").checked = 
                !0 : document.getElementById("cw_shorten_url").checked = !1;
                $("#cw_notify_term").val(a.model.data.notify_term);
                b = ST.data.sound_volume * 10;
                $("#cw_sound_volume_slider").slider({range: "max",min: 1,max: 10,value: b,slide: function(a, b) {
                        $("#cw_sound_volume").val(b.value / 10);
                        $("#cw_sound_volume_label").text(b.value)
                    }});
                $("#cw_sound_volume").val(ST.data.sound_volume);
                $("#cw_sound_volume_label").text(b)
            },buttons: [{text: L.button_save_long,click: function() {
                        var b = [], d = trim($("#cw_setting_name").val());
                        $("#cw_setting_name").val(d);
                        d || b.push(L.profile_error_no_displayname);
                        d = trim($("#cw_setting_cwid").val());
                        $("#cw_setting_cwid").val(d);
                        d && !a.is_valid_cwid && b.push(L.profile_error_invalid_cwid);
                        b.length ? CW.alert(b.join("\n")) : (b = $("#cw_setting_form"), d = [], $("#cw_setting_allow_search").prop("checked") == !1 && d.push('<input type="hidden" name="__cwform_allow_search" value="0">'), $("#cw_notifier_show").prop("checked") == !1 && d.push('<input type="hidden" name="__cwform_data[desktop_alert]" value="0">'), $("#cw_notifier_message").prop("checked") == 
                        !1 && d.push('<input type="hidden" name="__cwform_data[notifier_message]" value="0">'), $("#cw_notifier_onlyto").prop("checked") == !1 && d.push('<input type="hidden" name="__cwform_data[notifier_onlyto]" value="0">'), $("#cw_faviconstat").prop("checked") == !1 && d.push('<input type="hidden" name="__cwform_data[faviconstat]" value="0">'), $("#cw_show_delmessage").prop("checked") == !1 && d.push('<input type="hidden" name="__cwform_data[show_delmessage]" value="0">'), $("#cw_show_external").prop("checked") == !1 && d.push('<input type="hidden" name="__cwform_data[show_external]" value="0">'), 
                        $("#cw_private_nickname").prop("checked") == !1 && d.push('<input type="hidden" name="__cwform_data[private_nickname]" value="0">'), $("#cw_shorten_url").prop("checked") == !1 && d.push('<input type="hidden" name="__cwform_data[shorten_url]" value="0">'), d = $(d.join("")), b.append(d), b.submit(), CW.showProgress(L.saving), d && d.remove())
                    }}, DIALOG_CANCEL_BUTTON]});
        $(".cw_social_connect").click(function() {
            var b = this.id.substr(18);
            a.model.openSocialConnectWindow(b)
        });
        $(".cw_social_disconnect").click(function() {
            var b = 
            this.id.substr(21, 1).toUpperCase() + this.id.substr(22), d = $('<img src="./image/ajax-loader-gray.gif" class="ico_loading"/>');
            $(this).before(d).hide();
            setTimeout(function() {
                CW.post("gateway.php", {cmd: "disconnect_social_service",social_service: b}, function() {
                    a.model.refreshSocialConnectStatus(function() {
                        d.remove()
                    })
                })
            }, 10)
        });
        $("#cw_form_setting").bind("load", function() {
            CW.hideProgress();
            var b = unescape_html($(this).contents().find("body").html());
            if (b.length > 0) {
                var b = b.match(/\{.+\}/)[0], b = $.parseJSON(b), 
                d = b.result;
                b.status.success ? (d.name && AC.setName(AC.myid, d.name), d.orgname && AC.setOrgName(AC.myid, d.orgname), d.cwid && AC.setChatWorkId(AC.myid, d.cwid), d.allow_search != void 0 && (a.model.data.allow_search = parseInt(d.allow_search, 10)), d.skype && AC.setSkype(AC.myid, d.skype), d.twitter && AC.setTwitter(AC.myid, d.twitter), d.facebook && AC.setFacebook(AC.myid, d.facebook), d.setting_data && ST.updateSetting(d.setting_data), $("#cw_setting_dialog").dialog("close"), CW.watch()) : CW.alert(L.raise_error)
            }
        });
        $("#cw_form_profile").bind("load", 
        function() {
            CW.hideProgress();
            var b = unescape_html($(this).contents().find("body").html());
            if (b.length > 0) {
                var b = b.match(/\{.+\}/)[0], d = $.parseJSON(b), b = d.result;
                if (d.status.success) {
                    var d = {name: "nm",orgname: "onm",department: "dp",title: "tt",cwid: "cwid",skype: "sp",twitter: "tw",facebook: "fb",address: "ad",email: "mail",introduction: "intro",tel_extension: "etel",tel_mobile: "mtel",tel_organization: "otel",url: "url"}, e = {}, f = "", g;
                    for (g in d)
                        b[g] && (e[d[g]] = b[g]), f = g + "_priv", b[f] && (e[d[g] + "_priv"] = b[f]);
                    AC.setAccountDat(AC.myid, 
                    e);
                    b.allow_search != void 0 && (a.model.data.allow_search = parseInt(b.allow_search, 10));
                    $("#cw_profile_dialog").dialog("close");
                    CW.watch()
                } else
                    CW.alert(L.raise_error)
            }
        });
        $("#cw_form_upload_type").change(function() {
            $("#cw_profile_image_limit").hide();
            switch ($(this).val()) {
                case "upload":
                    $("#cw_form_file").html('<input name="__cwform_avatar_file" class="cw_onlyimage" type="file" />');
                    $("#cw_profile_image_limit").show();
                    break;
                case "twitter":
                    $("#cw_form_file").html('twitter id <input name="__cwform_avatar_twitter" type="text" style="width:100px" />');
                    break;
                case "facebook":
                    $("#cw_form_file").html('facebook username <input name="__cwform_avatar_facebook" type="text" style="width:100px" />');
                    break;
                case "gravatar":
                    $("#cw_form_file").html(L.mailaddress + ' <input name="__cwform_avatar_gravatar" type="text" style="width:150px" />');
                    break;
                default:
                    $("#cw_form_file").empty()
            }
        });
        $("#cw_profile_form_upload_type").change(function() {
            $("#cw_profile_form_image_limit").hide();
            switch ($(this).val()) {
                case "upload":
                    $("#cw_profile_form_file").html('<input name="__cwform_avatar_file" type="file" class="cw_onlyimage" />');
                    $("#cw_profile_form_image_limit").show();
                    break;
                case "twitter":
                    $("#cw_profile_form_file").html('twitter id <input name="__cwform_avatar_twitter" type="text" style="width:100px" />');
                    break;
                case "facebook":
                    $("#cw_profile_form_file").html('facebook username <input name="__cwform_avatar_facebook" type="text" style="width:100px" />');
                    break;
                case "gravatar":
                    $("#cw_profile_form_file").html(L.mailaddress + ' <input name="__cwform_avatar_gravatar" type="text" style="width:150px" />');
                    break;
                default:
                    $("#cw_profile_form_file").empty()
            }
        });
        $("#cw_setting").click(function() {
            $("#cw_setting_dialog").dialog("open")
        });
        $("#cw_profile").click(function() {
            a.view_profile_aid = AC.myid;
            $("#cw_profile_dialog").dialog("open")
        });
        $("#cw_view_profile").click(function() {
            $("#cw_profile_dialog").dialog("open")
        });
        var h = "", i = null, b = function() {
            var b = $(this).val();
            if (b != h)
                h = b, i && (clearTimeout(i), i = null), AC.getChatWorkId(AC.myid) == b ? ($("#cw_cwid_loading").hide(), $("#cw_cwid_used").text(""), a.is_valid_cwid = !0) : b ? b.length > 50 ? ($("#cw_cwid_loading").hide(), $("#cw_cwid_used").text(L.error_maxlength.replace("%%length%%", 
                50)).css("color", "red"), a.is_valid_cwid = !1) : b.match(/^[-_a-zA-Z0-9]+$/) ? ($("#cw_cwid_loading").show(), $("#cw_cwid_used").text(""), i = setTimeout(function() {
                    $("#cw_cwid_loading").show();
                    CW.get("gateway.php", {cmd: "check_chatwork_id",cwid: b}, function(b) {
                        $("#cw_cwid_loading").hide();
                        b.used ? ($("#cw_cwid_used").text(L.error_already_used).css("color", "red"), a.is_valid_cwid = !1) : ($("#cw_cwid_used").text(L.available).css("color", "green"), a.is_valid_cwid = !0)
                    })
                }, 1E3)) : ($("#cw_cwid_loading").hide(), $("#cw_cwid_used").text(L.error_invalidchar).css("color", 
                "red"), a.is_valid_cwid = !1) : ($("#cw_cwid_loading").hide(), $("#cw_cwid_used").text(""))
        };
        $("#cw_setting_cwid").keyup(b).blur(b);
        var j = function(b) {
            var d = trim(b);
            if (d != h)
                h = d, i && (clearTimeout(i), i = null), AC.getChatWorkId(AC.myid) == d ? ($("#cw_profile_cwid_loading").hide(), $("#cw_profile_cwid_used").text(""), a.is_valid_cwid = !0) : d ? d.length > 50 ? ($("#cw_profile_cwid_loading").hide(), $("#cw_profile_cwid_used").text(L.error_maxlength.replace("%%length%%", 50)).css("color", "red"), a.is_valid_cwid = !1) : d.match(/^[-_a-zA-Z0-9]+$/) ? 
                ($("#cw_profile_cwid_loading").show(), $("#cw_profile_cwid_used").text(""), i = setTimeout(function() {
                    $("#cw_profile_cwid_loading").show();
                    CW.get("gateway.php", {cmd: "check_chatwork_id",cwid: d}, function(b) {
                        $("#cw_profile_cwid_loading").hide();
                        b.used ? ($("#cw_profile_cwid_used").text(L.error_already_used).css("color", "red"), a.is_valid_cwid = !1) : ($("#cw_profile_cwid_used").text(L.available).css("color", "green"), a.is_valid_cwid = !0)
                    })
                }, 1E3)) : ($("#cw_profile_cwid_loading").hide(), $("#cw_profile_cwid_used").text(L.error_invalidchar).css("color", 
                "red"), a.is_valid_cwid = !1) : ($("#cw_profile_cwid_loading").hide(), $("#cw_profile_cwid_used").text(""))
        };
        $("#cw_profile_input_cwid").keyup(function() {
            j($(this).val())
        }).blur(function() {
            j($(this).val())
        });
        $("#cw_sound_play").click(function() {
            audioObjSupport ? CW.playSound($("#cw_sound_type").val(), $("#cw_sound_volume").val()) : CW.alert(L.sound_no_support)
        });
        $("#cw_language_label").text(L["lang_" + LANGUAGE]);
        var o = {"default": ["m/d/Y", "d/m/Y", "Y/m/d", "m-d-Y", "d-m-Y", "Y-m-d", "m.d.Y", "d.m.Y", "Y.m.d", "m/d-Y"],
            ja: ["Y\u5e74m\u6708d\u65e5"],"zh-cn": ["Y\u5e74m\u6708d\u65e5"]};
        $("#cw_language_dialog").dialog({width: 300,height: 180,title: L.lang_title,autoOpen: !1,modal: !0,hide: "fade",resizable: !1,open: function() {
                $("#cw_lang_type").val(LANGUAGE);
                $("#cw_lang_dateformat").trigger("refresh")
            },buttons: [{text: L.button_save_long,click: function() {
                        var a = $("#cw_lang_type").val(), b = $("#cw_lang_dateformat").val(), d = $(this);
                        (a != LANGUAGE || ST.data.dateformat != b) && CW.post("gateway.php", {cmd: "send_lang_setting",lang: a,dateformat: b}, 
                        function(a) {
                            if (a.lang) {
                                var b = L.button_ok, d = L.button_cancel;
                                L.button_ok = L["lang_" + a.lang + "_button_ok"];
                                L.button_cancel = L["lang_" + a.lang + "_button_cancel"];
                                CW.confirm(L["lang_" + a.lang + "_change_confirm"], function() {
                                    document.location.href = "./"
                                });
                                L.button_ok = b;
                                L.button_cancel = d
                            }
                        });
                        d.dialog("close")
                    }}, DIALOG_CANCEL_BUTTON]});
        $("#cw_lang_type").bind("change", function() {
            $("#cw_lang_dateformat").trigger("refresh")
        });
        $("#cw_lang_dateformat").bind("refresh", function() {
            var a = $("#cw_lang_type").val(), b = $("#cw_lang_dateformat"), 
            d = [];
            if (o[a])
                for (var e in o[a])
                    d.push(o[a][e]);
            for (e in o["default"])
                d.push(o["default"][e]);
            b.empty();
            e = 0;
            for (a = d.length; e < a; e++)
                b.append('<option value="' + d[e] + '">' + CW.getDate((new Date((new Date).getFullYear(), 11, 31)).getTime() / 1E3, d[e]) + "</option>")
        });
        $("#cw_language").click(function() {
            $("#cw_language_dialog").dialog("open")
        });
        $("#cw_sound").click(a.toggleSound);
        $("#cw_notification").click(a.toggleNotification);
        $("#cw_notifier_show").click(function(b) {
            b.preventDefault();
            var d = this;
            a.requestNotificationPermission(function(a) {
                if (a)
                    d.checked = 
                    !d.checked
            });
            return !1
        });
        var n = $("#cw_mystatus_box"), z = $("#cw_mystatus_button"), I = $("#cw_mystatus_arrow");
        z.hover(function() {
            $(this).hasClass("ui_mystatus_bg_selected") || ($(this).addClass("ui_mystatus_bg_hover"), I.addClass("ui_sp_icon_arrow_small_down_w").removeClass("ui_sp_icon_arrow_small_down_lg"))
        }, function() {
            $(this).removeClass("ui_mystatus_bg_hover");
            $("#cw_mystatus_arrow").removeClass("ui_sp_icon_arrow_small_down_w").addClass("ui_sp_icon_arrow_small_down_lg")
        });
        z.click(function() {
            CW.is_admin ? 
            $("#cw_service_admin_menu").show() : ($("#cw_service_admin_menu").hide(), CW.is_admin_user && $("#cw_user_admin_menu").show());
            CW.plan == "free" ? $("#cw_upgrade_menu").show() : $("#cw_upgrade_menu").hide();
            CW.view.unsetOutbox();
            if (n.css("display") == "none") {
                z.addClass("ui_mystatus_bg_selected");
                z.removeClass("ui_mystatus_bg_hover");
                var a = z.offset().left + z.outerWidth();
                n.slideDown("fast");
                n.css("width", z.outerWidth() + "px");
                var b = n.outerWidth() + 1;
                n.css("left", a - b + "px");
                CW.view.setOutbox(n, function() {
                    n.slideUp("fast", 
                    function() {
                        z.removeClass("ui_mystatus_bg_selected");
                        I.addClass("ui_sp_icon_arrow_small_down_lg")
                    })
                }, !1);
                CW.view.outboxStop = !0
            }
        }).mousedown(function() {
            return !1
        });
        n.click(function() {
            CW.view.outboxStop = !0
        });
        $("#cw_announce_dialog").dialog({width: 600,height: "auto",autoOpen: !1,resizable: !1,modal: !0,hide: "fade",buttons: [{text: L.announce_button_close,click: function() {
                        ST.closeAnnounce();
                        $("#cw_announce_dialog").dialog("close")
                    }}, DIALOG_CLOSE_BUTTON],open: function() {
                $(this).scrollTop(0)
            }});
        $("#cw_announce_link").click(function() {
            $("#cw_announce_dialog").dialog("open")
        });
        $("#cw_announce_close").click(function() {
            CW.confirm(L.announce_confirm_close, function() {
                ST.closeAnnounce()
            })
        });
        var C = $("#cw_addtip"), t = $("#cw_newadd_button");
        t.hover(function() {
            $(this).addClass("ui_add_button_hover")
        }, function() {
            $(this).removeClass("ui_add_button_hover")
        });
        t.click(function() {
            if (C.css("display") == "none") {
                $(this).addClass("ui_add_button_selected");
                var a = parseInt(t.width() / 2, 10), b = parseInt(C.width() / 2, 10), d = t.offset().left;
                C.css("left", d - b + a + 2);
                C.show();
                CW.view.setOutbox(C, function() {
                    t.removeClass("ui_add_button_selected");
                    C.fadeOut("fast")
                }, !1);
                CW.view.outboxStop = !0
            } else
                $(this).removeClass("ui_add_button_selected"), C.fadeOut("fast")
        }).mousedown(function() {
            return !1
        })
    };
    var f = {}, e = !1, d = !1, i = function() {
        var b = "";
        SERVICE_PLAN == "free" && AVAILABLE_STORAGE_M < 140 ? b = "stepguide" : CW.is_business && (b = "userguide");
        if (!b || f[b])
            return !1;
        f[b] = !0;
        var h = function(a, d) {
            var e = $(a), f = e.find(".cw_" + b + "_order_list li"), i = 0;
            f.each(function() {
                if ($(this).hasClass("cw_" + b + "_order_list_select"))
                    return !1;
                i++
            });
            var j = i;
            if (d)
                return j += d, j > f.length - 
                1 && (j = 0), f.eq(j).click(), !1;
            var l = [];
            j > 0 && l.push({text: L.button_back,click: function() {
                    h(e, -1)
                }});
            j < f.length - 1 ? l.push({text: L.button_next,click: function() {
                    h(e, 1)
                }}) : j == f.length - 1 && l.push({text: L.button_close,click: function() {
                    h(e, 1);
                    e.dialog("close")
                }});
            e.dialog("option", "buttons", l)
        };
        $(".cw_" + b + "_order_list li").click(function() {
            var a = $(this), d = a.parents(".content"), e = d.find(".cw_" + b + "_order_list li"), f = e.index(this);
            e.removeClass("cw_" + b + "_order_list_select");
            a.addClass("cw_" + b + "_order_list_select");
            d.find(".ui_dialog_content .cw_" + b + "_howto_content").each(function() {
                this.className.indexOf("cw_" + b + "_howto_" + f.toString() + "_content") != -1 ? $(this).fadeIn("slow") : $(this).stop().hide()
            });
            h(a.parents(".dialog"))
        });
        switch (b) {
            case "stepguide":
                if (!d && !a.model.data.welcome) {
                    d = !0;
                    var i = IS_NEW_USER ? "welcome" : "start_stepguide";
                    setTimeout(function() {
                        $("#cw_" + i + "_dialog").dialog({title: L["stepguide_" + i + "_title"],show: "drop",hide: "drop",width: 820,autoOpen: !0,resizable: !1,modal: !0,close: function() {
                                CW.post("gateway.php", 
                                {cmd: "send_chat_setting",data: {welcome: "1"}});
                                a.stepguide_progress.profile || $("#cw_stepguide_profile_explain").addClass("ui_stepguide_explain_blink");
                                a.stepguide_progress.contact || $("#cw_stepguide_contact_explain").addClass("ui_stepguide_explain_blink");
                                a.stepguide_progress.group || $("#cw_stepguide_group_explain").addClass("ui_stepguide_explain_blink")
                            }})
                    }, 500);
                    $(".cw_welcome_close").click(function() {
                        $(this).parents(".dialog").dialog("close")
                    })
                }
                $("#cw_stepguide_close").click(function() {
                    a.toggleStepGuide()
                });
                $("#cw_stepguide_open").click(function() {
                    a.toggleStepGuide()
                });
                for (var j = ["profile", "contact", "group"], l = 0, m = j.length; l < m; l++)
                    (function() {
                        var a = j[l];
                        $("#cw_stepguide_" + a + "_dialog").dialog({title: L["stepguide_step_" + a + "_title"],show: "fade",hide: "fade",width: 820,minWidth: 820,height: 550,minHeight: 500,autoOpen: !1,modal: !0,open: function() {
                                $("#cw_stepguide .cw_stepguide_explain").removeClass("ui_stepguide_explain_blink");
                                h(this)
                            }});
                        $("#cw_stepguide_" + a + "_explain").click(function() {
                            $("#cw_stepguide_" + a + 
                            "_dialog").dialog("open")
                        })
                    })();
                var n = !1;
                $("#cw_stepguide_get").click(function() {
                    !n && a.total_progress_per == 100 && (n = !0, $(this).text(L.loading), CW.post("gateway.php", {cmd: "get_bonus_storage"}, function() {
                        $("#cw_stepguide_get").removeClass("ui_stepguide_complete").addClass("ui_stepguide_incomplete").text(L.stepguide_bonus_storage_added);
                        $("#cw_complete_dialog").dialog({title: L.stepguide_complete_title,show: "fade",hide: "fade",width: 820,height: 550,autoOpen: !0,modal: !0,buttons: [DIALOG_CLOSE_BUTTON],open: function() {
                                $("#cw_complete_dialog").scrollTop(0)
                            },
                            close: function() {
                                CW.confirm(L.stepguide_complete_reload_confirm, function() {
                                    document.location.href = "./"
                                })
                            }})
                    }, function(a) {
                        CW.alert(a);
                        n = !1
                    }))
                });
                break;
            case "userguide":
                !e && !a.model.data.userguide_welcome && (e = !0, setTimeout(function() {
                    $("#cw_userguide_welcome_dialog").dialog({title: L.userguide_title.replace("%%service_name%%", SERVICE_NAME),show: "fade",hide: "fade",width: 820,autoOpen: !0,resizable: !1,modal: !0,close: function() {
                            CW.post("gateway.php", {cmd: "send_chat_setting",data: {userguide_welcome: "1"}})
                        }})
                }, 
                500), $(".cw_welcome_close").click(function() {
                    $(this).parents(".dialog").dialog("close")
                }), $("#cw_userguide_welcome_open").click(function() {
                    $(this).parents(".dialog").dialog("close");
                    $("#cw_userguide_dialog").dialog("open")
                })), $("#cw_userguide_dialog").dialog({title: L.userguide_title.replace("%%service_name%%", SERVICE_NAME),show: "fade",hide: "fade",width: 820,minWidth: 820,height: 600,minHeight: 590,autoOpen: !1,modal: !0,open: function() {
                        h(this)
                    }}), $("#cw_userguide").show(), $("#cw_userguide").click(function() {
                    $("#cw_userguide_dialog").dialog("open")
                })
        }
    };
    a.updateSetting = function() {
        a.refreshNotificationStatus();
        a.refreshSoundStatus();
        if (datepicker_regional)
            datepicker_regional.dateFormat = ST.data.dateformat.replace("Y", "yy"), $.datepicker.setDefaults(datepicker_regional);
        $C("#cw_chattext").trigger("explain_update");
        var b = $("#cw_send_button_box");
        b.css("display") == "none" && b.show();
        ST.data.enter_action == "send" ? ($("#cw_button_send_key").html("(Enter)"), $("#cw_return_button_box").show()) : ($("#cw_button_send_key").html("(Shift + Enter)"), $("#cw_return_button_box").hide());
        i()
    };
    a.refreshProfileContactButton = function() {
        var b = "";
        !AC.isDeleted(a.view_profile_aid) && !AC.isContact(a.view_profile_aid) && (b = AC.myrequest_dat[a.view_profile_aid] == void 0 ? '<div class="ui_profile_request_contact cw_request_contact_a' + a.view_profile_aid + ' cw_request_contact"><span class="ui_sp_icon ui_sp_icon_addcontact"></span><a class="ui_link_icon">' + L.contactpanel_add_contact + "</a></div>" : '<div class="ui_profile_myrequest_contact"><span>' + L.contact_requesting + "</span></div>");
        $("#cw_profile_request_contact_button").html(b)
    };
    var n = null, h = null;
    a.updateAnnounce = function() {
        n && (clearTimeout(n), n = null);
        h && (clearTimeout(h), h = null);
        if (a.model.announce_dat.id) {
            var b = time(), d = parseInt(a.model.announce_dat.from, 10) - b, b = parseInt(a.model.announce_dat.to, 10) - b;
            d > 0 ? n = setTimeout(function() {
                a.showAnnounce();
                n = null
            }, d * 1E3) : a.showAnnounce();
            b > 0 && (h = setTimeout(function() {
                a.hideAnnounce();
                h = null
            }, b * 1E3))
        } else
            a.hideAnnounce()
    };
    a.showAnnounce = function() {
        $("#cw_announce_link").text(a.model.announce_dat.linktext);
        $("#cw_announce_dialog").dialog({title: a.model.announce_dat.subject});
        $("#cw_announce_body").html(a.model.announce_dat.body);
        $("#cw_announce").fadeIn("slow")
    };
    a.hideAnnounce = function() {
        $("#cw_announce").fadeOut("slow")
    };
    a.toggleNotification = function(b) {
        window.webkitNotifications ? window.webkitNotifications.checkPermission() == 0 ? (ST.data.desktop_alert = a.model.data.desktop_alert == "0" ? "1" : "0", a.refreshNotificationStatus(!0)) : (b.preventDefault(), window.webkitNotifications.requestPermission(function(b) {
            window.webkitNotifications.checkPermission() == 0 ? (b && b(window.webkitNotifications.checkPermission() == 
            0), ST.data.desktop_alert = "1") : ST.data.desktop_alert = "0";
            a.refreshNotificationStatus(!0)
        })) : CW.alert(L.desktopalert_no_support)
    };
    a.requestNotificationPermission = function(a) {
        window.webkitNotifications ? window.webkitNotifications.requestPermission(function() {
            window.webkitNotifications.checkPermission() == 0 ? a(!0) : a(!1)
        }) : CW.alert(L.desktopalert_no_support)
    };
    a.refreshNotificationStatus = function(b) {
        var d = !1;
        b && CW.post("gateway.php", {cmd: "send_chat_setting",data: {desktop_alert: a.model.data.desktop_alert}});
        a.model.data.desktop_alert == "1" && window.webkitNotifications && window.webkitNotifications.checkPermission() == 0 && (d = !0);
        d ? ($("#cw_notification_icon").removeClass("ui_sp_icon_footer_notification_off").addClass("ui_sp_icon_footer_notification_on").css("visibility", "visible"), $("#cw_notification").prop("title", L.menu_desktopalert + "(" + L.menu_current + "ON)"), CW.enable_popup = !0) : ($("#cw_notification_icon").removeClass("ui_sp_icon_footer_notification_on").addClass("ui_sp_icon_footer_notification_off").css("visibility", 
        "visible"), $("#cw_notification").prop("title", L.menu_desktopalert + "(" + L.menu_current + "OFF)"), CW.enable_popup = !1)
    };
    a.toggleSound = function() {
        audioObjSupport ? (ST.data.popup_sound = a.model.data.popup_sound == "0" ? "1" : "0", a.refreshSoundStatus(!0)) : CW.alert(L.sound_no_support)
    };
    var j = 0;
    a.refreshStepGuide = function() {
        if (AVAILABLE_STORAGE_M >= 140)
            j && (a.toggleStepGuide(), $("#cw_stepguide_open").fadeOut());
        else {
            j || $("#cw_stepguide_open").fadeIn();
            ST.data.show_stepguide && !j && a.toggleStepGuide();
            var b = 0, d = !1;
            AC.getAvatarId(AC.myid).indexOf("_default_") == 
            -1 && (d = !0, b++);
            var e = !1;
            AC.getChatWorkId(AC.myid) != "" && (e = !0, b++);
            a.stepguide_progress.profile = d && e ? !0 : !1;
            var f = 0, h = 0, i;
            for (i in RL.rooms)
                switch (RL.rooms[i].type) {
                    case "group":
                        count(RL.rooms[i].member_dat) > 1 && h++;
                        break;
                    case "contact":
                        f++
                }
            f < 4 ? (i = f, a.stepguide_progress.contact = !1) : (i = 4, a.stepguide_progress.contact = !0);
            b += i;
            if (h < 4) {
                var n = h;
                a.stepguide_progress.group = !1
            } else
                n = 4, a.stepguide_progress.group = !0;
            b += n;
            if (j) {
                $("#cw_stepguide_contact_progress").html(i.toString() + " / 4");
                $("#cw_stepguide_group_progress").html(n.toString() + 
                " / 4");
                d ? $("#cw_stepguide_profile_avatar").html('<span class="ui_sp_icon_stepguide ui_sp_icon_stepguide_ok"></span>' + L.stepguide_profile_picture) : $("#cw_stepguide_profile_avatar").html('<span class="ui_sp_icon_stepguide ui_sp_icon_stepguide_no"></span>' + L.stepguide_profile_picture);
                e ? $("#cw_stepguide_profile_cwid").html('<span class="ui_sp_icon_stepguide ui_sp_icon_stepguide_ok"></span>' + L.ChatWorkId) : $("#cw_stepguide_profile_cwid").html('<span class="ui_sp_icon_stepguide ui_sp_icon_stepguide_no"></span>' + 
                L.ChatWorkId);
                e = [];
                for (d = 0; d < 4; d++)
                    e[d] = f > d ? '<span class="ui_sp_icon_stepguide ui_sp_icon_stepguide_ok"></span>' : '<span class="ui_sp_icon_stepguide ui_sp_icon_stepguide_no"></span>';
                $("#cw_stepguide_contact").html(e.join(" "));
                f = [];
                for (d = 0; d < 4; d++)
                    f[d] = h > d ? '<span class="ui_sp_icon_stepguide ui_sp_icon_stepguide_ok"></span>' : '<span class="ui_sp_icon_stepguide ui_sp_icon_stepguide_no"></span>';
                $("#cw_stepguide_group").html(f.join(" "));
                a.total_progress_per = parseInt(b / 10 * 100, 10);
                $("#cw_stepguide_total_progress").html(a.total_progress_per.toString() + 
                "%");
                $("#cw_stepguide_progressbar").progressbar({value: a.total_progress_per + 1});
                b < 10 ? ($("#cw_stepguide_get").hasClass("ui_stepguide_complete") && $("#cw_stepguide_get").removeClass("ui_stepguide_complete"), $("#cw_stepguide_get").hasClass("ui_stepguide_incomplete") || $("#cw_stepguide_get").addClass("ui_stepguide_incomplete")) : ($("#cw_stepguide_get").hasClass("ui_stepguide_incomplete") && $("#cw_stepguide_get").removeClass("ui_stepguide_incomplete"), $("#cw_stepguide_get").hasClass("ui_stepguide_complete") || 
                $("#cw_stepguide_get").addClass("ui_stepguide_complete"))
            } else
                a.total_progress_per = parseInt(b / 10 * 100, 10), $("#cw_stepguide_progressbar_mini").progressbar({value: a.total_progress_per + 1})
        }
    };
    a.toggleStepGuide = function() {
        j ? (j = 0, $("#cw_stepguide").fadeOut(), outerLayout.hide("south"), setTimeout(function() {
            outerLayout.sizePane("south", 30);
            outerLayout.show("south");
            CW.view.resizeLayout();
            $("#cw_stepguide_open").fadeIn();
            a.refreshStepGuide()
        }, 300)) : (j = 1, $("#cw_stepguide_open").hide(), outerLayout.hide("south"), 
        setTimeout(function() {
            $("#cw_stepguide").fadeIn();
            outerLayout.sizePane("south", 118);
            outerLayout.show("south");
            CW.view.resizeLayout();
            a.refreshStepGuide()
        }, 300));
        if (ST.data.show_stepguide != j)
            ST.data.show_stepguide = j, CW.post("gateway.php", {cmd: "send_chat_setting",data: {show_stepguide: j}})
    };
    a.refreshSoundStatus = function(b) {
        b && CW.post("gateway.php", {cmd: "send_chat_setting",data: {popup_sound: a.model.data.popup_sound}});
        a.model.data.popup_sound == "1" ? ($("#cw_sound_icon").removeClass("ui_sp_icon_footer_sound_off").addClass("ui_sp_icon_footer_sound_on").css("visibility", 
        "visible"), $("#cw_sound").prop("title", L.menu_sound + "(" + L.menu_current + "ON)")) : ($("#cw_sound_icon").removeClass("ui_sp_icon_footer_sound_on").addClass("ui_sp_icon_footer_sound_off").css("visibility", "visible"), $("#cw_sound").prop("title", L.menu_sound + "(" + L.menu_current + "OFF)"))
    };
    a.refreshSocialConnectStatus = function(b) {
        b.length && $("#cw_setting_tab_social_tab").show();
        $(".cw_social_connect").show();
        $(".cw_social_connected").hide().parent("li").removeClass("ui_social_connected");
        $("#cw_search_contact_from_third_party_service button").unbind("click").click(function() {
            var b = 
            this.id.substr(23);
            b == "google" ? a.openGoogleContactsWindow() : a.model.openSocialConnectWindow(b, "social_contact")
        });
        for (var d = 0; d < b.length; d++) {
            var e = b[d].provider.toLowerCase();
            $("#cw_social_connect_" + e).hide();
            $("#cw_social_disconnect_" + e).show();
            $("#cw_social_connected_" + e).show().parent("li").addClass("ui_social_connected");
            var f = $("#cw_social_connected_" + e + " .cw_social_display_name");
            f.text("(" + b[d].display_name + ")");
            f.attr("title", b[d].display_name);
            var h = $("#cw_social_connected_" + e + " .cw_social_display_over");
            a.adjustDisplayNameWidth(f, h);
            e != "google" && $("#cw_search_contact_from_" + e).unbind("click").click(function() {
                var a = this.id.substr(23);
                AC.searchSocialContactList(a)
            })
        }
    };
    a.adjustDisplayNameWidth = function(a, b) {
        a.width("auto");
        a.width() > 123 ? (b.text("...)").show(), a.width(123 - b.width())) : b.hide()
    };
    a.openSocialConnectWindow = function(a, b) {
        var a = a.substr(0, 1).toUpperCase() + a.toLowerCase().substr(1), d = "";
        b && (d = "&type=" + b);
        wobj = window.open(ACCOUNT_SERVER_PATH + "/connect_social.php?provider=" + a + d, "sc", "width=600, height=400");
        wobj || (CW.alert(L.turn_off_popup_blocker), b == "social_contact" && $("#cw_contact_search_loading").hide())
    };
    a.openGoogleContactsWindow = function() {
        (wobj = window.open(CHATWORK_HOME + "/google_contacts.html", "gc", "width=800, height=600")) || CW.alert(L.turn_off_popup_blocker)
    }
}
function FileView(b) {
    var a = this;
    a.model = b;
    a.prepare = function() {
        $C("document").on("click", ".cw_file_delete", function() {
            var b = $(this).parents(".cw_file")[0].className.match(/cw_f([0-9]+)/)[1];
            CW.confirm(L.file_confirm_delete.replace(/%%file_name%%/, FL.file_id2file_dat[b].fn), function() {
                a.model.deleteFile(b)
            })
        }).on("click", "._fileEdit", function() {
            $("#_fileEditDialog").dialog({width: 400,height: 130,autoOpen: !1,hide: "fade",modal: !0});
            var b = $(this).parents(".cw_file")[0].className.match(/cw_f([0-9]+)/)[1], 
            e = a.model.file_id2file_dat[b];
            if (e == void 0)
                return CW.alert(L.file_not_found), !1;
            var f = $("#_fileEditFile");
            f.val(e.fn);
            $("#_fileEditDialog").dialog({title: L.file_edit_title,buttons: [{text: L.button_save_long,click: function() {
                            var e = [], i = f.val();
                            i || e.push(L.file_error_empty);
                            a.model.isExecutableExtension(i) && e.push(L.error_upload_executable);
                            a.model.containIllegalChar(i) && e.push(L.error_illegal_filename);
                            e.length ? CW.alert(e.join("\n")) : ($(this).dialog("close"), a.model.editFile(b, i))
                        }}, DIALOG_CANCEL_BUTTON],
                close: function() {
                    f.val("")
                }}).dialog("open")
        }).on("click", ".cw_file_preview_img", function() {
            var a = $(this).parent().parent(), b = $(this)[0].src + "&full=1", e = a.find(".cw_filename").text(), a = a.find("a")[0].href;
            $("#cw_file_preview_dialog").html('<div id="dev_file_preview_dialog_menu"><a href="' + b + '" target="_blank" style="padding-right:5px;">' + L.file_preview_open_newwindow + '</a> <a href="' + a + '">' + L.file_preview_download + '</a></div><div id="cw_file_preview_dialog_body"><div id="cw_file_preview_loading" style="padding:15px;"><img src="./image/ajax-loader-green.gif" class="ico_loading"/>' + 
            L.file_loading + '</div><img id="cw_file_preview_image" style="visibility:hidden" src="' + b + '"/></div><div id="cw_file_preview_original" style="padding-top:2px;text-align:center;display:none">' + L.file_preview_original + "</div>");
            $("#cw_file_preview_dialog").dialog({title: e}).dialog("open")
        }).on("click", ".cw_table_file_jump", function() {
            b.dialog("close")
        });
        $("#cw_file_preview_dialog").dialog({width: 600,height: 400,autoOpen: !1,modal: !0,hide: "fade",open: function() {
                var a = $("#cw_file_preview_image");
                a.load(function() {
                    $("#cw_file_preview_loading").hide();
                    var b = a.width(), e = a.height(), f = b, j = !1;
                    b > 500 && (e *= 500 / f, f = 500, j = !0);
                    e > 300 && (f *= 300 / e, e = 300, j = !0);
                    j ? (f = round(f), e = round(e), a.css({width: f,height: e,border: "2px solid #6699ff",cursor: "pointer",visibility: "visible"}), a.click(function() {
                        a.css({width: "",height: "",border: "",cursor: "default"});
                        $("#cw_file_preview_original").hide()
                    }), $("#cw_file_preview_original").show()) : (a.css({border: "",cursor: "default",visibility: "visible"}), $("#cw_file_preview_original").hide())
                })
            }});
        $C("#cw_my_allfile_dialog").dialog({title: L.menu_file,
            width: 820,minWidth: 820,height: 500,autoOpen: !1,resizable: !0,modal: !0,hide: "fade",open: function() {
                FL.buildAllMyFile();
                b.trigger("resize")
            },resize: function() {
                b.trigger("resize")
            },close: function() {
                e.removeClass("ui_button_selected")
            }});
        var b = $C("#cw_my_allfile_dialog"), e = $("#cw_my_allfile_button");
        e.click(function() {
            b.dialog("open");
            e.addClass("ui_button_selected")
        });
        b.bind("resize", function() {
            var a = $C("#cw_my_allfile_dialog").width() - 820;
            a > 0 ? $(".cw_table_file").width(270 + a) : $(".cw_table_file").width(270);
            var a = b.innerHeight(), e = b.find(".ui_table_filter").outerHeight() + b.find(".cw_table_header").outerHeight();
            b.find(".cw_table_body").height(a - e)
        });
        $C("document").on("click", "#cw_my_allfile_footer_add_storage", function() {
            b.dialog("close");
            CW.view.showOptionPlanPrice();
            return !1
        })
    };
    a.validateFile = function(a, b) {
        var d = 0, i = "", n = "";
        a.files ? (d = a.files[0], i = d.name, d = d.size) : i = a.value.replace(/\\/g, "/").replace(/.*\//, "");
        (i = i.match(/\.([^\.]+)$/)) && (n = i[1].toLowerCase());
        if (b.maxsize && d >= b.maxsize)
            return CW.alert(L.error_upload_over_max_filesize.replace(/%%max_size%%/g, 
            bytename(b.maxsize)).replace(/%%size%%/g, bytename(d))), $(a).val(""), !1;
        if (b.onlyimage && !in_array(n, ["jpg", "png", "gif", "jpeg"]))
            return CW.alert(L.error_upload_image), $(a).val(""), !1;
        return !0
    };
    a.buildByFileId = function(b) {
        file_id_list = typeof b != "object" ? [b] : b;
        for (var e = b = !1, d = 0, i = file_id_list.length; d < i; d++) {
            var n = FL.file_id2file_dat[file_id_list[d]];
            RM && RM.id == n.rid && (b = !0);
            n.aid == AC.myid && (e = !0)
        }
        b && RM.filelist.build();
        e && a.model.buildAllMyFile()
    };
    a.buildAllMyFile = function() {
        if (!a.model.myfile_load_flag.loaded)
            return $("#cw_my_allfile_body").html('<tr><td colspan="5">' + 
            L.file_loading + "</td></tr>"), FL.loadAllMyFile(), !1;
        var b = a.model.getMyFileList();
        FL.sortFileList(b);
        $("#cw_my_allfile_body").html(FL.getFileListRows(b))
    };
    a.getFileListRows = function(a) {
        for (var b = [], d = 0; d < a.length; d++)
            (tmp_html = CW.getFilePanel(a[d], {type: "filetable"})) && (b[d] = tmp_html);
        return b.length > 0 ? b.join("") : '<tr><td colspan="5">' + L.file_nothing + "</td></tr>"
    };
    a.updateStorageInfo = function(a, b, d, i) {
        var n = Math.floor(a.total / b * 100);
        n >= 100 ? i != void 0 ? ($C("#cw_notify_storage").addClass("cw_notify_storage_limit").html(L.storage_limit_warning_message).show(), 
        $("#cw_storage_limit_footer").hide(), $C("#cw_notify_storage").click(function() {
            CW.setLimitDialog(L.storage_limit_warning_body);
            var a = L.storage_limit_warning_title, b = $("#cw_storage_limit_dialog");
            b.dialog({title: a});
            b.dialog("open")
        })) : ($C("#cw_notify_storage").addClass("cw_notify_storage_notice").html(L.storage_limit_notice_message).show(), i = L.storage_limit_notice_footer, i = i.replace(/%%date%%/, CW.getDate(d, ST.data.dateformat)), $("#cw_storage_limit_footer").html(i).show(), $C("#cw_notify_storage").click(function() {
            CW.setLimitDialog(L.storage_limit_notice_body);
            var a = L.storage_limit_notice_title, b = $("#cw_storage_limit_dialog");
            b.dialog({title: a});
            b.dialog("open")
        })) : $C("#cw_notify_storage").hide();
        n >= 90 ? ($C("#cw_file_notice").html('<span class="cw_notice_text">!</span>').show(), d = "ui_notice_storage") : ($C("#cw_file_notice").hide(), d = "");
        if (b != void 0) {
            n = bytename(b, "B", 1);
            i = "";
            unim = ["", "K", "M", "G", "T", "P"];
            for (var h in unim)
                n.indexOf(unim[h]) != -1 && (i = unim[h]);
            h = "";
            a.total != void 0 && (h = bytename(a.total, "B", 2, i));
            var j = 0, g = 0, i = "";
            a.file != void 0 && (g = Math.round(a.file / 
            b * 100), j += g, i = bytename(a.file));
            var k = 0, q = "";
            a.chat != void 0 && (k = Math.round(a.chat / b * 100), j += k, q = bytename(a.chat));
            var v = 0, l = "", m = "display:none;";
            a.other != void 0 && (v = Math.round(a.other / b * 100), j += v, l = bytename(a.other), m = "");
            j > 100 && (k = Math.round(k / j * 100), g = Math.round(g / j * 100), v = Math.round(v / j * 100), j = k + g + v);
            var p = parseInt(a.file, 10) + parseInt(a.chat, 10) + parseInt(a.other, 10), p = Math.floor(p / parseInt(b, 10) * 100);
            if (p >= 100 && j != 100 && p > j)
                switch (p = [k, g, v], ["chat", "file", "other"][p.indexOf(Math.max.apply(null, 
                p))]) {
                    case "chat":
                        k++;
                        break;
                    case "file":
                        g++;
                        break;
                    case "other":
                        v++
                }
            p = "";
            k || (p = "border-right:0;");
            var o = "";
            g || (o = "border-right:0;");
            var x = "";
            v || (x = "border-right:0;");
            j >= 100 && (v != 0 ? x = "border-right:0;" : g != 0 ? o = "border-right:0;" : k != 0 && (p = "border-right:0;"));
            p += "width:" + k + "%;";
            o += "width:" + g + "%;";
            x += "width:" + v + "%;";
            j = "";
            a.total != void 0 && b != void 0 && (j = Math.floor(a.total / b * 100));
            a = "";
            CW.is_business && !CW.is_admin && (a = "display:none;");
            b = "display:none;";
            CW.is_admin_user && (b = "");
            a = '  <div class="ui_footer_content_left">   <div class="top clearfix">    <div class="ui_footer_left_box">     <p>' + 
            L.storage_activity_ratio_label + ':</p>    </div>    <div class="ui_footer_center_box">     <div id="cw_storage_usage_area" class="ui_storage_usage_area clearfix">      <div id="cw_storage_usage_area_chat" class="bar ui_storage_usage_area_chat" style="' + p + '"></div>      <div id="cw_storage_usage_area_file" class="bar ui_storage_usage_area_file" style="' + o + '"></div>      <div id="cw_storage_usage_area_other" class="bar ui_storage_usage_area_other" style="' + x + '"></div>     </div>    </div>    <div class="ui_footer_right_box">     <p><span id="cw_my_current_storage_total">' + 
            h + '</span> / <span id="cw_my_limit_storage">' + n + '</span> (<span id="cw_my_activity_ratio_storage_text" class="' + d + '"><span id="cw_my_activity_ratio_storage">' + j + "</span>% " + L.storage_used + '</span>)</p>    </div>   </div>   <div class="bottom">    <ul>     <li id="cw_my_allfile_storage_message">      <div class="ui_storage_legend ui_storage_usage_area_chat"></div>     ' + L.message + ': <span id="cw_my_current_storage_message">' + q + '</span>     </li>     <li id="cw_my_allfile_storage_file">      <div class="ui_storage_legend ui_storage_usage_area_file"></div>      ' + 
            L.file + ': <span id="cw_my_current_storage_file">' + i + '</span>     </li>     <li id="cw_my_allfile_storage_other" style="' + m + '">      <div class="ui_storage_legend ui_storage_usage_area_other"></div>      ' + L.storage_other_user + ': <span id="cw_my_current_storage_other">' + l + '</span> <span id="cw_admin_user_list_link" class="ui_admin_user_list_link" style="' + b + '">(<a href="' + ACCOUNT_SERVER_PATH + '/user_list.php" target="_blank">' + L.storage_show_all_user + '</a>)</span>     </li>    </ul>   </div>  </div>  <div id="cw_my_allfile_footer_content_right" class="ui_footer_content_right">   <p><a id="cw_my_allfile_footer_add_storage" style="' + 
            a + '">' + L.storage_add_link + "</a></p>  </div>";
            $("#cw_my_allfile_footer_content").length || $C("#cw_my_allfile_dialog").after('<div id="cw_my_allfile_footer_content" class="ui_footer_content content clearfix"></div>');
            $("#cw_my_allfile_footer_content").html(a)
        }
    }
}
function TaskView(b) {
    var a = this;
    a.model = b;
    a.alltask_status = "open";
    a.alltask_type = "my";
    a.prepare = function() {
        $("#cw_my_alltask").click(function() {
            CW.view.outboxStop = !0
        });
        $("#cw_task_edit_dialog").dialog({width: 480,height: 250,autoOpen: !1,hide: "fade",modal: !0});
        $C("document").on("click", ".cw_task_edit", function() {
            var b = $(this).parents(".cw_task")[0].className.match(/ cw_t([0-9]+)/)[1], e = $("#cw_task_edit_task"), f = $("#cw_task_edit_task_limit"), h = a.model.task_id2task_dat[b];
            if (h == void 0)
                return CW.alert(L.task_not_found), 
                !1;
            e.val(h.tn);
            h.lt && f.val(CW.getDate(h.lt, ST.data.dateformat));
            var j = $("#cw_task_edit_incharge");
            j.empty();
            for (var g = RL.rooms[h.rid].getSortedMemberList(), k = 0; k < g.length; k++) {
                var q = g[k];
                j.append('<option value="' + q + '">' + CW.getFullName(q) + "</option>")
            }
            j.val(h.aid);
            $("#cw_task_edit_dialog").dialog({title: L.task_edit_title,buttons: [{text: L.button_save_long,click: function() {
                            var a = [], g = e.val();
                            g || a.push(L.task_error_empty);
                            a.length ? CW.alert(a.join("\n")) : (a = f.val(), $(this).dialog("close"), CS.editTask(b, 
                            j.val(), g, a, function() {
                                e.val("");
                                f.val("")
                            }))
                        }}, DIALOG_CANCEL_BUTTON],close: function() {
                    e.val("");
                    f.val("")
                }}).dialog("open")
        }).on("click", ".cw_task_delete", function() {
            var b = $(this).parents(".cw_task")[0].className.match(/cw_t([0-9]+)/)[1];
            CW.confirm(L.task_confirm_delete, function() {
                a.model.deleteTask(b)
            })
        }).on("click", ".cw_check_task", function() {
            if (!CW.isLogin())
                return CW.alert(L.error_no_login_action), !1;
            var b = this.checked ? 1 : 0, e = $(this).parents(".cw_task"), f = e[0].className.match(/ cw_t([0-9]+)/)[1];
            e[0].tagName == "TR" ? (e.children().fadeOut(500), setTimeout(function() {
                a.model.checkTask(f, b)
            }, 500)) : e.fadeOut(500, function() {
                a.model.checkTask(f, b)
            })
        });
        var b = $("#cw_my_alltask_dialog"), e = $("#cw_my_alltask_button");
        b.dialog({title: L.menu_mytask,width: 820,minWidth: 820,height: 500,autoOpen: !1,resizable: !0,modal: !0,hide: "fade",open: function() {
                TK.buildAllMyTask();
                b.trigger("resize")
            },resize: function() {
                b.trigger("resize")
            },close: function() {
                e.removeClass("ui_button_selected")
            }});
        b.bind("resize", function() {
            var a = 
            b.width() - 820;
            a > 0 ? $(".cw_table_task").width(270 + a) : $(".cw_table_task").width(270);
            var a = b.innerHeight(), e = b.find(".ui_table_filter").outerHeight() + b.find(".cw_table_header").outerHeight();
            b.find(".cw_table_body").height(a - e)
        });
        e.click(function() {
            b.dialog("open");
            e.addClass("ui_button_selected")
        });
        $(".dev_my_alltask_link").click(function() {
            var b = "my", e = "open";
            this.id.indexOf("assign") != -1 && (b = "assign");
            this.id.indexOf("done") != -1 && (e = "done");
            var f = $(this);
            if (a.alltask_type != b || a.alltask_status != e)
                $(".dev_my_alltask_link").removeClass("selected"), 
                f.addClass("selected"), f = "", f = b == "assign" ? L.task_incharge : L.task_client, $("#cw_my_alltask_assign").text(f), a.alltask_type = b, a.alltask_status = e, a.model.buildAllMyTask()
        });
        $C("document").on("click", ".cw_table_task_jump", function() {
            b.dialog("close")
        })
    };
    a.buildByTaskId = function(b, e) {
        task_id_list = typeof b != "object" ? [b] : b;
        e == void 0 && (e = !1);
        for (var d = !1, i = !1, n = {}, h = 0, j = task_id_list.length; h < j; h++) {
            var g = TK.task_id2task_dat[task_id_list[h]];
            n[g.rid] = !0;
            RM && RM.id == g.rid && (d = !0);
            if (g.aid == AC.myid || g.bid == AC.myid)
                i = 
                !0
        }
        if (e) {
            for (var k in n)
                RL.rooms[k].refreshTaskNum();
            RL.build()
        }
        d && RM.tasklist.build();
        i && a.model.buildAllMyTask()
    };
    a.buildAllMyTask = function(b, e) {
        if (b == void 0)
            b = a.alltask_status;
        if (e == void 0)
            e = a.alltask_type;
        var d = b + e, i = a.model.getMyTaskList(b, e);
        if (!a.model.mytask_load_flag.loaded[d])
            return $("#cw_my_alltask_body").html('<tr><td colspan="5">' + L.task_loading + "</td></tr>"), a.model.mytask_load_flag.loading[d] || (a.model.mytask_load_flag.loading[d] = !0, CW.get("gateway.php", {cmd: "load_my_task",itid: i,
                type: e,status: b}, function(b) {
                if (b.task_dat) {
                    for (var e in b.task_dat)
                        a.model.setTask(b.task_dat[e]);
                    a.model.mytask_load_flag.loading[d] = !1;
                    a.model.mytask_load_flag.loaded[d] = time();
                    a.model.buildAllMyTask()
                }
            })), !1;
        TK.sortTaskList(i);
        $("#cw_my_alltask_body").html(TK.getTaskListRows(i, e))
    };
    a.getTaskListRows = function(a, b) {
        for (var d = [], i = 0; i < a.length; i++)
            d[i] = CW.getTaskPanel(a[i], {type: "tasktable",tabletype: b});
        return d.length > 0 ? d.join("") : '<tr><td colspan="5">' + L.task_nothing + "</td></tr>"
    }
}
function RoomListView(b) {
    var a = this;
    a.model = b;
    a.last_sumnum_key = "";
    a.room_show_limit = 80;
    a.prepare = function() {
        $C("#cw_subinfo").tabs({select: function() {
                $C("#cw_all").click()
            }});
        $("#cw_subinfo_tab_tasklist").click(function() {
            $C("#cw_subinfo").tabs("select", 0)
        });
        $("#cw_subinfo_tab_filelist").click(function() {
            $C("#cw_subinfo").tabs("select", 1)
        });
        $("#cw_room_show_mytask").change(function() {
            RM.tasklist.build()
        });
        $C("document").on("click", ".cw_room_link", function() {
            var a = this.tagName.toLowerCase() == "a" ? 
            $(this).prop("href").match(/#(?:!|%21)rid(\d+)(?:-(\d+))?$/) : this.id.match(/cw_r(\d+)/), b = a[1], f = 0;
            a[2] && (f = a[2]);
            RL.selectRoom(b, f)
        });
        $C("#cw_roomlist_items").on("mouseover", ".dev_room", function() {
            $(this).addClass("dev_room_hover")
        }).on("mouseout", ".dev_room", function() {
            $(this).removeClass("dev_room_hover")
        }).on("click", "#cw_room_more", function() {
            a.room_show_limit += 80;
            a.model.build()
        });
        $("#cw_chatlist").click(function() {
            var a = $("#cw_only_unread_room");
            a.hasClass("ui_title_button_active") && (a.removeClass("ui_title_button_active"), 
            RL.setReadOnly(!1));
            RL.selectCategory("all");
            $C("#cw_roomlist_items_area").scrollTop(0)
        }).mousedown(function() {
            return !1
        });
        $("#cw_only_unread_room").click(function() {
            var a = $(this);
            a.hasClass("ui_title_button_active") ? (a.removeClass("ui_title_button_active"), RL.setReadOnly(!1)) : (RL.setReadOnly(!0), a.addClass("ui_title_button_active"));
            b.val("").blur().trigger("update")
        }).mousedown(function() {
            return !1
        }).hover(function() {
            var a = $(this);
            a.hasClass("ui_title_button_active") || a.addClass("ui_title_button_hover")
        }, 
        function() {
            $(this).removeClass("ui_title_button_hover")
        });
        $("#cw_roomcategory").click(function() {
            CW.view.unsetOutbox();
            var a = $("#cw_roomcategory_detail"), b = $(this).offset();
            a.css({top: b.top + 20 + "px",left: b.left + "px"});
            a.show();
            CW.view.setOutbox(a, function() {
                a.fadeOut("fast")
            }, !1);
            CW.view.outboxStop = !0
        }).mousedown(function() {
            return !1
        });
        var b = $("#cw_roomfilter");
        b.bind("update", function() {
            var e = b.val().toLowerCase();
            e != a.model.filter_word && a.model.clearFocusRoom();
            a.model.filter_word = !b.hasClass("ui_icsearch_blank") && 
            e != "" ? e : "";
            a.model.build()
        });
        (function() {
            $("#cw_roomcategory_detail").on("click", ".ui_roomcategory_list li", function() {
                if (this.id) {
                    var b = this.id.substr(6);
                    b == "newcat" ? ($("#cw_newcat_dialog").dialog({title: L.chat_category_create,buttons: [{text: L.button_create_long,click: function() {
                                    var b = [], e = $("#cw_category_name").val();
                                    e || b.push("\u30ab\u30c6\u30b4\u30ea\u540d\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093");
                                    var f = [], h;
                                    for (h in d)
                                        d[h] && f.push(h);
                                    f.length || b.push("\u30c1\u30e3\u30c3\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093");
                                    b.length ? CW.alert(b.join("\n")) : ($(this).dialog("close"), CW.postSync("gateway.php", {cmd: "add_category",name: e,r: f}, function(b) {
                                        for (var d in b.cat_dat)
                                            a.model.category_dat[d] = b.cat_dat[d];
                                        a.model.buildCategory();
                                        a.model.selectCategory(d)
                                    }))
                                }}, DIALOG_CANCEL_BUTTON]}), $("#cw_newcat_dialog").dialog("open")) : b && a.model.selectCategory(b)
                }
            });
            $("#cw_roomcategory_detail").on("mouseover", ".ui_roomcategory_list li.item", function() {
                var a = $(this);
                a.css("background-color", "#B5DCE8");
                a.find("span.action").show()
            }).on("mouseout", 
            ".ui_roomcategory_list li.item", function() {
                var a = $(this);
                a.css("background-color", "");
                a.find("span.action").hide()
            });
            var b = [], d = {}, f = [];
            $("#cw_newcat_roomfilter").bind("update", function() {
                var a = $(this);
                b = !a.hasClass("ui_icsearch_blank") && a.val() != "" ? a.val().toLowerCase() : "";
                var a = RL.getSortedRoomList("name"), j = $("#cw_newcat_roomlist");
                f = [];
                for (var g = 0, k = [], n = 0, v = a.length; n < v; n++) {
                    var l = RL.rooms[a[n]], m = l.getName();
                    b && m.toLowerCase().indexOf(b) == -1 || (f.push(l.id), m = "", d[l.id] && (m = ' checked="checked"'), 
                    k[g++] = '<tr class="cw_newcat_room"><td class="check"><input id="cw_newcat_check_' + l.id + '" class="cw_newcat_check" type="checkbox" ' + m + ' value="' + l.id + '"></td><td class="cw_newcat_room_name"><span class="ui_room_icon">' + l.getIcon() + "</span>" + CW.getRoomName(l.id) + "</td></tr>")
                }
                k[g++] = "";
                j.html(k.join(""))
            });
            var n = function(a, b) {
                d[a] = b;
                if ($("#cw_newcat_check_" + a)[0].checked != b)
                    $("#cw_newcat_check_" + a)[0].checked = b;
                var e = 0, f;
                for (f in d)
                    d[f] && e++;
                e ? $("#cw_newcat_select_num").html(e + L.multiselect_label) : 
                $("#cw_newcat_select_num").empty()
            };
            $("#cw_newcat_roomlist").on("click", ".cw_newcat_room_name", function() {
                var a = $(this).parent().find(".cw_newcat_check");
                n(a.val(), !a[0].checked)
            }).on("click", ".cw_newcat_check", function() {
                var a = $(this);
                n(a.val(), a[0].checked)
            });
            $("#cw_newcat_check_all").click(function() {
                for (var a = 0, b = f.length; a < b; a++)
                    n(f[a], !0)
            });
            $("#cw_newcat_uncheck_all").click(function() {
                for (var a = 0, b = f.length; a < b; a++)
                    n(f[a], !1)
            });
            $("#cw_roomcategory_user_list").on("click", ".cw_rc_edit", function() {
                var b = 
                this.className.match(/cw_rc([0-9]+)/)[1], e = a.model.category_dat[b].name;
                $("#cw_newcat_dialog").dialog({title: L.chat_category_edit + ": " + escape_html(e),buttons: [{text: L.button_save_long,click: function() {
                                var e = [], f = $("#cw_category_name").val();
                                f || e.push(L.chat_category_error_no_name);
                                var g = [], i;
                                for (i in d)
                                    d[i] && g.push(i);
                                g.length || e.push(L.chat_category_error_no_chats);
                                e.length ? CW.alert(e.join("\n")) : ($(this).dialog("close"), CW.postSync("gateway.php", {cmd: "edit_category",name: f,r: g,cat_id: b}, function(b) {
                                    for (var d in b.cat_dat)
                                        a.model.category_dat[d] = 
                                        b.cat_dat[d];
                                    a.model.buildCategory();
                                    a.model.selectCategory(d)
                                }))
                            }}, DIALOG_CANCEL_BUTTON]});
                $("#cw_newcat_dialog").dialog("open");
                $("#cw_category_name").val(e);
                for (var e = a.model.category_dat[b].list, f = 0; f < e.length; f++)
                    n(e[f], !0);
                CW.view.outboxStop = !0
            }).on("click", ".cw_rc_delete", function() {
                var b = this.className.match(/cw_rc([0-9]+)/)[1], d = $("#cw_rc_" + b + " span.title").text();
                CW.confirm(L.chat_category_confirm_delete.replace(/%%category_name%%/, d), function() {
                    CW.postSync("gateway.php", {cmd: "delete_category",
                        cat_id: b}, function() {
                        a.model.category_dat[b] != void 0 && delete a.model.category_dat[b];
                        a.model.buildCategory()
                    })
                })
            });
            $("#cw_newcat_dialog").dialog({width: 480,autoOpen: !1,resizable: !1,modal: !0,hide: "fade",open: function() {
                    $("#cw_category_name").val("");
                    $("#cw_newcat_select_num").empty();
                    $("#cw_newcat_roomfilter").val("").blur().trigger("update");
                    CW.view.unsetOutbox()
                },close: function() {
                    b = [];
                    d = {};
                    f = []
                }})
        })();
        CW.view.registerKeyboardShortcut(70, !1, !1, !1, !1, function() {
            $("#cw_roomfilter").focus()
        });
        (function() {
            var b = 
            function() {
                var a = RL.getFocusedRoomId();
                a != 0 && $.inArray(a.toString(), RL.filtered_room_list) == -1 && (a = 0);
                return a
            }, d = function(b) {
                b == 0 ? a.model.focusRoom(a.model.filtered_room_list[0]) : (b = $.inArray(b.toString(), a.model.filtered_room_list), b > 0 ? a.model.focusRoom(a.model.filtered_room_list[b - 1]) : a.model.focusRoom(a.model.filtered_room_list[0]))
            }, f = function(b) {
                if (b == 0)
                    a.model.focusRoom(a.model.filtered_room_list[0]);
                else {
                    var d = a.model.filtered_room_list.length, b = $.inArray(b.toString(), a.model.filtered_room_list);
                    b + 1 == d ? a.model.focusRoom(a.model.filtered_room_list[b]) : a.model.focusRoom(a.model.filtered_room_list[b + 1])
                }
            };
            CW.view.registerKeyboardShortcut(75, !1, !1, !1, !1, function() {
                d(b())
            });
            CW.view.registerKeyboardShortcut(38, !1, !1, !1, !1, function() {
                d(b())
            });
            CW.view.registerKeyboardShortcut(40, !1, !1, !1, !1, function() {
                f(b())
            });
            CW.view.registerKeyboardShortcut(74, !1, !1, !1, !1, function() {
                f(b())
            });
            CW.view.registerKeyboardShortcut(79, !1, !1, !1, !1, function() {
                a.model.selectRoom(b())
            });
            CW.view.registerKeyboardShortcut(13, 
            !1, !1, !1, !1, function() {
                a.model.selectRoom(b())
            });
            $("#cw_roomfilter").keydown(function(n) {
                press_key = n.keyCode;
                n = b();
                press_key == 38 ? d(n) : press_key == 40 ? f(n) : press_key == 27 ? (a.model.clearFocusRoom(), $("#cw_roomfilter").blur()) : press_key == 13 && n > 0 && ($("#cw_roomfilter").blur(), a.model.selectRoom(n))
            }).blur(function() {
                a.model.clearFocusRoom()
            })
        })();
        $C("#cw_roomlist_items").on("click", ".dev_room_pin", function() {
            var b = $(this).parents(".dev_room")[0].id.substr(4), d = $(this).find("span"), f = d.hasClass("dev_sp_icon_pin_off");
            (a.model.rooms[b].sticky = f) ? (d.removeClass("dev_sp_icon_pin_off"), d.addClass("dev_sp_icon_pin_on"), f = 1) : (d.addClass("dev_sp_icon_pin_off"), d.removeClass("dev_sp_icon_pin_on"), f = 0);
            CW.post("gateway.php", {cmd: "stick_room",room_id: b,stick: f}, function() {
                a.model.rooms[b].sticky = f
            });
            a.model.build();
            return !1
        }).on("mouseover", ".dev_room_pin", function() {
            var a = $(this).find("span");
            a.hasClass("dev_sp_icon_pin_on") || a.addClass("dev_sp_icon_pin_hover")
        }).on("mouseout", ".dev_room_pin", function() {
            $(this).find("span").removeClass("dev_sp_icon_pin_hover")
        });
        $("#cw_room_request_area").click(function() {
            RM.view.showRequestDialog(RM.id)
        });
        $("#cw_room_request_list").on("click", ".cw_room_request_accept", function() {
            var a = this.className.match(/cw_room_request_a([0-9]+)/)[1], b = $(this).parents(".cw_room_request_row"), f = b.find("select");
            b.find("button").button("disable");
            f.prop("disabled", !0);
            var n = f.val();
            CW.post("gateway.php", {cmd: "accept_join_room",rid: RM.id,aid: a,role: n}, function(a) {
                a.error ? (a.message != void 0 && CW.alert(a.message), b.find("button").button("enable"), 
                f.prop("disabled", !1)) : (b.fadeOut(), CW.watch())
            })
        }).on("click", ".cw_room_request_reject", function() {
            var a = this.className.match(/cw_room_request_a([0-9]+)/)[1], b = $(this).parents(".cw_room_request_row"), f = b.find("select");
            b.find("button").button("disable");
            f.prop("disabled", !0);
            CW.post("gateway.php", {cmd: "reject_join_room",rid: RM.id,aid: a}, function(a) {
                a.error && a.message != void 0 && CW.alert(a.message);
                b.fadeOut();
                CW.watch()
            })
        })
    };
    a.deleteRoom = function() {
        RM || CS.initChatText();
        SERVICE_PLAN == "free" && ST.view.refreshStepGuide()
    };
    a.scrollToRoom = function(a, b) {
        var d = $("#cw_r" + a);
        if (d.length > 0) {
            var i = $C("#cw_roomlist_items_area"), n = parseInt(i.offset().top, 10), h = n + i.height(), j = parseInt(d.offset().top, 10), g = j + d.height();
            (j < n || g > h) && i.scrollTo(d, b)
        }
    };
    a.focusRoom = function(b) {
        $("#cw_roomlist_items .dev_room_focused").removeClass("dev_room_focused");
        RM.id != b && ($("#cw_r" + b).addClass("dev_room_focused"), a.scrollToRoom(b, 100))
    };
    a.clearFocusRoom = function() {
        $("#cw_roomlist_items .dev_room_focused").removeClass("dev_room_focused")
    };
    a.selectRoom = 
    function(b) {
        CW.view.closeFirstPage();
        CW.view.unsetOutbox();
        $(".dev_selected").removeClass("dev_selected");
        $("#cw_r" + b).addClass("dev_selected");
        a.scrollToRoom(b, 600);
        a.updateTitle(b)
    };
    a.selectCategory = function() {
        $("#cw_roomcategory_selected").text($("#cw_rc_" + a.model.filter_category + " span.title").text());
        a.model.build()
    };
    a.setReadOnly = function() {
        a.model.filter_readonly ? $("#cw_roomcategory_readonly").addClass("selected") : $("#cw_roomcategory_readonly").removeClass("selected");
        a.model.build()
    };
    a.build = 
    function(b) {
        a.model.prepareRM();
        var e = "", d = null, i = b.length, n = i;
        if (i) {
            if (i > a.room_show_limit)
                n = a.room_show_limit;
            for (var h = 0; h < n; h++)
                if (b[h] != void 0) {
                    var j = b[h], d = a.model.rooms[j], g = d.getUnreadNum(), k = 0;
                    g > 0 && (k = d.getMentionNum() + d.getHighlightNum());
                    var q = "dev_room", v = "", l = "";
                    RM && RM.id == j && (q += " dev_selected");
                    g > 0 && (v = k ? '<div id="cw_unread_r' + d.id + '" class="cw_mention"><span class="cw_num_text">' + g + " (" + k + ")</span></div>" : '<div id="cw_unread_r' + d.id + '" class="cw_unread"><span class="cw_num_text">' + g + "</span></div>");
                    d.mytask_num > 0 && (l = '<div class="dev_mytask"><span class="cw_num_text">' + d.mytask_num + "</span></div>");
                    j = "";
                    j = d.sticky ? "dev_sp_icon_pin_on" : "dev_sp_icon_pin_off";
                    g = "";
                    d["public"] && d.member_request.length > 0 && (g = '<div class="ui_request_notice">' + L.chatroom_member_requests_notice.replace("%%request_num%%", d.member_request.length) + "</div>");
                    var k = d.getAccountId(), m = "";
                    k && d.type == "contact" && (m = '<p class="ui_roomlist_orgtitle">' + CW.getOrgTitle(k) + "</p>");
                    e += '<div id="cw_r' + d.id + '" class="cw_room_link ' + 
                    q + '"><div class="ui_roomlist_view"><div class="ui_room_icon">' + d.getIcon("html", "normal") + '</div><div class="ui_room_title"><p>' + CW.getRoomName(d.id) + "</p>" + m + '</div><div class="ui_incomplete">' + v + l + '</div><div class="dev_room_pin"><span class="ui_sp_icon_pin ' + j + '"></span></div></div>' + g + "</div>"
                }
            b = !1;
            i > n && (e += '<div class="ui_room_limitover"><div>' + L.chat_rest_roomtip + (i - n) + '</div><div><button id="cw_room_more">' + L.chat_show_more + "</button></div></div>", b = !0);
            $C("#cw_roomlist_items").html(e);
            b && 
            $("#cw_room_more").button();
            e = RL.getFocusedRoomId();
            e > 0 && a.model.focusRoom(e)
        } else
            $C("#cw_roomlist_items").quickEmpty()
    };
    a.updateRoomData = function() {
        SERVICE_PLAN == "free" && ST.view.refreshStepGuide()
    };
    a.updateTitle = function(b) {
        if (MOBILE == "") {
            var e = "";
            if (a.model.unread_room_sum > 0)
                e = a.model.unread_room_sum, a.model.mention_room_sum > 0 && (e += "(" + a.model.mention_room_sum + ")"), e = "[" + e + "]";
            e += SERVICE_NAME;
            b && (e += " - " + RL.rooms[b].getName());
            document.title = e;
            ST.data.faviconstat ? (b = "", b = a.model.unread_room_sum == 
            0 ? "./image/favicon/favicon00.ico" : a.model.unread_room_sum < 10 ? "./image/favicon/favicon0" + a.model.unread_room_sum.toString() + ".ico" : "./image/favicon/favicon09+.ico", CW.view.changeFavicon(b)) : CW.view.changeFavicon("./image/favicon/favicon00.ico")
        }
    };
    a.updateSumNumbers = function() {
        var b = a.model.mytask_total + ":" + a.model.unread_room_sum + ":" + a.model.mention_room_sum + ":" + a.model.mytask_room_sum;
        if (a.last_sumnum_key != b)
            a.last_sumnum_key = b, a.model.mytask_total > 0 ? $C("#cw_total_mytask_num").html('<span class="cw_num_text">' + 
            a.model.mytask_total + "</span>").show() : $C("#cw_total_mytask_num").hide(), a.model.unread_room_sum > 0 ? (b = a.model.unread_room_sum, a.model.mention_room_sum > 0 && (b += "(" + a.model.mention_room_sum + ")"), $C("#cw_total_unread_room").text(b).show()) : $C("#cw_total_unread_room").text("0"), a.model.mytask_room_sum > 0 ? $C("#cw_total_mytask_room").text(a.model.mytask_room_sum).show() : $C("#cw_total_mytask_room").hide(), RM && a.updateTitle(RM.id)
    };
    a.buildCategory = function() {
        for (var b = 0, e = [], d = a.model.getSortedCategoryList(), 
        i = 0, n = d.length; i < n; i++) {
            var h = d[i];
            e[b++] = '<li id="cw_rc_' + h + '" class="item"><span class="title">' + escape_html(a.model.category_dat[h].name) + '</span><span class="action"><span class="cw_rc_edit cw_rc' + h + '">' + L.button_edit + '</span> <span class="cw_rc_delete cw_rc' + h + '">' + L.button_delete + "</span></span></li>"
        }
        $("#cw_roomcategory_user_list").html(e.join(""))
    };
    a.updateUnreadNum = function(b) {
        var e = a.model.rooms[b], d = e.getUnreadNum();
        d ? (e = e.getMentionNum()) ? $("#cw_unread_r" + b).text(d + " (" + e + ")") : $("#cw_unread_r" + 
        b).text(d) : $("#cw_unread_r" + b).hide()
    };
    a.showJoinPublicChatDialog = function(a) {
        var b = escape_html(a.public_description).replace(/(https?:\/\/[-_.!~*\'()a-zA-Z0-9;?:\@&=+\$,%#\{\}\[\]]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\{\}\[\]]+)/gi, '<a href="$1" target="_blank">$1</a>');
        $("#cw_joinpublicchat_description").html(b);
        var d = function() {
            $("#cw_joinpublicchat_dialog").dialog({title: L.joinpublicchat_title,position: "center",width: "auto",autoOpen: !0,resizable: !1,modal: !0,hide: "fade",buttons: [{text: L.joinpublicchat_join,
                        click: function() {
                            CW.post("gateway.php", {cmd: "join_public_room",rid: a.id}, function(b) {
                                if (b.error) {
                                    switch (b.error) {
                                        case "joined":
                                            RL.selectRoom(a.id);
                                            return;
                                        case "limited":
                                            CW.view.showLimitErrorDialog(b.title, b.message);
                                            return
                                    }
                                    b.message != void 0 && CW.alert(b.message)
                                } else
                                    b.do_request != void 0 ? CW.alert(L.joinpublicchat_request_sent) : RL.lazy_select = a.id
                            });
                            $(this).dialog("close")
                        }}, DIALOG_CANCEL_BUTTON],open: function() {
                    $("#cw_joinpublicchat_icon").html('<img class="ui_avatar ui_chatworkid_avatar" src="' + 
                    a.icon + '" />');
                    $("#cw_joinpublicchat_name").text(a.name);
                    a.join_need_accept == "1" ? $("#cw_joinpublicchat_need_accept").show() : $("#cw_joinpublicchat_need_accept").hide()
                }})
        };
        a.header ? ($("#cw_joinpublicchat_header").html('<img id="cw_joinpublicchat_header_image" src="' + S3_PATH + "/header/" + a.header + '" />'), $("#cw_joinpublicchat_header_image").bind("load", function() {
            d()
        })) : d()
    };
    a.updateMasterData = function() {
    }
}
function RoomView(b) {
    this.model = b;
    this.disabled_send = !1;
    this.expandto_height = 162
}
RoomView.prototype = {getIcon: function(b, a) {
        var f = this.model.getAccountId();
        b == void 0 && (b = "html");
        var e = this.model.icon_preset ? S3_PATH + "/icon/ico_" + this.model.icon + ".png" : S3_PATH + "/icon/" + this.model.icon;
        switch (b) {
            case "html":
                return f = f > 0 ? CW.getAvatarPanel(f, {clicktip: !1,hovertip: !1,size: a}) : '<img class="ui_avatar ui_avatar_' + a + '" src="' + e + '"/>', CW.is_business && ST.data.show_external && (this.model.isInternal() || (f = '<div class="ui_room_icon_area">' + f + '<div class="ui_room_others ui_sp_icon ui_sp_icon_others" title="' + 
                L.chatroom_not_only_internal + '"></div></div>')), f;
            case "src":
                return e
        }
    },getViewStat: function() {
        var b = {}, a = $C("#cw_send_area").position().top;
        b.last_read_id = 0;
        b.noview_num = 0;
        for (var f = this.model.timeline.chat_list.length - 1; f >= 0; f--) {
            var e = $("#cw_c" + this.model.timeline.chat_list[f].id);
            if (e.length > 0 && a > e.position().top) {
                b.last_read_id = this.model.timeline.chat_list[f].id;
                break
            }
            b.noview_num++
        }
        return b
    },addSendingChat: function(b) {
        this.model.timeline.build(!0, null, null, b)
    },build: function(b) {
        var a = !1, f = 
        $C("#cw_chatedit_id").val();
        if (!RM)
            RM = this.model;
        if (RM.id != this.model.id)
            CW.read(0), this.expandto_height = 162, RM.reading && $("#cw_unread_r" + RM.id).css("opacity", "0.5"), f && CS.clearChatEdit(f), $C("#cw_chattext").hasClass("explain") ? CS.deleteChatDraft(RM.id) : (CS.setChatDraft(RM.id, $C("#cw_chattext").val(), f), CS.view.setChatText("")), (a = $C("#cw_send_task").hasClass("selected")) ? CS.setTaskDraft(RM.id, a, CS.getTaskAssignList(), $C("#cw_task_limit").val()) : CS.deleteTaskDraft(RM.id), CS.initChatText(), RM = this.model, 
            $C("#cw_chattext").blur(), a = !0;
        var e = "!rid" + RM.id;
        b.jump_to_chat_id && (e += "-" + b.jump_to_chat_id);
        document.location.hash = e;
        $C("#cw_room_title").html(CW.getRoomName(this.model.id));
        $C("#cw_room_description").html("<pre>" + CW.renderMessage(this.model.description) + "</pre>");
        this.model.type == "group" ? $C("#cw_group_chat_link").show() : $C("#cw_group_chat_link").hide();
        this.model.member_dat[AC.myid] ? this.buildMemberList() : this.model.refreshMember();
        var e = null, d = !1;
        if (b.jump_to_chat_id)
            d = !0, e = b.jump_to_chat_id;
        else if (b.scroll_to)
            e = b.scroll_to;
        this.model.timeline.build(!this.model.rswitch, e, d);
        this.model.rswitch = !1;
        if (!this.disabled_send) {
            d = "";
            e = 0;
            if (a) {
                var d = CS.getChatDraft(RM.id), f = CS.getTaskDraft(RM.id), e = d.edit_id, d = d.text, a = f.task_mode, i = f.assign_list, f = f.limit_date;
                (a && !$C("#cw_send_task").hasClass("selected") || !a && $C("#cw_send_task").hasClass("selected")) && CS.view.toggleSendType();
                i && i.length > 0 && CS.setTaskAssign(i);
                f && $C("#cw_task_limit").val(f);
                d && CS.view.setChatText(d)
            } else
                e = f;
            e && CS.setChatEditColor(e)
        }
        $C("#cw_chattext").removeClass("ui_send_chat_external");
        CW.is_business && ST.data.show_external && (this.model.isInternal() || $C("#cw_chattext").addClass("ui_send_chat_external"));
        this.model.filelist.build();
        this.model.tasklist.build();
        b.read_lock == void 0 && wfocus && this.model.getUnreadNum() > 0 && CW.read();
        this.model.buildtime = microtime(!0)
    },buildHome: function() {
    },buildMemberList: function() {
        $C("#cw_room_setting_box li").hide();
        $("#cw_show_only_admin").hide();
        $("#cw_room_request_area").hide();
        switch (this.model.type) {
            case "group":
                $C("#cw_room_setting_box .group").show();
                this.model.allow_see_member || $("#cw_show_only_admin").show();
                switch (this.model.member_dat[AC.myid]) {
                    case "admin":
                        CS.view.enableChatArea();
                        this.disabled_send = !1;
                        $C("#cw_room_member_area").show();
                        $C("#cw_group_call").show();
                        $C("#cw_send_file").show();
                        $C("#cw_send_file_mask").show();
                        $C("#cw_send_task").show();
                        $C("#cw_room_setting_box .admin").show();
                        if (this.model["public"]) {
                            var b = this.model.member_request.length;
                            b > 0 && $("#cw_room_request_area").text(L.chatroom_member_requests_notice.replace("%%request_num%%", 
                            b)).show()
                        }
                        break;
                    case "member":
                        this.model.allow_see_member ? ($C("#cw_room_member_area").show(), $C("#cw_group_call").show()) : ($C("#cw_room_member_area").hide(), $C("#cw_group_call").hide());
                        this.model.allow_send_message ? (CS.view.enableChatArea(), this.disabled_send = !1, this.model.allow_upload_file ? ($C("#cw_send_file").show(), $C("#cw_send_file_mask").show()) : ($C("#cw_send_file").hide(), $C("#cw_send_file_mask").hide()), this.model.allow_add_task ? $C("#cw_send_task").show() : ($C("#cw_send_task").hide(), $C("#cw_send_meta").css("display") != 
                        "none" && CS.view.toggleSendType(!1))) : (CS.view.disableChatArea(), this.disabled_send = !0);
                        $C("#cw_room_setting_box .admin").hide();
                        break;
                    case "readonly":
                        this.model.allow_see_member ? ($C("#cw_room_member_area").show(), $C("#cw_group_call").show()) : ($C("#cw_room_member_area").hide(), $C("#cw_group_call").hide()), $C("#cw_send_file").hide(), $C("#cw_send_file_mask").hide(), $C("#cw_send_task").hide(), $C("#cw_send_meta").css("display") != "none" && CS.view.toggleSendType(!1), CS.view.disableChatArea(), this.disabled_send = 
                        !0, $C("#cw_room_setting_box .admin").hide()
                }
                (b = this.model.getJoinLink()) ? ($("#cw_room_joinlink_anchor").attr("href", b), $("#cw_room_joinlink").show()) : $("#cw_room_joinlink").hide();
                break;
            case "contact":
                $("#cw_room_joinlink").hide();
                CS.view.enableChatArea();
                this.disabled_send = !1;
                $C("#cw_room_member_area").show();
                $C("#cw_group_call").show();
                $C("#cw_send_file").show();
                $C("#cw_send_file_mask").show();
                $C("#cw_send_task").show();
                $C("#cw_room_setting_box .contact").show();
                break;
            case "my":
                $("#cw_room_joinlink").hide(), 
                CS.view.enableChatArea(), this.disabled_send = !1, $C("#cw_room_member_area").hide(), $C("#cw_group_call").show(), $C("#cw_send_file").show(), $C("#cw_send_task").show(), $C("#cw_room_setting_box .my").show()
        }
        b = CS.getTaskAssignList();
        $C("#cw_room_member_contact_list").empty();
        $C("#cw_room_member_myrequest_list").empty();
        $C("#cw_room_member_nocontact_list").empty();
        $C("#cw_send_assign_area").empty();
        for (var a = 0, f = 0, e = 0, d = [], i = [], n = [], h = [], j = [], g = this.model.getSortedMemberList(), k = 0; k < g.length; k++) {
            var q = g[k];
            h[f++] = '<span class="cw_assign" id="cw_assign_a' + q + '">' + CW.getAvatarPanel(q, {clicktip: !1,size: "small"}) + "</span>";
            q != AC.myid && (j[e++] = CW.getAvatarPanel(q, {clicktip: !1,hovertip: !1,size: "medium"}));
            this.model.type == "group" ? AC.isContact(q) ? d[a++] = CW.getAvatarPanel(q, {size: "small"}) : AC.myrequest_dat[q] ? i[a++] = CW.getAvatarPanel(q, {size: "small"}) : n[a++] = CW.getAvatarPanel(q, {size: "small"}) : this.model.type == "contact" && q != AC.myid && (d[a++] = CW.getContactPanel(q, {chatlink: !1}))
        }
        $C("#cw_room_member_contact_list").html(d.join(""));
        i.length > 0 ? ($C("#cw_room_member_myrequest_area").show(), $C("#cw_room_member_myrequest_list").html(i.join(""))) : $C("#cw_room_member_myrequest_area").hide();
        n.length > 0 ? ($C("#cw_room_member_nocontact_area").show(), $C("#cw_room_member_nocontact_list").html(n.join(""))) : $C("#cw_room_member_nocontact_area").hide();
        $C("#cw_send_assign_area").html(h.join(""));
        $C("#cw_mention_gallery").html(j.join(""));
        b.length > 0 && CS.setTaskAssign(b);
        $C("#cw_send_assign_box").scrollTop(0)
    },showRequestDialog: function() {
        var b = 
        this;
        $("#cw_room_request_dialog").dialog({title: L.room_request_title,width: 600,height: 400,modal: !0,hide: "fade",buttons: [DIALOG_CLOSE_BUTTON],open: function() {
                var a = [];
                $("#cw_room_request_list").empty();
                var f = b.model.member_request.length;
                if (f > 0) {
                    for (var e = 0; e < f; e++) {
                        var d = b.model.member_request[e];
                        a[e] = '<tr class="cw_room_request_row"><td>' + CW.getAvatarPanel(d.aid, {hovertip: !1,clicktip: !1,size: "medium"}) + escape_html(d.nm) + '</td><td style="text-align:center"><button class="cw_room_request_accept cw_room_request_a' + 
                        d.id + '">' + L.button_accept_long + "</button> ( " + L.role + ':<select><option value="admin">' + L.admin + '</option><option value="member" selected="selected">' + L.member + '</option><option value="readonly">' + L.readonly + '</option></select> )</td><td style="text-align:center"><button class="cw_room_request_reject cw_room_request_a' + d.id + '">' + L.button_reject_long + "</button></td></tr>"
                    }
                    $("#cw_room_request_list").html(a.join(""));
                    $("#cw_room_request_list").find("button").button()
                }
            }})
    }};
function TimeLineView(b) {
    this.model = b
}
var TimeLineView_action_mine = "", TimeLineView_action_notmine = "", TimeLineView_action_disabled_send = "";
(function() {
    for (var b = ["quote", "edit", "link", "unread", "delete"], a = ["reply", "quote", "link", "unread"], f = ["quote", "link", "unread"], e = 0; e < b.length; e++) {
        var d = b[e];
        TimeLineView_action_mine += '<li class="cw_ui_action_' + d + '"><span class="ui_sp_icon_action ui_sp_icon_action_' + d + '" title="' + L["chat_action_" + d + "_desc"] + '">' + L["chat_action_" + d] + "</span></li>"
    }
    for (e = 0; e < a.length; e++)
        d = a[e], TimeLineView_action_notmine += '<li class="cw_ui_action_' + d + '"><span class="ui_sp_icon_action ui_sp_icon_action_' + d + '" title="' + 
        L["chat_action_" + d + "_desc"] + '">' + L["chat_action_" + d] + "</span></li>";
    for (e = 0; e < f.length; e++)
        d = f[e], TimeLineView_action_disabled_send += '<li class="cw_ui_action_' + d + '"><span class="ui_sp_icon_action ui_sp_icon_action_' + d + '" title="' + L["chat_action_" + d + "_desc"] + '">' + L["chat_action_" + d] + "</span></li>"
})();
TimeLineView.prototype = {read: function(b) {
        var a = this.model.room.getUnreadNum();
        if (a == 0)
            $(".cw_u" + this.model.room.id).fadeOut("slow", function() {
                $(this).remove()
            });
        else
            for (var f = this.model.chat_list.length - 1 - a, e = f; e > f - (b - a); e--)
                this.model.chat_list[e] != void 0 && $("#cw_c" + this.model.chat_list[e].id).find("span.cw_unread_timeline").fadeOut("slow", function() {
                    $(this).remove()
                })
    },build: function(b, a, f, e) {
        var d = $("#cw_cend").offset().top, i = this.model.room.view.disabled_send, n = [], h = 0, j = [], g = 0;
        j[g++] = "d:" + i + 
        ":";
        this.model.chat_list.length < this.model.room.chat_num ? (j[g++] = "l:1", n[h++] = '<div id="cw_timeline_loading" class="dev_infobar"><img src="./image/ajax-loader-green.gif" class="ico_loading"/>' + L.chat_loading + "</div>", this.model.has_old = this.model.room.buildtime ? !0 : !1) : this.model.has_old = !1;
        for (var k = "", q = 0, v = this.model.chat_list.length - this.model.room.getUnreadNum(), l = this.model, m = -1, p = function(a) {
            m++;
            j[g++] = "c=";
            for (vkey in a)
                j[g++] = vkey + ":" + a[vkey];
            if (ST.data.show_delmessage == 0 && a.msg == "[deleted]")
                n[h++] = 
                '<div id="cw_c' + a.id + '"></div>';
            else {
                var b = CW.getDate(a.tm, ST.data.dateformat);
                k != b && (k = b, q = 0, n[h++] = '<div class="dev_date_head"><span class="ui_sp_icon ui_sp_icon_clock"></span>' + k + "</div>");
                var b = !1, d = "", e = "", f = "";
                q != a.aid ? (q = a.aid, d = '<div class="cw_speaker ui_speaker">' + CW.getAvatarPanel(a.aid, {size: "medium"}) + "</div>", e = CW.getName(a.aid), f = '<p class="ui_speaker_orgname autotrim">' + CW.getOrgName(a.aid) + "</p>") : b = !0;
                if (m < v)
                    var o = "";
                else
                    a.sid ? o = '<span class="cw_sending"><img src="./image/ajax-loader-gray.gif" class="ico_loading" /></span>' : 
                    l.room.read_lock ? (j[g++] = "l", o = '<span class="cw_unread_timeline dev_read_lock cw_u' + l.room.id + '"></span>') : (j[g++] = "r", o = '<span class="cw_unread_timeline cw_u' + l.room.id + '"></span>');
                var p = "", x = L.chat_edited_log, z = "ui_chat ui_chat_anim", U = "";
                a.aid == AC.myid && (z += " ui_chat_mine");
                a.msg == "[deleted]" ? (p = '<div class="dev_delete">' + L.chat_deleted + "</div>", x = L.chat_deleted_log) : a.msg == "[deleted_by_admin]" ? (p = '<div class="dev_delete">' + L.chat_deleted_by_admin + "</div>", x = L.chat_deleted_log) : (a.sid || (U = '<div id="cw_act_c' + 
                a.id + '" class="ui_chat_action"><ul class="ui_chat_action_nav">', U += i ? TimeLineView_action_disabled_send : a.aid != AC.myid ? TimeLineView_action_notmine : TimeLineView_action_mine, U += "</ul></div>"), p = CW.renderMessage(a.msg));
                var Q = b ? CW.getDate(a.tm, "H:i") : CW.getDate(a.tm, ST.data.dateformat_short + " H:i"), Q = '<span title="' + CW.getDate(a.tm, ST.data.dateformat) + '">' + Q + "</span>";
                a.utm > 0 && (Q += ' <span title="' + x.replace("%%date%%", CW.getDate(a.utm)) + '" class="ui_sp_icon ui_sp_icon_comment_edit"></span>');
                a.hl && (z += " ui_chat_highlight");
                (!a.hl && a.mn) && (z += 
                " ui_chat_mention");
                b && (z += " ui_chat_cont");
                n[h++] = '<div id="cw_c' + a.id + '" class="' + z + '">' + d + '<div class="ui_message cw_message"><div class="ui_chat_meta"><p class="cw_chat_name ui_chat_name">' + e + "</p>" + f + "</div><pre>" + p + '</pre></div><div class="ui_chat_meta ui_chat_date">' + o + " " + Q + "</div>" + U + "</div>"
            }
        }, o = l.chat_list, x = 0; x < o.length; x++)
            p(o[x]);
        o = l.sending_chat_list;
        if (o.length)
            for (x = 0; x < o.length; x++)
                o[x].sent || p(o[x]);
        n[h++] = '<div id="cw_cend" class="ui_chat_last"></div>';
        p = md5(j.join(""));
        if (CW.last_timeline_buildkey != 
        p) {
            $C("#cw_timeline").html(n.join(""));
            e && $C("#cw_timeline").find(".cw_sending img:last").hide().fadeIn(3E3);
            CW.last_timeline_buildkey = p;
            if (this.model.room.rswitch || a || d < $C("#cw_send_area").offset().top + 50) {
                b = b ? e ? 70 : 200 : 0;
                a || (a = (e = l.chat_list[l.chat_list.length - RM.getUnreadNum()]) ? e.id : "end");
                var z = this, e = $("#cw_c" + a);
                e.length && $C("#cw_timeline").scrollTo(e, b, function() {
                    f && z.highlight(a)
                })
            }
            AC.hasUnknown() && AC.getUnknown()
        } else
            a && f && (z = this, $C("#cw_timeline").scrollTo($("#cw_c" + a), 600, function() {
                z.highlight(a)
            }));
        this.model.has_old && setTimeout(function() {
            $("#cw_room_header").offset().top + $("#cw_room_header").outerHeight() - $("#cw_timeline_loading").offset().top == 0 && RM.timeline.loadOld()
        }, 100)
    },highlight: function(b) {
        $("#cw_c" + b).removeClass("ui_chat_anim").effect("highlight", {}, 1E3, function() {
            $(this).addClass("ui_chat_anim")
        })
    }};
function FileListView(b) {
    this.model = b;
    this.view_limit = 100
}
FileListView.prototype = {build: function() {
        var b, a = 0, f = "";
        if (this.model.room.id != RM.id)
            return !1;
        a = 0;
        b = this.model.getFileList();
        if (b.length == 0)
            b = "";
        else {
            FL.sortFileList(b);
            for (var e = 0; e < b.length; e++) {
                var d = b[e];
                a < this.view_limit && (f += CW.getFilePanel(d, {type: "filelist"}));
                FL.file_id2file_dat[d] != void 0 && FL.file_id2file_dat[d].st != "deleted" && a++
            }
            a >= this.view_limit && (f += '<div style="padding:5px 10px 10px 5px">' + L.chatroom_filelist_maxresults + "</div>");
            b = md5(f)
        }
        if (b != CW.last_filelist_buildkey)
            CW.last_filelist_buildkey = 
            b, $C("#cw_room_file_list").html(f), $C("#cw_room_file_list").scrollTo(0, 0), a ? $C("#cw_file_num").text(" (" + a + ")") : $C("#cw_file_num").empty()
    }};
function TaskListView(b) {
    this.model = b;
    this.task_num = this.mytask_num = 0;
    this.view_limit = 100
}
TaskListView.prototype = {build: function() {
        if (this.model.room.id != RM.id)
            return !1;
        var b, a = "";
        b = $C("#cw_room_show_mytask").prop("checked");
        var f = 0, e = this.model.getTaskList("open");
        if (e.length == 0)
            b = "";
        else {
            TK.sortTaskList(e);
            for (var d = 0; d < e.length; d++)
                b ? TK.task_id2task_dat[e[d]].aid == AC.myid && (f < this.view_limit && (a += CW.getTaskPanel(e[d], {type: "tasklist"})), f++) : (f < this.view_limit && (a += CW.getTaskPanel(e[d], {type: "tasklist"})), f++);
            f >= this.view_limit && (a += '<div style="padding:5px 10px 10px 5px">' + L.chatroom_tasklist_maxresults + 
            "</div>");
            b = md5(a)
        }
        if (b != CW.last_tasklist_buildkey)
            CW.last_tasklist_buildkey = b, $C("#cw_room_task_list").html(a), $C("#cw_room_task_list").scrollTo(0, 0), self.task_num = f, self.task_num > 0 ? $C("#cw_task_num").text(" (" + self.task_num + ")") : $C("#cw_task_num").empty()
    }};
function RoomDialogView(b) {
    var a = this;
    a.model = b;
    a.filter_word_member = "";
    a.filter_word_contact = "";
    a.contact_flag = {};
    a.member_flag = {};
    a.is_valid_link_name = !0;
    a.room = null;
    a.prepare = function() {
        CW.view.registerKeyboardShortcut(71, !1, !1, !1, !1, function() {
            $("#cw_room_addchat").click()
        });
        var b = $("#cw_room_info_memberfilter"), e = $("#cw_room_info_contactfilter");
        b.bind("update", function() {
            a.filter_word_member = !b.hasClass("ui_icsearch_blank") && b.val() != "" ? b.val().toLowerCase() : "";
            a.buildMember(["member"])
        });
        e.bind("update", 
        function() {
            a.filter_word_contact = !e.hasClass("ui_icsearch_blank") && e.val() != "" ? e.val().toLowerCase() : "";
            a.buildMember(["contact"])
        });
        $("#cw_group_call_member").on("click", ".cw_group_call_member", function() {
            var a = $(this), b = a.find(".ico_checked"), d = a.attr("id").substr(15);
            b.length ? (a.find("img").removeClass("ui_avatar_selected"), b.remove()) : (a.find("img").addClass("ui_avatar_selected"), a.append('<span class="ui_sp_icon ui_sp_icon_check ico_checked" id="cw_group_call_check_a' + d + '"></span>'))
        });
        $("#cw_group_call_check_all").click(function() {
            $(".cw_group_call_member .ico_checked").each(function() {
                $(this).click()
            });
            $(".cw_group_call_member").each(function() {
                $(this).click()
            })
        });
        $("#cw_group_call_uncheck_all").click(function() {
            $(".cw_group_call_member .ico_checked").each(function() {
                $(this).click()
            })
        });
        var d = $("#cw_room_icon_preset");
        $("#cw_room_info_form").on("click", ".cw_icon_type", function() {
            switch ($(this).val()) {
                case "preset":
                    $("#cw_room_info_icon_default").show();
                    $("#cw_room_info_icon_upload").hide();
                    a.room && (a.room.icon_preset || d.find("li.ui_room_info_icon_active").click());
                    break;
                case "upload":
                    $("#cw_room_info_icon_upload").show(), 
                    $("#cw_room_info_icon_default").hide(), a.room && (a.room.icon_preset || $("#cw_room_icon_selected").prop("src", a.room.getIcon("src")))
            }
        });
        d.on("click", "li", function() {
            d.find("li.ui_room_info_icon_active").removeClass("ui_room_info_icon_active");
            var a = $(this), b = a.find("img");
            a.addClass("ui_room_info_icon_active");
            $("#cw_room_icon_selected").prop("src", b.prop("src"));
            $("#cw_room_icon_selected_value").val(b.prop("id").substr(18))
        });
        var i = [{text: "",click: function() {
                    var b = [], d = $("#cw_room_info_name").val();
                    if (!d) {
                        for (var e in a.member_flag)
                            if (d && (d += ","), d += AC.getName(e), d.length > 100) {
                                d += "...";
                                break
                            }
                        $("#cw_room_info_name").val(d)
                    }
                    $("#cw_room_info_description").hasClass("explain") && $("#cw_room_info_description").removeClass("explain").val("");
                    var f = [], g = d = "";
                    for (e in a.member_flag)
                        switch (g = a.member_flag[e], d += '<input type="hidden" name="role[' + e + ']" value="' + g + '" />', g) {
                            case "admin":
                                f.push(e)
                        }
                    f.length || b.push(L.chatroom_error_noadmin);
                    e = $("#cw_room_info_id").val();
                    !e && !a.member_flag[AC.myid] && b.push(L.chatroom_error_noself);
                    b.length ? CW.alert(b.join("\n")) : (e ? ($("#cw_room_info_cmd").val("update_room"), CW.showProgress(L.saving)) : ($("#cw_room_info_cmd").val("add_room"), CW.showProgress(L.adding)), b = $(d), $("#cw_room_info_form").append(b).submit(), b.remove())
                }}, DIALOG_CANCEL_BUTTON];
        $("#cw_update_room_iframe").bind("load", function() {
            CW.hideProgress();
            var a = unescape_html($(this).contents().find("body").html());
            if (a.length > 0) {
                var a = a.match(/\{.+\}/)[0], b = $.parseJSON(a), a = b.result;
                if (b.status.success) {
                    a.message != void 0 && CW.alert(a.message);
                    if (a.add == void 0) {
                        $("#cw_room_info_dialog").dialog("close");
                        b = RL.rooms[a.id];
                        a.name != void 0 && b.setName(a.name);
                        if (a.description != void 0)
                            b.description = a.description;
                        if (a.member_dat != void 0)
                            b.member_dat = a.member_dat;
                        b.build()
                    } else if (a.error != void 0) {
                        var b = L.chatroom_error_cant_add, d = L.chatroom_error_planlimit, d = d.replace(/%%plan_name%%/, a.error.plan_name), d = d.replace(/%%limit_num%%/, a.error.limit_num);
                        CW.view.showLimitErrorDialog(b, d)
                    } else
                        $("#cw_room_info_dialog").dialog("close"), RL.lazy_select = a.room_id;
                    CW.watch()
                } else
                    b.status.message ? CW.alert(b.status.message) : b.result.message ? CW.alert(b.result.message) : CW.alert(L.raise_error)
            }
        });
        $("#cw_update_room_adminsetting_iframe").bind("load", function() {
            CW.hideProgress();
            var a = unescape_html($(this).contents().find("body").html());
            if (a.length > 0) {
                var a = a.match(/\{.+\}/)[0], a = $.parseJSON(a), b = a.result;
                a.status.success ? b.header_error != void 0 ? CW.alert(L["error_upload_" + b.header_error]) : CW.watch() : CW.alert(L.raise_error)
            }
        });
        $("#cw_room_info_dialog").dialog({width: "742",
            autoOpen: !1,resizable: !1,modal: !0,hide: "fade",open: function() {
                var a = $C("#cw_layout").height();
                a < 560 ? ($("#cw_room_info_description").height(30), $("#cw_room_info_contact_list").height(80), $("#cw_room_info_member_list").height(80), $("#cw_room_info_select_area").css("padding-bottom", "0px")) : a < 610 ? ($("#cw_room_info_description").height(40), $("#cw_room_info_contact_list").height(145), $("#cw_room_info_member_list").height(145), $("#cw_room_info_select_area").css("padding-bottom", "10px")) : ($("#cw_room_info_description").height(80), 
                $("#cw_room_info_contact_list").height(155), $("#cw_room_info_member_list").height(155), $("#cw_room_info_select_area").css("padding-bottom", "20px"))
            },close: function() {
                $("#cw_room_info_name").val("");
                $("#cw_room_info_description").val("").blur();
                $("#cw_room_info_icon").val("");
                b.val("").blur().trigger("update");
                e.val("").blur().trigger("update")
            }});
        $("#cw_group_call_dialog").dialog({width: 600,autoOpen: !1,resizable: !1,hide: "fade",modal: !0});
        $("#cw_room_info_select").click(function() {
            var a = [], d = $("#cw_room_info_select_role input:checked").val();
            $("#cw_room_info_contact").find("input:checked").each(function() {
                a.push($(this).val())
            });
            n(a, d);
            b.val("").blur().focus();
            $("#cw_room_info_select_all_contact").prop("checked", "");
            return !1
        });
        $("#cw_room_info_dialog").on("click", ".cw_member_delete", function() {
            var b = this.className.match(/cw_m(\d+)/)[1];
            $("#cw_member_row" + b).remove();
            a.contact_flag[b] = !0;
            delete a.member_flag[b];
            a.buildMember()
        });
        var n = function(b, d) {
            d || (d = "member");
            for (var e = 0, f = b.length; f--; )
                e = b[f], a.member_flag[e] = d, delete a.contact_flag[e];
            a.buildMember()
        }, h = $("#cw_croom_info_dialog");
        h.dialog({width: 280,autoOpen: !1,resizable: !1,modal: !0,hide: "fade",buttons: [{text: L.button_save_long,click: function() {
                        var a = "";
                        $("#cw_croom_info_description").hasClass("explain") || (a = $("#cw_croom_info_description").val());
                        var b = $("#cw_croom_info_id").val();
                        $(this).dialog("close");
                        b && CW.post("gateway.php", {cmd: "update_room",description: a,room_id: b})
                    }}, DIALOG_CANCEL_BUTTON],close: function() {
                $("#cw_croom_info_description").val("")
            }});
        $("#cw_room_info_description").focus(function() {
            $(this).hasClass("explain") && 
            $(this).val("").removeClass("explain").css({color: ""})
        }).blur(function() {
            $(this).val() == "" ? $(this).addClass("explain").css({color: "#aaa"}).val(L.chatroom_desc_explain) : $(this).removeClass("explain").css({color: ""})
        });
        var j = function() {
            if (CW.group_limit_num) {
                var b = 0, d;
                for (d in RL.rooms)
                    RL.rooms[d].type == "group" && b++;
                if (b >= CW.group_limit_num) {
                    b = L.chatroom_error_cant_add;
                    d = L.chatroom_error_planlimit;
                    d = d.replace(/%%plan_name%%/, PLAN_NAME);
                    d = d.replace(/%%limit_num%%/, CW.group_limit_num);
                    CW.view.showLimitErrorDialog(b, 
                    d);
                    return
                }
            }
            i[0].text = L.button_add_long;
            $("#cw_room_info_dialog").dialog({title: L.chatroom_add_title,buttons: i});
            $("#cw_room_info_dialog").dialog("open");
            $("#cw_room_info_id").val("");
            $("#cw_room_info_name").val("");
            $("#cw_room_info_icon").val("");
            $("#cw_room_info_description").val("").blur();
            $("#cw_room_icon_type_preset").click();
            $("#cw_room_icon_type_group").click();
            $("#cw_room_info_name_area").show();
            $("#cw_room_info_name").show();
            $("#cw_room_info_icon").show();
            $("#cw_room_info_description").show();
            $("#cw_room_info_name_reaonly").hide();
            $("#cw_room_info_description_reaonly").hide();
            $("#cw_room_info_member_area").show();
            $("#cw_room_info_member_add").show();
            $("#cw_room_info_member_label").text(L.chatroom_add_member);
            a.room = null;
            a.contact_flag = {};
            a.member_flag = {};
            AC.getName(AC.myid);
            AC.hasUnknown() && AC.getUnknown();
            b = 0;
            for (d = AC.contact_list.length; b < d; b++)
                a.contact_flag[AC.contact_list[b]] = !0;
            n([AC.myid], "admin")
        };
        $("#cw_room_addchat").click(function() {
            j()
        });
        $("#cw_room_addchat_same_members").click(function() {
            for (var a = 
            function(a, b) {
                j();
                for (var d = 0; d < b.length; d++)
                    n(a[b[d]], b[d])
            }, b = RM.getSortedMemberList(), d = {}, e = !1, f = "", g = [], h = 0; h < b.length; h++)
                f = RM.member_dat[b[h]], AC.myid != b[h] && (AC.isContact(b[h]) ? (typeof d[f] == "undefined" && (d[f] = [], g.push(f)), d[f].push(b[h])) : e = !0);
            e ? CW.confirm(L.chatroom_addchat_same_members_confirm, function() {
                setTimeout(function() {
                    a(d, g)
                })
            }) : a(d, g)
        });
        $("#cw_room_delete").click(function() {
            !RM || !RM.id ? CW.alert(L.error_no_select) : CW.view.confirm(L.chatroom_confirm_delete_html.replace(/%%room_name%%/, 
            escape_html(RM.getName())), function() {
                CW.post("gateway.php", {cmd: "delete_room",room_id: RM.id}, function() {
                    $("#cw_room_info_dialog").dialog("close");
                    CW.watch()
                })
            }, null, !0)
        });
        $("#cw_room_leave").click(function() {
            !RM || !RM.id ? CW.alert(L.error_no_select) : CW.confirm(L.chatroom_confirm_leave.replace(/%%room_name%%/, RM.getName()), function() {
                CW.post("gateway.php", {cmd: "leave_room",room_id: RM.id}, function() {
                    $("#cw_room_info_dialog").dialog("close")
                })
            })
        });
        $("#cw_room_setting").click(function() {
            CW.view.unsetOutbox();
            var a = $("#cw_room_setting_box"), b = $(this).offset();
            a.css({top: b.top + 25 + "px"});
            a.show();
            CW.view.setOutbox(a, function() {
                a.fadeOut("fast")
            }, !1);
            CW.view.outboxStop = !0
        }).mousedown(function() {
            return !1
        });
        $("#cw_room_edit").click(function() {
            if (RM.id)
                if (i[0].text = L.button_save_long, a.room = RM, a.room.type == "contact" || a.room.type == "my")
                    $("#cw_croom_info_description").val(CS.convertToEdit(a.room.description)), $("#cw_croom_info_id").val(a.room.id), a.room.type == "contact" ? h.dialog({title: L.chatroom_change_directchat}) : 
                    h.dialog({title: L.chatroom_change_mychat}), h.dialog("open");
                else {
                    a.contact_flag = {};
                    a.member_flag = {};
                    $("#cw_room_info_id").val(a.room.id);
                    $("#cw_room_info_select_role").val("admin");
                    var b = 0, d;
                    for (d in a.room.member_dat)
                        b++;
                    $("#cw_room_info_dialog").dialog({title: L.chatroom_change_groupchat,buttons: i});
                    $("#cw_room_info_name").show().val(a.room.getName());
                    $("#cw_room_info_icon").show().val("");
                    a.room.icon_preset ? ($("#cw_room_icon_type_preset").click(), $("#cw_room_icon_type_" + a.room.icon).click()) : ($("#cw_room_icon_type_group").click(), 
                    $("#cw_room_icon_type_upload").click(), $("#cw_room_icon_selected").prop("src", a.room.getIcon("src")));
                    $("#cw_room_info_description").show().val(CS.convertToEdit(a.room.description)).blur();
                    $("#cw_room_info_name_reaonly").hide();
                    $("#cw_room_info_description_reaonly").hide();
                    $("#cw_room_info_member_add").show();
                    $("#cw_room_info_member_label").text(L.chatroom_add_member);
                    $("#cw_room_info_dialog").dialog("open");
                    for (var e in a.room.member_dat)
                        a.member_flag[e] = a.room.member_dat[e];
                    b = 0;
                    for (d = AC.contact_list.length; b < 
                    d; b++)
                        e = AC.contact_list[b], a.member_flag[e] == void 0 && (a.contact_flag[e] = !0);
                    a.buildMember()
                }
            else
                CW.alert(L.error_no_select)
        });
        $C("#cw_group_call").click(function() {
            if (RM.id) {
                a.room = RM;
                a.member_aid_list = [];
                $("#cw_group_call_dialog").dialog({title: L.groupcall,buttons: [{text: L.groupcall_call,click: function() {
                                var a = [];
                                $(".cw_group_call_member .ico_checked").each(function() {
                                    a.push(this.id.substr(21))
                                });
                                var b = a.length;
                                if (b) {
                                    for (var d = [], e = "", f = 0; f < b; f++)
                                        (e = AC.getSkype(a[f])) && d.push(e);
                                    if (d.length)
                                        location.href = 
                                        "skype:" + d.join(";") + "?call", $(this).dialog("close")
                                } else
                                    CW.alert(L.groupcall_error_no_select)
                            }}, DIALOG_CANCEL_BUTTON],close: function() {
                        $("#cw_room_icon_type_preset").click();
                        $("#cw_room_icon_type_group").click()
                    }});
                $("#cw_group_call_dialog").dialog("open");
                for (var b in a.room.member_dat)
                    AC.myid != b && AC.contact_flag[b] && AC.getSkype(b) != "" && a.member_aid_list.push(b);
                a.buildGroupCallMember()
            } else
                CW.alert(L.error_no_select)
        });
        $("#cw_room_adminsetting_header_delete").click(function() {
            $(this).prop("checked") ? 
            $("#cw_room_adminsetting_header").prop("disabled", !0) : $("#cw_room_adminsetting_header").prop("disabled", !1)
        });
        $("#cw_room_adminsetting_dialog").dialog({title: L.adminsetting_title,width: 600,autoOpen: !1,resizable: !1,modal: !0,hide: "fade",buttons: [{text: L.button_save_long,click: function() {
                        var b = [];
                        a.is_valid_link_name || b.push(L.adminsetting_error_invalid_link_name);
                        b.length ? CW.alert(b.join("\n")) : ($("#cw_link_name_input").css("display") == "none" && $("#cw_link_name_input").val(""), $("#cw_room_adminsetting_id").val(RM.id), 
                        $("#cw_room_adminsetting_form").submit(), CW.showProgress(L.saving), $(this).dialog("close"))
                    }}, DIALOG_CANCEL_BUTTON],open: function() {
                a.is_valid_link_name = !0;
                var b = ["allow_see_member", "allow_upload_file", "allow_add_task", "allow_send_message", "public", "join_need_accept"], d;
                for (d in b) {
                    var e = b[d];
                    RM[e] ? $("#cw_" + e).prop("checked", !0) : $("#cw_" + e).prop("checked", !1)
                }
                $("#cw_link_name_loading").hide();
                $("#cw_link_name_used").text("");
                $("#cw_link_name_input").hide();
                $("#cw_link_name").show();
                $("#cw_link_name_edit").text(L.button_edit);
                RM.link_name ? $("#cw_link_name").text(RM.link_name) : $("#cw_link_name").text(RM.id);
                $("#cw_public_description").val(RM.public_description);
                $("#cw_room_adminsetting_header_delete").prop("checked", !1);
                $("#cw_room_adminsetting_header").prop("disabled", !1);
                RM.header ? ($("#cw_room_adminsetting_header_current").html('<img src="' + S3_PATH + "/header/" + RM.header + '" width="30" height="30" style="border:1px solid #999"/>'), $("#cw_room_adminsetting_header_delete_box").show()) : ($("#cw_room_adminsetting_header_current").empty(), 
                $("#cw_room_adminsetting_header_delete_box").hide());
                $("#cw_room_adminsetting_header").val("")
            }});
        $("#cw_room_adminsetting").click(function() {
            $("#cw_room_adminsetting_dialog").dialog("open")
        });
        $("#cw_public").click(function() {
            $(this).trigger("update")
        });
        $("#cw_link_name_edit").click(function() {
            $("#cw_link_name").css("display") != "none" ? ($("#cw_link_name_input").val($("#cw_link_name").text()).show(), $("#cw_link_name").hide(), $("#cw_link_name_new").hide(), $("#cw_link_name_edit").text(L.button_cancel)) : 
            ($("#cw_link_name").show(), $("#cw_link_name").text() == "" && $("#cw_link_name_new").show(), $("#cw_link_name_input").hide(), $("#cw_link_name_edit").text(L.button_edit));
            $("#cw_link_name_loading").hide();
            $("#cw_link_name_used").text("")
        });
        $("#cw_room_info_select_all_contact").change(function() {
            this.checked ? $("#cw_room_info_contact").find('input[type="checkbox"]:not(checked)').prop("checked", "checked") : $("#cw_room_info_contact").find('input[type="checkbox"]:checked').prop("checked", "")
        });
        var g = "", k = null, 
        q = function() {
            var b = $(this).val();
            if (b != g)
                g = b, k && (clearTimeout(k), k = null), AC.getChatWorkId(AC.myid) == b ? ($("#cw_link_name_loading").hide(), $("#cw_link_name_used").text(""), a.is_valid_link_name = !0) : b ? b.length > 50 ? ($("#cw_link_name_loading").hide(), $("#cw_link_name_used").text(L.error_maxlength.replace("%%length%%", 50)).css("color", "red"), a.is_valid_link_name = !1) : b.match(/^[-_a-zA-Z0-9]+$/) ? ($("#cw_link_name_loading").show(), $("#cw_link_name_used").text(""), k = setTimeout(function() {
                    $("#cw_link_name_loading").show();
                    CW.get("gateway.php", {cmd: "check_chat_link_name",link_name: b,rid: RM.id}, function(b) {
                        $("#cw_link_name_loading").hide();
                        b.used ? ($("#cw_link_name_used").text(L.error_already_used).css("color", "red"), a.is_valid_link_name = !1) : ($("#cw_link_name_used").text(L.available).css("color", "green"), a.is_valid_link_name = !0)
                    })
                }, 1E3)) : ($("#cw_link_name_loading").hide(), $("#cw_link_name_used").text(L.error_invalidchar).css("color", "red"), a.is_valid_link_name = !1) : ($("#cw_link_name_loading").hide(), $("#cw_link_name_used").text(""))
        };
        $("#cw_link_name_input").keyup(q).blur(q)
    };
    a.buildMember = function(b) {
        var b = b || ["member", "contact"], e = {admin: L.admin,member: L.member,guest: L.guest}, d = 0, i = 0, n = {member: a.member_flag,contact: a.contact_flag}, h = [], j = [];
        a.filter_word_member && (h = CW.splitWithSpace(a.filter_word_member));
        a.filter_word_contact && (j = CW.splitWithSpace(a.filter_word_contact));
        for (var g = 0; g < b.length; g++) {
            var k = b[g], q = [], v;
            for (v in n[k])
                q.push(v);
            q.sort(function(a, b) {
                return sort_for_string(AC.getName(a), AC.getName(b))
            });
            $("#cw_room_info_" + 
            k).quickEmpty();
            var l = "", m = q.length;
            200 < m && $("#cw_room_info_show_limit_num_" + k).text(L.chatroom_show_limit_member_num.replace("%%num%%", 200));
            for (var p = 0; p < m; p++) {
                var o = q[p];
                if (k == "member") {
                    if (!(h.length > 0) || AC.isMatchedWithKeyList(h, o)) {
                        d++;
                        if (d > 200)
                            break;
                        l += '<tr id="cw_member_row' + o + '"><td>' + CW.getAvatarPanel(o, {size: "small",hovertip: !1,clicktip: !1}) + '</td><td><p class="ui_room_info_member_list_name autotrim">' + CW.getName(o) + '</p><p class="ui_room_info_member_list_orgtitle autotrim">' + CW.getOrgTitle(o) + 
                        '</p></td><td class="ui_member_role">';
                        if (a.room == null || a.room.member_dat == null || a.room.member_dat[AC.myid] == "admin") {
                            var x = {admin: "",member: "",guest: ""};
                            x[a.member_flag[o]] = ' selected="selected"';
                            l += '<select class="cw_room_info_role cw_m' + o + '"><option value="admin"' + x.admin + ' title="' + L.chatroom_member_role_admin_desc + '">' + L.admin + '</option><option value="member"' + x.member + ' title="' + L.chatroom_member_role_member_desc + '">' + L.member + '</option><option value="readonly"' + x.readonly + ' title="' + L.chatroom_member_role_readonly_desc + 
                            '">' + L.readonly + '</option></td><td class="cw_member_delete cw_m' + o + '">' + L.button_delete + "</td></tr>"
                        } else
                            l += e[a.member_flag[o]] + "</td></tr>"
                    }
                } else if (!(j.length > 0) || AC.isMatchedWithKeyList(j, o)) {
                    i++;
                    if (i > 200)
                        break;
                    l += '<tr class="ui_selectable_row"><td><input type="checkbox" id="ra' + o + '" value="' + o + '"></td><td><label for="ra' + o + '">' + CW.getAvatarPanel(o, {size: "small",hovertip: !1,clicktip: !1}) + '</label></td><td><label for="ra' + o + '"><p class=" ui_room_info_contact_list_name  autotrim">' + CW.getName(o) + 
                    '</p><p class="ui_room_info_contact_list_orgtitle autotrim">' + CW.getOrgTitle(o) + "</p></label></td></tr>"
                }
            }
            $("#cw_room_info_" + k).html(l)
        }
        b = $("#cw_room_info_member_list");
        e = b.height();
        b.height(e);
        d ? $("#cw_room_info_member_num").text(d + L.chatroom_member_count_unit) : $("#cw_room_info_member_num").text("");
        $(".cw_room_info_role").bind("change", function() {
            var b = this.className.match(/cw_m(\d+)/)[1];
            a.member_flag[b] = $(this).val()
        });
        if (a.room) {
            var d = !1, b = {}, z;
            for (z in TK.task_id2task_dat)
                if (b = TK.task_id2task_dat[z], 
                b.rid == a.room.id && a.room.member_dat[b.aid] && b.st == "open" && a.contact_flag[b.aid]) {
                    d = !0;
                    break
                }
            if (!d)
                for (var I in z = {}, FL.file_id2file_dat)
                    if (z = FL.file_id2file_dat[I], z.rid == a.room.id && a.room.member_dat[z.aid] && z.st == "open" && a.contact_flag[z.aid]) {
                        d = !0;
                        break
                    }
            d ? $("#_noticeDeleteMember").css("visibility", "visible") : $("#_noticeDeleteMember").css("visibility", "hidden")
        }
    };
    a.buildGroupCallMember = function() {
        if (a.member_aid_list.length) {
            a.member_aid_list.sort(function(a, b) {
                return AC.getMentionNum(b) - AC.getMentionNum(a)
            });
            $("#cw_group_call_member").empty();
            for (var b = 0; b < a.member_aid_list.length; b++) {
                var e = a.member_aid_list[b], e = '<span class="cw_group_call_member" id="cw_group_call_a' + e + '">' + CW.getAvatarPanel(e, {clicktip: !1}) + "</span>";
                $("#cw_group_call_member").append(e)
            }
        } else
            $("#cw_group_call_member").html('<div style="height:100%; color:#999; text-align:center;">' + L.groupcall_no_members + "</div>")
    }
}
function ChatSendView(b) {
    var a = this;
    a.model = b;
    var f = 0, e = 0, d = $C("#cw_chattext"), i = $C("#cw_chatedit_id"), n = "chat", h = "", j = "", g = "", k, q, v;
    a.last_caret_pos = 0;
    a.prepare = function() {
        CW.view.registerKeyboardShortcut(32, !1, !1, !1, !1, function() {
            d.focus()
        });
        d.val("");
        $C("#cw_chatedit_id").val("");
        d.keydown(a.chatTextKeyDown).keyup(function(b) {
            if ($.browser.msie)
                a.last_caret_pos = get_caret_position_ie(this);
            a.chatTextKeyUp(b)
        }).focus(function() {
            d.hasClass("explain") && a.setChatText("")
        }).blur(function() {
            d.val() == "" && 
            d.addClass("explain").css({color: "#666"});
            d.hasClass("explain") && (d.trigger("explain_update"), n == "chat" && a.expandChatArea(!1))
        }).mouseover(function() {
            $C("#cw_send_area .cw_buttons").removeClass("hover")
        }).bind("explain_update", function() {
            if (d.hasClass("explain"))
                if (RM && RM.view.disabled_send)
                    d.val("");
                else {
                    var a = n == "task" ? L.chatsend_task_explain : L.chatsend_chat_explain;
                    ST.data.enter_action == "send" && (a += L.chatsend_enter_action_explain_enter);
                    d.val(a)
                }
        }).blur();
        $.browser.msie && d.click(function() {
            a.last_caret_pos = 
            get_caret_position_ie(this)
        });
        $C("#cw_task_check_all").click(function() {
            a.clearTaskAssign();
            $C("#cw_send_assign_area").find(".cw_assign img").click()
        });
        $("#cw_task_uncheck_all").click(function() {
            a.clearTaskAssign()
        });
        $C("#cw_send_assign_area").on("click", ".cw_assign", function() {
            var a = $(this), b = a.find(".ico_checked"), d = a.attr("id").substr(11);
            b.length ? b.remove() : a.append('<span class="ui_sp_icon ui_sp_icon_check ico_checked" id="cw_assign_check_a' + d + '"></span>')
        });
        var b = !1;
        $("#cw_sendbutton_chat_emoticon").click(function() {
            if (!b) {
                b = 
                !0;
                var a = $(this), d = $(this).offset(), e = 0, f = 0, g = $C("#cw_emoticon_box");
                $C("#cw_emoticon_description").html('<span class="ui_gallery_tip">' + L.chatsend_shift_multiselect + "</span>");
                a.removeClass("hover").addClass("selected");
                $("#cw_sendbutton_chat_emoticon span").addClass("ui_sp_icon_arrow_small_up");
                g.show();
                g.height($("#cw_emoticon_gallery").height() + 34);
                e = d.top - (g.height() + 10);
                f = d.left - 10;
                CW.view.unsetOutbox();
                CW.view.setOutbox(g, function() {
                    g.hide();
                    a.removeClass("selected");
                    $("#cw_sendbutton_chat_emoticon span").removeClass("ui_sp_icon_arrow_small_up");
                    b = !1
                }, !1);
                g.css("top", e).css("left", f);
                CW.view.outboxStop = !0
            }
        }).mousedown(function() {
            return !1
        });
        $C("#cw_emoticon_box").on("mouseover", "img", function() {
            var a = $(this);
            $C("#cw_emoticon_description").text(a.attr("title") + " " + a.attr("alt"))
        }).on("mouseout", "img", function() {
            $C("#cw_emoticon_description").empty()
        }).on("click", "img", function() {
            d.focus();
            a.setChatText($(this).prop("alt"), !0);
            if (!CW.view.key.shift && !CW.view.key.ctrl)
                CW.view.unsetOutbox();
            else
                return !1
        });
        $C("#cw_emoticon_box").click(function() {
            CW.view.outboxStop = 
            !0
        });
        var h = !1;
        $C("#cw_send_area .cw_buttons").hover(function() {
            $(this).hasClass("selected") || $(this).addClass("hover")
        }, function() {
            $(this).removeClass("hover")
        });
        $("#cw_sendbutton_chat_mention").click(function() {
            if (!h) {
                h = !0;
                var a = $(this);
                a.removeClass("hover").addClass("selected");
                $("#cw_sendbutton_chat_mention span").addClass("ui_sp_icon_arrow_small_up");
                var b = $(this).offset(), d = 0, e = 0, f = $C("#cw_mention_box");
                $C("#cw_mention_description").html('<span class="ui_gallery_tip">' + L.chatsend_shift_multiselect + 
                "</span>");
                f.show();
                d = $C("#cw_mention_gallery");
                f.css("width", "222px");
                d.css("height", "");
                var e = $("#cw_mention_nickname").height(), g = d.height();
                g > 150 && (f.css("width", "240px"), d.css({height: "150px",overflow: "auto"}), g = 150);
                g += e;
                f.height(g + 34);
                d = b.top - (f.height() + 10);
                e = b.left - 10;
                CW.view.unsetOutbox();
                CW.view.setOutbox(f, function() {
                    f.hide();
                    a.removeClass("selected");
                    $("#cw_sendbutton_chat_mention span").removeClass("ui_sp_icon_arrow_small_up");
                    h = !1
                }, !1);
                f.css("top", d).css("left", e);
                CW.view.outboxStop = 
                !0
            }
        }).mousedown(function() {
            return !1
        });
        $C("#cw_mention_box").on("mouseover", "img", function() {
            $(this).addClass("ui_avatar_hover");
            var a = this.className.match(/cw_a([0-9]+)/), a = CW.is_business && ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(a[1]) : AC.getNickName(a[1]);
            $C("#cw_mention_description").html('<span class="ui_to">To:</span> ' + escape_html(a))
        }).on("mouseout", "img", function() {
            $(this).removeClass("ui_avatar_hover");
            $C("#cw_mention_description").empty()
        }).on("click", "img", function() {
            var b = 
            this.className.match(/cw_a([0-9]+)/);
            d.focus();
            var e = CW.is_business && ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(b[1]) : AC.getNickName(b[1]);
            a.setChatText("[To:" + b[1] + "] " + e + "\n", !0);
            if ($.browser.msie)
                b = document.selection.createRange(), e = b.duplicate(), e.moveToElementText(this), e.setEndPoint("EndToEnd", b), a.last_caret_pos = e.text.length;
            if (!CW.view.key.shift && !CW.view.key.ctrl)
                CW.view.unsetOutbox();
            else
                return !1
        });
        $C("#cw_mention_box").click(function() {
            CW.view.outboxStop = !0
        });
        $C("#cw_send_task").click(function() {
            a.toggleSendType(!0)
        }).mousedown(function() {
            return !1
        });
        $("#cw_send_task_check")[0].checked = !1;
        $C("#cw_cancel_button_box").click(function() {
            a.clearChatEdit(i.val());
            a.setChatText("");
            d.blur()
        });
        $("#cw_task_limit").datepicker({showButtonPanel: !0,showOtherMonths: !0,selectOtherMonths: !0});
        $("#cw_task_edit_task_limit").datepicker({showButtonPanel: !0,showOtherMonths: !0,selectOtherMonths: !0});
        var k = !1;
        $.browser.msie ? ($("#cw_send_file_input").hide(), $C("#cw_send_file_mask").hover(function() {
            k || ($("#cw_send_file_input").show(), $C("#cw_send_file_mask").css("background-color", 
            "#fff"))
        }, function() {
            $("#cw_send_file_input").hide();
            $C("#cw_send_file_mask").css("background-color", "")
        }), $C("#cw_send_file").click(function() {
            $("#cw_send_file_input").show();
            $C("#cw_send_file_mask").css("background-color", "#fff")
        })) : ($C("#cw_send_file_mask").hover(function() {
            $C("#cw_send_file").hasClass("selected") || $C("#cw_send_file").addClass("hover")
        }, function() {
            $C("#cw_send_file").removeClass("hover").removeClass("selected")
        }), $C("#cw_send_file_mask").click(function() {
            $C("#cw_send_file").removeClass("hover").addClass("selected")
        }));
        $("#cw_send_file_input").change(function() {
            k = !0;
            if (!e)
                e = RM.id;
            $("#cw_send_file_input").hide();
            $C("#cw_send_file").removeClass("hover").removeClass("selected");
            $("#cw_send_file_label").html('<img src="./image/ajax-loader-green.gif" class="ico_loading"/> ' + L.chatsend_file_sending);
            var a = ["ade", "adp", "bat", "chm", "cmd", "com", "cpl", "exe", "hta", "ins", "isp", "jse", "lib", "mde", "msc", "msp", "mst", "pif", "scr", "sct", "shb", "sys", "vb", "vbe", "vbs", "vxd", "wsc", "wsf", "wsh"], b = 0, d = "", f = "";
            this.files ? (b = this.files[0], 
            d = b.name, b = b.size) : d = this.value.replace(/\\/g, "/").replace(/.*\//, "");
            var g = d.match(/\.([^\.]+)$/);
            g && (f = g[1].toLowerCase());
            b >= 5368709120 ? (CW.alert(L.error_upload_over_max_filesize.replace(/%%max_size%%/g, bytename(5368709120)).replace(/%%size%%/g, bytename(b))), $.browser.msie || $("#cw_send_file_input").show(), l()) : in_array(f, a) ? (CW.alert(L.error_upload_executable), $.browser.msie || $("#cw_send_file_input").show(), l()) : CW.post("gateway.php", {cmd: "get_upload_file_info",room_id: e,filename: d,filesize: b,
                region: "tokyo"}, function(a) {
                var b = [];
                b.push('<input type="hidden" name="key" value="' + a.uri + '"/>');
                b.push('<input type="hidden" name="AWSAccessKeyId" value="' + a.accesskey + '"/>');
                b.push('<input type="hidden" name="acl" value="' + a.acl + '"/>');
                b.push('<input type="hidden" name="success_action_redirect" value="' + a.redirect + '"/>');
                b.push('<input type="hidden" name="policy" value="' + a.policy + '"/>');
                b.push('<input type="hidden" name="signature" value="' + a.signature + '"/>');
                b.push('<input type="hidden" name="Content-Type" value="application/octet-stream"/>');
                b.push('<input type="hidden" name="Content-Disposition" value="' + escape_html(a.disposition) + '"/>');
                b.push('<input type="hidden" name="x-amz-server-side-encryption" value="AES256"/>');
                a = $(b.join(""));
                a.insertBefore("#cw_send_file_input");
                $("#cw_send_file_form").submit();
                a && a.remove()
            }, function(a) {
                in_array("is_storage_limit", a) ? CW.showStorageLimitDialog("file") : CW.alert(a.join("\n"));
                $.browser.msie || $("#cw_send_file_input").show();
                l()
            })
        });
        $("#cw_send_file_iframe").bind("load", function() {
            $.browser.msie || 
            $("#cw_send_file_input").show();
            try {
                var a = unescape_html($(this).contents().find("body").html());
                if (a.length > 0) {
                    var a = a.match(/\{.+\}/)[0], b = $.parseJSON(a);
                    b.result.is_storage_limit != void 0 ? CW.showStorageLimitDialog("file") : !b.status.success && b.status.message ? CW.alert(b.status.message) : b.status.success == !0 && (FL.updateStorageInfo(b.result.storage, b.result.storage_limit, b.result.limit_time, b.result.is_limit), CW.watch())
                } else
                    throw "error";
            } catch (d) {
                if (k)
                    if (f++, f > 1)
                        a = L.upload_cancel_send_message.replace(/%%size%%/g, 
                        bytename(FL.storage.available)), b = "", CW.plan == "free" ? (a += L.storage_cancel_send_object_suffix_upgrade, b = L.storage_cancel_upgrade_label) : CW.is_business && !CW.is_admin ? (a += L.storage_cancel_send_object_suffix_tell_admin, $("#cw_upload_error_button").hide()) : (a += L.storage_cancel_send_object_suffix_add_storage, b = L.storage_cancel_add_storage_label), $("#cw_upload_error_body").html(a), $("#cw_upload_error_link").val(b), $("#cw_upload_error_dialog").dialog("open");
                    else {
                        setTimeout(function() {
                            $("#cw_send_file_input").trigger("change")
                        }, 
                        1E3);
                        return
                    }
            }
            k && $(this).prop("src", "");
            l()
        });
        var l = function() {
            $("#cw_send_file_form")[0].reset();
            e = f = 0;
            k = !1;
            $("#cw_send_file_label").html(L.chatsend_filesend)
        };
        $("#cw_upload_error_dialog").dialog({width: 600,height: "auto",title: L.storage_cancel_send_cancel.replace(/%%object%%/, L.file),autoOpen: !1,modal: !0,hide: "fade",resizable: !1,buttons: [DIALOG_CLOSE_BUTTON]});
        $("#cw_upload_error_link").click(function() {
            $("#cw_upload_error_dialog").dialog("close");
            CW.plan == "free" ? CW.view.showServiceAdmin("upgrade") : 
            CW.view.showOptionPlanPrice()
        });
        $C("#cw_send_button").click(function() {
            a.sendChat()
        }).keydown(function(b) {
            if (b.keyCode != 9)
                return b.keyCode == 13 && a.sendChat(), !1
        });
        $("#cw_return_button").click(function() {
            a.setChatText("\n", !0)
        }).keydown(function(b) {
            if (b.keyCode != 9)
                return b.keyCode == 13 && a.setChatText("\n", !0), !1
        }).mousedown(function() {
            return !1
        });
        var m = $C("#cw_timeline");
        m.scroll(function() {
            RM.timeline && RM.timeline.has_old && m.scrollTop() < 10 && RM.timeline.loadOld()
        });
        m.on("mouseup", ".cw_message", function() {
            j = 
            $(this).parent()[0].id.substr(4)
        }).on("click", ".cw_ui_action_reply", function() {
            var b = $(this).parents(".ui_chat")[0].id.match(/cw_c([0-9]+)/)[1];
            if (b = RM.timeline.chat_id2chat_dat[b]) {
                d.focus();
                var e = ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(b.aid) : AC.getNickName(b.aid);
                a.setChatText("[To:" + b.aid + "] " + e + "\n", !0)
            }
        }).on("click", ".cw_ui_action_quote", function() {
            var b = $(this).parents(".ui_chat")[0].id.match(/cw_c([0-9]+)/)[1];
            if (b = RM.timeline.chat_id2chat_dat[b])
                if (d.focus(), g ? a.setChatText("[" + 
                L.chatsend_quote + " aid=" + b.aid + " time=" + b.tm + "]" + g + "[/" + L.chatsend_quote + "]\n", !0) : a.setChatText("[" + L.chatsend_quote + " aid=" + b.aid + " time=" + b.tm + "]" + b.msg + "[/" + L.chatsend_quote + "]\n", !0), $.browser.msie) {
                    var b = document.selection.createRange(), e = b.duplicate();
                    e.moveToElementText(this);
                    e.setEndPoint("EndToEnd", b);
                    a.last_caret_pos = e.text.length
                }
        }).on("dblclick", ".ui_chat", function() {
            if (CW.view.key.ctrl || CW.view.key.command) {
                var a = $(this)[0].id.match(/cw_c([0-9]+)/)[1], b = RM.timeline.chat_id2chat_dat[a];
                b && $("#cw_copy_dialog").dialog({title: L.chat_action_copy_title,width: 400,height: "auto",resizable: !1,autoOpen: !0,modal: !0,open: function() {
                        $("#cw_copy_text").val(b.msg)[0].select()
                    }})
            }
        }).on("mouseover", ".cw_ui_action_quote", function() {
            var a = $(this).parents(".ui_chat")[0].id.match(/cw_c([0-9]+)/)[1];
            g = j == a ? $.browser.msie ? document.selection.createRange().text : getSelection().getRangeAt(0).toString() : ""
        }).on("click", ".cw_ui_action_edit", function() {
            var b = $(this).parents(".ui_chat")[0].id.match(/cw_c([0-9]+)/)[1];
            if (!RM.timeline.chat_id2chat_dat[b])
                return CW.alert(L.chatsend_error_no_exist_for_edit), !1;
            n == "task" && $C("#cw_send_task").click();
            a.setChatEdit(b, RM);
            b = d[0];
            if (b.createTextRange) {
                var e = b.createTextRange();
                e.move("character", b.value.length);
                e.select()
            } else
                b.setSelectionRange && b.setSelectionRange(b.value.length, b.value.length)
        }).on("click", ".cw_ui_action_unread", function() {
            var a = $(this).parents(".ui_chat")[0].id.match(/cw_c([0-9]+)/)[1], b = RM;
            CW.get("gateway.php", {cmd: "read",room_id: b.id,last_chat_id: a,
                unread: 1}, function(a) {
                if (b.id == RM.id)
                    b.read_num = a.read_num, b.build({read_lock: !0})
            })
        }).on("click", ".cw_ui_action_link", function() {
            var b = $(this).parents(".ui_chat")[0].id.match(/cw_c([0-9]+)/)[1];
            d.focus();
            a.setChatText(CHATWORK_HOME + "/#!rid" + RM.id + "-" + b, !0)
        }).on("click", ".cw_ui_action_delete", function() {
            var b = $(this).parents(".ui_chat")[0].id.match(/cw_c([0-9]+)/), d = parseInt(b[1], 10), e = 0, f = !1;
            if (b = RM.timeline.chat_id2chat_dat[d].msg.match(/^\[info\][\s\S]+\[download:([0-9]+)\][^\[]+\[\/download\]\[\/info\]$/)) {
                if (e = 
                b[1], !FL.file_id2file_dat[e] || FL.file_id2file_dat[e].st != "open")
                    e = 0
            } else
                (b = RM.timeline.chat_id2chat_dat[d].msg.match(/^\[info\].+\[task aid=[0-9,]+ st=open lt=[0-9]+\][\s\S]+\[\/task\]\[\/info\]$/)) && (f = !0);
            if (e) {
                var g = FL.file_id2file_dat[e];
                $("#cw_plain_dialog_body").html(L.chatsend_delete_filetip + '<div class="ui_file_minipanel"><span class="cw_filename">' + escape_html(g.fn) + '</span> <span class="cw_filesize">(' + bytename(g.fz) + ")</span></div>");
                $("#cw_plain_dialog").dialog({title: L.chatsend_confirm_delete_with_file,
                    width: 500,modal: !0,hide: "fade",autoOpen: !0,buttons: [{text: L.chatsend_button_delete_with_file,click: function() {
                                FL.deleteFile(e);
                                a.model.deleteChat(d);
                                $("#cw_plain_dialog").dialog("close")
                            }}, {text: L.chatsend_button_delete_message_only,click: function() {
                                a.model.deleteChat(d);
                                $("#cw_plain_dialog").dialog("close")
                            }}, DIALOG_CANCEL_BUTTON]})
            } else if (f) {
                var h = [];
                for (g in TK.task_id2task_dat)
                    b = TK.task_id2task_dat[g], b.st != "deleted" && b.cid && b.cid == d && h.push(g);
                f = h.length;
                if (f > 0) {
                    for (var i = "", j = 0; j < f; j++)
                        g = h[j], 
                        b = TK.task_id2task_dat[g], i += CW.view.getTaskPanel(b, {type: "preview"});
                    $("#cw_plain_dialog_body").html(L.chatsend_delete_tasktip + '<pre class="ui_task_minipanel">' + i + "</pre>");
                    $("#cw_plain_dialog").dialog({title: L.chatsend_confirm_delete_with_task,width: 500,modal: !0,hide: "fade",autoOpen: !0,buttons: [{text: L.chatsend_button_delete_with_task,click: function() {
                                    TK.deleteTask(h);
                                    a.model.deleteChat(d);
                                    $("#cw_plain_dialog").dialog("close")
                                }}, {text: L.chatsend_button_delete_message_only,click: function() {
                                    a.model.deleteChat(d);
                                    $("#cw_plain_dialog").dialog("close")
                                }}, DIALOG_CANCEL_BUTTON]})
                } else
                    CW.confirm(L.chatsend_confirm_delete, function() {
                        a.model.deleteChat(d)
                    })
            } else
                CW.confirm(L.chatsend_confirm_delete, function() {
                    a.model.deleteChat(d)
                })
        })
    };
    a.initChatText = function() {
        a.setChatText("");
        CS.clearChatEdit();
        d.blur();
        $C("#cw_task_limit").val("");
        CS.clearTaskAssign();
        $C("#cw_send_task").hasClass("selected") && a.toggleSendType(!1)
    };
    a.sendChat = function() {
        if (RM.id) {
            if (!RM.view.disabled_send) {
                var b = d.val();
                if (!d.hasClass("explain") && 
                b) {
                    room_id = RM.id;
                    d.focus();
                    var e = i.val(), f = a.getTaskAssignList();
                    if (n == "task" && !f.length)
                        CW.alert(L.chatsend_error_no_incharge);
                    else {
                        a.setChatText("");
                        e ? a.clearChatEdit(e) : e = 0;
                        CS.deleteChatDraft(RM.id);
                        var b = CS.convertToSend(b), g = RM;
                        switch (n) {
                            case "chat":
                                var j = 0;
                                e || (j = g.addSendingChat(b));
                                a.model.sendChat(room_id, b, g.timeline.getLastChatId(), {read: 1,edit_id: e}, function() {
                                    j && g.deleteSendingChat(j);
                                    g.id == RM.id && g.build({scroll_to: "end"})
                                }, function(d) {
                                    j && g.deleteSendingChat(j);
                                    d ? CW.alert(d) : CW.alert(L.chatsend_error_send);
                                    RL.selectRoom(g.id);
                                    a.setChatText(b)
                                });
                                break;
                            case "task":
                                var k = $C("#cw_task_limit").val();
                                task_data = b + "|" + f.join(",") + "|" + k;
                                if (h == task_data)
                                    break;
                                h = task_data;
                                a.clearTaskAssign();
                                $C("#cw_task_limit").val("");
                                a.model.sendTask(g.id, b, k, f, function() {
                                    $C("#cw_task_limit").val("");
                                    h = "";
                                    n == "task" && $C("#cw_send_task").click()
                                }, function(d) {
                                    d ? CW.alert(d) : CW.alert(L.chatsend_error_send_task);
                                    h = "";
                                    RL.selectRoom(room_id);
                                    a.setChatText(b);
                                    a.setTaskAssign(f);
                                    $C("#cw_task_limit").val(k)
                                })
                        }
                    }
                }
            }
        } else
            CW.alert(L.error_no_select)
    };
    a.chatTextKeyDown = function(b) {
        k = typeof b.modifiers == "undefined" ? b.ctrlKey : b.modifiers & Event.CONTROL_MASK;
        q = typeof b.modifiers == "undefined" ? b.shiftKey : b.modifiers & Event.SHIFT_MASK;
        v = typeof b.modifiers == "undefined" ? b.altKey : b.modifiers & Event.ALT_MASK;
        press_key = b.keyCode;
        if (press_key == 38)
            b = RM.timeline.getLastChatId(), d.val() == "" && RM.timeline.chat_id2chat_dat[b].aid == AC.myid && a.setChatEdit(b, RM);
        else if (press_key == 27 && (b = i.val()))
            a.clearChatEdit(b), a.setChatText("");
        if (ST.data.enter_action == "send") {
            if (press_key == 
            13 && !q && !k && !v)
                return !1
        } else if (press_key == 13 && (k || q || v))
            return !1;
        RM && a.raiseRoomToTop(RM.id)
    };
    a.chatTextKeyUp = function(b) {
        up_key = b.keyCode;
        up_key == 13 && press_key == 13 && (ST.data.enter_action == "send" ? !q && !k && !v ? a.sendChat() : k ? $.browser.msie ? d.insertAtCaretForChatIE("\n") : d.insertAtCaret("\n") : v && ($.browser.msie ? d.insertAtCaretForChatIE("\n") : d.insertAtCaret("\n")) : (k || q || v) && a.sendChat());
        i.val() && d.val() == "" && CS.clearChatEdit(i.val());
        press_key == 27 && up_key == 27 && d.blur()
    };
    var l = {send_top: {top: "5px"},
        send_height: {height: "65px"},send_label: L.button_send,return_top: {top: "78px"}}, m = {send_top: {top: "68px"},send_height: {height: "38px"},send_label: L.button_add,return_top: {top: "109px"}};
    a.toggleSendType = function(b) {
        var e = $C("#cw_send_meta"), f = $C("#cw_send_meta_task");
        i.val() && $("#cw_cancel_button").click();
        var g = $C("#cw_send_task");
        g.removeClass("hover");
        var h = RM ? RM.view.expandto_height : 162;
        e.css("display") == "none" ? (g.addClass("selected"), $C("#cw_return_button_box").css("display") != "none" ? ($("#cw_button_send_key").hide(), 
        g = m.send_height) : g = l.send_height, $C("#cw_send_assign_area").find(".cw_assign img").length == 1 && $C("#cw_task_check_all").click(), h = {height: h - 96,"margin-top": 64}, b ? (f.fadeIn("fast"), e.slideDown("fast"), d.animate(h, "fast"), $C("#cw_send_button_box").animate(m.send_top, "fast"), $C("#cw_send_button").animate(g, "fast"), $C("#cw_return_button_box").animate(m.return_top, "fast")) : (f.show(), e.show(), d.css(h), $C("#cw_send_button_box").css(m.send_top), $C("#cw_send_button").css(g.height), $C("#cw_return_button_box").css(m.return_top)), 
        $C("#cw_send_button_label").text(L.button_add), n = "task", a.expandChatArea(!0)) : (g.removeClass("selected"), $("#cw_button_send_key").show(), h = {height: h - 32,"margin-top": 0}, b ? (f.fadeOut("fast"), e.slideUp("fast"), d.animate(h, "fast"), $C("#cw_send_button_box").animate(l.send_top, "fast"), $C("#cw_send_button").animate(l.send_height, "fast"), $C("#cw_return_button_box").animate(l.return_top, "fast")) : (f.hide(), e.hide(), d.css(h), $C("#cw_send_button_box").css(l.send_top), $C("#cw_send_button").css(l.send_height), 
        $C("#cw_return_button_box").css(l.return_top)), $C("#cw_send_button_label").text(L.button_send), n = "chat");
        d.blur()
    };
    var p = 0;
    a.expandChatArea = function(a) {
        if (innerLayout && RM && RM.id != p)
            if (!RM.view.disabled_send && a) {
                a = d.height();
                innerLayout.sizePane("south", RM.view.expandto_height);
                d.css("height", (RM.view.expandto_height - 32).toString() + "px");
                p = RM.id;
                var a = d.height() - a, b = $C("#cw_timeline");
                b.scrollTop(b.scrollTop() + a)
            } else
                innerLayout.sizePane("south", 100), d.css("height", "68px"), p = 0
    };
    a.resizeChatArea = function() {
        if (innerLayout.state.south.innerHeight != 
        100)
            RM.view.expandto_height = innerLayout.state.south.innerHeight, d.height(RM.view.expandto_height - 32)
    };
    a.disableChatArea = function() {
        $C("#cw_send_area .cw_buttons").hide();
        $C("#cw_send_file").hide();
        $C("#cw_cancel_button_box").click();
        $C("#cw_send_meta").css("display") != "none" && CS.view.toggleSendType(!1);
        $C("#cw_send_button_box").hide();
        $C("#cw_return_button_box").hide();
        $C("#cw_send_disable_message").show();
        $C("#cw_chattext_box").addClass("ui_chat_textarea_disabled");
        d.trigger("explain_update")
    };
    a.enableChatArea = 
    function() {
        $C("#cw_send_area .cw_buttons").show();
        $C("#cw_send_file").show();
        $C("#cw_send_button_box").show();
        ST.data.enter_action == "send" ? $("#cw_return_button_box").show() : $("#cw_return_button_box").hide();
        $C("#cw_send_disable_message").hide();
        $C("#cw_chattext_box").removeClass("ui_chat_textarea_disabled");
        d.trigger("explain_update")
    };
    a.setChatText = function(b, e) {
        a.expandChatArea(!0);
        RM && e && a.raiseRoomToTop(RM.id);
        b = CS.convertToEdit(b);
        e ? $.browser.msie ? d.insertAtCaretForChatIE(b) : d.insertAtCaret(b) : 
        d.val(b);
        d.removeClass("explain").css("color", "");
        if ($.browser.msie)
            a.last_caret_pos = e ? get_caret_position_ie(d[0]) : d.val().length;
        d.scrollTop(1E8);
        if (e) {
            var f = d.css("height");
            d.css("height", parseInt(f, 10) + 1);
            setTimeout(function() {
                d.css("height", f)
            }, 500)
        }
    };
    a.setChatEdit = function(b, e) {
        a.setChatEditColor(b);
        e.timeline.chat_id2chat_dat[b] && a.setChatText(e.timeline.chat_id2chat_dat[b].msg);
        d.focus()
    };
    a.setChatEditColor = function(b) {
        var e = i.val();
        e && a.clearChatEdit(e);
        $("#cw_c" + b).addClass("dev_ui_chat_edit");
        $C("#cw_cancel_button_box").show();
        d.css("background-color", "#ffeeee");
        i.val(b)
    };
    a.clearChatEdit = function(a) {
        a && $("#cw_c" + a).removeClass("dev_ui_chat_edit");
        d.css("background-color", "");
        i.val("");
        $C("#cw_cancel_button_box").hide()
    };
    a.raiseRoomToTop = function(a) {
        d.val() == "" && (RL.setLastUpdateTime(a, time()), RL.build(), $C("#cw_roomlist_items_area").scrollTop(0))
    };
    a.getTaskAssignList = function() {
        var a = [];
        $C("#cw_send_assign_area").find(".cw_assign .ico_checked").each(function() {
            a.push($(this).prop("id").substr(17))
        });
        return a
    };
    a.setTaskAssign = function(b) {
        a.clearTaskAssign();
        for (var d = 0, e = b.length; d < e; d++)
            $("#cw_assign_a" + b[d]).click()
    };
    a.clearTaskAssign = function() {
        $C("#cw_send_assign_area").find(".cw_assign .ico_checked").remove()
    }
}
function SearchView(b) {
    var a = this;
    a.model = b;
    a.msg_dat = [];
    a.result_timeline_list = [];
    a.result_byroom_dat = {};
    a.result_byroom_idx_list = [];
    a.result_byuser_dat = {};
    a.result_byuser_idx_list = [];
    a.result_type = "timeline";
    a.result_timeline_order = "new";
    a.result_not_found = !1;
    a.trial = !1;
    a.trial_search_num = 0;
    a.prepare = function() {
        if (SERVICE_PLAN == "free")
            a.trial_search_num = TRIAL_SEARCH_NUM, $("#cw_search_trial").val(L.search_trial_button.replace("%%rest_num%%", 10 - TRIAL_SEARCH_NUM)), $("#cw_service_admin_dialog_open").click(function() {
                $("#cw_search_dialog").dialog("close");
                CW.view.showServiceAdmin("upgrade")
            }), $("#cw_search_trial").click(function() {
                a.trial = !0;
                $("#cw_search_dialog").dialog("close");
                $("#cw_search_button").click()
            });
        $("#cw_search_dialog").dialog({title: L.search_title,height: 500,minWidth: 460,minHeight: 300,autoOpen: !1,resizable: !0,modal: !0,hide: "fade",open: function() {
                $("#cw_search_dialog").trigger("resize");
                a.refreshSpeaker()
            },resize: function() {
                $("#cw_search_dialog").trigger("resize")
            }});
        $("#cw_search_dialog").bind("resize", function() {
            $("#cw_search_box").height($("#cw_search_dialog").innerHeight() - 
            $("#cw_search_control_area").outerHeight() - $("#cw_search_result_head").outerHeight() - 45)
        }).click(function() {
            $C("#cw_all").click()
        });
        CW.view.registerKeyboardShortcut(70, !1, !0, !1, !1, function() {
            $("#cw_search_button").click()
        });
        $("#cw_search_button").click(function() {
            var b = $("#cw_search_dialog");
            !a.trial && SERVICE_PLAN == "free" ? (a.trial_search_num > 9 && $("#cw_search_trial").hide(), $("#cw_search_content").hide(), $("#cw_search_description_free").show(), b.dialog("option", "width", 800)) : ($("#cw_search_content").show(), 
            $("#cw_search_description_free").hide(), b.dialog("option", "width", 600));
            b = 0;
            a.trial && (b = 1E3);
            setTimeout(function() {
                $("#cw_search_dialog").dialog("open")
            }, b)
        }).hover(function() {
            $("#cw_search_icon").removeClass("ui_sp_icon_nav_search").addClass("ui_sp_icon_nav_search_hover")
        }, function() {
            $("#cw_search_icon").removeClass("ui_sp_icon_nav_search_hover").addClass("ui_sp_icon_nav_search")
        });
        var b = 0;
        $("#cw_search_q").keydown(function(a) {
            b = a.keyCode
        }).keyup(function(a) {
            b == a.keyCode && a.keyCode == 13 && $("#cw_search_send").click()
        });
        $("#cw_search_send").click(function() {
            var b = $("#cw_search_q").val();
            SC.cancelSearch();
            $("#cw_search_loading").hide();
            $("#cw_search_result").empty();
            if (b.length > 0 && !$("#cw_search_q").hasClass("ui_icsearch_blank")) {
                var d = {};
                d.q = b;
                if ($("#cw_search_option_area").css("display") != "none")
                    if (d.exq = $("#cw_search_except_q").val(), d.aid = $("#cw_search_speaker").val(), d.term = $("#cw_search_term").val(), d.term == "specify") {
                        var b = $("#cw_search_date_from").val(), f = $("#cw_search_date_to").val();
                        if (b != "")
                            d.term_from = 
                            strtotime_format(b, ST.data.dateformat);
                        if (f != "")
                            d.term_to = strtotime_format(f, ST.data.dateformat)
                    } else if (d.term != "all")
                        b = strtotime_format(CW.getDate(time(), "Y-m-d"), "Y-m-d"), d.term_from = b - parseInt(d.term, 10) * 86400, d.term_to = b;
                $("#cw_search_result_head").hide();
                $("#cw_search_loading").show();
                SC.search(d, function(b, d) {
                    var e;
                    a.msg_dat = b;
                    a.result_timeline_list = [];
                    a.result_byroom_dat = {};
                    a.result_byroom_idx_list = [];
                    a.result_byuser_dat = {};
                    a.result_byuser_idx_list = [];
                    for (e in a.msg_dat)
                        a.result_timeline_list.push(parseInt(a.msg_dat[e].id, 
                        10));
                    a.result_timeline_list.sort(function(a, b) {
                        return b - a
                    });
                    var f = a.result_timeline_list.length;
                    for (e = 0; e < f; e++) {
                        var i = a.msg_dat[a.result_timeline_list[e]];
                        a.result_byroom_dat[i.rid] == void 0 && (a.result_byroom_idx_list.push(i.rid), a.result_byroom_dat[i.rid] = []);
                        a.result_byroom_dat[i.rid].push(i.id);
                        a.result_byuser_dat[i.aid] == void 0 && (a.result_byuser_idx_list.push(i.aid), a.result_byuser_dat[i.aid] = []);
                        a.result_byuser_dat[i.aid].push(i.id)
                    }
                    a.result_not_found = a.result_timeline_list.length == 0 ? !0 : !1;
                    if (d && 
                    (a.trial_search_num = d, a.trial_search_num > 9))
                        a.trial = !1, $("#cw_search_dialog").dialog("close"), $("#cw_search_button").click();
                    $("#cw_search_loading").hide();
                    a.build()
                })
            } else
                $("#cw_search_result_num").text("0"), $("#cw_search_result").html(""), a.msg_dat = {}, a.result_timeline_list = [], a.result_byroom_dat = {}, a.result_byroom_idx_list = [], a.result_byuser_dat = {}, a.result_byuser_idx_list = [], a.result_not_found = !1, a.build()
        });
        $("#cw_search_option").click(function() {
            $("#cw_search_option_area").css("display") == 
            "none" ? $("#cw_search_option_area").show() : $("#cw_search_option_area").hide();
            $("#cw_search_dialog").trigger("resize")
        });
        $("#cw_search_term").change(function() {
            $(this).val() == "specify" ? $("#cw_search_term_specify").show() : $("#cw_search_term_specify").hide()
        });
        $("#cw_search_date_from").datepicker({showButtonPanel: !0,showOtherMonths: !0,selectOtherMonths: !0}).val("");
        $("#cw_search_date_to").datepicker({showButtonPanel: !0,showOtherMonths: !0,selectOtherMonths: !0}).val("");
        $("#cw_search_result").on("click", 
        ".cw_search_chat_fold", function() {
            var a = this.className.match(/cw_sh_g([0-9]+)/)[1], a = $("#cw_search_result_g" + a), b = $(this).find(".cw_search_arrow");
            a.css("display") == "none" ? (a.slideDown("normal"), b.addClass("ui_sp_icon_arrow_small_up")) : (a.slideUp("normal"), b.removeClass("ui_sp_icon_arrow_small_up"))
        }).on("click", ".cw_search_action_jump", function() {
            $("#cw_search_dialog").dialog("close")
        }).on("click", ".cw_ui_action_quote", function() {
            $("#cw_search_dialog").dialog("close");
            var b = $(this).parents(".ui_chat"), 
            b = b[0].className.match(/cw_c([0-9]+)/)[1];
            if (a.msg_dat[b]) {
                b = a.msg_dat[b];
                (!RM || RM.id != b.rid) && RL.selectRoom(b.rid);
                $C("#cw_chattext").focus();
                var d = $C("#cw_chattext").val();
                d.length > 0 && d.substr(-1);
                CS.view.setChatText("[" + L.chatsend_quote + " aid=" + b.aid + " time=" + b.tm + "]" + b.msg + "[/" + L.chatsend_quote + "]\n", !0)
            }
        }).on("click", "#cw_search_result_control_openall", function() {
            var a = $("#cw_search_result");
            a.find(".cw_search_result_group").slideDown("normal");
            a.find(".cw_search_arrow").addClass("ui_sp_icon_arrow_small_up")
        }).on("click", 
        "#cw_search_result_control_foldall", function() {
            var a = $("#cw_search_result");
            a.find(".cw_search_result_group").slideUp("normal");
            a.find(".cw_search_arrow").removeClass("ui_sp_icon_arrow_small_up")
        }).on("click", "#cw_search_result_control_new", function() {
            a.result_timeline_order = "new";
            a.build()
        }).on("click", "#cw_search_result_control_old", function() {
            a.result_timeline_order = "old";
            a.build()
        });
        $("#cw_search_q").bind("clear", function() {
            $("#cw_search_send").click()
        });
        $("#cw_search_byroom").click(function() {
            if (this.checked) {
                a.result_type = 
                "byroom";
                var b = document.getElementById("cw_search_byuser");
                if (b.checked)
                    b.checked = !1
            } else
                a.result_type = "timeline";
            a.build()
        });
        $("#cw_search_byuser").click(function() {
            if (this.checked) {
                a.result_type = "byuser";
                var b = document.getElementById("cw_search_byroom");
                if (b.checked)
                    b.checked = !1
            } else
                a.result_type = "timeline";
            a.build()
        })
    };
    a.refreshSpeaker = function() {
        $("#cw_search_speaker").empty();
        $("#cw_search_speaker").append('<option value="all">' + L.search_speaker_all + "</option>");
        var a = AC.getSortedMemberList();
        a.unshift(AC.myid);
        for (var b = 0, d = a.length; b < d; b++) {
            var i = a[b];
            $("#cw_search_speaker").append('<option value="' + i + '">' + CW.getFullName(i) + "</option>")
        }
    };
    a.build = function() {
        var b = $("#cw_search_q").val();
        $("#cw_search_overflow").hide();
        if (a.result_timeline_list && a.result_timeline_list.length > 0) {
            var e = [], d = 0, i = 0, n = [];
            switch (a.result_type) {
                case "byroom":
                    for (var h = 0, j = a.result_byroom_idx_list.length; h < j; h++)
                        for (var g = a.result_byroom_idx_list[h], k = 0, q = a.result_byroom_dat[g].length; k < q; k++)
                            n.push(a.result_byroom_dat[g][k]);
                    e[d++] = '<div class="ui_search_result_control"><a id="cw_search_result_control_openall">' + L.search_result_bychat_openall + '</a> | <a id="cw_search_result_control_foldall">' + L.search_result_bychat_closeall + "</a></div>";
                    break;
                case "byuser":
                    h = 0;
                    for (j = a.result_byuser_idx_list.length; h < j; h++) {
                        g = a.result_byuser_idx_list[h];
                        k = 0;
                        for (q = a.result_byuser_dat[g].length; k < q; k++)
                            n.push(a.result_byuser_dat[g][k])
                    }
                    e[d++] = '<div class="ui_search_result_control"><a id="cw_search_result_control_openall">' + L.search_result_bychat_openall + 
                    '</a> | <a id="cw_search_result_control_foldall">' + L.search_result_bychat_closeall + "</a></div>";
                    break;
                default:
                    n = a.result_timeline_list
            }
            h = 0;
            for (j = n.length; h < j; h++) {
                k = a.msg_dat[n[h]];
                switch (a.result_type) {
                    case "byroom":
                        if (i != k.rid)
                            i = k.rid, d > 0 && (e[d++] = "</div>"), e[d++] = '<div class="ui_search_chat_head cw_search_chat_fold cw_sh_g' + k.rid + '">' + RL.rooms[k.rid].getIcon() + " " + escape_html(RL.rooms[k.rid].getName()) + ' <span class="ui_search_chat_number">(' + number_format(a.result_byroom_dat[k.rid].length) + L.search_result_unit + 
                            ')</span><div class="ui_arrow_right ui_arrow_space"><span class="cw_search_arrow ui_sp_icon_arrow ui_sp_icon_arrow_small_down_g"></span></div></div><div id="cw_search_result_g' + k.rid + '" class="cw_search_result_group" style="display:none">';
                        break;
                    case "byuser":
                        if (i != k.aid)
                            i = k.aid, d > 0 && (e[d++] = "</div>"), e[d++] = '<div class="ui_search_chat_head cw_search_chat_fold cw_sh_g' + k.aid + '">' + CW.getAvatarPanel(k.aid, {clicktip: !1,hovertip: !1,size: "small"}) + " " + CW.getName(k.aid) + ' <span class="ui_search_chat_number">(' + 
                            number_format(a.result_byuser_dat[k.aid].length) + L.search_result_unit + ')</span><div class="ui_arrow_right ui_arrow_space"><span class="cw_search_arrow ui_sp_icon_arrow ui_sp_icon_arrow_small_down_g"></span></div></div><div id="cw_search_result_g' + k.aid + '" class="cw_search_result_group" style="display:none">'
                }
                var q = '<div class="cw_speaker ui_speaker">' + CW.getAvatarPanel(k.aid, {size: "medium"}) + "</div>", g = CW.getName(k.aid), v = CW.renderMessage(k.msg), l = '<span title="' + CW.getDate(k.tm) + '">' + CW.getDate(k.tm) + 
                "</span>", m = "", m = '<div id="cw_search_act_c' + k.id + '" class="ui_chat_action"><ul class="ui_chat_action_nav">';
                m += '<li><a href="#!rid' + k.rid + "-" + k.id + '" class="cw_room_link cw_search_action_jump ui_sp_icon_action ui_sp_icon_action_reply" title="">' + L.message_open_message + "</a></li>";
                m += '<li class="cw_ui_action_quote"><span class="ui_sp_icon_action ui_sp_icon_action_quote" title="' + L.chat_action_quote_desc + '">' + L.chat_action_quote + "</span></li>";
                m += "</ul></div>";
                k.utm > 0 && (l += ' <span title="' + L.chat_edited_log.replace("%%date%%", 
                CW.getDate(k.utm)) + '" class="ui_sp_icon ui_sp_icon_comment_edit"></span>');
                e[d++] = '<div class="ui_chat cw_c' + k.id + '">' + q + '<div class="ui_message cw_message"><div class="ui_chat_meta"><span class="cw_chat_name ui_chat_name">' + g + "</span></div><pre>" + v + '</pre></div><div class="ui_chat_meta ui_chat_date">' + l + "</div>" + m + "</div>"
            }
            switch (a.result_type) {
                case "byroom":
                    d > 0 && (e[d++] = "</div>");
                    break;
                case "byuser":
                    d > 0 && (e[d++] = "</div>")
            }
            $("#cw_search_result_head").show();
            $("#cw_search_result_num").text(number_format(n.length));
            n.length == 100 && $("#cw_search_overflow").show();
            $("#cw_search_result").html(e.join(""));
            b = b.replace(/\u3000|,|\u3001|\u30fb/g, " ").split(" ");
            h = 0;
            for (e = b.length; h < e; h++)
                d = b[h], d.charAt(0) == "+" && (d = d.substr(1)), d = trim(d), d.length > 0 && $("#cw_search_result pre").markText(d, "ui_search_em")
        } else
            $("#cw_search_result_num").text("0"), a.result_not_found ? ($("#cw_search_result_head").show(), $("#cw_search_result").html('<div class="ui_search_not_found">' + L.search_result_not_found.replace("%%keyword%%", escape_html(b)) + 
            "</div>")) : ($("#cw_search_result_head").hide(), $("#cw_search_result").empty())
    }
}
(function(b) {
    function a(a) {
        return typeof a == "object" ? a : {top: a,left: a}
    }
    var f = b.scrollTo = function(a, d, f) {
        b(window).scrollTo(a, d, f)
    };
    f.defaults = {axis: "xy",duration: parseFloat(b.fn.jquery) >= 1.3 ? 0 : 1};
    f.window = function() {
        return b(window)._scrollable()
    };
    b.fn._scrollable = function() {
        return this.map(function() {
            if (this.nodeName && b.inArray(this.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) == -1)
                return this;
            var a = (this.contentWindow || this).document || this.ownerDocument || this;
            return b.browser.safari || 
            a.compatMode == "BackCompat" ? a.body : a.documentElement
        })
    };
    b.fn.scrollTo = function(e, d, i) {
        typeof d == "object" && (i = d, d = 0);
        typeof i == "function" && (i = {onAfter: i});
        e == "max" && (e = 9E9);
        i = b.extend({}, f.defaults, i);
        d = d || i.speed || i.duration;
        i.queue = i.queue && i.axis.length > 1;
        i.queue && (d /= 2);
        i.offset = a(i.offset);
        i.over = a(i.over);
        return this._scrollable().each(function() {
            function n(a) {
                j.animate(q, d, i.easing, a && function() {
                    a.call(this, e, i)
                })
            }
            var h = this, j = b(h), g = e, k, q = {}, v = j.is("html,body");
            switch (typeof g) {
                case "number":
                case "string":
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(g)) {
                        g = 
                        a(g);
                        break
                    }
                    g = b(g, this);
                case "object":
                    if (g.is || g.style)
                        k = (g = b(g)).offset()
            }
            b.each(i.axis.split(""), function(a, b) {
                var d = b == "x" ? "Left" : "Top", e = d.toLowerCase(), x = "scroll" + d, z = h[x], I = f.max(h, b);
                k ? (q[x] = k[e] + (v ? 0 : z - j.offset()[e]), i.margin && (q[x] -= parseInt(g.css("margin" + d)) || 0, q[x] -= parseInt(g.css("border" + d + "Width")) || 0), q[x] += i.offset[e] || 0, i.over[e] && (q[x] += g[b == "x" ? "width" : "height"]() * i.over[e])) : (d = g[e], q[x] = d.slice && d.slice(-1) == "%" ? parseFloat(d) / 100 * I : d);
                /^\d+$/.test(q[x]) && (q[x] = q[x] <= 0 ? 0 : Math.min(q[x], 
                I));
                !a && i.queue && (z != q[x] && n(i.onAfterFirst), delete q[x])
            });
            n(i.onAfter)
        }).end()
    };
    f.max = function(a, d) {
        var f = d == "x" ? "Width" : "Height", n = "scroll" + f;
        if (!b(a).is("html,body"))
            return a[n] - b(a)[f.toLowerCase()]();
        var f = "client" + f, h = a.ownerDocument.documentElement, j = a.ownerDocument.body;
        return Math.max(h[n], j[n]) - Math.min(h[f], j[f])
    }
})(jQuery);
(function(b) {
    b.layout = {version: "1.3.rc29.15",revision: 0.032915,language: {Open: "Open",Close: "Close",Resize: "Resize",Slide: "Slide Open",Pin: "Pin",Unpin: "Un-Pin",noRoomToOpenTip: "Not enough room to show this pane.",pane: "pane",selector: "selector",errButton: "Error Adding Button \n\nInvalid ",errContainerMissing: "UI Layout Initialization Error\n\nThe specified layout-container does not exist.",errCenterPaneMissing: "UI Layout Initialization Error\n\nThe center-pane element does not exist.\n\nThe center-pane is a required element.",
            errContainerHeight: "UI Layout Initialization Warning\n\nThe layout-container \"CONTAINER\" has no height.\n\nTherefore the layout is 0-height and hence 'invisible'!"},browser: {mozilla: !!b.browser.mozilla,webkit: !!b.browser.webkit || !!b.browser.safari,msie: !!b.browser.msie,isIE6: !!b.browser.msie && b.browser.version == 6,boxModel: !1},scrollbarWidth: function() {
            return window.scrollbarWidth || b.layout.getScrollbarSize("width")
        },scrollbarHeight: function() {
            return window.scrollbarHeight || b.layout.getScrollbarSize("height")
        },
        getScrollbarSize: function(a) {
            var f = b('<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; overflow: scroll;"></div>').appendTo("body"), e = {width: f.width() - f[0].clientWidth,height: f.height() - f[0].clientHeight};
            f.remove();
            window.scrollbarWidth = e.width;
            window.scrollbarHeight = e.height;
            return a.match(/^(width|height)$/i) ? e[a] : e
        },showInvisibly: function(a, f) {
            if (!a)
                return {};
            a.jquery || (a = b(a));
            var e = {display: a.css("display"),visibility: a.css("visibility")};
            return f || 
            e.display == "none" ? (a.css({display: "block",visibility: "hidden"}), e) : {}
        },getElementDimensions: function(a) {
            var f = {}, e = f.css = {}, d = {}, i, n, h = b.layout.cssNum, j = a.offset();
            f.offsetLeft = j.left;
            f.offsetTop = j.top;
            b.each("Left,Right,Top,Bottom".split(","), function(g, h) {
                i = e["border" + h] = b.layout.borderWidth(a, h);
                n = e["padding" + h] = b.layout.cssNum(a, "padding" + h);
                d[h] = i + n;
                f["inset" + h] = n
            });
            f.offsetWidth = a.innerWidth();
            f.offsetHeight = a.innerHeight();
            f.outerWidth = a.outerWidth();
            f.outerHeight = a.outerHeight();
            f.innerWidth = 
            Math.max(0, f.outerWidth - d.Left - d.Right);
            f.innerHeight = Math.max(0, f.outerHeight - d.Top - d.Bottom);
            e.width = a.width();
            e.height = a.height();
            e.top = h(a, "top", !0);
            e.bottom = h(a, "bottom", !0);
            e.left = h(a, "left", !0);
            e.right = h(a, "right", !0);
            return f
        },getElementCSS: function(a, b) {
            var e = {}, d = a[0].style, i = b.split(","), n = "Top,Bottom,Left,Right".split(","), h = "Color,Style,Width".split(","), j, g, k, q, v, l;
            for (q = 0; q < i.length; q++)
                if (j = i[q], j.match(/(border|padding|margin)$/))
                    for (v = 0; v < 4; v++)
                        if (g = n[v], j == "border")
                            for (l = 0; l < 3; l++)
                                k = 
                                h[l], e[j + g + k] = d[j + g + k];
                        else
                            e[j + g] = d[j + g];
                else
                    e[j] = d[j];
            return e
        },cssWidth: function(a, f) {
            var e = b.layout.borderWidth, d = b.layout.cssNum;
            if (f <= 0)
                return 0;
            if (!b.layout.browser.boxModel)
                return f;
            e = f - e(a, "Left") - e(a, "Right") - d(a, "paddingLeft") - d(a, "paddingRight");
            return Math.max(0, e)
        },cssHeight: function(a, f) {
            var e = b.layout.borderWidth, d = b.layout.cssNum;
            if (f <= 0)
                return 0;
            if (!b.layout.browser.boxModel)
                return f;
            e = f - e(a, "Top") - e(a, "Bottom") - d(a, "paddingTop") - d(a, "paddingBottom");
            return Math.max(0, e)
        },cssNum: function(a, 
        f, e) {
            a.jquery || (a = b(a));
            var d = b.layout.showInvisibly(a), f = b.curCSS(a[0], f, !0), e = e && f == "auto" ? f : parseInt(f, 10) || 0;
            a.css(d);
            return e
        },borderWidth: function(a, f) {
            a.jquery && (a = a[0]);
            var e = "border" + f.substr(0, 1).toUpperCase() + f.substr(1);
            return b.curCSS(a, e + "Style", !0) == "none" ? 0 : parseInt(b.curCSS(a, e + "Width", !0), 10) || 0
        },isMouseOverElem: function(a, f) {
            var e = b(f || this), d = e.offset(), i = d.top, d = d.left, n = d + e.outerWidth(), e = i + e.outerHeight(), h = a.pageX, j = a.pageY;
            return b.layout.browser.msie && h < 0 && j < 0 || h >= d && h <= 
            n && j >= i && j <= e
        }};
    b.fn.layout = function(a) {
        function f(a) {
            if (!a)
                return !0;
            var d = a.keyCode;
            if (d < 33)
                return !0;
            var e = {38: "north",40: "south",37: "west",39: "east"}, f = a.shiftKey, g = a.ctrlKey, h, i, j, k;
            g && d >= 37 && d <= 40 && t[e[d]].enableCursorHotkey ? k = e[d] : (g || f) && b.each(u.borderPanes.split(","), function(a, b) {
                h = t[b];
                i = h.customHotkey;
                j = h.customHotkeyModifier;
                if (f && j == "SHIFT" || g && j == "CTRL" || g && f)
                    if (i && d == (isNaN(i) || i <= 9 ? i.toUpperCase().charCodeAt(0) : i))
                        return k = b, !1
            });
            if (!k || !w[k] || !t[k].closable || r[k].isHidden)
                return !0;
            ia(k);
            a.stopPropagation();
            return a.returnValue = !1
        }
        function e(a) {
            if (F()) {
                this && this.tagName && (a = this);
                var e;
                O(a) ? e = w[a] : b(a).data("layoutRole") ? e = b(a) : b(a).parents().each(function() {
                    if (b(this).data("layoutRole"))
                        return e = b(this), !1
                });
                if (e && e.length) {
                    var f = e.data("layoutEdge"), a = r[f];
                    a.cssSaved && d(f);
                    if (a.isSliding || a.isResizing || a.isClosed)
                        a.cssSaved = !1;
                    else {
                        var g = {zIndex: u.zIndex.pane_normal + 2}, h = {}, i = e.css("overflow"), j = e.css("overflowX"), k = e.css("overflowY");
                        if (i != "visible")
                            h.overflow = i, g.overflow = 
                            "visible";
                        if (j && !j.match(/visible|auto/))
                            h.overflowX = j, g.overflowX = "visible";
                        if (k && !k.match(/visible|auto/))
                            h.overflowY = j, g.overflowY = "visible";
                        a.cssSaved = h;
                        e.css(g);
                        b.each(u.allPanes.split(","), function(a, b) {
                            b != f && d(b)
                        })
                    }
                }
            }
        }
        function d(a) {
            if (F()) {
                this && this.tagName && (a = this);
                var d;
                O(a) ? d = w[a] : b(a).data("layoutRole") ? d = b(a) : b(a).parents().each(function() {
                    if (b(this).data("layoutRole"))
                        return d = b(this), !1
                });
                if (d && d.length) {
                    var a = d.data("layoutEdge"), a = r[a], e = a.cssSaved || {};
                    !a.isSliding && !a.isResizing && 
                    d.css("zIndex", u.zIndex.pane_normal);
                    d.css(e);
                    a.cssSaved = !1
                }
            }
        }
        function i(a, d, e) {
            var f = b(a), g = t.showErrorMessages;
            if (f.length)
                if (u.borderPanes.indexOf(d) == -1)
                    g && alert(C.errButton + C.pane + ": " + d);
                else
                    return a = t[d].buttonClass + "-" + e, f.addClass(a + " " + a + "-" + d).data("layoutName", t.name), f;
            else
                g && alert(C.errButton + C.selector + ": " + a);
            return null
        }
        function n(a, b, d) {
            switch (b.toLowerCase()) {
                case "toggle":
                    h(a, d);
                    break;
                case "open":
                    j(a, d);
                    break;
                case "close":
                    g(a, d);
                    break;
                case "pin":
                    k(a, d);
                    break;
                case "toggle-slide":
                    h(a, 
                    d, !0);
                    break;
                case "open-slide":
                    j(a, d, !0)
            }
        }
        function h(a, b, d) {
            (a = i(a, b, "toggle")) && a.click(function(a) {
                ia(b, !!d);
                a.stopPropagation()
            })
        }
        function j(a, b, d) {
            (a = i(a, b, "open")) && a.attr("title", C.Open).click(function(a) {
                Y(b, !!d);
                a.stopPropagation()
            })
        }
        function g(a, b) {
            var d = i(a, b, "close");
            d && d.attr("title", C.Close).click(function(a) {
                V(b);
                a.stopPropagation()
            })
        }
        function k(a, d) {
            var e = i(a, d, "pin");
            if (e) {
                var f = r[d];
                e.click(function(a) {
                    v(b(this), d, f.isSliding || f.isClosed);
                    f.isSliding || f.isClosed ? Y(d) : V(d);
                    a.stopPropagation()
                });
                v(e, d, !f.isClosed && !f.isSliding);
                u[d].pins.push(a)
            }
        }
        function q(a, d) {
            b.each(u[a].pins, function(e, f) {
                v(b(f), a, d)
            })
        }
        function v(a, b, d) {
            var e = a.attr("pin");
            if (!(e && d == (e == "down"))) {
                var e = t[b].buttonClass + "-pin", f = e + "-" + b, b = e + "-up " + f + "-up", e = e + "-down " + f + "-down";
                a.attr("pin", d ? "down" : "up").attr("title", d ? C.Unpin : C.Pin).removeClass(d ? b : e).addClass(d ? e : b)
            }
        }
        function l(a) {
            for (var a = b.extend({}, t.cookie, a || {}).name || t.name || "Layout", d = document.cookie, d = d ? d.split(";") : [], e, f = 0, g = d.length; f < g; f++)
                if (e = b.trim(d[f]).split("="), 
                e[0] == a)
                    return I(decodeURIComponent(e[1]));
            return ""
        }
        function m(a, d) {
            var e = b.extend({}, t.cookie, d || {}), f = e.name || t.name || "Layout", g = "", h = "", i = !1;
            e.expires.toUTCString ? h = e.expires : typeof e.expires == "number" && (h = new Date, e.expires > 0 ? h.setDate(h.getDate() + e.expires) : (h.setYear(1970), i = !0));
            h && (g += ";expires=" + h.toUTCString());
            e.path && (g += ";path=" + e.path);
            e.domain && (g += ";domain=" + e.domain);
            e.secure && (g += ";secure");
            i ? (r.cookie = {}, document.cookie = f + "=" + g) : (r.cookie = x(a || e.keys), document.cookie = f + "=" + encodeURIComponent(z(r.cookie)) + 
            g);
            return b.extend({}, r.cookie)
        }
        function p(a) {
            if (a = l(a))
                r.cookie = b.extend({}, a), o(a);
            return a
        }
        function o(a, d) {
            a = U(a);
            b.extend(!0, t, a);
            if (r.initialized) {
                var e, f, g, h, i = !d;
                b.each(u.allPanes.split(","), function(b, d) {
                    e = a[d];
                    if (typeof e == "object")
                        f = e.size, h = e.initClosed, g = e.initHidden, (f > 0 || f == "auto") && fa(d, f), g === !0 ? qa(d, i) : h === !1 ? Y(d, !1, i) : h === !0 ? V(d, !1, i) : g === !1 && ma(d, !1, i)
                })
            }
        }
        function x(a) {
            var d = {}, e = {isClosed: "initClosed",isHidden: "initHidden"}, f, g, h;
            if (!a)
                a = t.cookie.keys;
            b.isArray(a) && (a = a.join(","));
            for (var a = a.replace(/__/g, ".").split(","), i = 0, j = a.length; i < j; i++)
                f = a[i].split("."), g = f[0], f = f[1], u.allPanes.indexOf(g) < 0 || (h = r[g][f], h != void 0 && (f == "isClosed" && r[g].isSliding && (h = !0), (d[g] || (d[g] = {}))[e[f] ? e[f] : f] = h));
            return d
        }
        function z(a) {
            function b(a) {
                var d = [], e = 0, f, g, S;
                for (f in a)
                    g = a[f], S = typeof g, S == "string" ? g = '"' + g + '"' : S == "object" && (g = b(g)), d[e++] = '"' + f + '":' + g;
                return "{" + d.join(",") + "}"
            }
            return b(a)
        }
        function I(a) {
            try {
                return window.eval("(" + a + ")") || {}
            } catch (b) {
                return {}
            }
        }
        var C = b.layout.language, 
        t = {name: "",containerClass: "ui-layout-container",scrollToBookmarkOnLoad: !0,resizeWithWindow: !0,resizeWithWindowDelay: 200,resizeWithWindowMaxDelay: 0,onresizeall_start: null,onresizeall_end: null,onload_start: null,onload_end: null,onunload_start: null,onunload_end: null,autoBindCustomButtons: !1,zIndex: null,initPanes: !0,showErrorMessages: !0,defaults: {applyDemoStyles: !1,closable: !0,resizable: !0,slidable: !0,initClosed: !1,initHidden: !1,contentSelector: ".ui-layout-content",contentIgnoreSelector: ".ui-layout-ignore",
                findNestedContent: !1,paneClass: "ui-layout-pane",resizerClass: "ui-layout-resizer",togglerClass: "ui-layout-toggler",buttonClass: "ui-layout-button",minSize: 0,maxSize: 0,spacing_open: 6,spacing_closed: 6,togglerLength_open: 50,togglerLength_closed: 50,togglerAlign_open: "center",togglerAlign_closed: "center",togglerTip_open: C.Close,togglerTip_closed: C.Open,togglerContent_open: "",togglerContent_closed: "",resizerDblClickToggle: !0,autoResize: !0,autoReopen: !0,resizerDragOpacity: 1,maskIframesOnResize: !0,resizeNestedLayout: !0,
                resizeWhileDragging: !1,resizeContentWhileDragging: !1,noRoomToOpenTip: C.noRoomToOpenTip,resizerTip: C.Resize,sliderTip: C.Slide,sliderCursor: "pointer",slideTrigger_open: "click",slideTrigger_close: "mouseleave",slideDelay_open: 300,slideDelay_close: 300,hideTogglerOnSlide: !1,preventQuickSlideClose: b.layout.browser.webkit,preventPrematureSlideClose: !1,showOverflowOnHover: !1,enableCursorHotkey: !1,customHotkeyModifier: "SHIFT",fxName: "slide",fxSpeed: null,fxSettings: {},fxOpacityFix: !0,triggerEventsOnLoad: !1,
                triggerEventsWhileDragging: !0,onshow_start: null,onshow_end: null,onhide_start: null,onhide_end: null,onopen_start: null,onopen_end: null,onclose_start: null,onclose_end: null,onresize_start: null,onresize_end: null,onsizecontent_start: null,onsizecontent_end: null,onswap_start: null,onswap_end: null,ondrag_start: null,ondrag_end: null},north: {paneSelector: ".ui-layout-north",size: "auto",resizerCursor: "n-resize",customHotkey: ""},south: {paneSelector: ".ui-layout-south",size: "auto",resizerCursor: "s-resize",customHotkey: ""},
            east: {paneSelector: ".ui-layout-east",size: 200,resizerCursor: "e-resize",customHotkey: ""},west: {paneSelector: ".ui-layout-west",size: 200,resizerCursor: "w-resize",customHotkey: ""},center: {paneSelector: ".ui-layout-center",minWidth: 0,minHeight: 0},useStateCookie: !1,cookie: {name: "",autoSave: !0,autoLoad: !0,domain: "",path: "",expires: "",secure: !1,keys: "north.size,south.size,east.size,west.size,north.isClosed,south.isClosed,east.isClosed,west.isClosed,north.isHidden,south.isHidden,east.isHidden,west.isHidden"}}, 
        X = {slide: {all: {duration: "fast"},north: {direction: "up"},south: {direction: "down"},east: {direction: "right"},west: {direction: "left"}},drop: {all: {duration: "slow"},north: {direction: "up"},south: {direction: "down"},east: {direction: "right"},west: {direction: "left"}},scale: {all: {duration: "fast"}}}, r = {id: "layout" + (new Date).getTime(),initialized: !1,container: {},north: {},south: {},east: {},west: {},center: {},cookie: {}}, u = {allPanes: "north,south,west,east,center",borderPanes: "north,south,west,east",altSide: {north: "south",
                south: "north",east: "west",west: "east"},hidden: {visibility: "hidden"},visible: {visibility: "visible"},zIndex: {pane_normal: 1,resizer_normal: 2,iframe_mask: 2,pane_sliding: 100,pane_animate: 1E3,resizer_drag: 1E4},resizers: {cssReq: {position: "absolute",padding: 0,margin: 0,fontSize: "1px",textAlign: "left",overflow: "hidden"},cssDemo: {background: "#DDD",border: "none"}},togglers: {cssReq: {position: "absolute",display: "block",padding: 0,margin: 0,overflow: "hidden",textAlign: "center",fontSize: "1px",cursor: "pointer",zIndex: 1},
                cssDemo: {background: "#AAA"}},content: {cssReq: {position: "relative"},cssDemo: {overflow: "auto",padding: "10px"},cssDemoPane: {overflow: "hidden",padding: 0}},panes: {cssReq: {position: "absolute",margin: 0},cssDemo: {padding: "10px",background: "#FFF",border: "1px solid #BBB",overflow: "auto"}},north: {side: "Top",sizeType: "Height",dir: "horz",cssReq: {top: 0,bottom: "auto",left: 0,right: 0,width: "auto"},pins: []},south: {side: "Bottom",sizeType: "Height",dir: "horz",cssReq: {top: "auto",bottom: 0,left: 0,right: 0,width: "auto"},pins: []},
            east: {side: "Right",sizeType: "Width",dir: "vert",cssReq: {left: "auto",right: 0,top: "auto",bottom: "auto",height: "auto"},pins: []},west: {side: "Left",sizeType: "Width",dir: "vert",cssReq: {left: 0,right: "auto",top: "auto",bottom: "auto",height: "auto"},pins: []},center: {dir: "center",cssReq: {left: "auto",right: "auto",top: "auto",bottom: "auto",height: "auto",width: "auto"}}}, H = {data: {},set: function(a, b, d) {
                H.clear(a);
                H.data[a] = setTimeout(b, d)
            },clear: function(a) {
                var b = H.data;
                b[a] && (clearTimeout(b[a]), delete b[a])
            }}, O = function(a) {
            try {
                return typeof a == 
                "string" || typeof a == "object" && a.constructor.toString().match(/string/i) !== null
            } catch (b) {
                return !1
            }
        }, D = function(a, b) {
            return Math.max(a, b)
        }, U = function(a) {
            var d, e = {cookie: {},defaults: {fxSettings: {}},north: {fxSettings: {}},south: {fxSettings: {}},east: {fxSettings: {}},west: {fxSettings: {}},center: {fxSettings: {}}}, a = a || {};
            a.effects || a.cookie || a.defaults || a.north || a.south || a.west || a.east || a.center ? e = b.extend(!0, e, a) : b.each(a, function(a, b) {
                d = a.split("__");
                if (!d[1] || e[d[0]])
                    e[d[1] ? d[0] : "defaults"][d[1] ? d[1] : d[0]] = 
                    b
            });
            return e
        }, Q = function(a, d, e) {
            function f(h) {
                var i = u[h];
                i.doCallback ? (g.push(h), h = i.callback.split(",")[1], h != d && !b.inArray(h, g) >= 0 && f(h)) : (i.doCallback = !0, i.callback = a + "," + d + "," + (e ? 1 : 0))
            }
            var g = [];
            b.each(u.borderPanes.split(","), function(a, b) {
                if (u[b].isMoving)
                    return f(b), !1
            })
        }, ea = function(a) {
            a = u[a];
            u.isLayoutBusy = !1;
            delete a.isMoving;
            if (a.doCallback && a.callback) {
                a.doCallback = !1;
                var b = a.callback.split(","), d = b[2] > 0 ? !0 : !1;
                b[0] == "open" ? Y(b[1], d) : b[0] == "close" && V(b[1], d);
                if (!a.doCallback)
                    a.callback = 
                    null
            }
        }, B = function(a, b) {
            if (b) {
                var d;
                try {
                    if (typeof b == "function")
                        d = b;
                    else if (O(b))
                        if (b.match(/,/)) {
                            var e = b.split(",");
                            d = eval(e[0]);
                            if (typeof d == "function" && e.length > 1)
                                return d(e[1])
                        } else
                            d = eval(b);
                    else
                        return;
                    if (typeof d == "function")
                        return a && w[a] ? d(a, w[a], r[a], t[a], t.name) : d(ja, r, t, t.name)
                } catch (f) {
                }
            }
        }, pa = function(a) {
            if (!b.layout.browser.mozilla) {
                var d = w[a];
                r[a].tagName == "IFRAME" ? d.css(u.hidden).css(u.visible) : d.find("IFRAME").css(u.hidden).css(u.visible)
            }
        }, K = function(a, d) {
            var e = O(a), f = e ? w[a] : b(a);
            if (!f.length)
                return 0;
            isNaN(d) && (d = e ? T(a) : f.outerWidth());
            return b.layout.cssWidth(f, d)
        }, R = function(a, d) {
            var e = O(a), f = e ? w[a] : b(a);
            if (!f.length)
                return 0;
            isNaN(d) && (d = e ? T(a) : f.outerHeight());
            return b.layout.cssHeight(f, d)
        }, J = function(a) {
            var b = u[a].dir, a = {minWidth: 1001 - K(a, 1E3),minHeight: 1001 - R(a, 1E3)};
            if (b == "horz")
                a.minSize = a.minHeight;
            if (b == "vert")
                a.minSize = a.minWidth;
            return a
        }, aa = function(a, d, e) {
            var f = a;
            O(a) ? f = w[a] : a.jquery || (f = b(a));
            a = R(f, d);
            f.css({height: a,visibility: "visible"});
            a > 0 && f.innerWidth() > 
            0 ? e && f.data("autoHidden") && (f.show().data("autoHidden", !1), b.layout.browser.mozilla || f.css(u.hidden).css(u.visible)) : e && !f.data("autoHidden") && f.hide().data("autoHidden", !0)
        }, W = function(a, d, e) {
            if (!e)
                e = u[a].dir;
            O(d) && d.match(/%/) && (d = parseInt(d, 10) / 100);
            if (d === 0)
                return 0;
            else if (d >= 1)
                return parseInt(d, 10);
            else if (d > 0) {
                var a = t, f;
                e == "horz" ? f = y.innerHeight - (w.north ? a.north.spacing_open : 0) - (w.south ? a.south.spacing_open : 0) : e == "vert" && (f = y.innerWidth - (w.west ? a.west.spacing_open : 0) - (w.east ? a.east.spacing_open : 
                0));
                return Math.floor(f * d)
            } else if (a == "center")
                return 0;
            else {
                f = w[a];
                var e = e == "horz" ? "height" : "width", a = b.layout.showInvisibly(f), g = f.css(e);
                f.css(e, "auto");
                d = e == "height" ? f.outerHeight() : f.outerWidth();
                f.css(e, g).css(a);
                return d
            }
        }, T = function(a, b) {
            var d = w[a], e = t[a], f = r[a], g = b ? e.spacing_open : 0, e = b ? e.spacing_closed : 0;
            return !d || f.isHidden ? 0 : f.isClosed || f.isSliding && b ? e : u[a].dir == "horz" ? d.outerHeight() + g : d.outerWidth() + g
        }, M = function(a, b) {
            if (F()) {
                var d = t[a], e = r[a], f = u[a], g = f.dir;
                f.side.toLowerCase();
                f.sizeType.toLowerCase();
                var f = b != void 0 ? b : e.isSliding, h = d.spacing_open, i = u.altSide[a], j = r[i], k = w[i], l = !k || j.isVisible === !1 || j.isSliding ? 0 : g == "horz" ? k.outerHeight() : k.outerWidth(), i = (!k || j.isHidden ? 0 : t[i][j.isClosed !== !1 ? "spacing_closed" : "spacing_open"]) || 0, j = g == "horz" ? y.innerHeight : y.innerWidth, k = J("center"), k = g == "horz" ? D(t.center.minHeight, k.minHeight) : D(t.center.minWidth, k.minWidth), f = j - h - (f ? 0 : W("center", k, g) + l + i), g = e.minSize = D(W(a, d.minSize), J(a).minSize), h = d.maxSize ? W(a, d.maxSize) : 1E5, f = e.maxSize = Math.min(h, f), e = e.resizerPosition = 
                {}, h = y.insetTop, l = y.insetLeft, i = y.innerWidth, j = y.innerHeight, d = d.spacing_open;
                switch (a) {
                    case "north":
                        e.min = h + g;
                        e.max = h + f;
                        break;
                    case "west":
                        e.min = l + g;
                        e.max = l + f;
                        break;
                    case "south":
                        e.min = h + j - f - d;
                        e.max = h + j - g - d;
                        break;
                    case "east":
                        e.min = l + i - f - d, e.max = l + i - g - d
                }
            }
        }, P = function(a) {
            return b.layout.getElementDimensions(a)
        }, sa = function(a, d) {
            var e = b(a), f = e.data("layoutRole"), g = e.data("layoutEdge"), h = t[g][f + "Class"], g = "-" + g, i = e.hasClass(h + "-closed") ? "-closed" : "-open", j = i == "-closed" ? "-open" : "-closed", i = h + "-hover " + 
            (h + g + "-hover ") + (h + i + "-hover ") + (h + g + i + "-hover ");
            d && (i += h + j + "-hover " + (h + g + j + "-hover "));
            f == "resizer" && e.hasClass(h + "-sliding") && (i += h + "-sliding-hover " + (h + g + "-sliding-hover "));
            return b.trim(i)
        }, ta = function(a, d) {
            var e = b(d || this);
            a && e.data("layoutRole") == "toggler" && a.stopPropagation();
            e.addClass(sa(e))
        }, ba = function(a, d) {
            var e = b(d || this);
            e.removeClass(sa(e, !0))
        }, Ca = function(a) {
            b("body").disableSelection();
            ta(a, this)
        }, ua = function(a, d) {
            var e = d || this, f = b(e).data("layoutEdge"), g = f + "ResizerLeave";
            H.clear(f + 
            "_openSlider");
            H.clear(g);
            d ? r[f].isResizing || b("body").enableSelection() : (ba(a, this), H.set(g, function() {
                ua(a, e)
            }, 200))
        }, F = function() {
            return r.initialized || r.creatingLayout ? !0 : va()
        }, va = function() {
            var a = t;
            if (!A.is(":visible"))
                return !1;
            if (!Da("center").length)
                return a.showErrorMessages && alert(C.errCenterPaneMissing), !1;
            r.creatingLayout = !0;
            b.extend(y, P(A));
            La();
            ka();
            if (a.scrollToBookmarkOnLoad) {
                var d = self.location;
                d.hash && d.replace(d.hash)
            }
            a.resizeWithWindow && !A.data("layoutRole") && b(window).bind("resize." + 
            G, Ma);
            delete r.creatingLayout;
            r.initialized = !0;
            B(null, a.onload_end || a.onload);
            return !0
        }, Ma = function() {
            var a = Number(t.resizeWithWindowDelay);
            a < 10 && (a = 100);
            H.clear("winResize");
            H.set("winResize", function() {
                H.clear("winResize");
                H.clear("winResizeRepeater");
                var a = P(A);
                (a.innerWidth !== y.innerWidth || a.innerHeight !== y.innerHeight) && la()
            }, a);
            H.data.winResizeRepeater || Ea()
        }, Ea = function() {
            var a = Number(t.resizeWithWindowMaxDelay);
            a > 0 && H.set("winResizeRepeater", function() {
                Ea();
                la()
            }, a)
        }, Fa = function() {
            var a = t;
            r.cookie = x();
            B(null, a.onunload_start);
            a.useStateCookie && a.cookie.autoSave && m();
            B(null, a.onunload_end || a.onunload)
        }, Ga = function(a) {
            if (!a || a == "all")
                a = u.borderPanes;
            b.each(a.split(","), function(a, d) {
                var e = t[d];
                if (e.enableCursorHotkey || e.customHotkey)
                    return b(document).bind("keydown." + G, f), !1
            })
        }, Na = function() {
            function d(a) {
                for (var b in e)
                    a[b] != void 0 && (a[e[b]] = a[b], delete a[b])
            }
            a = U(a);
            var e = {applyDefaultStyles: "applyDemoStyles"};
            d(a.defaults);
            b.each(u.allPanes.split(","), function(b, e) {
                d(a[e])
            });
            a.effects && 
            (b.extend(X, a.effects), delete a.effects);
            b.extend(t.cookie, a.cookie);
            b.each("name,containerClass,zIndex,scrollToBookmarkOnLoad,resizeWithWindow,resizeWithWindowDelay,resizeWithWindowMaxDelay,onresizeall,onresizeall_start,onresizeall_end,onload,onload_start,onload_end,onunload,onunload_start,onunload_end,autoBindCustomButtons,useStateCookie,showErrorMessages".split(","), function(b, d) {
                a[d] !== void 0 ? t[d] = a[d] : a.defaults[d] !== void 0 && (t[d] = a.defaults[d], delete a.defaults[d])
            });
            b.each("paneSelector,resizerCursor,customHotkey".split(","), 
            function(b, d) {
                delete a.defaults[d]
            });
            b.extend(!0, t.defaults, a.defaults);
            u.center = b.extend(!0, {}, u.panes, u.center);
            var f = t.zIndex;
            if (f === 0 || f > 0)
                u.zIndex.pane_normal = f, u.zIndex.resizer_normal = f + 1, u.zIndex.iframe_mask = f + 1;
            b.extend(t.center, a.center);
            var g = b.extend(!0, {}, t.defaults, a.defaults, t.center), f = "paneClass,contentSelector,applyDemoStyles,triggerEventsOnLoad,showOverflowOnHover,onresize,onresize_start,onresize_end,resizeNestedLayout,resizeContentWhileDragging,findNestedContent,onsizecontent,onsizecontent_start,onsizecontent_end".split(",");
            b.each(f, function(a, b) {
                t.center[b] = g[b]
            });
            var h, i = t.defaults;
            b.each(u.borderPanes.split(","), function(d, e) {
                u[e] = b.extend(!0, {}, u.panes, u[e]);
                h = t[e] = b.extend(!0, {}, t.defaults, t[e], a.defaults, a[e]);
                if (!h.paneClass)
                    h.paneClass = "ui-layout-pane";
                if (!h.resizerClass)
                    h.resizerClass = "ui-layout-resizer";
                if (!h.togglerClass)
                    h.togglerClass = "ui-layout-toggler";
                b.each(["_open", "_close", ""], function(d, f) {
                    var g = "fxName" + f, j = "fxSpeed" + f, S = "fxSettings" + f;
                    h[g] = a[e][g] || a[e].fxName || a.defaults[g] || a.defaults.fxName || 
                    h[g] || h.fxName || i[g] || i.fxName || "none";
                    var k = h[g];
                    if (k == "none" || !b.effects || !b.effects[k] || !X[k] && !h[S] && !h.fxSettings)
                        k = h[g] = "none";
                    k = X[k] || {};
                    g = k.all || {};
                    k = k[e] || {};
                    h[S] = b.extend({}, g, k, i.fxSettings || {}, i[S] || {}, h.fxSettings, h[S], a.defaults.fxSettings, a.defaults[S] || {}, a[e].fxSettings, a[e][S] || {});
                    h[j] = a[e][j] || a[e].fxSpeed || a.defaults[j] || a.defaults.fxSpeed || h[j] || h[S].duration || h.fxSpeed || h.fxSettings.duration || i.fxSpeed || i.fxSettings.duration || k.duration || g.duration || "normal"
                })
            })
        }, Da = function(a) {
            a = 
            t[a].paneSelector;
            if (a.substr(0, 1) === "#")
                return A.find(a).eq(0);
            else {
                var b = A.children(a).eq(0);
                return b.length ? b : A.children("form:first").children(a).eq(0)
            }
        }, La = function() {
            b.each(u.allPanes.split(","), function(a, b) {
                Ha(b, !0)
            });
            wa();
            b.each(u.borderPanes.split(","), function(a, b) {
                w[b] && r[b].isVisible && (M(b), ca(b))
            });
            da("center");
            setTimeout(function() {
                b.each(u.allPanes.split(","), function(a, b) {
                    var d = t[b];
                    w[b] && r[b].isVisible && (d.triggerEventsOnLoad && B(b, d.onresize_end || d.onresize), ga(b))
                })
            }, 50);
            t.showErrorMessages && 
            A.innerHeight() < 2 && alert(C.errContainerHeight.replace(/CONTAINER/, y.ref))
        }, Ha = function(a, f) {
            if (f || F()) {
                var g = t[a], h = r[a], i = u[a], j = i.dir, k = a == "center", l = {}, m = w[a], n;
                m ? xa(a) : Z[a] = !1;
                m = w[a] = Da(a);
                if (m.length) {
                    m.data("layoutCSS") || m.data("layoutCSS", b.layout.getElementCSS(m, "position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border"));
                    m.data("parentLayout", ja).data("layoutRole", "pane").data("layoutEdge", a).css(i.cssReq).css("zIndex", u.zIndex.pane_normal).css(g.applyDemoStyles ? 
                    i.cssDemo : {}).addClass(g.paneClass + " " + g.paneClass + "-" + a).bind("mouseenter." + G, ta).bind("mouseleave." + G, ba);
                    Ia(a, !1);
                    if (!k)
                        n = h.size = W(a, g.size), i = W(a, g.minSize) || 1, k = W(a, g.maxSize) || 1E5, n > 0 && (n = D(Math.min(n, k), i)), h.isClosed = !1, h.isSliding = !1, h.isResizing = !1, h.isHidden = !1;
                    h.tagName = m[0].tagName;
                    h.edge = a;
                    h.noRoom = !1;
                    h.isVisible = !0;
                    switch (a) {
                        case "north":
                            l.top = y.insetTop;
                            l.left = y.insetLeft;
                            l.right = y.insetRight;
                            break;
                        case "south":
                            l.bottom = y.insetBottom;
                            l.left = y.insetLeft;
                            l.right = y.insetRight;
                            break;
                        case "west":
                            l.left = 
                            y.insetLeft;
                            break;
                        case "east":
                            l.right = y.insetRight
                    }
                    if (j == "horz")
                        l.height = D(1, R(a, n));
                    else if (j == "vert")
                        l.width = D(1, K(a, n));
                    m.css(l);
                    j != "horz" && da(a, !0);
                    g.initClosed && g.closable && !g.initHidden ? V(a, !0, !0) : g.initHidden || g.initClosed ? qa(a) : h.noRoom || m.css("display", "block");
                    m.css("visibility", "visible");
                    g.showOverflowOnHover && m.hover(e, d);
                    r.initialized && (wa(a), Ga(a), la(), h.isVisible && (g.triggerEventsOnLoad && B(a, g.onresize_end || g.onresize), ga(a)))
                } else
                    w[a] = !1
            }
        }, wa = function(a) {
            if (!a || a == "all")
                a = u.borderPanes;
            b.each(a.split(","), function(a, d) {
                var e = w[d];
                E[d] = !1;
                N[d] = !1;
                if (e) {
                    var e = t[d], f = r[d], g = e.resizerClass, h = e.togglerClass;
                    u[d].side.toLowerCase();
                    var i = "-" + d, j = E[d] = b("<div></div>"), k = e.closable ? N[d] = b("<div></div>") : !1;
                    !f.isVisible && e.slidable && j.attr("title", e.sliderTip).css("cursor", e.sliderCursor);
                    j.attr("id", e.paneSelector.substr(0, 1) == "#" ? e.paneSelector.substr(1) + "-resizer" : "").data("parentLayout", ja).data("layoutRole", "resizer").data("layoutEdge", d).css(u.resizers.cssReq).css("zIndex", u.zIndex.resizer_normal).css(e.applyDemoStyles ? 
                    u.resizers.cssDemo : {}).addClass(g + " " + g + i).appendTo(A);
                    k && (k.attr("id", e.paneSelector.substr(0, 1) == "#" ? e.paneSelector.substr(1) + "-toggler" : "").data("parentLayout", ja).data("layoutRole", "toggler").data("layoutEdge", d).css(u.togglers.cssReq).css(e.applyDemoStyles ? u.togglers.cssDemo : {}).addClass(h + " " + h + i).appendTo(j), e.togglerContent_open && b("<span>" + e.togglerContent_open + "</span>").data("layoutRole", "togglerContent").data("layoutEdge", d).addClass("content content-open").css("display", "none").appendTo(k), 
                    e.togglerContent_closed && b("<span>" + e.togglerContent_closed + "</span>").data("layoutRole", "togglerContent").data("layoutEdge", d).addClass("content content-closed").css("display", "none").appendTo(k), Ja(d));
                    Oa(d);
                    f.isVisible ? ya(d) : (za(d), ha(d, !0))
                }
            });
            na("all")
        }, Ia = function(a, d) {
            if (F()) {
                var e = t[a], f = e.contentSelector, g = w[a], h;
                f && (h = Z[a] = e.findNestedContent ? g.find(f).eq(0) : g.children(f).eq(0));
                h && h.length ? (h.data("layoutCSS") || h.data("layoutCSS", b.layout.getElementCSS(h, "height")), h.css(u.content.cssReq), 
                e.applyDemoStyles && (h.css(u.content.cssDemo), g.css(u.content.cssDemoPane)), r[a].content = {}, d !== !1 && ka(a)) : Z[a] = !1
            }
        }, Pa = function() {
            var a;
            b.each("toggle,open,close,pin,toggle-slide,open-slide".split(","), function(d, e) {
                b.each(u.borderPanes.split(","), function(d, f) {
                    b(".ui-layout-button-" + e + "-" + f).each(function() {
                        a = b(this).data("layoutName") || b(this).attr("layoutName");
                        (a == void 0 || a == t.name) && n(this, e, f)
                    })
                })
            })
        }, Oa = function(a) {
            var d = typeof b.fn.draggable == "function", e;
            if (!a || a == "all")
                a = u.borderPanes;
            b.each(a.split(","), 
            function(a, f) {
                var g = t[f], h = r[f], i = u[f], j = i.dir == "horz" ? "top" : "left", k, S;
                if (!d || !w[f] || !g.resizable)
                    return g.resizable = !1, !0;
                var l = E[f], m = g.resizerClass, n = m + "-drag", o = m + "-" + f + "-drag", p = m + "-dragging", q = m + "-" + f + "-dragging", v = m + "-dragging-limit", x = m + "-" + f + "-dragging-limit", z = !1;
                h.isClosed || l.attr("title", g.resizerTip).css("cursor", g.resizerCursor);
                l.bind("mouseenter." + G, Ca).bind("mouseleave." + G, ua);
                l.draggable({containment: A[0],axis: i.dir == "horz" ? "y" : "x",delay: 0,distance: 1,helper: "clone",opacity: g.resizerDragOpacity,
                    addClasses: !1,zIndex: u.zIndex.resizer_drag,start: function() {
                        g = t[f];
                        h = r[f];
                        S = g.resizeWhileDragging;
                        if (!1 === B(f, g.ondrag_start))
                            return !1;
                        u.isLayoutBusy = !0;
                        h.isResizing = !0;
                        H.clear(f + "_closeSlider");
                        M(f);
                        k = h.resizerPosition;
                        l.addClass(n + " " + o);
                        z = !1;
                        e = b(g.maskIframesOnResize === !0 ? "iframe" : g.maskIframesOnResize).filter(":visible");
                        var a, d = 0;
                        e.each(function() {
                            a = "ui-layout-mask-" + ++d;
                            b(this).data("layoutMaskID", a);
                            b('<div id="' + a + '" class="ui-layout-mask ui-layout-mask-' + f + '"/>').css({background: "#fff",
                                opacity: "0.001",zIndex: u.zIndex.iframe_mask,position: "absolute",width: this.offsetWidth + "px",height: this.offsetHeight + "px"}).css(b(this).position()).appendTo(this.parentNode)
                        });
                        b("body").disableSelection()
                    },drag: function(a, b) {
                        z || (b.helper.addClass(p + " " + q).css({right: "auto",bottom: "auto"}).children().css("visibility", "hidden"), z = !0, h.isSliding && w[f].css("zIndex", u.zIndex.pane_sliding));
                        var d = 0;
                        if (b.position[j] < k.min)
                            b.position[j] = k.min, d = -1;
                        else if (b.position[j] > k.max)
                            b.position[j] = k.max, d = 1;
                        d ? (b.helper.addClass(v + 
                        " " + x), window.defaultStatus = "Panel has reached its " + (d > 0 && f.match(/north|west/) || d < 0 && f.match(/south|east/) ? "maximum" : "minimum") + " size") : (b.helper.removeClass(v + " " + x), window.defaultStatus = "");
                        S && C(a, b, f)
                    },stop: function(a, d) {
                        b("body").enableSelection();
                        window.defaultStatus = "";
                        l.removeClass(n + " " + o);
                        h.isResizing = !1;
                        u.isLayoutBusy = !1;
                        C(a, d, f, !0)
                    }});
                var C = function(a, d, f, h) {
                    var a = d.position, d = u[f], i;
                    switch (f) {
                        case "north":
                            i = a.top;
                            break;
                        case "west":
                            i = a.left;
                            break;
                        case "south":
                            i = y.offsetHeight - a.top - 
                            g.spacing_open;
                            break;
                        case "east":
                            i = y.offsetWidth - a.left - g.spacing_open
                    }
                    if (h) {
                        if (b("div.ui-layout-mask").each(function() {
                            this.parentNode.removeChild(this)
                        }), !1 === B(f, g.ondrag_end || g.ondrag))
                            return !1
                    } else
                        e.each(function() {
                            b("#" + b(this).data("layoutMaskID")).css(b(this).position()).css({width: this.offsetWidth + "px",height: this.offsetHeight + "px"})
                        });
                    Aa(f, i - y["inset" + d.side])
                }
            })
        }, xa = function(a, d, e) {
            if (F() && w[a]) {
                var f = w[a], g = Z[a], h = E[a], i = N[a], j = t[a].paneClass, k = j + "-" + a, j = [j, j + "-open", j + "-closed", j + "-sliding", 
                    k, k + "-open", k + "-closed", k + "-sliding"];
                b.merge(j, sa(f, !0));
                f && f.length && (d && !f.data("layoutContainer") && (!g || !g.length || !g.data("layoutContainer")) ? f.remove() : (f.removeClass(j.join(" ")).removeData("layoutParent").removeData("layoutRole").removeData("layoutEdge").removeData("autoHidden").unbind("." + G), f.data("layoutContainer") || f.css(f.data("layoutCSS")).removeData("layoutCSS"), g && g.length && !g.data("layoutContainer") && g.css(g.data("layoutCSS")).removeData("layoutCSS")));
                i && i.length && i.remove();
                h && 
                h.length && h.remove();
                w[a] = Z[a] = E[a] = N[a] = !1;
                e || (la(), r[a] = {})
            }
        }, qa = function(a, b) {
            if (F()) {
                var d = t[a], e = r[a], f = w[a], g = E[a];
                if (f && !e.isHidden && !(r.initialized && !1 === B(a, d.onhide_start)))
                    if (e.isSliding = !1, g && g.hide(), !r.initialized || e.isClosed) {
                        if (e.isClosed = !0, e.isHidden = !0, e.isVisible = !1, f.hide(), da(u[a].dir == "horz" ? "all" : "center"), r.initialized || d.triggerEventsOnLoad)
                            B(a, d.onhide_end || d.onhide)
                    } else
                        e.isHiding = !0, V(a, !1, b)
            }
        }, ma = function(a, b, d, e) {
            if (F()) {
                var f = r[a];
                if (w[a] && f.isHidden && !1 !== B(a, t[a].onshow_start))
                    f.isSliding = 
                    !1, f.isShowing = !0, b === !1 ? V(a, !0) : Y(a, !1, d, e)
            }
        }, ia = function(a, d) {
            if (F()) {
                O(a) || (a.stopImmediatePropagation(), a = b(this).data("layoutEdge"));
                var e = r[O(a) ? b.trim(a) : a == void 0 || a == null ? "" : a];
                e.isHidden ? ma(a) : e.isClosed ? Y(a, !!d) : V(a)
            }
        }, Qa = function(a) {
            var b = r[a];
            w[a].hide();
            b.isClosed = !0;
            b.isVisible = !1
        }, V = function(a, b, d, e) {
            function f() {
                if (i.isClosed) {
                    ha(a, !0);
                    var b = u.altSide[a];
                    r[b].noRoom && (M(b), ca(b));
                    if (!e && (r.initialized || h.triggerEventsOnLoad))
                        j || B(a, h.onclose_end || h.onclose), j && B(a, h.onshow_end || h.onshow), 
                        k && B(a, h.onhide_end || h.onhide)
                }
                ea(a)
            }
            if (!r.initialized && w[a])
                Qa(a);
            else if (F()) {
                var g = w[a], h = t[a], i = r[a], d = !d && !i.isClosed && h.fxName_close != "none", j = i.isShowing, k = i.isHiding;
                delete i.isShowing;
                delete i.isHiding;
                if (g && (h.closable || j || k) && (b || !i.isClosed || j))
                    if (u.isLayoutBusy)
                        Q("close", a, b);
                    else if (j || !1 !== B(a, h.onclose_start)) {
                        u[a].isMoving = !0;
                        u.isLayoutBusy = !0;
                        i.isClosed = !0;
                        i.isVisible = !1;
                        if (k)
                            i.isHidden = !0;
                        else if (j)
                            i.isHidden = !1;
                        i.isSliding ? oa(a, !1) : da(u[a].dir == "horz" ? "all" : "center", !1);
                        za(a);
                        d ? (ra(a, !0), g.hide(h.fxName_close, h.fxSettings_close, h.fxSpeed_close, function() {
                            ra(a, !1);
                            f()
                        })) : (g.hide(), f())
                    }
            }
        }, za = function(a) {
            var d = E[a], e = N[a], f = t[a], g = u[a].side.toLowerCase(), h = f.resizerClass, i = f.togglerClass, j = "-" + a;
            d.css(g, y["inset" + u[a].side]).removeClass(h + "-open " + h + j + "-open").removeClass(h + "-sliding " + h + j + "-sliding").addClass(h + "-closed " + h + j + "-closed").unbind("dblclick." + G);
            f.resizable && typeof b.fn.draggable == "function" && d.draggable("disable").removeClass("ui-state-disabled").css("cursor", 
            "default").attr("title", "");
            e && (e.removeClass(i + "-open " + i + j + "-open").addClass(i + "-closed " + i + j + "-closed").attr("title", f.togglerTip_closed), e.children(".content-open").hide(), e.children(".content-closed").css("display", "block"));
            q(a, !1);
            r.initialized && na("all")
        }, Y = function(a, b, d, e) {
            function f() {
                i.isVisible && (pa(a), i.isSliding || da(u[a].dir == "vert" ? "center" : "all", !1), ya(a));
                ea(a)
            }
            if (F()) {
                var g = w[a], h = t[a], i = r[a], d = !d && i.isClosed && h.fxName_open != "none", j = i.isShowing;
                delete i.isShowing;
                if (g && (h.resizable || 
                h.closable || j) && (!i.isVisible || i.isSliding))
                    if (i.isHidden && !j)
                        ma(a, !0);
                    else if (u.isLayoutBusy)
                        Q("open", a, b);
                    else if (M(a, b), !1 !== B(a, h.onopen_start))
                        if (M(a, b), i.minSize > i.maxSize)
                            q(a, !1), !e && h.noRoomToOpenTip && alert(h.noRoomToOpenTip);
                        else {
                            u[a].isMoving = !0;
                            u.isLayoutBusy = !0;
                            b ? oa(a, !0) : i.isSliding ? oa(a, !1) : h.slidable && ha(a, !1);
                            i.noRoom = !1;
                            ca(a);
                            i.isVisible = !0;
                            i.isClosed = !1;
                            if (j)
                                i.isHidden = !1;
                            d ? (ra(a, !0), g.show(h.fxName_open, h.fxSettings_open, h.fxSpeed_open, function() {
                                ra(a, !1);
                                f()
                            })) : (g.show(), f())
                        }
            }
        }, 
        ya = function(a, d) {
            var e = w[a], f = E[a], g = N[a], h = t[a], i = r[a], j = u[a].side.toLowerCase(), k = h.resizerClass, l = h.togglerClass, m = "-" + a;
            f.css(j, y["inset" + u[a].side] + T(a)).removeClass(k + "-closed " + k + m + "-closed").addClass(k + "-open " + k + m + "-open");
            i.isSliding ? f.addClass(k + "-sliding " + k + m + "-sliding") : f.removeClass(k + "-sliding " + k + m + "-sliding");
            h.resizerDblClickToggle && f.bind("dblclick", ia);
            ba(0, f);
            h.resizable && typeof b.fn.draggable == "function" ? f.draggable("enable").css("cursor", h.resizerCursor).attr("title", h.resizerTip) : 
            i.isSliding || f.css("cursor", "default");
            g && (g.removeClass(l + "-closed " + l + m + "-closed").addClass(l + "-open " + l + m + "-open").attr("title", h.togglerTip_open), ba(0, g), g.children(".content-closed").hide(), g.children(".content-open").css("display", "block"));
            q(a, !i.isSliding);
            b.extend(i, P(e));
            r.initialized && (na("all"), ka(a, !0));
            if (!d && (r.initialized || h.triggerEventsOnLoad) && e.is(":visible"))
                B(a, h.onopen_end || h.onopen), i.isShowing && B(a, h.onshow_end || h.onshow), r.initialized && (B(a, h.onresize_end || h.onresize), ga(a))
        }, 
        Ka = function(a) {
            function d() {
                g.isClosed ? u[f].isMoving || Y(f, !0) : oa(f, !0)
            }
            if (F()) {
                var e = O(a) ? null : a, f = e ? b(this).data("layoutEdge") : a, g = r[f], a = t[f].slideDelay_open;
                e && e.stopImmediatePropagation();
                g.isClosed && e && e.type == "mouseenter" && a > 0 ? H.set(f + "_openSlider", d, a) : d()
            }
        }, Ba = function(a) {
            function d() {
                g.isClosed ? oa(f, !1) : u[f].isMoving || V(f)
            }
            if (F()) {
                var e = O(a) ? null : a, f = e ? b(this).data("layoutEdge") : a, a = t[f], g = r[f], h = u[f].isMoving ? 1E3 : 300;
                if (!g.isClosed && !g.isResizing)
                    if (a.slideTrigger_close == "click")
                        d();
                    else if (!a.preventQuickSlideClose || 
                    !u.isLayoutBusy)
                        if (!a.preventPrematureSlideClose || !e || !b.layout.isMouseOverElem(e, w[f]))
                            e ? H.set(f + "_closeSlider", d, D(a.slideDelay_close, h)) : d()
            }
        }, ra = function(a, d) {
            var e = w[a];
            if (d)
                e.css({zIndex: u.zIndex.pane_animate}), a == "south" ? e.css({top: y.insetTop + y.innerHeight - e.outerHeight()}) : a == "east" && e.css({left: y.insetLeft + y.innerWidth - e.outerWidth()});
            else {
                e.css({zIndex: r[a].isSliding ? u.zIndex.pane_sliding : u.zIndex.pane_normal});
                a == "south" ? e.css({top: "auto"}) : a == "east" && e.css({left: "auto"});
                var f = t[a];
                b.layout.browser.msie && 
                f.fxOpacityFix && f.fxName_open != "slide" && e.css("filter") && e.css("opacity") == 1 && e[0].style.removeAttribute("filter")
            }
        }, ha = function(a, b) {
            var d = t[a], e = E[a], f = d.slideTrigger_open.toLowerCase();
            if (e && (!b || d.slidable)) {
                if (f.match(/mouseover/))
                    f = d.slideTrigger_open = "mouseenter";
                else if (!f.match(/click|dblclick|mouseenter/))
                    f = d.slideTrigger_open = "click";
                e[b ? "bind" : "unbind"](f + "." + G, Ka).css("cursor", b ? d.sliderCursor : "default").attr("title", b ? d.sliderTip : "")
            }
        }, oa = function(a, b) {
            function d(b) {
                H.clear(a + "_closeSlider");
                b.stopPropagation()
            }
            var e = t[a], f = r[a], g = u.zIndex, h = e.slideTrigger_close.toLowerCase(), i = b ? "bind" : "unbind", j = w[a], k = E[a];
            f.isSliding = b;
            H.clear(a + "_closeSlider");
            b && ha(a, !1);
            j.css("zIndex", b ? g.pane_sliding : g.pane_normal);
            k.css("zIndex", b ? g.pane_sliding : g.resizer_normal);
            if (!h.match(/click|mouseleave/))
                h = e.slideTrigger_close = "mouseleave";
            k[i](h, Ba);
            h == "mouseleave" && (j[i]("mouseleave." + G, Ba), k[i]("mouseenter." + G, d), j[i]("mouseenter." + G, d));
            b ? h == "click" && !e.resizable && (k.css("cursor", b ? e.sliderCursor : 
            "default"), k.attr("title", b ? e.togglerTip_open : "")) : H.clear(a + "_closeSlider")
        }, ca = function(a, d, e, f) {
            var d = t[a], g = r[a], h = u[a], i = w[a], j = E[a], k = h.dir == "vert", l = !1;
            if (a == "center" || k && g.noVerticalRoom)
                if ((l = g.maxHeight > 0) && g.noRoom) {
                    i.show();
                    j && j.show();
                    g.isVisible = !0;
                    g.noRoom = !1;
                    if (k)
                        g.noVerticalRoom = !1;
                    pa(a)
                } else if (!l && !g.noRoom)
                    i.hide(), j && j.hide(), g.isVisible = !1, g.noRoom = !0;
            if (a != "center")
                if (g.minSize <= g.maxSize) {
                    if (g.size > g.maxSize ? fa(a, g.maxSize, e, f) : g.size < g.minSize ? fa(a, g.minSize, e, f) : j && i.is(":visible") && 
                    (e = h.side.toLowerCase(), f = g.size + y["inset" + h.side], b.layout.cssNum(j, e) != f && j.css(e, f)), g.noRoom)
                        g.wasOpen && d.closable ? d.autoReopen ? Y(a, !1, !0, !0) : g.noRoom = !1 : ma(a, g.wasOpen, !0, !0)
                } else if (!g.noRoom)
                    g.noRoom = !0, g.wasOpen = !g.isClosed && !g.isSliding, g.isClosed || (d.closable ? V(a, !0, !0) : qa(a, !0))
        }, Aa = function(a, b, d) {
            if (F()) {
                var e = t[a], f = e.resizeWhileDragging && !u.isLayoutBusy;
                e.autoResize = !1;
                fa(a, b, d, f)
            }
        }, fa = function(a, d, e, f) {
            if (F()) {
                var g = t[a], h = r[a], i = w[a], j = E[a], k = u[a].side.toLowerCase(), l = u[a].sizeType.toLowerCase(), 
                m = "inset" + u[a].side, n = u.isLayoutBusy && !g.triggerEventsWhileDragging, o;
                M(a);
                o = h.size;
                d = W(a, d);
                d = D(d, W(a, g.minSize));
                d = Math.min(d, h.maxSize);
                if (d < h.minSize)
                    ca(a, !1, e);
                else if (f || d != o)
                    !e && r.initialized && h.isVisible && B(a, g.onresize_start), i.css(l, D(1, u[a].dir == "horz" ? R(a, d) : K(a, d))), h.size = d, b.extend(h, P(i)), j && i.is(":visible") && j.css(k, d + y[m]), ka(a), !e && !n && r.initialized && h.isVisible && (B(a, g.onresize_end || g.onresize), ga(a)), e || (h.isSliding || da(u[a].dir == "horz" ? "all" : "center", n, f), na("all")), a = u.altSide[a], 
                    d < o && r[a].noRoom && (M(a), ca(a, !1, e))
            }
        }, da = function(a, d, e) {
            if (!a || a == "all")
                a = "east,west,center";
            b.each(a.split(","), function(a, f) {
                if (w[f]) {
                    var g = t[f], h = r[f], i = w[f], j = !0, k = {}, j = {top: T("north", !0),bottom: T("south", !0),left: T("west", !0),right: T("east", !0),width: 0,height: 0};
                    j.width = y.innerWidth - j.left - j.right;
                    j.height = y.innerHeight - j.bottom - j.top;
                    j.top += y.insetTop;
                    j.bottom += y.insetBottom;
                    j.left += y.insetLeft;
                    j.right += y.insetRight;
                    b.extend(h, P(i));
                    if (f == "center") {
                        if (!e && h.isVisible && j.width == h.outerWidth && 
                        j.height == h.outerHeight)
                            return !0;
                        b.extend(h, J(f), {maxWidth: j.width,maxHeight: j.height});
                        k = j;
                        k.width = K(f, k.width);
                        k.height = R(f, k.height);
                        j = k.width > 0 && k.height > 0;
                        if (!j && !r.initialized && g.minWidth > 0) {
                            var l = g.minWidth - h.outerWidth, m = t.east.minSize || 0, n = t.west.minSize || 0, o = r.east.size, p = r.west.size, q = o, v = p;
                            l > 0 && r.east.isVisible && o > m && (q = D(o - m, o - l), l -= o - q);
                            l > 0 && r.west.isVisible && p > n && (v = D(p - n, p - l), l -= p - v);
                            if (l == 0) {
                                o != m && fa("east", q, !0);
                                p != n && fa("west", v, !0);
                                da("center", d, e);
                                return
                            }
                        }
                    } else {
                        h.isVisible && !h.noVerticalRoom && 
                        b.extend(h, P(i), J(f));
                        if (!e && !h.noVerticalRoom && j.height == h.outerHeight)
                            return !0;
                        k.top = j.top;
                        k.bottom = j.bottom;
                        k.height = R(f, j.height);
                        h.maxHeight = D(0, k.height);
                        j = h.maxHeight > 0;
                        if (!j)
                            h.noVerticalRoom = !0
                    }
                    j ? (!d && r.initialized && B(f, g.onresize_start), i.css(k), h.noRoom && !h.isClosed && !h.isHidden && ca(f), h.isVisible && (b.extend(h, P(i)), r.initialized && ka(f))) : !h.noRoom && h.isVisible && ca(f);
                    if (!h.isVisible)
                        return !0;
                    if (f == "center")
                        h = b.layout.browser, h = h.isIE6 || h.msie && !h.boxModel, w.north && (h || r.north.tagName == 
                        "IFRAME") && w.north.css("width", K(w.north, y.innerWidth)), w.south && (h || r.south.tagName == "IFRAME") && w.south.css("width", K(w.south, y.innerWidth));
                    !d && r.initialized && (B(f, g.onresize_end || g.onresize), ga(f))
                }
            })
        }, la = function() {
            if (r.initialized) {
                if (A.is(":visible:") && (b.extend(r.container, P(A)), y.outerHeight)) {
                    if (!1 === B(null, t.onresizeall_start))
                        return !1;
                    var a, d, e;
                    b.each(["south", "north", "east", "west"], function(a, b) {
                        w[b] && (e = r[b], d = t[b], d.autoResize && e.size != d.size ? fa(b, d.size, !0, !0) : (M(b), ca(b, !1, !0, !0)))
                    });
                    da("all", !0, !0);
                    na("all");
                    d = t;
                    b.each(u.allPanes.split(","), function(b, e) {
                        if ((a = w[e]) && r[e].isVisible)
                            B(e, d[e].onresize_end || d[e].onresize), ga(e)
                    });
                    B(null, d.onresizeall_end || d.onresizeall)
                }
            } else
                va()
        }, ga = function(a) {
            var b = w[a], d = Z[a];
            t[a].resizeNestedLayout && (b.data("layoutContainer") ? b.layout().resizeAll() : d && d.data("layoutContainer") && d.layout().resizeAll())
        }, ka = function(a, d) {
            if (F()) {
                if (!a || a == "all")
                    a = u.allPanes;
                b.each(a.split(","), function(a, b) {
                    function e(a) {
                        return D(j.css.paddingBottom, parseInt(a.css("marginBottom"), 
                        10) || 0)
                    }
                    function f() {
                        var a = t[b].contentIgnoreSelector, a = h.nextAll().not(a || ":lt(0)"), d = a.filter(":visible"), g = d.filter(":last");
                        k = {top: h[0].offsetTop,height: h.outerHeight(),numFooters: a.length,hiddenFooters: a.length - d.length,spaceBelow: 0};
                        k.spaceAbove = k.top;
                        k.bottom = k.top + k.height;
                        k.spaceBelow = g.length ? g[0].offsetTop + g.outerHeight() - k.bottom + e(g) : e(h)
                    }
                    var g = w[b], h = Z[b], i = t[b], j = r[b], k = j.content;
                    if (!g || !h || !g.is(":visible"))
                        return !0;
                    if (!1 !== B(null, i.onsizecontent_start)) {
                        if (!u.isLayoutBusy || k.top == 
                        void 0 || d || i.resizeContentWhileDragging)
                            f(), k.hiddenFooters > 0 && g.css("overflow") == "hidden" && (g.css("overflow", "visible"), f(), g.css("overflow", "hidden"));
                        g = j.innerHeight - (k.spaceAbove - j.css.paddingTop) - (k.spaceBelow - j.css.paddingBottom);
                        if (!h.is(":visible") || k.height != g)
                            aa(h, g, !0), k.height = g;
                        r.initialized && (B(b, i.onsizecontent_end || i.onsizecontent), ga(b))
                    }
                })
            }
        }, na = function(a) {
            if (!a || a == "all")
                a = u.borderPanes;
            b.each(a.split(","), function(a, d) {
                var e = t[d], f = r[d], g = w[d], h = E[d], i = N[d], j;
                if (g && h) {
                    var k = u[d].dir, 
                    l = f.isClosed ? "_closed" : "_open", m = e["spacing" + l], n = e["togglerAlign" + l], l = e["togglerLength" + l], o;
                    if (m == 0)
                        h.hide();
                    else {
                        !f.noRoom && !f.isHidden && h.show();
                        k == "horz" ? (o = g.outerWidth(), f.resizerLength = o, h.css({width: D(1, K(h, o)),height: D(0, R(h, m)),left: b.layout.cssNum(g, "left")})) : (o = g.outerHeight(), f.resizerLength = o, h.css({height: D(1, R(h, o)),width: D(0, K(h, m)),top: y.insetTop + T("north", !0)}));
                        ba(e, h);
                        if (i) {
                            if (l == 0 || f.isSliding && e.hideTogglerOnSlide) {
                                i.hide();
                                return
                            } else
                                i.show();
                            if (!(l > 0) || l == "100%" || l > o)
                                l = 
                                o, n = 0;
                            else if (O(n))
                                switch (n) {
                                    case "top":
                                    case "left":
                                        n = 0;
                                        break;
                                    case "bottom":
                                    case "right":
                                        n = o - l;
                                        break;
                                    default:
                                        n = Math.floor((o - l) / 2)
                                }
                            else
                                g = parseInt(n, 10), n = n >= 0 ? g : o - l + g;
                            if (k == "horz") {
                                var p = K(i, l);
                                i.css({width: D(0, p),height: D(1, R(i, m)),left: n,top: 0});
                                i.children(".content").each(function() {
                                    j = b(this);
                                    j.css("marginLeft", Math.floor((p - j.outerWidth()) / 2))
                                })
                            } else {
                                var q = R(i, l);
                                i.css({height: D(0, q),width: D(1, K(i, m)),top: n,left: 0});
                                i.children(".content").each(function() {
                                    j = b(this);
                                    j.css("marginTop", Math.floor((q - 
                                    j.outerHeight()) / 2))
                                })
                            }
                            ba(0, i)
                        }
                        if (!r.initialized && (e.initHidden || f.noRoom))
                            h.hide(), i && i.hide()
                    }
                }
            })
        }, Ja = function(a) {
            if (F()) {
                var b = N[a], d = t[a];
                if (b)
                    d.closable = !0, b.bind("click." + G, function(b) {
                        b.stopPropagation();
                        ia(a)
                    }).bind("mouseenter." + G, ta).bind("mouseleave." + G, ba).css("visibility", "visible").css("cursor", "pointer").attr("title", r[a].isClosed ? d.togglerTip_closed : d.togglerTip_open).show()
            }
        }, A = b(this).eq(0);
        if (!A.length)
            return t.showErrorMessages && alert(C.errContainerMissing), null;
        if (A.data("layoutContainer") && 
        A.data("layout"))
            return A.data("layout");
        var w = {}, Z = {}, E = {}, N = {}, y = r.container, G = r.id, ja = {options: t,state: r,container: A,panes: w,contents: Z,resizers: E,togglers: N,toggle: ia,hide: qa,show: ma,open: Y,close: V,slideOpen: Ka,slideClose: Ba,slideToggle: function(a) {
                ia(a, !0)
            },initContent: Ia,sizeContent: ka,sizePane: Aa,swapPanes: function(a, d) {
                function e(a) {
                    var d = w[a], f = Z[a];
                    return !d ? !1 : {pane: a,P: d ? d[0] : !1,C: f ? f[0] : !1,state: b.extend({}, r[a]),options: b.extend({}, t[a])}
                }
                function f(a, d) {
                    if (a) {
                        var e = a.P, g = a.C, h = a.pane, 
                        j = u[d], k = j.side.toLowerCase(), l = "inset" + j.side, m = b.extend({}, r[d]), n = t[d], o = {resizerCursor: n.resizerCursor};
                        b.each("fxName,fxSpeed,fxSettings".split(","), function(a, b) {
                            o[b] = n[b];
                            o[b + "_open"] = n[b + "_open"];
                            o[b + "_close"] = n[b + "_close"]
                        });
                        w[d] = b(e).data("layoutEdge", d).css(u.hidden).css(j.cssReq);
                        Z[d] = g ? b(g) : !1;
                        t[d] = b.extend({}, a.options, o);
                        r[d] = b.extend({}, a.state);
                        e.className = e.className.replace(RegExp(n.paneClass + "-" + h, "g"), n.paneClass + "-" + d);
                        wa(d);
                        j.dir != u[h].dir ? (e = i[d] || 0, M(d), e = D(e, r[d].minSize), 
                        Aa(d, e, !0)) : E[d].css(k, y[l] + (r[d].isVisible ? T(d) : 0));
                        a.state.isVisible && !m.isVisible ? ya(d, !0) : (za(d), ha(d, !0));
                        a = null
                    }
                }
                if (F()) {
                    r[a].edge = d;
                    r[d].edge = a;
                    var g = !1;
                    !1 === B(a, t[a].onswap_start) && (g = !0);
                    !g && !1 === B(d, t[d].onswap_start) && (g = !0);
                    if (g)
                        r[a].edge = a, r[d].edge = d;
                    else {
                        var g = e(a), h = e(d), i = {};
                        i[a] = g ? g.state.size : 0;
                        i[d] = h ? h.state.size : 0;
                        w[a] = !1;
                        w[d] = !1;
                        r[a] = {};
                        r[d] = {};
                        N[a] && N[a].remove();
                        N[d] && N[d].remove();
                        E[a] && E[a].remove();
                        E[d] && E[d].remove();
                        E[a] = E[d] = N[a] = N[d] = !1;
                        f(g, d);
                        f(h, a);
                        g = h = i = null;
                        w[a] && 
                        w[a].css(u.visible);
                        w[d] && w[d].css(u.visible);
                        la();
                        B(a, t[a].onswap_end || t[a].onswap);
                        B(d, t[d].onswap_end || t[d].onswap)
                    }
                }
            },resizeAll: la,initPanes: F,destroy: function() {
                b(window).unbind("." + G);
                b(document).unbind("." + G);
                b.each(u.allPanes.split(","), function(a, b) {
                    xa(b, !1, !0)
                });
                A.removeData("layout").removeData("layoutContainer").removeClass(t.containerClass);
                !A.data("layoutEdge") && A.data("layoutCSS") && A.css(A.data("layoutCSS")).removeData("layoutCSS");
                y.tagName == "BODY" && (A = b("html")).data("layoutCSS") && 
                A.css(A.data("layoutCSS")).removeData("layoutCSS");
                Fa()
            },addPane: Ha,removePane: xa,setSizeLimits: M,bindButton: n,addToggleBtn: h,addOpenBtn: j,addCloseBtn: g,addPinBtn: k,allowOverflow: e,resetOverflow: d,encodeJSON: z,decodeJSON: I,getState: x,getCookie: l,saveCookie: m,deleteCookie: function() {
                m("", {expires: -1})
            },loadCookie: p,loadState: o,cssWidth: K,cssHeight: R,enableClosable: Ja,disableClosable: function(a, b) {
                if (F()) {
                    var d = N[a];
                    if (d)
                        t[a].closable = !1, r[a].isClosed && Y(a, !1, !0), d.unbind("." + G).css("visibility", b ? 
                        "hidden" : "visible").css("cursor", "default").attr("title", "")
                }
            },enableSlidable: function(a) {
                if (F()) {
                    var b = E[a];
                    if (b && b.data("draggable"))
                        t[a].slidable = !0, s.isClosed && ha(a, !0)
                }
            },disableSlidable: function(a) {
                if (F()) {
                    var b = E[a];
                    if (b)
                        t[a].slidable = !1, r[a].isSliding ? V(a, !1, !0) : (ha(a, !1), b.css("cursor", "default").attr("title", ""), ba(null, b[0]))
                }
            },enableResizable: function(a) {
                if (F()) {
                    var b = E[a], d = t[a];
                    if (b && b.data("draggable"))
                        d.resizable = !0, b.draggable("enable").bind("mouseenter." + G, Ca).bind("mouseleave." + 
                        G, ua), r[a].isClosed || b.css("cursor", d.resizerCursor).attr("title", d.resizerTip)
                }
            },disableResizable: function(a) {
                if (F()) {
                    var b = E[a];
                    if (b && b.data("draggable"))
                        t[a].resizable = !1, b.draggable("disable").unbind("." + G).css("cursor", "default").attr("title", ""), ba(null, b[0])
                }
            }};
        return function() {
            Na();
            var a = t;
            b.layout.browser.boxModel = b.support.boxModel;
            a.useStateCookie && a.cookie.autoLoad && p();
            r.creatingLayout = !0;
            if (!1 === B(null, a.onload_start))
                return "cancel";
            var d = y.tagName = A[0].tagName, e = t, f = d == "BODY", g = {}, 
            h = A.is(":visible");
            y.selector = A.selector.split(".slice")[0];
            y.ref = d + "/" + y.selector;
            A.data("layout", ja).data("layoutContainer", G).addClass(e.containerClass);
            A.data("layoutCSS") || (f ? (g = b.extend(b.layout.getElementCSS(A, "overflow,position,margin,padding,border"), {height: A.css("height"),overflow: A.css("overflow"),overflowX: A.css("overflowX"),overflowY: A.css("overflowY")}), d = b("html"), d.data("layoutCSS", {height: "auto",overflow: d.css("overflow"),overflowX: d.css("overflowX"),overflowY: d.css("overflowY")})) : 
            g = b.layout.getElementCSS(A, "overflow,position,margin,padding,border,top,bottom,left,right,width,height,overflow,overflowX,overflowY"), A.data("layoutCSS", g));
            try {
                if (f)
                    b("html").css({height: "100%",overflow: "hidden",overflowX: "hidden",overflowY: "hidden"}), b("body").css({position: "relative",height: "100%",overflow: "hidden",overflowX: "hidden",overflowY: "hidden",margin: 0,padding: 0,border: "none"}), b.extend(y, P(A));
                else {
                    var g = {overflow: "hidden",overflowX: "hidden",overflowY: "hidden"}, i = A.css("position");
                    A.css("height");
                    if (!A.data("layoutRole") && (!i || !i.match(/fixed|absolute|relative/)))
                        g.position = "relative";
                    A.css(g);
                    h && (b.extend(y, P(A)), e.showErrorMessages && y.innerHeight < 2 && alert(C.errContainerHeight.replace(/CONTAINER/, y.ref)))
                }
            } catch (j) {
            }
            Ga();
            a.autoBindCustomButtons && Pa();
            b(window).bind("unload." + G, Fa);
            a.initPanes && va();
            delete r.creatingLayout;
            return r.initialized
        }() === "cancel" ? null : ja
    }
})(jQuery);
(function(b) {
    var a = /["\\\x00-\x1f\x7f-\x9f]/g, f = {"\u0008": "\\b","\t": "\\t","\n": "\\n","\u000c": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"};
    b.toJSON = typeof JSON === "object" && JSON.stringify ? JSON.stringify : function(a) {
        if (a === null)
            return "null";
        var d = typeof a;
        if (d !== "undefined") {
            if (d === "number" || d === "boolean")
                return "" + a;
            if (d === "string")
                return b.quoteString(a);
            if (d === "object") {
                if (typeof a.toJSON === "function")
                    return b.toJSON(a.toJSON());
                if (a.constructor === Date) {
                    var f = a.getUTCMonth() + 1, n = a.getUTCDate(), h = a.getUTCFullYear(), 
                    d = a.getUTCHours(), j = a.getUTCMinutes(), g = a.getUTCSeconds(), a = a.getUTCMilliseconds();
                    f < 10 && (f = "0" + f);
                    n < 10 && (n = "0" + n);
                    d < 10 && (d = "0" + d);
                    j < 10 && (j = "0" + j);
                    g < 10 && (g = "0" + g);
                    a < 100 && (a = "0" + a);
                    a < 10 && (a = "0" + a);
                    return '"' + h + "-" + f + "-" + n + "T" + d + ":" + j + ":" + g + "." + a + 'Z"'
                }
                if (a.constructor === Array) {
                    f = [];
                    for (n = 0; n < a.length; n++)
                        f.push(b.toJSON(a[n]) || "null");
                    return "[" + f.join(",") + "]"
                }
                n = [];
                for (h in a) {
                    d = typeof h;
                    if (d === "number")
                        f = '"' + h + '"';
                    else if (d === "string")
                        f = b.quoteString(h);
                    else
                        continue;
                    d = typeof a[h];
                    d === "function" || d === 
                    "undefined" || (d = b.toJSON(a[h]), n.push(f + ":" + d))
                }
                return "{" + n.join(",") + "}"
            }
        }
    };
    b.evalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function(a) {
        return eval("(" + a + ")")
    };
    b.secureEvalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function(a) {
        if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return eval("(" + a + ")");
        else
            throw new SyntaxError("Error parsing JSON, source is not valid.");
    };
    b.quoteString = function(b) {
        if (b.match(a))
            return '"' + b.replace(a, function(a) {
                var b = f[a];
                if (typeof b === "string")
                    return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }) + '"';
        return '"' + b + '"'
    }
})(jQuery);
(function(b, a) {
    function f() {
    }
    function e(a) {
        r = [a]
    }
    function d(a, b, d) {
        return a && a.apply(b.context || b, d)
    }
    function i(i) {
        function O(b) {
            !M++ && a(function() {
                P();
                K && (t[J] = {s: [b]});
                Q && (b = Q.apply(i, [b]));
                d(i.success, i, [b, x]);
                d(U, i, [i, x])
            }, 0)
        }
        function D(b) {
            !M++ && a(function() {
                P();
                K && b != z && (t[J] = b);
                d(i.error, i, [i, b]);
                d(U, i, [i, b])
            }, 0)
        }
        var i = b.extend({}, u, i), U = i.complete, Q = i.dataFilter, ea = i.callbackParameter, B = i.callback, pa = i.cache, K = i.pageCache, R = i.charset, J = i.url, aa = i.data, W = i.timeout, T, M = 0, P = f;
        i.abort = function() {
            !M++ && 
            P()
        };
        if (d(i.beforeSend, i, [i]) === !1 || M)
            return i;
        J = J || j;
        aa = aa ? typeof aa == "string" ? aa : b.param(aa, i.traditional) : j;
        J += aa ? (/\?/.test(J) ? "&" : "?") + aa : j;
        ea && (J += (/\?/.test(J) ? "&" : "?") + encodeURIComponent(ea) + "=?");
        !pa && !K && (J += (/\?/.test(J) ? "&" : "?") + "_" + (new Date).getTime() + "=");
        J = J.replace(/=\?(&|$)/, "=" + B + "$1");
        K && (T = t[J]) ? T.s ? O(T.s[0]) : D(T) : a(function(d, i, j) {
            if (!M) {
                j = W > 0 && a(function() {
                    D(z)
                }, W);
                P = function() {
                    j && clearTimeout(j);
                    d[m] = d[q] = d[l] = d[v] = null;
                    C[p](d);
                    i && C[p](i)
                };
                window[B] = e;
                d = b(o)[0];
                d.id = k + X++;
                R && (d[h] = R);
                var t = function(a) {
                    (d[q] || f)();
                    a = r;
                    r = void 0;
                    a ? O(a[0]) : D(g)
                };
                I.msie ? (d.event = q, d.htmlFor = d.id, d[m] = function() {
                    /loaded|complete/.test(d.readyState) && t()
                }) : (d[v] = d[l] = t, I.opera ? (i = b(o)[0]).text = "jQuery('#" + d.id + "')[0]." + v + "()" : d[n] = n);
                d.src = J;
                C.insertBefore(d, C.firstChild);
                i && C.insertBefore(i, C.firstChild)
            }
        }, 0);
        return i
    }
    var n = "async", h = "charset", j = "", g = "error", k = "_jqjsp", q = "onclick", v = "on" + g, l = "onload", m = "onreadystatechange", p = "removeChild", o = "<script/>", x = "success", z = "timeout", I = b.browser, 
    C = b("head")[0] || document.documentElement, t = {}, X = 0, r, u = {callback: k,url: location.href};
    i.setup = function(a) {
        b.extend(u, a)
    };
    b.jsonp = i
})(jQuery, setTimeout);
(function(b) {
    var a = function(b, e, d, i) {
        d = d || document.body;
        i = i || {};
        if (typeof i.skipClassName == "string" || i.skipClassName instanceof String)
            i.skipClassName = [i.skipClassName];
        if (i.skipClassName instanceof Array)
            i.skipClassName = RegExp("\\b(" + i.skipClassName.join("|") + ")\\b");
        i.tag = i.tag || "span";
        for (d = d.firstChild; d; d = d.nextSibling)
            if (d.nodeType == 1)
                (!i.skipClassName || !i.skipClassName.test(d.className)) && a(b, e, d, i);
            else if (d.nodeType == 3)
                for (; ; ) {
                    var n = d.nodeValue.indexOf(b);
                    if (n == -1)
                        break;
                    var h = d, j = i.tag, g = 
                    n;
                    n += b.length;
                    var k = document.createTextNode(h.nodeValue.substring(0, g));
                    h.parentNode.insertBefore(k, h);
                    j = document.createElement(j);
                    j.appendChild(document.createTextNode(h.nodeValue.substring(g, n)));
                    h.parentNode.insertBefore(j, h);
                    h.nodeValue = h.nodeValue.substring(n);
                    j.className = e
                }
    };
    b.fn.markText = function(b, e, d) {
        return this.each(function() {
            a(b, e, this, d)
        })
    }
})(jQuery);
$.fn.extend({insertAtCaret: function(b) {
        var a = this.get(0);
        a.focus();
        var f = 0;
        if (jQuery.browser.opera) {
            var e = b.match(/\n/g);
            if (e)
                f = e.length
        }
        if (jQuery.browser.msie)
            a = document.selection.createRange(), a.text = b, a.select();
        else {
            var e = a.value, d = a.selectionStart, f = d + b.length + f;
            a.value = e.substr(0, d) + b + e.substr(d);
            a.setSelectionRange(f, f)
        }
    },input: function(b) {
        this.click().focus().val(b);
        return this
    },quickEmpty: function() {
        this.each(function() {
            for (var b = this.childNodes.length; b--; )
                this.removeChild(this.lastChild)
        })
    }});
if ($.browser.msie) {
    $.fn.extend({insertAtCaretForChatIE: function(b) {
            var a = this.get(0);
            a.focus();
            var f = a.value, e = CS.view.last_caret_pos, d = f.substr(0, e);
            a.value = d + b + f.substr(e);
            f = (f = d.match(/\n/g)) ? f.length : 0;
            a = a.createTextRange();
            a.collapse(!0);
            a.moveEnd("character", e + b.length - f);
            a.moveStart("character", e + b.length - f);
            a.select()
        }});
    var get_caret_position_ie = function(b) {
        var a = b.ownerDocument;
        if (b.tagName.toLowerCase() == "textarea") {
            var a = a.selection.createRange(), f = a.duplicate();
            f.moveToElementText(b);
            f.setEndPoint("StartToEnd", a);
            f.setEndPoint("StartToStart", a);
            return b.value.length - f.text.length
        } else
            return b = a.selection.createRange(), a = b.duplicate(), result.start = 0 - a.moveStart("character", -1E5), result.end = result.start + b.text.length, result.caret = result.end, result.caret
    }
}
var $C = null;
(function() {
    var b = {}, a = {};
    $C = function(f) {
        b[f] == void 0 && (a[f] == void 0 ? b[f] = $(f) : (b[f] = a[f](), delete a[f]));
        return b[f]
    };
    $C.register = function(b, e) {
        a[b] = e;
        return this
    }
})();
function Request() {
    var b = this;
    b.use_local_comet = !1;
    b.ajax = function(a) {
        if (a.type == "POST")
            a.data = {pdata: $.toJSON(a.data)};
        return $.ajax(a)
    };
    b.checkOnline = function(a, b) {
        typeof a != "function" && (a = function() {
        });
        typeof b != "function" && (b = function() {
        });
        $.ajax({type: "get",dataType: "json",async: !1,url: SERVER_PATH + "/gateway.php?cmd=check_online&myid=" + AC.myid + "&_v=" + CW.version + "&_av=" + CW.api_version + "&_t=" + ACCESS_TOKEN + "&ln=" + LANGUAGE,success: function(d) {
                if (d && d.status.success == !0)
                    a();
                else {
                    var e = "";
                    if (d && d.status)
                        e = 
                        d.status.message;
                    b(e)
                }
            },error: function() {
                b("TIMEOUT")
            }})
    };
    var a = typeof sessionStorage === "undefined" ? new Storage : sessionStorage, f = 3E3, e = 7;
    b.comet = function(d) {
        if (b.use_local_comet)
            CW.get("gateway.php", {cmd: "local_comet",last_id: CW.last_id,"new": 1}, function(a) {
                f = 1E3;
                a.updated && CW.watch();
                b.comet()
            }, function() {
                f *= 1.2;
                setTimeout(function() {
                    b.comet()
                }, f)
            });
        else {
            for (; $("#wcs-iframe").length; )
                $("#wcs-iframe").remove();
            if (d)
                n(d);
            else {
                var d = md5(AC.myid), h = a.getItem("account_hash");
                h ? d != h && (j(), a.setItem("account_hash", 
                d)) : (a.getItem("channel_token_key") && j(), a.setItem("account_hash", d));
                (d = a.getItem("channel_token_key")) ? n(d) : CW.post("gateway.php", {cmd: "get_comet_token_key"}, function(b) {
                    f = 3E3;
                    e = 7;
                    n(b.token_key, !0);
                    a.setItem("channel_token_key", b.token_key)
                }, function() {
                    if (e < 0)
                        return !1;
                    setTimeout(function() {
                        b.comet()
                    }, f);
                    f *= 2;
                    e--
                })
            }
        }
    };
    var d = 3E3, i = 7, n = function(e, f) {
        var j = a.getItem("channel_token");
        j ? h(j) : $.jsonp({url: COMET_SERVER_PATH + "/token?callback=?",data: {myid: AC.myid,key: e},success: function(b) {
                b.status && b.status.success && 
                (a.setItem("channel_token", b.result.token), h(b.result.token), d = 3E3, i = 7, f != !0 && CW.post("gateway.php", {cmd: "update_comet_token_key",token_key: e}))
            },error: function() {
                CW.post("gateway.php", {cmd: "get_comet_token",token_key: e}, function(b) {
                    a.setItem("channel_token", b.comet_token);
                    h(b.comet_token);
                    d = 3E3;
                    i = 7
                }, function() {
                    if (i < 0)
                        return !1;
                    setTimeout(function() {
                        b.comet(e, f)
                    }, d);
                    d *= 2;
                    i--
                })
            }})
    }, h = function(a) {
        a = (new goog.appengine.Channel(a)).open();
        a.onmessage = function(a) {
            switch (a.data) {
                case "watch":
                    CW.watch();
                    break;
                case "reconnect":
                    j(), b.comet()
            }
        };
        a.onerror = function() {
            j();
            b.comet()
        }
    }, j = function() {
        a.removeItem("channel_token");
        a.removeItem("channel_token_key")
    }
}
function Storage() {
    var b = this;
    b.values = {};
    b.setItem = function(a, f) {
        b.values[a] = f;
        return this
    };
    b.getItem = function(a) {
        return b.values[a]
    };
    b.removeItem = function(a) {
        b.values[a] != void 0 && delete b.values[a];
        return this
    }
}
var PLATFORM = "web", CW = new ChatWork(client_ver), AC = new Account(myid), FL = new File, TK = new Task, RL = new RoomList, RD = new RoomDialog, ST = new Setting, CS = new ChatSend, SC = new Search, RM = null, gears = window.google && google.gears, wfocus = !0, tlscroll = !1, press_key = 0, up_key = 0, scroll_cancel = null, is_local_env = !1, outerLayout, menuLayout, middleLayout, subLayout, innerLayout, audioObjSupport, basicAudioSupport, canPlayOgg, canPlayMp3;
try {
    var audio = new Audio("");
    audioObjSupport = !!audio.canPlayType;
    basicAudioSupport = !(audioObjSupport || !audio.play)
} catch (e$$33) {
    basicAudioSupport = audioObjSupport = !1
}
audioObjSupport && (canPlayOgg = "no" != audio.canPlayType("audio/ogg") && "" != audio.canPlayType("audio/ogg"), canPlayMp3 = "no" != audio.canPlayType("audio/mpeg") && "" != audio.canPlayType("audio/mpeg"));
var DIALOG_CANCEL_BUTTON = null, DIALOG_CLOSE_BUTTON = null;
$(function() {
    $C.register("document", function() {
        return $(document)
    }).register("body", function() {
        return $(document.body)
    }).register("#cw_send_area .cw_buttons", function() {
        return $C("#cw_send_area").find(".cw_buttons")
    }).register("#cw_room_setting_box .admin", function() {
        return $C("#cw_room_setting_box").find(".admin")
    }).register("#cw_room_setting_box .group", function() {
        return $C("#cw_room_setting_box").find(".group")
    }).register("#cw_room_setting_box .contact", function() {
        return $C("#cw_room_setting_box").find(".contact")
    }).register("#cw_room_setting_box .my", 
    function() {
        return $C("#cw_room_setting_box").find(".my")
    }).register("#cw_room_setting_box li", function() {
        return $C("#cw_room_setting_box").find("li")
    });
    var b = function() {
        $(this).dialog("close")
    };
    DIALOG_CANCEL_BUTTON = {text: L.button_cancel,click: b};
    DIALOG_CLOSE_BUTTON = {text: L.button_close,click: b};
    CW.prepare();
    AC.prepare();
    FL.prepare();
    TK.prepare();
    RL.prepare();
    RD.prepare();
    ST.prepare();
    CS.prepare();
    SC.prepare();
    CW.buildLayout();
    if (is_local_env)
        CW.request.use_local_comet = !0;
    CW.watch();
    $.datepicker._gotoToday = 
    function(a) {
        var b = $(a), d = this._getInst(b[0]);
        if (this._get(d, "gotoCurrent") && d.currentDay)
            d.selectedDay = d.currentDay, d.drawMonth = d.selectedMonth = d.currentMonth, d.drawYear = d.selectedYear = d.currentYear;
        else {
            var e = new Date;
            d.selectedDay = e.getDate();
            d.drawMonth = d.selectedMonth = e.getMonth();
            d.drawYear = d.selectedYear = e.getFullYear()
        }
        this._notifyChange(d);
        this._adjustDate(b);
        this._setDateDatepicker(b, new Date);
        this._selectDate(a, this._getDateDatepicker(b));
        b.blur()
    };
    $("#ui-datepicker-div").hide();
    $.ajaxSetup({contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        cache: !1});
    $C("body").bind("ajaxSend", function(a, b) {
        $(window).bind("beforeunload", function() {
            b.abort()
        })
    });
    window.onerror = function(a) {
        a.toString().indexOf("Internal error") != -1 && (alert("\u5185\u90e8\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002ChatWork\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u307e\u3059"), document.location.reload())
    };
    var b = function() {
        wfocus = !0;
        CW.read();
        CW.watch()
    }, a = function() {
        wfocus = !1;
        CW.cancelRead()
    };
    $.browser.msie ? ($C("document").bind("focusin", b), $C("document").bind("focusout", 
    a), $C("#cw_send_file_mask").css("opacity", 1)) : (window.addEventListener("focus", b, !1), window.addEventListener("blur", a, !1));
    $("button").button();
    $("label").mousedown(function() {
        return !1
    });
    if (MOBILE == "ipad") {
        $C("#cw_send_file").remove();
        $C("#cw_send_file_mask").remove();
        $("#cw_notification").remove();
        document.addEventListener("touchmove", function(a) {
            a.preventDefault()
        }, !1);
        $(".mb_scroll_vertical").overscroll({direction: "vertical",showThumbs: !0});
        var f = null;
        $(".ui_icsearch").focus(function() {
            var a = $(this);
            a.hasClass("ui_icsearch_blank") && (a.val(""), a.removeClass("ui_icsearch_blank"));
            f && (clearInterval(f), f = null);
            f = setInterval(function() {
                a.val().length > 0 ? a.parent().find(".ui_icsearch_delval").show() : a.parent().find(".ui_icsearch_delval").hide();
                a.trigger("update")
            }, 1E3)
        }).blur(function() {
            var a = $(this);
            a.val() == "" ? (a.parent().find(".ui_icsearch_delval").hide(), a.addClass("ui_icsearch_blank"), a.val(a.attr("title"))) : a.trigger("update");
            f && (clearInterval(f), f = null)
        }).keyup(function() {
            var a = $(this);
            a.val().length > 
            0 ? a.parent().find(".ui_icsearch_delval").show() : a.parent().find(".ui_icsearch_delval").hide();
            a.trigger("update")
        }).val("").blur()
    } else
        $(".ui_icsearch").focus(function() {
            var a = $(this);
            a.hasClass("ui_icsearch_blank") && (a.val(""), a.removeClass("ui_icsearch_blank"))
        }).blur(function() {
            var a = $(this);
            a.val() == "" && (a.parent().find(".ui_icsearch_delval").hide(), a.addClass("ui_icsearch_blank"), a.val(a.attr("title")))
        }).keyup(function() {
            var a = $(this);
            a.val().length > 0 ? a.parent().find(".ui_icsearch_delval").show() : 
            a.parent().find(".ui_icsearch_delval").hide();
            a.trigger("update")
        }).val("").blur();
    $(".ui_icsearch_delval").click(function() {
        $(this).hide();
        var a = $(this).parent().find(".ui_icsearch");
        a.val("").blur();
        a.trigger("clear");
        a.trigger("update")
    });
    $("#cw_movie_dialog").dialog({autoOpen: !1,modal: !0,hide: "fade",close: function() {
            $("#cw_movie_content").empty()
        }});
    var e = function() {
        $("#cw_movie_content").empty();
        if (d) {
            var a = $(d).attr("href").match(/(https?:\/\/([^\/]+)[-_.!~*\'\(\)a-zA-Z0-9;\/?:\@&=+\$,%#\{\}\[\]]+)/), 
            b = a[1], e = a[2], f = $C("document").width(), a = $C("document").height(), h = 640, i = 480;
            if (f < 624 || a < 504)
                h = 320, i = 240;
            $("#cw_movie_dialog").dialog({width: h + 24});
            var m = f = "";
            e == "video.google.com" && b.indexOf("contentId") != -1 && (f = "Google Video", (a = b.match(/video\.google\.com\/a\/([^\/]+)\/?#\/Play\/contentId=([\w]+)/)) && (m = '<object width="' + h + '" height="' + i + '"><param name="videoUrl" value="http://video.google.com/a/VideoStream?contentId%3D' + a[2] + '"></param><param name="autoPlay" value="true"></param><embed src="http://video.google.com/a/static/googleplayer.swf?videoUrl=http://video.google.com/a/VideoStream?contentId%3D' + 
            a[2] + '&amp;autoPlay=true" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="' + h + '" height="' + i + '"></embed></object>'));
            e == "www.youtube.com" && b.indexOf("watch?v=") != -1 && (f = "YouTube", m = '<object width="' + h + '" height="' + i + '"><param name="movie" value="http://www.youtube.com/v/NGZFw7uAvlU&amp;hl=ja_JP&amp;fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="' + b.replace("watch?v=", 
            "v/") + '&amp;hl=ja_JP&amp;fs=1&amp;autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="' + h + '" height="' + i + '"></embed></object>');
            e == "vimeo.com" && b.match(/[0-9]+$/) && (f = "vimeo", e = b.replace(/([0-9]+)$/, "moogaloop.swf?clip_id=$1&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=ffffff&amp;fullscreen=1"), m = '<object width="' + h + '" height="' + i + '"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="' + 
            e + '" /><embed src="' + e + '&amp;autoplay=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="' + h + '" height="' + i + '"></embed></object>');
            m && ($("#cw_movie_content").html(m), $("#cw_movie_jump").attr("href", b), $("#cw_movie_media").html(f), $("#cw_movie_dialog").dialog({title: f + "\u306e\u52d5\u753b\u3092\u518d\u751f"}))
        }
    }, d = null;
    $C("#cw_timeline").on("click", ".cw_movie_link", function() {
        d = this;
        e();
        $("#cw_movie_dialog").dialog("open");
        return !1
    });
    $("#cw_movie_reload").click(e);
    a = ["./image/sp_icon.png"];
    if (a.length > 0)
        for (var i = new Image, b = 0; b < a.length; b++)
            i.src = a[b];
    if (canPlayOgg || canPlayMp3) {
        for (var a = ["mallet", "mallet2", "ashvoice", "agogo", "agogo2", "chime", "chime2", "cowbell", "cowbell2", "cuica", "cuica2", "drip", "drip2", "kiai", "kiai2", "marimba", "marimba2", "percussimba", "percussimba2", "steampipe", "steampipe2", "whistle", "whistle2", "8-bit", "8-bit2"], i = [], b = aidx = 0, n = a.length; b < n; b++) {
            var h = a[b];
            canPlayOgg ? i[aidx++] = '<audio id="cw_audio_' + h + '"><source src="./sound/' + h + '.ogg" /></audio>' : 
            canPlayMp3 && (i[aidx++] = '<audio id="cw_audio_' + h + '"><source src="./sound/' + h + '.mp3" /></audio>')
        }
        $("#cw_audio_list").html(i.join(""))
    }
});
