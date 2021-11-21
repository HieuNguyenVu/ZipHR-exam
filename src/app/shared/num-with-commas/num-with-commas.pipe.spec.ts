import { NumWithCommasPipe } from './num-with-commas.pipe';

describe('NumWithCommasPipe', () => {
  it('create an instance', () => {
    const pipe = new NumWithCommasPipe();
    expect(pipe).toBeTruthy();
  });
});
