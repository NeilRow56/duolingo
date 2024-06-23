import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'
import { useKey, useMedia } from 'react-use'

type footerProps = {
  disabled?: boolean
  lessonId?: boolean
  status: 'correct' | 'wrong' | 'none' | 'completed'
  onCheck: () => void
}

export const Footer = ({
  disabled,
  lessonId,
  status,
  onCheck,
}: footerProps) => {
  useKey('Enter', onCheck, {}, [onCheck])
  const isMobile = useMedia('(max-w-[1024px])')
  return (
    <footer
      className={cn(
        'h-[100px] border-t-2 lg:h-[140px]',
        status === 'correct' && 'border-transparent bg-green-100',
        status === 'wrong' && 'border-transparent bg-rose-100'
      )}
    >
      <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-6 lg:px-10">
        {status === 'correct' && (
          <div className="flex items-center text-base font-bold text-green-500 lg:text-2xl">
            <CheckCircle className="mr-4 h-6 w-6 lg:h-10 lg:w-10" />
            Nicely Done!
          </div>
        )}
        <Button
          disabled={disabled}
          className="ml-auto"
          onClick={onCheck}
          size={isMobile ? 'sm' : 'lg'}
          variant={status === 'wrong' ? 'danger' : 'secondary'}
        >
          {status === 'none' && 'Check'}
          {status === 'correct' && 'Next'}
          {status === 'wrong' && 'Retry'}
          {status === 'completed' && 'Continue'}
        </Button>
      </div>
    </footer>
  )
}
