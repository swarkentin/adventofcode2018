import * as fs from 'fs';
import { calculateFrequency } from '../src/frequency';
import { expect } from 'chai';
import 'mocha';

describe('Calculate Frequency', () => {
  it('It should be 1', () => {
    var result = calculateFrequency("test/fixtures/example1.txt");
    expect(result).to.equal(1);
  });
});