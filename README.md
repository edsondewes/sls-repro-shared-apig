# Serverless shared API Gateway deploy

Minimal reprodution of an error when deploying multiples services with schema validation on a shared api gateway.

## Steps do reproduce
```bash
npm install

# Create the shared api gateway
npm run deploy:shared

# Deploy service 1
npm run deploy:service1

# Deploy service 2
# This shloud throw a schema error
npm run deploy:service2
```