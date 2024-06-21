import { challenges } from '@/db/schema'

type cardProps = {
  id: number
  text: string
  imageSrc: string | null
  shortcut: string
  onClick: () => void
  status?: 'correct' | 'wrong' | 'none'
  selected?: boolean
  audioSrc: string | null
  disabled?: boolean
  type: (typeof challenges.$inferSelect)['type']
}

export const Card = ({
  id,
  text,
  imageSrc,
  shortcut,
  onClick,
  status,
  selected,
  audioSrc,
  disabled,
  type,
}: cardProps) => {
  return <div>Card</div>
}
