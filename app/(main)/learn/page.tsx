import { FeedWrapper } from '@/components/FeedWrapper'

import { StickyWrapper } from '@/components/StickyWrapper'
import { Header } from './_components/Header'

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>My Sticky Sidebar</StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  )
}

export default LearnPage
