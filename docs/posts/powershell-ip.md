---
title: "How to get IP Address of a URL in Windows PowerShell"
date: "2021-05-06"
---

Just run the below command in PowerShell.

```powershell
[System.Net.Dns]::GetHostAddresses("github.com").IPAddressToString
```

This will output a list of IP Addresses related to the website URL given as the parameter to the `GetHostAddresses()` function.

Have questions? [Discuss on Twitter][1]

[1]: https://twitter.com/cse_as
