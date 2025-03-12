import dosei from '@dosei/dosei';

new dosei.Cluster({
  name: "dosei.example.dev",
  servers: ["ubuntu@dosei.example.dev"]
});
