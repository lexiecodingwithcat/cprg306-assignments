import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-7 flex-col ml-5 mt-5">
      <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">week-2 </Link>
      <Link href="/week-3">week-3</Link>
      <Link href="/week-4">week-4</Link>
    </div>
  );
}
