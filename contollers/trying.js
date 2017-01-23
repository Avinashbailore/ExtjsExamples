Ext.onReady(function(){
    Ext.create("Ext.Panel",{
                data : {name : "Avi",cmp : "CTS"},
                tpl : ["<h1>Empname{name}</h1>","<div>company{cmp}</div>"],
                tools : {type:'close'},
                renderTo : 'Fine'
        });

});
// Floating components begin life hidden
