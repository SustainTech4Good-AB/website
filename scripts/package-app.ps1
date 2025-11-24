# Build and package the app for Azure App Service.
# Usage: pwsh -File scripts/package-app.ps1

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Push-Location (Split-Path $PSCommandPath -Parent) | Out-Null
Push-Location .. | Out-Null

Write-Host "Running npm install/build..." -ForegroundColor Cyan
npm ci
npm run build

$zipPath = Join-Path (Get-Location) "app.zip"

Write-Host "Removing old app.zip if it exists..." -ForegroundColor Cyan
Remove-Item $zipPath -Force -ErrorAction SilentlyContinue

Write-Host "Packaging app.zip (excluding .git and .next/cache)..." -ForegroundColor Cyan
$files = Get-ChildItem -Force | Where-Object {
    $_.Name -notmatch '^\.git$' -and
    $_.FullName -notmatch '\\\.git\\' -and
    $_.FullName -notmatch '\\\.next\\cache\\'
}
$files | Compress-Archive -DestinationPath $zipPath -Force

Write-Host "Done. app.zip created at $zipPath" -ForegroundColor Green

Pop-Location | Out-Null
Pop-Location | Out-Null
