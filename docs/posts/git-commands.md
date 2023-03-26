---
title: "Git commands I use regularly as a Software Engineer"
date: "2023-03-26"
---

There are possibly thousands of "Git cheatsheets" floating all over the internet. Those have never worked for me since you never need to remember 50 different commands to get everyday work done.

Here are git commands I use regularly in my daily work.

1. Check which branch you're on and whether you have any uncomitted files or merge conflicts

   ```bash
   git status
   ```

2. Update main branch (or the branch you want to create a feature branch from)

   ```bash
   git checkout main
   git fetch origin
   git reset --hard origin/main
   ```

3. Create new feature branch from `develop` branch

   ```bash
   git checkout develop
   git checkout -b feat/new-feature
   ```

4. Push your local changes to a remote branch

   Stage your changes:

   ```bash
   git add --all
   ```

   > I personally like using the VSCode Git UI to preview changes and stage files one by one instead of using the above command. But if you're sure you want to push all your changes, then above command is useful to stage everything instantly.

   Commit to local git:

   ```bash
   git commit -m "feat: add new-feature"
   ```

   Push to remote repository:

   ```bash
   git push -u origin feat/new-feature
   ```

   > Above push command is needed only once. This is used to create a new branch in the origin remote repository and link it to your local one. Afterwards, you can use `git push` without any parameters.

   You can create a Pull Request after this step.

5. Update your fork's `main` branch with new merged feature. This is typically required in open-source contributions. After your feature branch pull request is merged into `upstream`, your fork's `main` branch becomes outdated.

   ```bash
   git checkout main
   git pull upstream main
   git push
   ```

6. Pull changes from a branch into existing branch

   ```bash
   git pull --rebase origin master
   ```

   This might give merge conflicts. To solve merge conflicts, check the files which have conflicts using `git status`, make the changes, then continue applying remaining commits for the pull.

   ```bash
   git add filename.tsx
   git rebase --continue
   ```

   If at any point during the rebase you don't know how to solve the conflicts, you can cancel the rebase to reset everything and get back to where you started.

   ```bash
   git rebase --abort
   ```

   > If you're just trying to get a Pull Request merged, doing a regular `git pull` instead of rebase would often give you lesser code conflicts. But it messes up the git history so make sure you complete that Pull Request with a Squash Merge.

7. Merge a feature branch locally. It's recommended to create a Pull Request to the target branch instead and syncing with the remote repository. Merging branches locally avoids the review process.

   ```bash
   git checkout develop
   git merge new-feature
   ```

8. Delete a branch

   Local

   ```bash
   git branch -d new-feature
   ```

   Remote

   ```bash
   git push -d origin new-feature
   ```

9. Resolve merge conflicts in a Pull Request

   Assuming you're trying to merge `feat/new-feature` branch into `develop`:

   ```bash
   git checkout feat/new-feature
   git pull origin develop
   ```

   Use `git status` to see which files have conflicts. Edit files to resolve conflicts. Then push changes.

   ```bash
   git add .
   git commit -m "Resolve PR #12 merge conflicts"
   git push origin feature/new-feature
   ```

   > If you're comfortable with the concept of rebase, prefer that way instead as shown in point 6 above.

10. Roll back to a commit. This will remove changes from both local and remote.

    ```bash
    git reset --hard old-commit-id
    git push -f remote-name branch-name
    ```

    > This will be useful when someone accidentally pushes a commit to a branch they weren't supposed to.

11. Undo last commit. This will effectively reverse the last `git commit` and you won't lose the new changes you made.

    ```bash
    git reset --soft HEAD~1
    ```

12. View last n commits. If you work with a remote repository then you can just see the commits from the UI but this is helpful when doing rebases with merge conflicts to make sure you're at the right place before you make the force push.

    ```bash
    git log -n
    ```

## Tips

1. Evaluate the correct workflow for your team. Different strategies suit different kinds of projects and teams.

   - [Gitflow Workflow][2] when working in a team and there's a need of testing large features not ready for release.
   - [Feature Branch Workflow][3] when working individually and rapidly pushing new features to production.
   - [Forking Workflow][4] when contributing to open-source.

2. Enforce a branch policy for your `main` & `develop` branches that allows only squash merges. Regular and Rebase merges work fine when everyone in the team knows how to correctly write a git history but more often than not people are just trying to get their code merged one way or the other. A squash merge strategy is the one that creates the least problems in a team of developers with varying expertise levels.

3. Always make changes in feature branches. Never directly commit to the project's primary branches used for releases and user acceptance tests.

Have questions? [Discuss on Twitter][1]

[1]: https://twitter.com/cse_as
[2]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
[3]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[4]: https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow
