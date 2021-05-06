---
title: "Make Windows PowerShell prompt look colorful like Ubuntu"
date: "2021-05-02"
---

As someone who had been enjoying the bash terminal on Ubuntu for years as a student, transitioning to the bland looking PowerShell on Windows at work was a subpar experience for me. All that white makes it hard to distinguish one command run from the other one when you're firing dozens of commands in a day.

Here's how to paint some colors on that terminal prompt to make it look similar to the bash terminal on Ubuntu. Open a PowerShell window and run the below command/function.

```powershell
function Prompt {
  $promptString = "PS "
  Write-Host $promptString -NoNewline -ForegroundColor Green
  Write-Host $(Get-Location) -NoNewline -ForegroundColor DarkCyan
  Write-Host "$" -NoNewline -ForegroundColor White
  return " "
}
```

This will change the PowerShell prompt to look like the one shown in the screenshot below.

![PowerShell](/images/posts/powershell-colors/powershell.png)

You can modify the above function to change the colors as per your preference. The full list of colors supported by the `Write-Host` utility is available in [Microsoft PowerShell Docs][2].

Have questions? [Discuss on Twitter][1]

[1]: https://twitter.com/cse_as
[2]: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/write-host?view=powershell-7.1#parameters
