type Property = {
  address?: string;
};

type Property2 = Property & { address: string };

const P1: Property2 = {};

export {};
