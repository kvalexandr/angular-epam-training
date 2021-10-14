import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be transform time to string', () => {
    const pipe = new DurationPipe();

    const time = 260;
    const result = '4h 20mm';

    expect(pipe.transform(time)).toBe(result);
  });
});
