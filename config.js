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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_32_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQzLFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNjlYd2c0c0MrZkZXbmt0OHo2SFZvS0doUE12ekxIN1ZHWHJUM0VBRm1nST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk1NDQ5NDkxMTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRCODI4NkUxODJDQUM4QzIxRjZDOTZCRjkyREJCRjdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk5NDM0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqSUxZdTJaMFRfR3pRYXJBUEM4amJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmN2ZjNDY5LTE5NTMtNGNjOC05MjI1LWNmNzFkNjkyZjA0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDE3MyxcbiAgICAgIDEwNSxcbiAgICAgIDYxLFxuICAgICAgMTAwLFxuICAgICAgOTAsXG4gICAgICAxOTUsXG4gICAgICAyOCxcbiAgICAgIDIwOCxcbiAgICAgIDE3MCxcbiAgICAgIDE2MCxcbiAgICAgIDI5LFxuICAgICAgMzgsXG4gICAgICAyMDksXG4gICAgICAxODMsXG4gICAgICA0NSxcbiAgICAgIDIyMCxcbiAgICAgIDE3MixcbiAgICAgIDI5LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTUyLFxuICAgICAgMTEsXG4gICAgICA2MyxcbiAgICAgIDk3LFxuICAgICAgMTYxLFxuICAgICAgOTAsXG4gICAgICAxMDYsXG4gICAgICAxMDksXG4gICAgICA1MSxcbiAgICAgIDIzOSxcbiAgICAgIDExNyxcbiAgICAgIDIzMixcbiAgICAgIDE3OCxcbiAgICAgIDIzNSxcbiAgICAgIDExNSxcbiAgICAgIDgxLFxuICAgICAgMTIyLFxuICAgICAgMTMxLFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREc3QlpRMlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTU0NDk0OTExNjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QgPCdkJzwnZCh8J2QrvCdkK3wnZCt8J2QslwiLFxuICAgIFwibGlkXCI6IFwiMTQ3MTk3NjM5MjY2NDQ0OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUQ1dHFZREVKNmR5N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVUnZ5M0xTd003aFF5dExPTFRwaThWeUM1d3dvUlFlbVlZM2xkYWpla0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNMRDI3Z042cWtGT0gvY3JKcUk0cGMzUFpLb25nYjh3T1FoQURGVllzQ1VMSzcwY2V6K1ZkWHVuejdGT1ZYWFgyQ1BXQ0tDak9UT1FvVmtRYlE5Y0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhDQ3ZTT2FSeDhlVnpyNlM5RjdtK28rbGRNdU44NDEzZmxoWDZ6QWhubHVyOE5ldG1XTDBLNldBWGM4a201VCs0YklMd3NBd3J1WlBnQlBwM25YUWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTU0NDk0OTExNjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5OTQzMzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFES2hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURLaC5qc29uIjogIntcImtleURhdGFcIjpcIkRINkRDOHBTREgxd1UvSy84RDh3RFhjYXFLWmdhMHNNbVpFUHNyUnp2eFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODg1ODk4MzY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI5OTQzMzgyMDdcIn0iCn0="  // PUT your SESSION_ID 


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
