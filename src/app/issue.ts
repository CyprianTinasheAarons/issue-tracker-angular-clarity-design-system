export interface Issue {

  issueNo: number;
  title: string;
  description: string;
  priority: 'low' | 'high';
  type: 'Bug' | 'Feature' | 'Documentation';
  completed?: Date;
}
