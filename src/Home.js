import React from 'react';
import { askForPermissioToReceiveNotifications } from './push-notification';

export default function Home() {
  return (
    <div>
      Fire Base Notification
      <button onClick={askForPermissioToReceiveNotifications}>
        Allow Notification
      </button>
    </div>
  );
}
