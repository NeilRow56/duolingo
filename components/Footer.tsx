import Flag from 'react-world-flags'
import { Button } from './ui/button'

export const Footer = () => {
  return (
    <footer className="hidden h-20 w-full items-center border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" asChild>
          <div className="flex gap-2">
            <Flag code="FRA" fallback={<span>FRA</span>} />
            French
          </div>
        </Button>

        <Button size="lg" variant="ghost" asChild>
          <div className="flex gap-2">
            <Flag code="ITA" fallback={<span>ITA</span>} />
            Italian
          </div>
        </Button>

        <Button size="lg" variant="ghost" asChild>
          <div className="flex gap-2">
            <Flag code="ESP" fallback={<span>ESP</span>} />
            Spanish
          </div>
        </Button>
      </div>
    </footer>
  )
}
