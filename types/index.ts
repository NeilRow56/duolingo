export type courses = {
  id: number
  title: string
  imageSrc: string
}

export type userProgress = {
  userId: string
  userName: string
  userImageSrc: string
  activeCourseId: number
  hearts: number
  points: number
}
