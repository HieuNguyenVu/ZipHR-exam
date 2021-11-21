import { FirstCharUpperPipe } from './first-char-upper.pipe';

describe('firstCharUpperPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstCharUpperPipe();
    expect(pipe).toBeTruthy();
  });
});
