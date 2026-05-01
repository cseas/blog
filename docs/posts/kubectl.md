---
title: "Shell helpers to watch your kubectl pods across namespaces"
date: "2025-05-01"
cover: "/covers/kubectl.webp"
---

Working across several Kubernetes namespaces gets tedious quickly. You end up running the same `kubectl get pods -n <namespace>` over and over, just to check whether your pods are healthy after a deploy.

A small zsh function fixes this. Add the following to your `~/.zshrc`:

```bash
getpods() {
  local match=${1:-abhijeet}
  local namespaces=(dashboard frontend-graphql sme-dashboard api ufh pgos onboarding asv)
  local output=""
  for ns in $namespaces; do
    output+="$(kubectl get pods -n $ns | grep $match)\n"
  done
  echo $output | column -t
}
```

Now `getpods` prints a single, aligned table of pods across all the namespaces you care about, filtered by name. The first argument is optional, so a bare `getpods` falls back to your default match (mine is my username, since our pod names are prefixed with the developer who deployed them).

To keep an eye on a rollout, wrap it with `watch`:

```bash
watchpods() {
  watch "zsh -c 'source ~/.zshrc; getpods ${1:-abhijeet}'"
}
```

`watch` runs the command every 2 seconds by default.

Two things to customize for your setup:

- Replace the `namespaces` list with the namespaces you actually deploy to.
- Change the default match (`abhijeet`) to whatever convention your team uses for naming pods, branches, or feature environments.

Once these are in place, checking on your pods is a single command instead of eight.

Have questions? [Discuss on Twitter][1]

[1]: https://twitter.com/cse_as
