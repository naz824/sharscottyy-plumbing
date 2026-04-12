export default function Loading() {
  return (
    <div className="pt-32 animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-slate-200 h-[480px] w-full" />

      {/* Trust bar skeleton */}
      <div className="bg-white py-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-200 rounded-full" />
              <div className="space-y-2">
                <div className="h-4 w-28 bg-slate-200 rounded" />
                <div className="h-3 w-20 bg-slate-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services skeleton */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-5 w-40 bg-slate-200 rounded mx-auto mb-4" />
          <div className="h-8 w-72 bg-slate-200 rounded mx-auto mb-3" />
          <div className="h-5 w-96 bg-slate-200 rounded mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <div className="h-56 bg-slate-200" />
                <div className="p-8 space-y-3">
                  <div className="h-6 w-3/4 bg-slate-200 rounded" />
                  <div className="h-4 w-full bg-slate-200 rounded" />
                  <div className="h-4 w-2/3 bg-slate-200 rounded" />
                  <div className="h-4 w-24 bg-slate-200 rounded mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
