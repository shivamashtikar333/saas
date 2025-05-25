import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src="images/cta.svg" alt="cta" width={362} height={232} />
      <Button className="btn-primary bg-amber-600 text-black hover:text-white">
        {/* <Image src="/icons/plus.svg" alt="plus" width={12} height={12} className=""/> */}
        <Plus className="h-12 w-12 hover:text-white" />
        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </Button>
    </section>
  );
};

export default CTA;
