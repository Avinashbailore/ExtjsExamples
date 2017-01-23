Ext.onReady(function(){
    Ext.create('Ext.container.Viewport', {
    layout      : 'border',
    defaultType : 'panel',
    defaults: {
            sortable: true,
            marginBottom : 10,
            padding : 10,
            autoScroll: true
        },
    items       : [
        {
            region : 'north',
            title  : 'North',
            items  : 
            [   
                {
                    xtype : 'textfield',
                    fieldLabel : 'FirstName',
                    id : 'fname'

                },

                {
                    xtype :'button',
                    id : 'milo',
                    text :'Submit',
                    listeners: {
                        click: function(button) {
                            alert("hai there");
                        }
                    }
                }
            ],
            height : 100
        },
        {
            region : 'south',
            title  : 'South',
            height : 100,
            weight : -25
        },
        {
            region : 'west',
            title  : 'West',
            width  : 200,
            weight : 15
        },
        {
            region : 'east',
            title  : 'East',
            width  : 200
        },
        {
            region : 'center',
            title  : 'center'
        }
    ],
    renderTo : 'Fine'
});     
        
});