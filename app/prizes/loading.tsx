import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <div className="container my-20 grid grid-cols-5 gap-8">
        <Skeleton className="h-[40px] w-[110px]" />
        <Skeleton className="h-[40px] w-[110px]" />
        <Skeleton className="h-[40px] w-[110px]" />
        <Skeleton className="h-[40px] w-[110px]" />
        <Skeleton className="h-[40px] w-[110px]" />
        <div className="col-span-full grid grid-cols-5 gap-8">
          <Skeleton className="h-[170px] w-[250px]" />
          <Skeleton className="h-[170px] w-[250px]" />
          <Skeleton className="h-[170px] w-[250px]" />
          <Skeleton className="h-[170px] w-[250px]" />
          <Skeleton className="h-[170px] w-[250px]" />
          <Skeleton className="h-[170px] w-[250px]" />
          <Skeleton className="h-[170px] w-[250px]" />
          <Skeleton className="h-[170px] w-[250px]" />
          <Skeleton className="h-[170px] w-[250px]" />
        </div>
      </div>
    </>
  )
}
