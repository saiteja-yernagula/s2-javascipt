<#
Register a scheduled task that runs the repository daily_push script for a specific folder.

Usage:
  .\scripts\register_push_for_folder.ps1 -Folder "day1" -Time "09:00" -TaskName "Push-day1"

Parameters:
  -Folder: Relative path from repo root or absolute path to the folder containing the git repo.
  -Time: Daily start time in HH:mm format.
  -TaskName: Name for the scheduled task.
#>

param(
    [Parameter(Mandatory=$true)][string]$Folder,
    [Parameter(Mandatory=$true)][string]$Time,
    [Parameter(Mandatory=$true)][string]$TaskName
)

$RepoRoot = (Get-Item "$PSScriptRoot\..").FullName

# Resolve provided folder
try {
    if ([System.IO.Path]::IsPathRooted($Folder)) {
        $FullFolder = (Get-Item $Folder -ErrorAction Stop).FullName
    } else {
        $FullFolder = (Get-Item (Join-Path $RepoRoot $Folder) -ErrorAction Stop).FullName
    }
} catch {
    Write-Error "Folder '$Folder' not found. Provide a valid folder path."
    exit 1
}

$dailyScript = Join-Path $RepoRoot "scripts\daily_push.ps1"
if (-not (Test-Path $dailyScript)) {
    Write-Error "Core script not found at $dailyScript. Ensure scripts/daily_push.ps1 exists."
    exit 2
}

# Build the action: call the central script and pass -RepoRoot for the target folder
$action = "powershell.exe -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$dailyScript`" -RepoRoot `"$FullFolder`""

Write-Output "Registering scheduled task '$TaskName' to run daily at $Time for folder $FullFolder"
schtasks /Create /SC DAILY /TN $TaskName /TR $action /ST $Time /F
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to create scheduled task. You may need to run PowerShell as administrator or adjust parameters."
    exit 3
}

Write-Output "Task '$TaskName' registered. Details:"
schtasks /Query /TN $TaskName /FO LIST
