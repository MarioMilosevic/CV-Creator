import { ReactNode } from "react"

interface WrapperChildren{
    children:ReactNode;
}
const Wrapper = ({children}:WrapperChildren) => {
  return (
    <div className="w-[1000px] mx-auto mt-8">
      {children}
    </div>
  )
}

export default Wrapper
