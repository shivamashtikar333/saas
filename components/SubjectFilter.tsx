"use client";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedSubject, setSelectedSubject] = useState("all");

  useEffect(() => {
    if (selectedSubject && selectedSubject !== "all") {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: selectedSubject,
      });
      router.push(newUrl, { scroll: false });
    } else {
      // If 'all' is selected, remove the 'subject' query key
      const newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
      router.push(newUrl, { scroll: false });
    }
  }, [selectedSubject, router, searchParams, pathname]);

  return (
    <div>
      <Select
        value={selectedSubject}
        onValueChange={(value) => setSelectedSubject(value)}
      >
        <SelectTrigger className="w-[180px] border border-black rounded-lg cursor-pointer">
          <SelectValue placeholder="Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all" className="cursor-pointer">
            All
          </SelectItem>
          {subjects.map((subject) => (
            <SelectItem
              value={subject}
              key={subject}
              className="cursor-pointer"
            >
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SubjectFilter;
