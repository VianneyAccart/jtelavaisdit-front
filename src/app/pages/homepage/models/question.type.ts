export interface Question {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
  link?: string;
  linkDescription?: string;
}
