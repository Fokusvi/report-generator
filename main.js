const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1060,
        height: 900,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'icon.ico')
    });

    win.loadFile('index.html');

    //win.webContents.openDevTools();
}

app.whenReady().then(createWindow);