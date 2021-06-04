/**
 * 深克隆
 */

function clone(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  var newobj = Array.isArray(obj) ? [] : {};
  for (var k in obj) {
    newobj[k] = clone(obj[k]);
  }
  return newobj;
}
// function clone(o) {
//       let res = {}
//       if (o instanceof Array) {
//             res = o.map(i => clone(i))
//       } else {
//             let keys = Object.keys(o)
//             keys.forEach(i => {
//                   if (typeof o[i] === 'object' && o[i]) {
//                         res[i] = clone(o[i])
//                   } else {
//                         res[i] = o[i]
//                   }
//             })
//       }

//       return res
// }

export default clone;
