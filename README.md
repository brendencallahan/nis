# NIS: https://nis.up.railway.app/

<br>

NIS, or NASA Image Search, is a web app that does three main things: it first displays a homepage that calls the Astronomy Picture of the Day API, then allows you to search for pictures using the NASA Image Library Search API, and finally you are able to save your favorite pictures to view in a seperate page.

<br>

Here is the figma design I made and started with.

![Screenshot 2023-01-02 at 16-56-15 Figma](https://user-images.githubusercontent.com/47364240/210288160-251b6026-679d-47f7-92ac-4f90ac99e734.png)

## To run locally:

<br>

`git clone https://github.com/brendencallahan/nis`

<br>

### Frontend

```
cd client
npm i
npm run start
```

<br>

### Backend

To start the backend you will first need to edit line 45
of /server/index.js. In the url, instead of providing an environment variable, use the API key "DEMO_KEY".

<br>

The url should look like this

`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`

<br>

Save the file. Then:

```
cd server
npm i
npm run dev
```

### Once you have both running, visit localhost:3000

<br>

For more information about these APIs visit NASAs documentation here: https://api.nasa.gov/
