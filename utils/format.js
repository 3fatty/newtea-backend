


function foo(state, data) {
  return state === 0?
    { state, err:data }:
    { state, data }
}


module.exports = foo;
