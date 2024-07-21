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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_39_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgODgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpZYnF2MFRBRDRpVlRHQThTV21UamdQRDc1NWxxOVpvWVRzOHZQRTN6ODg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdmSGtfc05JUVI2LTFNTklzWWliN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWY2NGNhNGYtY2Y2YS00YjRkLTk2MzYtYTQ0MGEwOGI5NTA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMjMzLFxuICAgICAgNDksXG4gICAgICA2NSxcbiAgICAgIDI0NSxcbiAgICAgIDIxMCxcbiAgICAgIDEyMixcbiAgICAgIDk5LFxuICAgICAgMjMzLFxuICAgICAgNDksXG4gICAgICAxNjIsXG4gICAgICAxMyxcbiAgICAgIDk4LFxuICAgICAgMTI0LFxuICAgICAgMTgxLFxuICAgICAgODQsXG4gICAgICAxODYsXG4gICAgICAxNTcsXG4gICAgICA2NCxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAyNDgsXG4gICAgICAyMzcsXG4gICAgICA1MixcbiAgICAgIDEyOSxcbiAgICAgIDk4LFxuICAgICAgNDQsXG4gICAgICAxNDUsXG4gICAgICAyMTAsXG4gICAgICAxMDgsXG4gICAgICAxODcsXG4gICAgICAyMzQsXG4gICAgICAyNTEsXG4gICAgICAxNzgsXG4gICAgICA5NixcbiAgICAgIDI0NCxcbiAgICAgIDkwLFxuICAgICAgMjEyLFxuICAgICAgMTYzLFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDZOQk41RUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODU5MDQwNDI5Mjo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuC0heC0quC0sOC0v+C0muC0v+C0pOC1uy5BaVwiLFxuICAgIFwibGlkXCI6IFwiNjI3MDY1MzkzMjM0ODY6OTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVdYekw4RkVNL0s4N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJleEoydS9JU3MvSUE5VUc2eTEya1B1b1YzMHN2TGZybkNqb2NUVU5BWVdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkIyUmVzeEZQd21KQ0kyS3NzTDBZalM1TWFPYWNqM2g4OG5GNW9NSW85ZnpMZnhjQ0RtZ0lWK2NWL3dwc3Z3VVNOeS8zQi95Vm16UDNpTGVvWHdreEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFPQkdkSGVRQ3dlREFQdDQ1T3QxRjdxODVoeGlpSnpMajdSVm1rVFFBdmpHZjdHdmEvdzAzK0kzd3ZRNlhuY21FYVc2VXJ6MjZzSm1DL0xWcE5ld2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODU5MDQwNDI5Mjo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTU4MzU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXA4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNcDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRUGlaNmlLOTlrb0I4RDlaOGFkZkNZN3ZUdTNIdS9WZ3g4UEJ1dFF5b3BzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzU1NDU5ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU1ODM1NjEwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
