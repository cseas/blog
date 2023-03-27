---
title: "Don't install NodeJS from Snap Store on Ubuntu"
date: "2023-03-26"
---

[Snap Store][4] is usually the easiest way of installing software on Ubuntu and the closest option available for someone looking for a [brew][1] alternative for Linux.

However, the Snap Store distribution of Node is one we need to be cautious about as it can lead to a multitude of issues.

For example, [none of the npx commands will work][2]. This is because the Snap Store distribution of Node doesn't have the necessary permissions to install npm packages globally.

The recommended way to install Node for Ubuntu users is to use a nodesource LTS distribution instead:

[https://github.com/nodesource/distributions#installation-instructions][3]

[1]: https://brew.sh/
[2]: https://github.com/admc/wd/issues/586#issuecomment-541583962
[3]: https://github.com/nodesource/distributions#installation-instructions
[4]: https://snapcraft.io/store
