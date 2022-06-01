export function findByUuid(array, uuid) {
  return array?.find((product) => product?.uuid === uuid);
}
