export interface Course {
  id: number,
  name: string,
  date: string,
  length: number,
  isTopRated: boolean,
  description: string,
  authors?: {
    id: number,
    name: string
  }
}
