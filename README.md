## Who wants to be a millionaire Game

### Installation

1. run `git clone 'git@github.com:berezovskycom/millionaire-game.git' millionaire-game-berezovskycom`
2. `cd millionaire-game-berezovskycom`
3. `npm install`
4. `npm start`

### Data info

- data is stored in src/data/questions.json

questions.json format:

```json
{
	"games": [
		{
		    "questions": [
              {
                  "question" : "Who is the president of the USA?",
                    "content" : [
                        "Donald Duck",
                        "Jack Sparrow",
                        "Donald Trump",
                        "Kim Kardashian"
                    ],
                    "correct" : [2],
                    "money": 500
              },
        ],
        "currency": "$"
```



### Deploy

To deploy to [gh-pages](https://berezovskycom.github.io/millionaire-game), use `npm run predeploy && npm run deploy` command.

For Build, use `npm run build`.

### Possible things to add

1. localstorage support (to save data even if page has been refreshed).
2. Subtitle in Play component to show how many correct answers left to answer.
3. Audio support on Events.
