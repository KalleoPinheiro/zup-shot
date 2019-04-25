export interface IVideo {
  id: number;
  duration: number;
  video_file_name: string;
  video_file_size: number;
  width: number;
  height: number;
  silent: boolean;
  created_at: string;
  updated_at: string;
  url: string;
  small_preview_url: string;
  large_preview_url: string;
  xlarge_preview_url: string;
}
