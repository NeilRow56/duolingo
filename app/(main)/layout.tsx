import { MobileHeader } from '@/components/MobileHeader'
import { Sidebar } from '@/components/Sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
        <div className="h-full bg-red-500">{children}</div>
      </main>
    </>
  )
}

export default MainLayout