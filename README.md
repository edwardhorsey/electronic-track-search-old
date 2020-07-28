## Electronic Track Search

A React web app which searches the following sites for information on a track release and provides results of DJ mixes which feature the track:
- Discogs
- MixesDB
- Soundcloud

My favourite searches for this engine:
- Sleeparchive - Fifth Station
- Blue Hour - Common Ground
- Oscar Mulero - Generator
- Polar Inertia - Vertical Ice
- Steve Bicknell - Harmonious balance
- Stanislav Tolkachev - Like No One Is Watching

Recent additions:
- Migrated the Fetch functionality into a backend NodeJS app (hosted on Heroku), which holds my API keys. View the code for that here => https://github.com/edwardhorsey/electronic-track-search-api

Issues:
- 429 Errors - When running Google Custom Searches I would sometimes reach the daily limit of query results. I am currently researching alternative options to overcome this. In the meantime if one is to receive a 429 error on this app and thus receive less than 1 DJ Mix result back it will pull from a list of my favourite mixes and render those to the page instead. 
