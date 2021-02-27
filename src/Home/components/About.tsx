import { Anchor, Typography } from "hazel-ui";
import styled from "styled-components";

interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <section>
      <Typography variant="p">
        Hello, I'm <strong>Abhijeet</strong>. I'm a software engineer at{" "}
        <AnimatedLink
          color="#7e3878"
          backgroundColor="#f9e9ff"
          href="https://danskebank.dk/"
        >
          Danske Bank
        </AnimatedLink>
        , currently building modern web experiences for customers of{" "}
        <AnimatedLink
          color="#a90055"
          backgroundColor="#ffeae8"
          href="https://beta.rd.dk/privat"
        >
          Realkredit Danmark.
        </AnimatedLink>
      </Typography>
      <Typography variant="p">
        I'm usually found around{" "}
        <AnimatedLink
          color="#266129"
          backgroundColor="#e8f5e9"
          href="https://github.com/cseas"
        >
          GitHub
        </AnimatedLink>
        ,{" "}
        <AnimatedLink
          color="#be4d19"
          backgroundColor="#ffebd4"
          href="https://twitter.com/cse_as"
        >
          Twitter
        </AnimatedLink>
        , and{" "}
        <AnimatedLink
          color="#2e3f9e"
          backgroundColor="#e0f1ff"
          href="https://www.linkedin.com/in/thatniceman/"
        >
          LinkedIn
        </AnimatedLink>
        . This is my personal blog where I share things I've learned.
      </Typography>
    </section>
  );
}

const AnimatedLink = styled(Anchor)`
  display: inline-block;
  transition: transform 0.2s ease;

  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`;
