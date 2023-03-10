import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoSqliteStorageViewProps } from './ExpoSqliteStorage.types';

const NativeView: React.ComponentType<ExpoSqliteStorageViewProps> =
  requireNativeViewManager('ExpoSqliteStorage');

export default function ExpoSqliteStorageView(props: ExpoSqliteStorageViewProps) {
  return <NativeView {...props} />;
}
