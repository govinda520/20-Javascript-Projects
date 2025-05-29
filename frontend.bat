@echo off
setlocal

set /p foldername=Enter the name for the new folder:

set "source=D:\workspace\programming\web_dev\utility\html-css-js"

set "destination=%cd%\%foldername%"

mkdir "%destination%"

xcopy "%source%" "%destination%" /E /I /H /Y



