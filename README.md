# Krang

Totally (well, almost) _serverless_ concept that allows you to query DB from front-end. **Krang!** 😂


![Krang in action](https://raw.githubusercontent.com/radenkovic/krang/master/public/krang.gif)


# For Your Safety

Concept of **Krang** is to _"open the portal"_ to database, so it can be (almost) directly accessed from front-end. At first that sounds like totally _Krang-ish_ idea and totally unsafe option, by configuring user roles in your database (for example allowing read-only particular tables) or if you trust your users (in **Krang** you can integrate some authentication mechanism) to give some write permissions too. 

Another use of **Krang** would be for boostrapping an app, you can design your schema and move queries to backend later (very nice if it's Node).

Idea of writing plain SQL in javascript is also very _Krang-ish_ but [Squel.js](https://hiddentao.com/squel/) can be good option.

**IMPORTANT:** Using Krang in production environment can worsen Global Warming!

# Installation

1. `git clone https://github.com/radenkovic/krang`
2. `cd krang`
3. `yarn` or `npm i`
4. Open `krang.js` and set up your database (or you can use `.env` file)
5. `npm start`

# API

To query _Krang_ you there is only one endpoint:

`POST /krang`

which uses only one parameter: `query`.


# Stack

Needless to say it's written in one file (`krang.js`), runs on `Node/Express`, and connected to MySQL database (but it can be anything else, literally). Frontend sample is written with jQuery so everyone can understand it.

# Environment Variables

You can set up your environment variables in `.env` (dotenv) file:

1. DB_HOST=localhost
2. DB_USER=root
3. DB_PASSWORD=""
4. DB_DATABASE=krang
4. DB_PORT=3306

# Contributions

If you find this idea interesting, you can fork it and contribute. Krang will love it.