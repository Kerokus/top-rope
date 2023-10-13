import { Button } from "@/components/ui/button";
import Image from "next/image";

function Home() {
  return (
    <div className="flex items-center space-x-4">
      <Button>Reconcile</Button>

      <span className="w-16 border-t border-current h-[0.3rem]"></span>

      <div className="border border-current">
        <Image
          src="/images/topRopeLogo.jpg"
          alt="Top Rope Logo"
          width={300}
          height={300}
        />
      </div>

      <span className="w-16 border-t border-current h-[0.3rem]"></span>

      <Button>Database Search</Button>
    </div>
  );
}

export default Home;
