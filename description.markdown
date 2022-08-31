User API

## Websocket

**HOST**:`http://localhost:3000`

---
### Listen for join in room
___
Event :`join-in-room`
Data:
|Properly | Description|
|--------------|---------------|
|`token` |Auth token for user|
|`time` | Time of login |
|`id` | Id of room |

Example:
```angular2html
 token : 2232afavavba$gasagffa-afsasvnskak4#$aasd
 time  : 2022-08-12
 id :  adasf-2231-abasasd$552
```

### Listen for join in chat
___
Event :`join-in-chat`
Data:
|Properly | Description|
|--------------|---------------|
|`token` |Auth token for user|
|`time` | Time of login |
|`id` | Id of chat |
