import { createState, Store } from '@ngneat/elf';
import { addEntities, updateEntities, withEntities } from '../../index';
import {
  removeActiveIds,
  selectActiveEntities,
  selectActiveEntity,
  selectActiveId,
  setActiveId,
  setActiveIds,
  toggleActiveIds,
  withActiveId,
  withActiveIds,
} from './active';

describe('activeId', () => {
  it('should select the active entity', () => {
    const { state, config } = createState(
      withEntities<{ id: number; title: string }>(),
      withActiveId()
    );

    const store = new Store({ state, config, name: '' });

    const spy = jest.fn();
    store.pipe(selectActiveId()).subscribe(() => {
      //
    });

    store.pipe(selectActiveEntity()).subscribe((v) => {
      spy(v);
    });

    expect(spy).toHaveBeenCalledWith(undefined);

    store.reduce(addEntities({ id: 1, title: '' }));

    store.reduce(setActiveId(1));
    expect(spy).toHaveBeenCalledWith({ id: 1, title: '' });

    store.reduce(addEntities({ id: 2, title: '' }));
    expect(spy).toHaveBeenCalledTimes(2);

    store.reduce(updateEntities(1, { title: 'foo' }));
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith({ id: 1, title: 'foo' });
  });
});

describe('activeIds', () => {
  it('should select the active entities', () => {
    const { state, config } = createState(
      withEntities<{ id: number; title: string }>(),
      withActiveIds()
    );

    const store = new Store({ state, config, name: '' });

    const spy = jest.fn();
    store.pipe(selectActiveEntities()).subscribe(spy);
    expect(spy).toHaveBeenCalledWith([]);

    store.reduce(addEntities({ id: 1, title: '' }));
    store.reduce(setActiveIds([1]));
    expect(spy).toHaveBeenCalledWith([{ id: 1, title: '' }]);

    store.reduce(addEntities({ id: 2, title: '' }));
    expect(spy).toHaveBeenCalledTimes(2);

    store.reduce(updateEntities(1, { title: 'foo' }));
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith([{ id: 1, title: 'foo' }]);

    store.reduce(removeActiveIds(1));
    expect(spy).toHaveBeenCalledWith([]);

    store.reduce(addEntities({ id: 3, title: '3' }));
    store.reduce(toggleActiveIds(3));
    expect(spy).toHaveBeenCalledWith([{ id: 3, title: '3' }]);
  });
});
