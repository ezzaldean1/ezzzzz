const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const client = new Discord.Client();

client.on('ready', () => {
  console.log('---------------');
  console.log(' ezz Bot Is Online')
  console.log('---------------')
  client.user.setStatus("Online")
    client.user.setActivity("  United Server",{type: 'PLAYING'})
	
});
	
           const lol =
[
'**Welcome To United:tanabata_tree: ..**',


]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("481132962969288713");//ايدي الشات
if(!codes) return;
if(codes) {
codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          
}
});
  


   
client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
