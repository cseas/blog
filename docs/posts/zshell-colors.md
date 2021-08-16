---
title: "Make MacOS Terminal prompt look colorful like Ubuntu"
date: "2021-08-16"
---

todo:

- add correct screenshot
- correct second link

As someone who has enjoyed the bash terminal on Ubuntu for years as a student, transitioning to the bland looking Z Shell terminal on MacOS at work was a subpar experience for me. All that white makes it hard to distinguish one command run from the other one when you're firing dozens of commands in a day.

Here's how to paint some colors on that terminal prompt to make it look similar to the bash terminal on Ubuntu. Create a `.zshrc` file with the following code in the Home directory of your system:

```sh
PROMPT='%F{green}%n%f:%F{cyan}%2~%f$ '
```

This will change the PowerShell prompt to look like the one shown in the screenshot below.

![PowerShell](/images/posts/powershell-colors/powershell.png)

You can modify the above code to change the colors and functionality as per your preference. The complete reference for the `PROMPT` config property is available in [Microsoft PowerShell Docs][2].

Have questions? [Discuss on Twitter][1]

[1]: https://twitter.com/cse_as
[2]: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/write-host?view=powershell-7.1#parameters
