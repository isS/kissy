﻿/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 13 14:40
*/
/**
 * backColor command.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/backColor/cmd", function (S, cmd) {

    var BACKCOLOR_STYLE = {
        element:'span',
        styles:{ 'background-color':'#(color)' },
        overrides:[
            { element:'*', styles:{ 'background-color':null } }
        ],
        childRule:function () {
            // 强制最里面
            // <span style='bgcolor:red'><span style='fontSize:100px'>123434</span></span>
            return false;
        }
    };

    return {
        init:function (editor) {
            if (!editor.hasCommand("backColor")) {
                editor.addCommand("backColor", {
                    exec:function (editor, c) {
                        editor.execCommand("save");
                        cmd.applyColor(editor, c, BACKCOLOR_STYLE);
                        editor.execCommand("save");
                    }
                });
            }
        }
    };

}, {
    requires:['../color/cmd']
});
