export const Migrate = (schema: any, toVersion: number): any => {
  const fromVersion = schema.version ?? 0;
  const direction = migrationDirection(fromVersion, toVersion);

  if (direction === 'same') {
    return schema;
  }

  const currentMigration = Migrations.find(
    (migration) =>
      migration[direction === 'up' ? 'from' : 'to'] === fromVersion,
  );

  if (currentMigration === undefined) {
    console.error('Migration is not found');
    return schema;
  }

  const newSchema = currentMigration[direction](schema);
  return Migrate(newSchema, toVersion);
};

const migrationDirection = (fromVersion: number, toVersion: number) => {
  if (fromVersion < toVersion) {
    return 'up';
  }

  if (fromVersion > toVersion) {
    return 'down';
  }

  return 'same';
};

export const Migrations = [
  {
    from: 0,
    to: 1,
    up: (schema: any) => {
      const newSchema = {
        version: 1,
        games: {
          pastGames: schema.games.games,
          ...schema.games,
        },
        settings: {
          ...schema.settings,
        },
      };

      return newSchema;
    },
    down: (schema: any) => {
      const newSchema = {
        version: 0,
        games: {
          games: schema.games.pastGames,
          ...schema.games,
        },
        settings: {
          ...schema.settings,
        },
      };

      return newSchema;
    },
  },
];
