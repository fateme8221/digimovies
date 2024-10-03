import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-5 mt-20">
      <div className="PlayOnline mt-8">
              <Link   className="text-sm py-2.5 px-5 bg-orange-normal rounded-full"  href="/1">
               فیلم یک
              </Link>
          </div>
      <div className="PlayOnline mt-8">
              <Link  className="text-sm py-2.5 px-5 bg-orange-normal rounded-full"  href="/2">
               فیلم دو
              </Link>
          </div>
   </div>
  );
}