const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_05_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDUyLFxuICAgICAgICA2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU3LFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjksXG4gICAgICAgIDkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDYyLFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDMxLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibnVZUXBEV0RqVERjb093eUljbUZ1TGYxeTNaM1I0a05pblRiSzUvcnFJVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg3NzM5OTI0NTEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMkNCNjg5MkRCQzY3ODFFQkRDNDA1QjdEMDdBOEQ2QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3ODAzMzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg3NzM5OTI0NTEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMDI3RkQ3NDUwMTNFMTQwNzcyQ0JDNzM1MUM4Q0YzRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3ODAzMzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg3NzM5OTI0NTEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRUZFMDlGQ0FGQkI0RUYyMUI4QTYxNThCRjUxM0FCNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3ODAzNDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg3NzM5OTI0NTEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNzdBRThBNDhBQTlGMTZCQUZFQjI4MkIyMDAyMDJDOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3ODAzNDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidmpHMGU0TEpRT0c3cjFuNmZ2SV9SUVwiLFxuICBcInBob25lSWRcIjogXCI5NDk5MGU3Yy0zM2FjLTQ3MmQtOWE5ZC1lNWFkMzBlMjMyNWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTExLFxuICAgICAgMTkxLFxuICAgICAgMzcsXG4gICAgICAxMjAsXG4gICAgICAyMixcbiAgICAgIDM2LFxuICAgICAgOTIsXG4gICAgICAxMDcsXG4gICAgICAzMCxcbiAgICAgIDIwOSxcbiAgICAgIDE2NyxcbiAgICAgIDM4LFxuICAgICAgMjQxLFxuICAgICAgMzMsXG4gICAgICAxMDcsXG4gICAgICAyOCxcbiAgICAgIDc3LFxuICAgICAgMzgsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgMTQwLFxuICAgICAgNzQsXG4gICAgICAxMjYsXG4gICAgICAxNzQsXG4gICAgICAxNjcsXG4gICAgICAxOTQsXG4gICAgICAyMjcsXG4gICAgICAxNDEsXG4gICAgICA5OCxcbiAgICAgIDE1MCxcbiAgICAgIDE3MSxcbiAgICAgIDI0NyxcbiAgICAgIDE0NyxcbiAgICAgIDE3OSxcbiAgICAgIDI5LFxuICAgICAgMTE5LFxuICAgICAgMTUzLFxuICAgICAgMjIwLFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTNFNU5QQjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYyODc3Mzk5MjQ1MTM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzIyMzQ3MTk0Njk3Mzg6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCA8J2QnPCdkKHwnZCuIPCdkKbwnZCo8J2QsPCdkKXwn5KO8J+Sl1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1UTJNY0hFSzJWdnJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZEw2cVNYVDdBajd5MUJkTkFOVmVNQ2NFeXBpSG9hQStTRjQwOWRjN0dWZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNWWFvenhFMFczd01SMkJ3TkVDRmNOYk9JS1VMakVoaTZsVFNnU0krMi9QVUlvN1BESEJVKzVXVll4OWM4bURJcnQ2YkllQm1SL3UrbmF5WjltMS9BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhNW9ObHJCcHV0WHJjZ1pkN2pHekpsVldmQUxzbTlPUVo4MzlmbnV6YjU5bmxFWDIxa2h6U21jRFJQaXNLQW92dDd4OW00Qkp5OEpvSjNFN2x3VE9odz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI2Mjg3NzM5OTI0NTEzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzgwMzM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDAvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIMC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝐀𝐜𝐡𝐮 𝐦𝐨𝐰𝐥💎💗",
  ownername:process.env.OWNER_NAME|| "𝐀𝐜𝐡𝐮 𝐦𝐨𝐰𝐥🍉🌟",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
