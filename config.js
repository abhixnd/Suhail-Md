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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+919544949116";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_04_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzksXG4gICAgICAgIDI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICA0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM1LFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkzLFxuICAgICAgICA5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicEpvZWJPL3kvaGFtZGV0RkNXMWNaWEhaU3pYSlZsSkVIL05sYmdxeUZGZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk1NDQ5NDkxMTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRBRDVFRjE2OURFMUVBMUMwQzdFRUQ2RkE2NzM3NzA0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzIxMjI3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTU0NDk0OTExNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDM4N0ZCQzczMTIyMTU4NjY4RDQ1NEY4NzlEOEE2NTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMjEyMjc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhvNC13WFVEVDkyLXRFN3dqM2xCVUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzQzZWRjYzEtYTBmNC00YTBiLTg5NTYtMmYzZWM5NTYzYjYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDE1OCxcbiAgICAgIDMwLFxuICAgICAgMjUsXG4gICAgICAzMSxcbiAgICAgIDE4NixcbiAgICAgIDIyNCxcbiAgICAgIDE3OSxcbiAgICAgIDQsXG4gICAgICAyMTQsXG4gICAgICAyNDAsXG4gICAgICA1MSxcbiAgICAgIDIxNyxcbiAgICAgIDEzMyxcbiAgICAgIDU1LFxuICAgICAgMjI2LFxuICAgICAgMjQ0LFxuICAgICAgMjQ5LFxuICAgICAgNjIsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDQ2LFxuICAgICAgODUsXG4gICAgICA0MyxcbiAgICAgIDIxLFxuICAgICAgNTcsXG4gICAgICAyMjUsXG4gICAgICAxMDYsXG4gICAgICA0LFxuICAgICAgMzAsXG4gICAgICA1NixcbiAgICAgIDIzLFxuICAgICAgMjA3LFxuICAgICAgMjIwLFxuICAgICAgMTY4LFxuICAgICAgMjIxLFxuICAgICAgODQsXG4gICAgICAyMDMsXG4gICAgICAyMzIsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllSREYzOVBOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk1NDQ5NDkxMTY6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCA8J2QnPCdkKHwnZCu8J2QrfCdkK3wnZCy8J+SjvCfjYnwn5KXXCIsXG4gICAgXCJsaWRcIjogXCIxNDcxOTc2MzkyNjY0NDQ6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUQ1dHFZREVPN0QyTFVHR0EwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVUnZ5M0xTd003aFF5dExPTFRwaThWeUM1d3dvUlFlbVlZM2xkYWpla0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBNOEhjZXFET3BuZ2w2RllIVFpER0lkQmRuVUR1RE4yYXdrZURVbVRHTkI4ZmNxTFNPM0hjL2NqTEpvdTNEVzUwaEJWWkVrV28vcTNjTmMyNlBRWENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndXN0lMcVNuR09ZZnZlYlgrT1M3cFhwd3FFSUswemlsTm9TelRyckFlT0tCZ29zRTNKcnZEQTlkVjByelRLZERxanE5STFlc0Fya1VyWmptNVRKUmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTU0NDk0OTExNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMjEyMjc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREtxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFES3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtd1BwRHVCMmdRVlhGVlIydThhVXVCQThzWG93T3BzOG45WE16VkJveXBZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg4NTg5ODM2OCxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDgsMTFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
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
