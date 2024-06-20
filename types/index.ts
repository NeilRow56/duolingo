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

export type lessons = {
  id: number
  title: string
  unitId: number
  order: number
}

export type challenges = {
  id: number
  lessonId: number
  type: number
  question: string
  order: number
}

export type challengeOptions = {
  id: number
  challengeId: number
  text: string
  correct: boolean
  imageSrc: string
  audioSrc: string
}
