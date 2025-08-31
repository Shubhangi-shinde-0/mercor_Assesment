export interface Candidate {
  id: string;
  name: string;
  email: string;
  role: string;
  experience: string;
  location: string;
  skills: string[];
  score: number;
  avatar: string;
  summary: string;
  previousCompanies: string[];
  education: string;
  portfolio?: string;
  github?: string;
  linkedin?: string;
  diversity: {
    gender: string;
    ethnicity: string;
    neurodiversity?: boolean;
    veteranStatus?: boolean;
  };
  notes?: string;
  rating?: number;
}

export interface FilterState {
  skills: string[];
  experience: string;
  location: string;
  search: string;
  sortBy: 'score' | 'name' | 'experience';
}