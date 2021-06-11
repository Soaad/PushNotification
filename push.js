var push=require('web-push');
let vapIdKeys={
    publicKey: 'BCRkc2Y7_3AlZE04naNJh35dQyxZH8HlnJKbXn9IDs5aTsABkcmXFMhIwkj0pqNCPsykdpemgy0u890XTH9Vk5M',
    privateKey: 'pKTVX2ErHLerzSC4LhE4sUX7QMmtM6SuhUvNYObzkL8'
  }//push.generateVAPIDKeys();
console.log(vapIdKeys)

push.setVapidDetails("mailto:soaadabdelaziz@gmail",vapIdKeys.publicKey,vapIdKeys.privateKey)

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/d5CQfK9aLyc:APA91bE08Wk5a7kkg4rqg1AAZmszg-GOlRdqPBQeLEXBO7bhZ8p6zwT9Bn3zQl2xjS3iY-TpPhnrdZ-7LikbTDb15bX5Oz1MsoBDLNQYfRWwu8K-vJl3wVus_w8gAHuaVGyxNIKpjD4S","expirationTime":null,"keys":{"p256dh":"BBv7llISFflli9SnbEa1NdH_HUkROjBnWxOaBmDGR_SNVGfIVEYQVhY2Mc5TVhtVqGrt0cdAryZcSit66oGxta4","auth":"ObMvAOAmwrTaerrSR_cPRA"}}

push.sendNotification(sub,'Test Message')