export interface INav {
    title: string;
    fragment: string;
    subItems: {
      name: string;
      description?: string[];
      icon?: string;
    }[];
  }
  