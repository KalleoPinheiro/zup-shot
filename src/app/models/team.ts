import { ILink } from './link';

export interface ITeam {
  id: number;
  name: string;
  login: string;
  html_url: string;
  avatar_url: string;
  bio: string;
  location: string;
  links: ILink;
  type: string;
  created_at: string;
  updated_at: string;
}
