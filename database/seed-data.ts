interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

interface SeedData {
  entries: SeedEntry[];
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pending: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos alias veniam unde voluptates ipsa nam.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "In Progress: Eos alias veniam unde voluptates ipsa nam.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Finished: Vamet, consectetur adipisicing elit. Eos alias veniam unde voluptates ipsa nam.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
