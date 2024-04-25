if (index < 0 || index >= buckets.length) {
  throw new Error('Trying to access index out of bound');
}

function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
  }

  return hashCode;
}
// key is a value to put into the hashcode function and the value is a value that is associated with the key.
function set(key, value) {

}
