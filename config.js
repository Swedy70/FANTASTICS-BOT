const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url herey 🫵,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255622780822";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255622780822";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_33_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDQyLFxuICAgICAgICA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAzNCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR0hBNWxNeFhuK2Y3Q28rSHVXVGJrZHhuZkYrMG1IM3ZRYzQ4T3ZvTTBvUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDdVdW1jRm1UZVNmSjBZa3pnSXhhZ1wiLFxuICBcInBob25lSWRcIjogXCI4YWY1ZGI2NC1hOGU0LTQ1OGUtODBjOS01NDBhZWFkMDNiNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAyMjUsXG4gICAgICAyMTAsXG4gICAgICAyMjgsXG4gICAgICAxNzIsXG4gICAgICA5LFxuICAgICAgMzcsXG4gICAgICAxNDgsXG4gICAgICAzMSxcbiAgICAgIDYyLFxuICAgICAgMTU3LFxuICAgICAgMTAzLFxuICAgICAgMTI2LFxuICAgICAgNjYsXG4gICAgICAyNTEsXG4gICAgICA2NixcbiAgICAgIDE3MSxcbiAgICAgIDE3NyxcbiAgICAgIDQ5LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDE4NyxcbiAgICAgIDg3LFxuICAgICAgMjI1LFxuICAgICAgMTMxLFxuICAgICAgMjMzLFxuICAgICAgOTQsXG4gICAgICAyMDUsXG4gICAgICAxNzQsXG4gICAgICAxMyxcbiAgICAgIDIzNyxcbiAgICAgIDk2LFxuICAgICAgMTQ4LFxuICAgICAgOTYsXG4gICAgICA5OCxcbiAgICAgIDE0NyxcbiAgICAgIDI4LFxuICAgICAgMTE3LFxuICAgICAgOTQsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUjExTDhZU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjIyNzgwODIyOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MDIzMzE3NzE3MjAxOjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hZmhhY0hFS0haK0xjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidk5HS0ZkSWJNV1lFSlp3ekhsK0lYZ1dKOUlPS05tQS9uSkloZXVQZTFqST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUMHdoeHFNL3V2NTJvYmdiSzhicVFQYmlYR000MjZPSWhPd0pWU1pMaXBDVmxzYU5JSmNhUjFjbzd0TjhXbzJpS3pLTFVFSDc4TUlHYmRTVVhkMFZBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwS29ocUErRlA3cGRlaXpLL0p6cHZzOERiY3lsWWRyTDEwL1FwWVpVUHJ2M3pEK0pXTWVZWmlRUGtDOEM1NWxoT2RPNjRtaEtQdFpMeWlGV3dleVloZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjI3ODA4MjI6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc5MzM2MDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
