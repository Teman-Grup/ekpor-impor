@echo off
echo ========================================
echo PT. Original Jernang Asia
echo Company Profile ^& Dashboard
echo ========================================
echo.
echo Starting servers...
echo.
echo Terminal 1: Backend Server (Port 5001)
echo Terminal 2: Frontend Server (Port 3000)
echo.
echo Press Ctrl+C to stop servers
echo ========================================
echo.

start "Backend Server" cmd /k "npm run server"
timeout /t 3 /nobreak >nul
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Servers started!
echo.
echo Website: http://localhost:3000
echo Admin: http://localhost:3000/admin/login
echo.
echo Username: admin
echo Password: admin123
echo.
pause
