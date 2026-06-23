/* eslint-disable @next/next/no-img-element */
import Marquee from "@/components/ui/marquee";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, Film } from "lucide-react";

const reviews = [
  {
    name: "Sarah",
    username: "@sarah",
    body: "Posted my first ReelCraft Reel on a $1.2M listing. Got 14 showing requests in 48 hours.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Marcus",
    username: "@marcus",
    body: "I used to spend $500/listing on videographers. Now I do it myself in under a minute.",
    img: "https://avatar.vercel.sh/marcus",
  },
  {
    name: "Elena",
    username: "@elena",
    body: "My Instagram went from 200 views to 15K per Reel. Sellers are now coming to me.",
    img: "https://avatar.vercel.sh/elena",
  },
  {
    name: "David",
    username: "@david",
    body: "Won two listing appointments last month because sellers saw my Reels before the pitch.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "The auto music sync is incredible. Every Reel looks like it cost $2K to produce.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Jason",
    username: "@jason",
    body: "Our brokerage switched the whole team to ReelCraft. Content output went up 10x.",
    img: "https://avatar.vercel.sh/jason",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function CTA() {
  return (
    <section id="cta">
      <div className="py-14">
        <div className="container flex w-full flex-col items-center justify-center p-4 mx-auto max-w-[var(--max-container-width)]">
          <div className="relative flex w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
            <div className="absolute rotate-[35deg]">
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]" repeat={3}>
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]" repeat={3}>
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]" repeat={3}>
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
              <Film className="mx-auto size-16 text-black dark:text-white lg:size-24" />
            </div>
            <div className="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white">
              <h1 className="text-3xl font-bold lg:text-4xl">
                Stop posting static photos.
              </h1>
              <p className="mt-2">
                Request early access. Turn every listing into a viral Reel.
              </p>
              <a
                href="/"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "outline",
                  }),
                  "group mt-4 rounded-[2rem] px-6"
                )}
              >
                Request Access
                <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
