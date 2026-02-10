const { describe } = require("node:test");
app.get('/', (req, resp) => {
  console.log('Session:', req.session);
  console.log('Session ID:', req.sessionID);
  req.session.visited = true
  resp.status(200).send('Hello World!');
});

describe('Testing main endpoint', ()=>{
    test('Should return Hello World and set session', async()=>{
        
    })
});

// Արդյունք (միշտ):
// 1
// 5
// 4. nextTick ← Առաջինը!
// 2. timeout
// 3. immediate
```

**process.nextTick()-ի կանոնը:**

> Ամեն փուլից հետո, **ԱՌԱՋ** քան հաջորդ փուլը, nextTick queue-ը կատարվում է։
```
Timers phase
    ↓
nextTick queue ← Ստուգվում է
    ↓
Pending callbacks
    ↓
nextTick queue ← Ստուգվում է
    ↓
Poll phase
    ↓
nextTick queue ← Ստուգվում է
    ...