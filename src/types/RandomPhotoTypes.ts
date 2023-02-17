export interface RandomPhoto {
  id: string;
  alt_description: string;
  urls: RandomPhotoUrls;
  user: RandomPhotoUser;
}
export interface RandomPhotoUrls {
  full: string;
}
export interface RandomPhotoUser {
  id: string;
  first_name: string;
  last_name: string;
}
