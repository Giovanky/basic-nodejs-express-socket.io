const c = console.log

c('**********Programación Asíncrona**********')

c('**********Async - Await Functions**********')

const cuadrado = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ value: value, result: value * value })
    }, 0 | Math.random() * 1000)
  })
}

async function cuadrados() {
  c('Inicio Async Functions')

  let obj = await cuadrado(0)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(1)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(2)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(3)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(4)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(5)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(6)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(7)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(8)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(9)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  obj = await cuadrado(10)
  c(`Async Function: ${obj.value}, ${obj.result}`)

  c('Fin Async Functions')
}

cuadrados()