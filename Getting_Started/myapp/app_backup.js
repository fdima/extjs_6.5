/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'MyApp',

    requires: [
        'Ext.MessageBox'
    ],

    launch: function () {
        Ext.Msg.alert('Hello Ext JS', 'Hello! Welcome to Ext JS.');
    }
});
