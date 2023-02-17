export interface Gallery {
  description: string;
  id: string;
  urls: GalleryUrl;
  user: GalleryUser;
}

export interface GalleryUrl {
  full: string;
}
export interface GalleryUser {
  id: string;
  first_name: string;
  last_name: string;
}
