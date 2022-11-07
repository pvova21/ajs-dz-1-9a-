import Magician from '../Magician';
import Daemon from '../Daemon';

test('силы атаки на 2 клетку без дурмана', () => {
  const mag = new Magician('tor');
  mag.attackChange = 2;
  const result = mag.attackChange;
  expect(result).toEqual(90);
});

test('силы атаки на 2 клетку c дурманом', () => {
  const mag = new Magician('tor');
  mag.attackChange = 2;
  mag.stoned = true;
  const result = mag.attackChange;
  expect(result).toEqual(85);
});

test('силы атаки на 4 клетку без дурмана', () => {
  const daemon = new Daemon('tor');
  daemon.attackChange = 4;
  const result = daemon.attackChange;
  expect(result).toEqual(56);
});

test('силы атаки на 4 клетку c дурманом', () => {
  const daemon = new Daemon('tor');
  daemon.attackChange = 4;
  daemon.stoned = true;
  const result = daemon.attackChange;
  expect(result).toEqual(46);
});

test('проверка силы атаки c дурманом', () => {
  const daemon = new Daemon('tor');
  daemon.stoned = true;
  const result = daemon.stoned;
  expect(result).toEqual(true);
});
