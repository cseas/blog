---
title: "[WIP] Make MacOS Terminal prompt look colorful like Ubuntu"
date: "2023-03-30"
---

Switching from Ubuntu's colorful bash terminal to the bland monochrome z-shell of MacOS can be underwhelming. All that white makes it hard to distinguish one command run from the other one when you're firing dozens of commands in a day.

Here's how to paint some colors on that terminal prompt to make it look similar to the bash terminal on Ubuntu.

Create a `.zshrc` file with the following code in the Home directory of your system:

```bash
PROMPT='%F{green}%n%f:%F{cyan}%2~%f$ '
```

This will change your terminal prompt to look like the one in the screenshot below.

--- add screenshot

--- draft after this point

todo:

- add correct screenshot
- correct second link

This will change the PowerShell prompt to look like the one shown in the screenshot below.

![PowerShell](/images/posts/powershell-colors/powershell.png)

You can modify the above code to change the colors and functionality as per your preference. The complete reference for the `PROMPT` config property is available in [Microsoft PowerShell Docs][2].

Have questions? [Discuss on Twitter][1]

[1]: https://twitter.com/cse_as
[2]: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/write-host?view=powershell-7.1#parameters
