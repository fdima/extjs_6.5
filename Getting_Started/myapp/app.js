/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'MyApp',
    extend: 'MyApp.Application',  // <<== added

    requires: [
        // 'Ext.MessageBox'
        'MyApp.*'   // tell Cmd to include all app classes
    ]

    // launch: function () {
    //     Ext.Msg.alert('Hello Ext JS', 'Hello! Welcome to Ext JS.');
    // }
});
