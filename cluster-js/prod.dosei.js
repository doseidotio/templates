import dosei from '@dosei/dosei';

new dosei.Cluster({
  name: "prod-example",
  servers: ["root@dosei.example.com"],
  identity: {
    type: "file",
    value: "~/.ssh/id_rsa"
  }
});
