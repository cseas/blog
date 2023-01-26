import { Anchor, Color, Typography } from "hazel-ui";

export function About() {
  return (
    <section>
      <Typography variant="body" sx={{ marginTop: "1rem" }}>
        Hello, I'm <strong>Abhijeet</strong>. I'm a{" "}
        <Anchor
          color={Color.orange11}
          href="https://wiki.mozilla.org/Reps"
          target="_blank"
          rel="noreferrer"
        >
          Mozilla Rep
        </Anchor>{" "}
        and a Senior Software Engineer at{" "}
        <Anchor
          color={Color.blue11}
          href="https://razorpay.com/"
          target="_blank"
          rel="noreferrer"
        >
          Razorpay
        </Anchor>
        , currently working on omni-channel fintech products offering a seamless
        experience across online and offline transactions for merchants. Past
        experiences at:{" "}
        <Anchor
          color={Color.yellow11}
          href="https://www.hackerrank.com/"
          target="_blank"
          rel="noreferrer"
        >
          HackerRank
        </Anchor>
        ,{" "}
        <Anchor
          color={Color.purple11}
          href="https://danskebank.com/"
          target="_blank"
          rel="noreferrer"
        >
          Danske Bank
        </Anchor>
        .
      </Typography>

      <Typography variant="body" sx={{ marginTop: "1rem" }}>
        You can find me on{" "}
        <Anchor
          color={Color.green11}
          href="https://github.com/cseas"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Anchor>
        ,{" "}
        <Anchor
          color={Color.orange11}
          href="https://twitter.com/cse_as"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </Anchor>
        , and{" "}
        <Anchor
          color={Color.blue11}
          href="https://www.linkedin.com/in/thatniceman/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Anchor>
        . This is my personal blog where I share things I've learned.
      </Typography>
    </section>
  );
}
