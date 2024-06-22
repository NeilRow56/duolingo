import { challenges } from '@/db/schema'
import { cn } from '@/lib/utils'
import Image from 'next/image'

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
  return (
    <div
      className={cn(
        'h-full cursor-pointer rounded-xl border-2 border-b-4 p-4 hover:bg-black/5 active:border-b-2 lg:p-6',
        selected && 'border-sky-300 bg-sky-100 hover:bg-sky-100',
        selected &&
          status === 'correct' &&
          'hover:green-100 border-green-300 bg-green-100',
        selected &&
          status === 'wrong' &&
          'border-rose-300 bg-rose-100 hover:bg-rose-100',
        disabled && 'pointer-events-none hover:bg-white',
        type === 'ASSIST' && 'w-full lg:p-3'
      )}
      onClick={() => {}}
    >
      {imageSrc && (
        <div className="relative mb-4 aspect-square max-h-[81px] w-full lg:max-h-[150px]">
          <Image src={imageSrc} fill alt={text} />
        </div>
      )}
      <div
        className={cn(
          'flex items-center justify-between',
          type === 'ASSIST' && 'flex-row-reverse'
        )}
      >
        {type === 'ASSIST' && <div />}
        <p
          className={cn(
            'text-sm text-neutral-600 lg:text-base',
            selected && 'text-sky-500',
            selected && status === 'correct' && 'text-green-500',
            selected && status === 'wrong' && 'text-rose-500'
          )}
        >
          {text}
        </p>
        <div
          className={cn(
            'flex h-[20px] w-[20px] items-center justify-center rounded-full border-2 text-xs font-semibold text-neutral-400 lg:h-[30px] lg:w-[30px] lg:text-[15px]',
            selected && 'border-sky-300 text-sky-300',
            selected &&
              status === 'correct' &&
              'border-green-500 text-green-500',
            selected && status === 'wrong' && 'border-rose-500 text-rose-500'
          )}
        >
          {shortcut}
        </div>
      </div>
    </div>
  )
}