import { Anchor, Box, Typography } from "hazel-ui";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { config } from "../config";
import { Layout } from "../wrappers";

const page = {
  title: config.name,
  description: config.description,
  image: config.photo,
  imageAlt: `Headshot of ${config.name}`,
  twitter: config.twitter,
};

export function Home() {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta property="og:image" content={page.image} />
        <meta property="og:image:alt" content={page.imageAlt} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta name="twitter:site" content={page.twitter} />
        <meta name="twitter:image" content={page.image} />
        <meta name="twitter:image:alt" content={page.imageAlt} />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.description} />
      </Head>
      <Layout>
        <Header>
          <ProfileImage
            priority
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt={page.title}
          />

          <Box padding="1rem 0">
            <Typography variant="h1">{page.title}</Typography>
          </Box>
        </Header>
        <main>
          <section>
            <p></p>
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
        </main>
      </Layout>
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled(Image)`
  border-radius: 72px;
`;

const AnimatedLink = styled(Anchor)`
  display: inline-block;
  transition: transform 0.2s ease;

  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`;
