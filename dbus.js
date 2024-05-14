import dbus from 'dbus-next';

async function callHelloWorldMethod() {
    // Create a new message bus
    const bus = dbus.sessionBus();

    // Get a proxy object for the remote object
    const proxy = await bus.getProxyObject('dev.caendy.wm', '/dev/caendy/wm');

    // Get a reference to the remote interface
    const iface = proxy.getInterface('dev.caendy.wm');

    iface.on('WindowClosed', (window_title) => {
        console.log(`window closed: ${window_title}`);
    });

    iface.on('WindowCreated', (window_title) => {
        console.log(`window created: ${window_title}`);
    });

    try {
        // Call the HelloWorld method with a string parameter
        const response = await iface.CreateBar("https://www.google.com", "asdf", "bottom", 2, -1, 100);
        
        // Log the response
        console.log('Response:', response);
    } catch (error) {
        console.error('Error calling HelloWorld method:', error);
    }

    try {
        // Call the HelloWorld method with a string parameter
        const response = await iface.CreateWindow('https://www.w3schools.com/jsreF/tryit.asp?filename=tryjsref_audio_play', 'google');
        
        // Log the response
        console.log('Response:', response);
    } catch (error) {
        console.error('Error calling CreateWindow method:', error);
    }

    // Keep the process running until manually terminated
    process.stdin.resume();

    process.on('SIGINT', () => {
        console.log('Closing...');
        process.exit();
    });

    // Close the message bus connection
    //bus.disconnect();
}

callHelloWorldMethod();




/**
 * signal time=1711805470.395807 sender=:1.870 -> destination=dev.caendy.wm serial=26 path=/dev/caendy/wm; interface=dev.caendy.wm; member=VelocityChanged
   int32 20
   string "popup"
signal time=1711805470.396387 sender=:1.870 -> destination=dev.caendy.wm serial=27 path=/dev/caendy/wm; interface=dev.caendy.wm; member=VelocityChanged
   int32 20
   string "popup2"
 */


/**
 * ok, this works!!!!!
 */