<#
Register a Windows scheduled task that runs the daily push script.

Usage (run in PowerShell as your user):
  powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\register_daily_push.ps1 -Time "03:00" -TaskName "DailyPushRepo"

# Parameters
param(
    [string]$Time = "03:00",
    [string]$TaskName = "DailyPushRepo"
)

$RepoRoot = (Get-Item "$PSScriptRoot\..").FullName
$scriptPath = Join-Path $RepoRoot "scripts\daily_push.ps1"
if (-not (Test-Path $scriptPath)) {
    Write-Error "Daily push script not found at $scriptPath. Ensure scripts/daily_push.ps1 exists."
    exit 1
}

# Build the action string; wrap the script path in escaped quotes
$action = "powershell.exe -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$scriptPath`""

Write-Output "Registering scheduled task '$TaskName' to run daily at $Time"
schtasks /Create /SC DAILY /TN $TaskName /TR $action /ST $Time /F
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to create scheduled task. You may need to run PowerShell as administrator or adjust parameters."
    exit 2
}

Write-Output "Task '$TaskName' registered. Details:"
schtasks /Query /TN $TaskName /FO LIST
