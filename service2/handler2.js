"use strict"

async function handle(event) {
  console.log(event)

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: 2 })
  }
}

module.exports = { handle }