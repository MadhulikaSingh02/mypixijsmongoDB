# A nodejs server that reads data from mongoDB and draws polygon using pixi

This is a small project that 

1. Implements a server using express/node js
2. Has a GET route that
    - Reads points from mongoDB
    - Renders an html page that draws a polygon
        -  the points array is passed to html using ejs
3. Has a POST route to add polygon points to DB

To install and run

```npm install```

```node app.js```

open browser and type

``` http://localhost:4567/points ```

## Add Polygon points to database

post to ```localhost/4567/points ``` with following settings

- Content-Type: application/json

- Body
```
{
    "points":
    [500,270,600,360,680,320,630,470,490,420]
}
```
