const a = new ArrayBuffer(8);

const a8 = new Uint8Array(a);
const a32 = new Uint32Array(a);

a8[0] = 1234567;
a32[0] = 1234567;
console.log(a8);
console.log("_________");
console.log(a32);
