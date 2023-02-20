const { DeterministicPartitionKey } = require("./dpk");

describe("DeterministicPartitionKey", () => {
  let generator;

  beforeEach(() => {
    generator = new DeterministicPartitionKey();
  });

  describe("generatePartitionKey", () => {
        
    it("Returns the partition key when given is a string", () => {
      expect(generator.generatePartitionKey('anything')).toMatch(/^[a-f0-9]{128}$/);
    });

    it("Returns the partition key when given is an event object", () => {
      const event = { partitionKey: 'a1b2c3'};
      expect(generator.generatePartitionKey(event)).toBe("a1b2c3");
    });
    
    it("Returns a hash of the event object as the partition key", () => {
      const event = { first: 'one'};
      expect(generator.generatePartitionKey(event)).toMatch(/^[a-f0-9]{128}$/);
    });

    it("Returns a hashed partition key if the partition key is to long", () => {
      const partitionKey = 'x'.repeat(256 + 1);
      expect(generator.generatePartitionKey({ partitionKey })).toMatch(/^[a-f0-9]{128}$/);
    });
    
  });

});
