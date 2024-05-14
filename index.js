import express from 'express';
import { readFileSync } from 'fs';
import { homedir } from 'os';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(import.meta.url);
console.log(__dirname);

//app.use('/', express.static(path.join(__dirname, 'dist')));
//app.use('/', express.static(path.join(__dirname, 'tests')));
app.use('/', express.static('./tests'));

app.get('/api/routes', (req, res) => {
    const readTXTFile = function() {
        try {
            const txt = readFileSync('./test.txt');
            return txt;
        } catch(e) {
            console.log(e);
        }
    }
    const asdf = readTXTFile();
    return res.send(asdf + homedir());
  });

app.get('/*', function(req, res) {
    //res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    //res.sendFile(path.join(__dirname, 'tests', 'index.html'));
    res.sendFile(path.join('tests', 'index.html'), { root: '.' }); // root . so __dirname not needed and path can be more or less relative
});

app.listen(3000);


/**
 * generally create new project only with express and system stuff
 * then create new projects for each "app" like a bar or "custom" which actually shall be built through some config file
 * those apps shall be built there and dist folder copied to the express project to let it be hosted there
 * 
 * 
 * make apps for different usecases
 * const api = express();
 * const bar = express();
 * const window = express();
 * etc.
 * 
 * find some logic to do this dynamically with different ports
 * 
 * 
 * probably need to use router per app for:
 *      main - which shall include the windows content
 *      popup1 - which shall include a popups content
 *      popup2 - which shall include another popups content
 *      popupN - and so on
 * possibly create a api function to just create the window(popup) with its specified link then?
 * so api receives the routing and then creates the popup or whatever with the link?
 * 
 * api must always be created and run... (general window api is in /server/wm/wm.js)
 * 
 * for api - to create new windows, maybe firstly create the express app and listen
 * then call dbus and with signal add to an array? on signal close also delete from array and stop listen?
 * if dbus returns false, stop listening?
 */