import dosei from '@dosei/dosei';

new dosei.Cluster({
  name: "dosei.example.com",
  servers: ["ubuntu@dosei.example.com"]
});
