// A little bit simplified version
export const groupBy = <T, K extends keyof unknown>(arr: T[], key: (i: T) => K) =>
  arr.reduce(
    (groups, item) => {
      if (!groups[key(item)]) {
        groups[key(item)] = [];
      }
      groups[key(item)].push(item);
      return groups;
    },
    {} as Record<K, T[]>
  );
