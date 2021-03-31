import React, {memo, useEffect, useState} from 'react';
import {InteractionManager} from 'react-native';
import Loader from 'components/Loader';

export default function withMountAfterInteraction(Component, Loading = Loader) {
  function WithMountAfterInteraction(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      InteractionManager.runAfterInteractions(() => {
        setTimeout(() => setLoading(false), 0);
      });
    }, []);

    if (loading) {
      return <Loading />;
    }

    return <Component {...props} />;
  }

  return memo(WithMountAfterInteraction);
}
