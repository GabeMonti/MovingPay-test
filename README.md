# MovingPay-test
Teste para a empresa MovingPay

## Como utilizar o projeto
- `npm install`
- `cp .env.example .env`
- checkout docs at `{{API}}:{{PORT}}/docs/`
- OU
- simplesmente rode `{{API}}:{{PORT}}/process` 
- use o payload `{
  "vl_venda": 100.00,
  "qt_parcela": 3,
  "mdr": 2.00,
  "rav": 2.00
  }`

## Exemplo de requisição 
- `curl --location 'http://localhost:3000/process' \
  --header 'Content-Type: application/json' \
  --data '{
  "vl_venda": 100.00,
  "qt_parcela": 3,
  "mdr": 2.00,
  "rav": 2.00
  }'`

## Retorno Esperado

- `{
  "message": "success!",
  "data": [
  {
  "parcela": 1,
  "vl_bruto": 33.33,
  "vl_liquido": 32.02,
  "tx_mdr": 0.68,
  "tx_rav": 0.65
  },
  {
  "parcela": 2,
  "vl_bruto": 33.33,
  "vl_liquido": 31.36,
  "tx_mdr": 0.66,
  "tx_rav": 1.31
  },
  {
  "parcela": 3,
  "vl_bruto": 33.33,
  "vl_liquido": 30.71,
  "tx_mdr": 0.66,
  "tx_rav": 1.96
  }
  ]
  }`
