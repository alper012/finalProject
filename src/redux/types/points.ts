const namespace = '_' + 'points';

const ACTS: Record<string, string> = {
  CREATE: namespace + 'CREATE',
  UPDATE: namespace + 'UPDATE',

  UPDATE_REDUCER: namespace + 'UPDATE_REDUCER',
  RESET: namespace + 'RESET',
};

const data = {
  ACTS,
  LIST_VALUES: Object.values(ACTS),
  LIST_KEYS: Object.keys(ACTS),
  SUCCESS_LIST: Object.values(ACTS).map(act => act + '_SUCCESS'),
  ERROR_LIST: Object.values(ACTS).map(act => act + '_ERROR'),
};

export default data;
