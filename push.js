var push=require('web-push');
let vapIdKeys={
    publicKey: 'BCRkc2Y7_3AlZE04naNJh35dQyxZH8HlnJKbXn9IDs5aTsABkcmXFMhIwkj0pqNCPsykdpemgy0u890XTH9Vk5M',
    privateKey: 'pKTVX2ErHLerzSC4LhE4sUX7QMmtM6SuhUvNYObzkL8'
  }//push.generateVAPIDKeys();
console.log(vapIdKeys)

push.setVapidDetails("soaadabdelaziz@gmail.com",vapIdKeys.publicKey,vapIdKeys.privateKey)