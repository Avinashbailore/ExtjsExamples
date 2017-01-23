Ext.onReady(function(){
     	console.log("hai from ready");
        var temp = {name:"bailore",cmp:"microsoft"}
        var d1 = Ext.create("Ext.Button",{
                title:"Dhoni",                
                html:"M.S.Dhoni"

        });
        var d2 = Ext.create("Ext.Panel",{
                data : {name : "Avi",cmp : "CTS"},
                tpl : ["<h1>Empname:{name}</h1>","company<div>{cmp}</div>"],
                tools : [
                    {type : 'close'},
                    {type : 'toggle'},
                    {type : 'refresh',
                        handler: function(event, toolEl, panelHeader) {
                            console.log(this)
                            this.up('panel').update(temp);
                        }
                    },

                    ]

        });


        // var p = Ext.create('Ext.ProgressBar', {
        //         renderTo: Ext.getBody(),
        //         width: 300
        // });

        // p.wait({
        //     interval: 500, //bar will move fast!
        //     duration: 50000,
        //     increment: 15,
        //     text: 'Updating...',
        //     scope: this,
        //     fn: function(){
        //     p.updateText('Done!');
        //         }
        // });

        var slider = Ext.create('Ext.slider.Single', {
            width: 200,
            value: 50,
            increment: 10,
            minValue: 0,
            maxValue: 100,
            fieldLabel:'Range'
        });

        var check = Ext.create('Ext.Panel', {
            width      : 300,
            title      : 'Football',
            items: [
            {
                xtype      : 'fieldcontainer',
                fieldLabel : 'Players You Like',
                defaultType: 'checkboxfield',
                items: [
                {
                    boxLabel  : 'Messi',
                    inputValue: '1',
                    id        : 'checkbox1',
                    checked   : true
                }, {
                    boxLabel  : 'Ronaldo',
                    inputValue: '2',
                    id        : 'checkbox2'
                }, {
                    boxLabel  : 'Dhoni',
                    inputValue: '3',
                    id        : 'checkbox3'
                }
                ]
            }]
        });

        var rad = Ext.create('Ext.form.Panel', {
            title      : 'Order Form',
            id : 'rads',
            collapsible:true,
            width      : 300,
            bodyPadding: 10,
            renderTo   : Ext.getBody(),
            items: [
                {
                    xtype      : 'fieldcontainer',
                    fieldLabel : 'Batsmen',
                    bodyPadding : 10,
                    defaultType: 'radiofield',
                    layout: 'hbox',
                    items: [
                    {
                        boxLabel  : 'Virat',
                        name : 'player',
                        inputValue: 'v',
                        id        : 'radio1'
                    }, 
                    {
                        boxLabel  : 'Dhoni',
                        name : 'player',
                        inputValue: 'd',
                        id        : 'radio2'
                    }, 
                    {
                        boxLabel  : 'Raina',
                        name : 'player',
                        inputValue: 'r',
                        id        : 'radio3'
                    }]
            }]
        });

        rad.show();


     	Ext.create('Ext.Panel',{
     		title : "My Panel",
            height : 700,
     		width : 350,
            layout : 'anchor',
            defaults: {
                    collapsible: true,
                    split: true,
                    bodyStyle: 'padding:15px'
            },
     		buttons: [
  				  { text : 'Save' },
  				  { text : 'Cancel'}
			],
            items: 
            [
                {
                    title: 'Panel1',
                    region:'south',
                    html: 'This is Panel 1'
                },
                {
                    xtype : 'textfield',
                    name:'fname',
                    fieldLabel : 'FirstName'
                },
                {
                    xtype : 'textfield',
                    name:'fname',
                    fieldLabel : 'LastName'
                },
                {
                    xtype : 'textfield',
                    name:'email',
                    fieldLabel : 'email'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Start date'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'End date'
                },
                {
                    xtype : 'numberfield',
                    fieldLabel : 'Age'
                },
                {
                    xtype : 'button',
                    text : 'Cricket',
                    menu : [
                    {
                        text : "Dhoni",
                        menu : [{text : "India"},{text : "Pune"}]
                    },
                    {
                        text : "Virat",
                        menu : [{text : "India"},{text : "RCB"}]
                    }] 
                },
                {
                    xtype : 'button',
                    text:'Submit'
                },d1,slider,check,d2
            ],
     		renderTo : 'try'     		
     	});
        
     });