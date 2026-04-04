import * as migration_20260404_101820_baseline_schema from './20260404_101820_baseline_schema';

export const migrations = [
  {
    up: migration_20260404_101820_baseline_schema.up,
    down: migration_20260404_101820_baseline_schema.down,
    name: '20260404_101820_baseline_schema'
  },
];
