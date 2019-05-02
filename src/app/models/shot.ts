import { IAttachment } from './attachment';
import { IImage } from './image';
import { IProject } from './project';
import { ITeam } from './team';
import { IVideo } from './video';

export interface IShot {
  id?: number;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  images?: IImage;
  published_at?: string;
  updated_at?: string;
  html_url?: string;
  animated?: boolean;
  tags?: string[];
  attachments?: IAttachment[];
  projects?: IProject[];
  team?: ITeam;
  video?: IVideo;
  low_profile?: boolean;
}
