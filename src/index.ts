import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoSqliteStorage.web.ts
// and on native platforms to ExpoSqliteStorage.ts
import ExpoSqliteStorageModule from './ExpoSqliteStorageModule';
import ExpoSqliteStorageView from './ExpoSqliteStorageView';
import { ChangeEventPayload, ExpoSqliteStorageViewProps } from './ExpoSqliteStorage.types';

// Get the native constant value.
export const PI = ExpoSqliteStorageModule.PI;

export function hello(): string {
  return ExpoSqliteStorageModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoSqliteStorageModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoSqliteStorageModule ?? NativeModulesProxy.ExpoSqliteStorage);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoSqliteStorageView, ExpoSqliteStorageViewProps, ChangeEventPayload };
