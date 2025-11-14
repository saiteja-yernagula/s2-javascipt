# Daily automatic push (Windows)

This repo includes a small PowerShell-based automation to commit and push local changes daily to your GitHub remote.

Files added
- `scripts/daily_push.ps1` — Stages all changes, commits with a timestamp, and pushes the current branch to `origin`.
- `scripts/register_daily_push.ps1` — Creates a Windows Scheduled Task that runs the push script daily.

Quick start

1. Ensure Git is installed and available on your `PATH`.
2. Make sure your repo has a working remote `origin` and you have authentication configured (SSH keys or Git Credential Manager for HTTPS).
3. Test the push script manually (recommended):

```powershell
# from the repo root
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\daily_push.ps1
```

4. Register the scheduled task (example runs daily at 03:00):

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\register_daily_push.ps1 -Time "03:00" -TaskName "DailyPushRepo"
```

Notes and security
- The script uses `git add -A` and commits everything. If you need to exclude files, add them to `.gitignore` before enabling this automation.
- Authentication: if you use HTTPS, install Git Credential Manager or ensure your credentials are cached; otherwise configure SSH keys and use an SSH remote URL.
- If you prefer the task to run under different credentials or with elevated privileges, adjust the scheduled task creation command or create the task manually in Task Scheduler.

Troubleshooting
- If the scheduled task does not run, check Task Scheduler history and ensure `powershell.exe` is allowed to run scripts on your machine. You may need to run the registration script as Administrator to create tasks with certain options.
- If `git push` fails due to authentication, run `git push` manually and fix credential issues first.

Want me to run a test push now or register the task for you? I can show the exact command to run locally.

Registering multiple folders with different times

You can register scheduled tasks to run the same `daily_push.ps1` for different folders (for example `day1`, `day2`, etc.) using the helper `scripts/register_push_for_folder.ps1`.

Examples (run from repo root):

```powershell
# Register push for folder day1 at 09:00 daily
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\register_push_for_folder.ps1 -Folder "day1" -Time "09:00" -TaskName "Push-day1"

# Register push for folder day2 at 15:30 daily
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\register_push_for_folder.ps1 -Folder "day2" -Time "15:30" -TaskName "Push-day2"
```

Dry run

To test what would happen without actually committing or pushing, pass the `-DryRun` flag to the underlying script. The registration helper can be used in the task action by editing the task manually to append `-DryRun`, or you can test directly:

```powershell
# Test dry run for day1
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\daily_push.ps1 -RepoRoot .\day1 -DryRun
```

