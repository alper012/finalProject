import Redux from '../index';

const create = async (data: any) => {
  Redux.Store.dispatch({
    type: Redux.Types.Points.ACTS.CREATE + '_SUCCESS',
    payload: data,
  });
};

const update = async (data: any) => {
  Redux.Store.dispatch({
    type: Redux.Types.Points.ACTS.UPDATE + '_SUCCESS',
    payload: data,
  });
};

const reset = async () => {
  Redux.Store.dispatch({
    type: Redux.Types.Points.ACTS.RESET + '_SUCCESS',
  });
};

export default {
  create,
  update,
  reset,
};

export {create, update, reset};
