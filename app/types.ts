export interface Dancer {
  id: string;
  name: string;
  city: string;
  photo: string;
  votes: number;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  dancers: Dancer[];
}

export interface CategoryGroup {
  name: string;
  categories: Category[];
}

export interface Vote {
  dancerId: string;
  categoryId: string;
  timestamp: number;
}

export interface VotingState {
  votes: Vote[];
  hasVoted: { [categoryId: string]: boolean };
  votedDancers: { [categoryId: string]: string[] };
}