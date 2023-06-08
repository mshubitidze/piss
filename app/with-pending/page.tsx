import PendingPage from "./page-with-pending"

export default function PrizePage() {
  return (
    <div className="container my-10 grid grid-cols-1 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      <PendingPage />
    </div>
  )
}
