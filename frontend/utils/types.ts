export type cfData = {
  problems: {
    contestId: number;
    index: string;
    name: string;
    type: string;
    rating?: number;
    tags: string[];
  }[];
  problemStatistics: {
    contestId: number;
    index: string;
    solvedCount: number;
  }[];
};

export type Submission = {
  verdict: string;
  problem: {
    contestId: number;
    index: string;
  };
};

export type Problem = {
  contestId: number;
  index: string;
  solvedCount: number;
  rating: number;
  tags: number[];
};
