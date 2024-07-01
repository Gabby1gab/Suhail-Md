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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_19_44_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDM1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAwLFxuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT3UrYjdnN2tZclhZUWFlMFFLQnk0UW9jNkRlYXh1RkdWQmZNZ0p3bk5FOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1NTA5NTM3MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIzQjFBRjcxRDVFNzAxRTk5QUFFRDRFRDkyMTRCNkJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg2MzA3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGZVFTRC03UFJmZWVmV1d2V3dySXpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM0YmVmNDJlLTMyMDctNDM1Ni04MmI1LWZjYTY3ZmVkYmViNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAxOCxcbiAgICAgIDE1NixcbiAgICAgIDE0MCxcbiAgICAgIDEyMCxcbiAgICAgIDYyLFxuICAgICAgMjQ1LFxuICAgICAgMjgsXG4gICAgICAxMDIsXG4gICAgICA4MCxcbiAgICAgIDExNyxcbiAgICAgIDMsXG4gICAgICAyMTUsXG4gICAgICAyMTEsXG4gICAgICA1MCxcbiAgICAgIDI0MixcbiAgICAgIDIwOCxcbiAgICAgIDIwMixcbiAgICAgIDIzLFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAxODksXG4gICAgICA5NixcbiAgICAgIDIzMSxcbiAgICAgIDIzNixcbiAgICAgIDE5MyxcbiAgICAgIDIxMixcbiAgICAgIDEzNyxcbiAgICAgIDIyNixcbiAgICAgIDc1LFxuICAgICAgNTQsXG4gICAgICAxMjUsXG4gICAgICAyMyxcbiAgICAgIDExNyxcbiAgICAgIDE5OCxcbiAgICAgIDE3NCxcbiAgICAgIDQzLFxuICAgICAgMTgwLFxuICAgICAgMjI3LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQUkxQTUcyQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTUwOTUzNzM0OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTU5NTg3OTQxMjEyODY6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGozbnZrR0VKcU9qTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYcnczM3hrN21LQUZlRitlaTRoWjh3WDlYWXo3ZEJmU2FxN0tERmFVQmcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZSdTZUSlBHRlBLSWlmanFCMzZOTTZMVFE1S2ZWNTVnVEVUQUx6a2hYY3NiOFhoZlJmSzRpVHdxejNhWEUvWTBwVlpsV3AxS2YwRjRLODExRGhldUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFwK2pvd1pOandzRnZ5WXg3RGF3dlVzdXhHa0o5NUxPakxWWG9HM0RYdkZLbkphelJiZmQrOEhWclloZ1Y4QUpvQlNrU1hESmVHVTFxSTRCTHVFb0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU1MDk1MzczNDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NjMwNjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFQklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVCSS5qc29uIjogIntcImtleURhdGFcIjpcIjJ2M01sb1Axdk1uRkVabDZ4ZC91Zkloc3FNTk5RbU1mRUQzNXFDWmVhSDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg2NDg3NDk5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1NTY1OTE3MDA2XCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
