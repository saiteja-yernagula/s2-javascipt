<#
Daily push script

Usage: run this script from the repo (it auto-locates repo root) or let the scheduled task run it.
It stages all changes, commits with a timestamped message, and pushes the current branch to `origin`.
#>

param(
    [string]$RepoRoot,
    [switch]$DryRun
)

# Resolve repo root (default: one level up from scripts folder)
if ([string]::IsNullOrWhiteSpace($RepoRoot)) {
    $RepoRoot = (Get-Item "$PSScriptRoot\..").FullName
} else {
    # If a relative path was passed, convert to full path
    $RepoRoot = (Get-Item $RepoRoot -ErrorAction Stop).FullName
}
Set-Location $RepoRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "git not found in PATH. Install Git and ensure it's available in your PATH."
    exit 2
}

try {
    $inside = git rev-parse --is-inside-work-tree 2>$null
} catch {
    Write-Error "Not a git repository (or git failed)."
    exit 3
}

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
Write-Output "Repository: $RepoRoot`nBranch: $branch"

Write-Output "Staging changes..."
if ($DryRun) {
    Write-Output "(DryRun) Would run: git add -A"
} else {
    git add -A
}

$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Output "No changes to commit."
    exit 0
}

$datetime = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMsg = "Daily auto commit: $datetime"

Write-Output "Committing with message: $commitMsg"
if ($DryRun) {
    Write-Output "(DryRun) Would run: git commit -m '$commitMsg'"
} else {
    git commit -m $commitMsg
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Git commit failed."
        exit 4
    }
}

Write-Output "Pushing to remote origin/$branch..."
if ($DryRun) {
    Write-Output "(DryRun) Would run: git push origin $branch"
} else {
    git push origin $branch
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Git push failed. If you use HTTPS, confirm credential helper or use SSH keys."
        exit 5
    }
    Write-Output "Push successful."
}

exit 0
