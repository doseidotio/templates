import dosei from '@dosei/dosei';

new dosei.Cluster({
  name: "dev-example",
  servers: ["root@dosei.example.dev"],
  identity: {
    type: "file",
    value: "~/.ssh/id_rsa"
  }
});
