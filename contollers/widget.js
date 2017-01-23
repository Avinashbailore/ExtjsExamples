Ext.onReady(function(){
        Ext.onReady(function(){

            var welcome =  Ext.create('Ext.Panel',{
                title:'Welcome AvinashBailore',
                width:'100%',
                collapsible : true,
                closable:true,
                cls : 'welcome' 
            });

            var profile =  Ext.create('Ext.Panel',{
                title:'MyAddress',
                width:'70%',
                height : 290,
                layout:'accordion',
                layoutConfig: {
                        // layout-specific configs go here
                        titleCollapse: false,
                        animate: true,
                        activeOnTop: true
                    },
                
                items: [{
                        data:{name : 'avi'},
                        title: 'Home',
                        tpl : '<p>{name}</p>',
                        bodyStyle:'padding:10px;font-size:18px;'
                    },{
                        title: 'Mail',
                        html: 'avinashbailore@gmail.com',
                        bodyStyle:'padding:10px;font-size:18px;'
                    },{
                        title: 'Work',
                        html: '<p>Hyderabad,Telangana</p>',
                        bodyStyle:'padding:10px;font-size:18px;'
                    }],

                collapsible : true,
                closable:true,             
                
            });

            var data =  Ext.create('Ext.Panel',{
                title:'About Me',
                width:'30%',
                height : 290,
                data : {empid : "578115",title : "MR",fname : "Avinash",lname : "Bailore",dob : "18/12/94",bgrp : "O+ve"},
                tpl : ['<div><p>Empname&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp {empid} <p>',
                        '<p>title&nbsp&nbsp: &nbsp&nbsp{title} </p>',
                        '<p>fname&nbsp&nbsp:&nbsp&nbsp{fname}</p>',
                        '<p>lname&nbsp&nbsp:&nbsp&nbsp{lname} </p>',
                        '<p>dob&nbsp&nbsp:&nbsp&nbsp{dob}</p>',
                        '<p>bgrp&nbsp&nbsp:&nbsp&nbsp{bgrp}</p></div'], 
                collapsible : true,
                closable:true,
                cls : 'mydata',
                bodyStyle :'font-size : 18px;padding-left : 10px'
            });

            var pd =  Ext.create('Ext.Container',{
                width:'100%',
                layout : 'hbox',
                items : 
                    [
                        data,profile
                    ],
                defaults:
                    {
                        padding : 5
                    },
                collapsible : true,
                closable:true
            });


            var email =  Ext.create('Ext.Panel',{
                title:'Email',
                width:'33%',
                height : 110,
                defaults:
                    {
                        padding : 5
                    },
                bodyStyle : 'padding : 10px',
                data : {email : 'avinashbailore@gmail.com',type : 'PER1'},
                collapsible : true,
                closable:true,
                tpl : ['<table border="1" style="border-collapse: collapse;"><tr><th>Email</th><th>Type</th></tr><tr><td>{email}</td><td>{type}</td></tr></table>']

            });

            var phone =  Ext.create('Ext.Panel',{
                title:'Phone',
                width:'33%',
                height : 110,
                collapsible : true,
                closable:true,
                bodyStyle : 'padding : 10px',
                data : {phone : '8106791035',type : 'PER1'},
                tpl : ['<table border="1" style="border-collapse: collapse;"><tr><th>Phone</th><th>Type</th></tr><tr><td>{phone}</td><td>HME1</td></tr></table>']
            });

            var work =  Ext.create('Ext.Panel',{
                title:'Work',
                width:'33%',
                height : 110,
                bodyStyle : 'padding : 10px',
                collapsible : true,
                closable:true,
                data : {mobile : '985755434',type : 'PER1'},
                tpl : ['<table border="1" style="border-collapse: collapse;"><tr><th>Work Phone</th><th>Type</th></tr><tr><td>{mobile}</td><td>WRK 1</td></tr></table>']
            });



            var pc =  Ext.create('Ext.Container',{
                width:'100%',
                layout : 'hbox',
                collapsible : true,
                closable:true,
                items : 
                    [
                        email,work,phone
                    ],
                defaults:
                    {
                        padding : 5
                    }
            });


            var shows = Ext.create('Ext.Panel',{
                title:'Welcome Avinash Bailore',
                height:450,
                layout : 'vbox',
                collapsible : true,
                closable:true,
                renderTo : 'widget',
                hidden : true,
                items : 
                    [
                        pd,pc
                    ],
                defaults : 
                {
                    backgroundColor : 'black'
                }


            });

            var bat = Ext.create('Ext.Button',{
                text : 'AboutME',
                renderTo   : 'hai',
                listeners: {
                        click: function(button) {
                            shows.show();
                        }
                    }

            });
           
        });
        
});