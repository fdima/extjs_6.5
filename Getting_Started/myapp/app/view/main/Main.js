Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',

    controller: 'main',   // <<== added

    requires: [
        'Ext.Button'
    ],

    items: [{
        title: 'Home',
        html: '<h1 class="main-banner">iSMS for iOS!</h1>',
        items: [{
            xtype: 'button',
            text: 'Testing button',
            handler: 'onGo'  // <<== added
        }]
    }, {
        title: 'Notifications'
    }, {
        title: 'Settings'
    }]
});
