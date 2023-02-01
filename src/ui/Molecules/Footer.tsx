import { Color, Divider, Typography } from "hazel-ui";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <Divider sx={{ marginTop: "6rem" }} />
      <footer className="mt-8 flex flex-wrap justify-center md:mx-8">
        <div>
          <img className="inline w-8" src="/images/yt-music.png" />
          <Typography
            variant="title"
            sx={{ display: "inline", marginLeft: "8px" }}
          >
            Now Playing
          </Typography>{" "}
          <Typography
            color={Color.gray10}
            variant="title"
            sx={{ display: "inline" }}
          >
            - YouTube Music
          </Typography>
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
            <Link className="text-slate-11 hover:text-purple-11" href="">
              Home
            </Link>
            <Link className="text-slate-11 hover:text-purple-11" href="">
              About
            </Link>
            <Link className="text-slate-11 hover:text-purple-11" href="">
              Tweets
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            <Link className="text-slate-11 hover:text-green-600" href="">
              GitHub
            </Link>
            <Link className="text-slate-11 hover:text-blue-400" href="">
              Twitter
            </Link>
            <Link className="text-slate-11 hover:text-sky-700" href="">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
