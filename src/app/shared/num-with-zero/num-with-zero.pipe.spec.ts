import { NumWithZeroPipe } from './num-with-zero.pipe';

describe('numWithZeroPipe', () => {
  it('create an instance', () => {
    const pipe = new NumWithZeroPipe();
    expect(pipe).toBeTruthy();
  });
});
