import * as React from 'react';

import { ExpoSqliteStorageViewProps } from './ExpoSqliteStorage.types';

export default function ExpoSqliteStorageView(props: ExpoSqliteStorageViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
