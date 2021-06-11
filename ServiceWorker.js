
self.addEventListener('push',function(e) {
    var options={
        body:'this message gerated from push notification',
        icon:'/images/example.png',
        vibrate:[100,50,100],
        data:{
            dateOfArrival:Date.now(),
            primaryKey:'2'
        },
        actions:[
            {
                action:'explore',
                title:'Explore this new world',
                icon:'images/checkmark.png'
            },
            {
                action:'close',
                title:'Close',
                icon:'images/xmark.png'
            }
        ]
    };
   e.waitUntil( self.registration.showNotification('Test Message',options));
});