import Hashids from "hashids";

const hashids = new Hashids();
const encryptId = (id) => {
  return hashids.encode(id);
};

const decryptId = (id) => {
  return hashids.decode(id);
};

export { encryptId, decryptId };
