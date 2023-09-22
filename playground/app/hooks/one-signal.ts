import { useEffect, useState } from 'react';
import * as OneSignal from 'react-onesignal';

export type UseOneSignalOptions = {
  appId: string;
  serviceWorkerPath?: string | '/signal.js';
  allowLocalhostAsSecureOrigin?: boolean | true;
};

// '53edc69c-e37b-4916-aa16-a3c663669843'

export const useOneSignal = ({
  appId,
  serviceWorkerPath = '/signal.js',
  allowLocalhostAsSecureOrigin = true,
}: UseOneSignalOptions) => {
  const [, setInitialized] = useState(false);

  useEffect(() => {
    OneSignal.default
      .init({
        appId,
        allowLocalhostAsSecureOrigin,
        serviceWorkerPath,
        serviceWorkerParam: { scope: '/onesignal' },
      })
      .then(() => {
        setInitialized(true);
        OneSignal.default.Slidedown.promptPush();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return { initialized: true };
  return () => {};
};
