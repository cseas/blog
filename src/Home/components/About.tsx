import { Anchor, Typography } from "hazel-ui";

export function About() {
  return (
    <section>
      <Typography variant="p" sx={{ marginTop: "1rem" }}>
        Hello, I'm <strong>Abhijeet</strong>. I'm a software engineer at{" "}
        <Anchor
          color="#7e3878"
          backgroundColor="#f9e9ff"
          href="https://danskebank.dk/"
          className="border-purple-9 no-underline transition-all hover:border-b-2"
          style={{
            textDecoration: "none",
          }}
        >
          Danske Bank
        </Anchor>
        , currently building modern web experiences for customers of{" "}
        <Anchor
          color="#a90055"
          backgroundColor="#ffeae8"
          href="https://beta.rd.dk/privat"
          className="border-red-700 no-underline transition-all hover:border-b-2"
          style={{
            textDecoration: "none",
          }}
        >
          Realkredit Danmark.
        </Anchor>
      </Typography>
      <Typography variant="p" className="pt-4">
        I'm usually found around{" "}
        <Anchor
          color="#266129"
          backgroundColor="#e8f5e9"
          href="https://github.com/cseas"
          className="border-green-700 no-underline transition-all hover:border-b-2"
          style={{
            textDecoration: "none",
          }}
        >
          GitHub
        </Anchor>
        ,{" "}
        <Anchor
          color="#be4d19"
          backgroundColor="#ffebd4"
          href="https://twitter.com/cse_as"
          className="border-orange-700 no-underline transition-all hover:border-b-2"
          style={{
            textDecoration: "none",
          }}
        >
          Twitter
        </Anchor>
        , and{" "}
        <Anchor
          color="#2e3f9e"
          backgroundColor="#e0f1ff"
          href="https://www.linkedin.com/in/thatniceman/"
          className="border-blue-700 no-underline transition-all hover:border-b-2"
          style={{
            textDecoration: "none",
          }}
        >
          LinkedIn
        </Anchor>
        . This is my personal blog where I share things I've learned.
      </Typography>
    </section>
  );
}
