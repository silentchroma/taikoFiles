const { openBrowser, goto, write, click, into, press } = require("taiko");

const songName = process.argv.slice(4).join(" ");

console.log(`Playing song -> ${songName}`);
console.log(`in youtube :)`);

const playSong = function(songName) {
  (async () => {
    await openBrowser();
    await goto("www.youtube.com");
    await write(songName, into(await inputField({ placeholder: "Search" })));
    await press("Enter");
    click(link(songName));
  })();
};

playSong(songName);
