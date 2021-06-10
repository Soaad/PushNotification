const { setVapidDetails } = require("web-push")

self.addEventListener('push',()=>{
    self.registration.sendNotification('Test Message',{})
})