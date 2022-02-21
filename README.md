# A nodejs server that reads data from mongoDB and draws using polygon using pixi
To run

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
