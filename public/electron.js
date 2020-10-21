const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
} = require('electron-devtools-installer');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    alwaysOnTop: false,
    title: 'rigflo electron',
    show: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:8080'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  mainWindow.on('closed', () => (mainWindow = null));

  if (isDev) {
    console.log('Running in development');
    console.log('DIRNAME', __dirname);
    mainWindow.webContents.openDevTools();
  } else {
    console.log('Running in production');
  }
}

app.on('ready', () => {
  createWindow();

  ipcMain.on('toMain', (event, args) => {
    console.log('received event');
    mainWindow.webContents.send('fromMain', 'CONNECTED!');
  });
});

app.whenReady().then(() => {
  installExtension(REACT_DEVELOPER_TOOLS).then((name) =>
    console.log(`Added Extension:  ${name}`),
  );
  // .catch((err) => console.log('An error occurred: ', err));
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
