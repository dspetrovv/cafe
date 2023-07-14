import { useState } from 'react';

const useForceUpdate = () => {
  const [, _forceUpdate] = useState({});

  const forceUpdate = () => {
    _forceUpdate({});
  };

  return forceUpdate;
};

export default useForceUpdate;
