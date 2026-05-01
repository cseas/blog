---
title: "Make MacOS Terminal prompt look colorful like Ubuntu"
date: "2026-05-02"
cover: "/covers/terminal.avif"
---

Switching from Ubuntu's colorful bash terminal to the bland monochrome z-shell on MacOS can be underwhelming. All that white makes it hard to distinguish one command run from the other when you're firing dozens of commands in a day.

Here's how to paint some colors on that terminal prompt to make it look similar to the bash terminal on Ubuntu.

Open (or create) `~/.zshrc` in your home directory and add the following line:

```bash
PROMPT='%F{green}%n%f:%F{cyan}%2~%f$ '
```

Restart your terminal (or run `source ~/.zshrc`) and the prompt will turn into a green username, a cyan path, and a plain `$` to type after.

Quick breakdown of what the snippet says:

- `%F{green}...%f` switches the foreground color on, and `%f` switches it back off.
- `%n` prints your username.
- `%2~` prints the current directory, abbreviating `$HOME` to `~` and showing only the last 2 segments of the path.

You can mix and match these to taste: swap colors, add the hostname with `%m`, or show the full path with `%~`. The complete reference is in the [zsh prompt expansion docs][2].

Have questions? [Discuss on Twitter][1]

[1]: https://twitter.com/cse_as
[2]: https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html
