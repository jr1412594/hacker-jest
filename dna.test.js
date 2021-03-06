const DNAStrand = require('./dna');

test('should swap dna for its counter part', () => {
    expect(DNAStrand("ATTGC")).toBe("TAACG");
});
