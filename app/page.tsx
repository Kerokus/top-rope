import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/reconcile">
        <Button className="bg-slate-400 dark:bg-slate-300">
          Reconcile GUIDs
        </Button>
      </Link>

      <span className="w-16 border-t border-current h-[0.3rem]"></span>

      <div className="border border-current">
        <Image
          src="/images/topRopeLogo.jpg"
          alt="Top Rope Logo"
          width={300}
          height={300}
          priority
        />
      </div>

      <span className="w-16 border-t border-current h-[0.3rem]"></span>

      <Link href="/search">
        <Button className="bg-slate-400 dark:bg-slate-300">
          Database Search
        </Button>
      </Link>
    </div>
  );
}

export default Home;
