"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { removeBookmark } from "@/lib/actions/companion.action";
import { addBookmark } from "@/lib/actions/companion.action";
import { usePathname } from "next/navigation";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
}: CompanionCardProps) => {
  const pathname = usePathname();
  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname);
    } else {
      await addBookmark(id, pathname);
    }
  };

  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <Button
          className="companion-bookmark rounded-full px-3"
          onClick={handleBookmark}
        >
          <Image
            src={
              bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={13}
            height={15}
            className=""
          />
        </Button>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src={"/icons/clock.svg"}
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} minutes</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <Button className="btn-primary w-full justify-center">
          Launch Lesson
        </Button>
      </Link>
    </article>
  );
};

export default CompanionCard;
