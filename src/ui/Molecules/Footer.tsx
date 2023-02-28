"use client";
import { Color, Divider, Typography } from "hazel-ui";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <Divider sx={{ marginTop: "6rem" }} />
      <footer className="mt-8 flex flex-wrap justify-center md:mx-8">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img className="inline w-8" src="/images/yt-music.png" />
            <Typography
              variant="body"
              sx={{ display: "inline", marginLeft: "8px" }}
            >
              Now Playing
            </Typography>

            <Typography
              color={Color.gray10}
              variant="body"
              sx={{ display: "inline", marginLeft: "6px" }}
            >
              - YouTube Music
            </Typography>
          </div>

          <iframe
            className="my-5 h-72 w-72 rounded-xl"
            src="https://www.youtube.com/embed/videoseries?list=PLBUqLZ7wADZ2qDc0bXqLswecvauZYJGna&modestbranding=1"
            title="Abhijeet Singh's Awesome Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mx-auto mt-20 flex gap-20">
          <div className="flex flex-col gap-8">
            <Link className="text-slate-11 hover:text-purple-11" href="/">
              Home
            </Link>
            <Link className="text-slate-11 hover:text-purple-11" href="/">
              About
            </Link>
            <Link
              className="text-slate-11 hover:text-purple-11"
              href="https://twitter.com/cse_as"
            >
              Tweets
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            <Link
              className="text-slate-11 hover:text-green-600"
              href="https://github.com/cseas"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              className="text-slate-11 hover:text-blue-400"
              href="https://twitter.com/cse_as"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </Link>
            <Link
              className="text-slate-11 hover:text-sky-700"
              href="https://www.linkedin.com/in/thatniceman"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
