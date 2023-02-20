const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

class DeterministicPartitionKey {
  constructor(hashFunction = "sha3-512") {
    this.hashFunction = hashFunction;
  }

  generatePartitionKey(event = {}) {
    const candidate = event.partitionKey || this.generateHash(JSON.stringify(event));

    return this.validatePartitionKey(candidate);
  }

  generateHash(data) {
    return crypto.createHash(this.hashFunction).update(data).digest("hex");
  }

  validatePartitionKey(candidate) {
    const partitionKey = typeof candidate === "string" && candidate.length <= MAX_PARTITION_KEY_LENGTH ? candidate : this.generateHash(candidate.toString());

    return partitionKey || TRIVIAL_PARTITION_KEY;
  }
}

module.exports = {
  DeterministicPartitionKey,
};