import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import React, { createContext, useState, useContext, useEffect } from 'react';
import Router, { useRouter } from 'next/router';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });
  
  // hide the toolbar
  mainWindow.setMenuBarVisibility(false);

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    // await mainWindow.loadURL(`http://localhost:${port}/home`);
    await mainWindow.loadURL(`http://localhost:${port}/login`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
