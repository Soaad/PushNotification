var push=require('web-push');
let vapIdKeys={
    publicKey: 'BCRkc2Y7_3AlZE04naNJh35dQyxZH8HlnJKbXn9IDs5aTsABkcmXFMhIwkj0pqNCPsykdpemgy0u890XTH9Vk5M',
    privateKey: 'pKTVX2ErHLerzSC4LhE4sUX7QMmtM6SuhUvNYObzkL8'
  }//push.generateVAPIDKeys();
console.log(vapIdKeys)

push.setVapidDetails("Test",vapIdKeys.publicKey,vapIdKeys.privateKey)

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/exFN9JnqpDg:APA91bEduL_vRbp-nuIoI_RBU-gVHBsrADRic8fle-s1DyMQdjbLdio3l3JsAweuNhwAcXVEJmWSAWIUU7O9R8FFFNFp-AUc58CdLu_28xQd6z0hMGu894RNuBwpBVhvHMcHBZhEk9QB","expirationTime":null,"keys":{"p256dh":"BF9AmQhnsbLBk9XGAePW6dTmCBzsq8dR2UmttR8_rPG1VvxVVF-igE3TMwHpZxkR0VK5phYCQ0m-hc0Tl1oj7K8","auth":"1fPlR51xQiVelKgVnHyO2g"}}

push.sendNotification(sub,'Test Message')