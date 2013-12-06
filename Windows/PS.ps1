$pshost = get-host
$pswindow = $pshost.ui.rawui

$newsize = $pswindow.buffersize
$newsize.height = 4000
$newsize.width = 300
$pswindow.buffersize = $newsize

$newsize = $pswindow.windowsize
$newsize.height = 30
$newsize.width = 150
$pswindow.windowsize = $newsize

$pswindow.windowtitle = "Windows Powershell"
$pswindow.foregroundcolor = "Gray"
$pswindow.backgroundcolor = "Blue"

cls