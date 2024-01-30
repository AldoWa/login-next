import { SideContact } from "./SideContact"

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <main className="grid sm:grid-cols-1 xl:grid-cols-2 min-h-screen items-center gap-32 p-6">
      <div className="h-full w-full flex items-center justify-center">
        { children }
      </div>
      <SideContact></SideContact>
    </main>
  )
}