"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import React, { useEffect, useState } from "react";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  // const query = searchParams.get("topic") || "";
  const [search, setSearch] = useState("");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const delayDeounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: search,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === "/companions") {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["topic"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 1000);
  }, [search, pathname, searchParams, router]);

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image
        src="/icons/search.svg"
        alt="Search Icon"
        width={15}
        height={15}
        className="cursor-pointer"
      />
      <input
        type="text"
        placeholder="Search Companions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none"
      />
    </div>
  );
};

export default SearchInput;
