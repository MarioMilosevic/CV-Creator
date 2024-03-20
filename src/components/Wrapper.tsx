import { ReactNode } from "react"

interface WrapperChildren{
    children:ReactNode;
}
const Wrapper = ({children}:WrapperChildren) => {
  return (
    <main className="w-[1000px] mx-auto mt-8 bg-slate-100 px-8 rounded-md border border-black">
      {children}
    </main>
  )
}

export default Wrapper
