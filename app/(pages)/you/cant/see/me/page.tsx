import React from "react";
import Image from "next/image";

function me() {
  return (
    <div>
      <h1 className="flex justify-center">See? There's nothing here.</h1>
      <Image
        src="/images/john-cena.gif"
        alt="Top Rope Logo"
        width={300}
        height={300}
        priority
      />
      <h1 className="flex justify-center">lmao gottem</h1>
    </div>
  );
}

export default me;
