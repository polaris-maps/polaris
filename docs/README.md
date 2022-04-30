# Docs

This contains information related to the Polaris Maps project:
- Detailed API documentation
- Planning
- Team Info

=======
# Polaris API Documentation

## Endpoints

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5001/app/
```

#### Response body

```
{"message":"Your API works! (200)"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Fri, 29 Apr 2022 01:36:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

## User endpoints
### /app/user/all (GET)
#### Request cURL

```
curl http://localhost:5000/app/user/all
```

#### Response body

```
{{ firstName: John, lastName: Doe, email: test@email.com, favoriteLocations: [], issueInterractions: [], issuesCreated: [] },
{ firstName: John, lastName: Doe, email: test@email.com, favoriteLocations: [], issueInterractions: [], issuesCreated: [] },}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 254
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/:id (GET)
#### Request cURL

```
curl http://localhost:5000/app/user/:id
```

#### Response body

```
{ firstName: John, lastName: Doe, email: test@email.com, favoriteLocations: [], issueInterractions: [], issuesCreated: [] }
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 123
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/add (GET)
#### Request cURL

```
curl http://localhost:5000/app/user/add
```

#### Response body

```
{(200)}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/update/:id (GET)
#### Request cURL

```
curl http://localhost:5000/app/user/all
```

#### Response body

```
{200}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/delete/:id (GET)
#### Request cURL

```
curl http://localhost:5000/app/user/delete/:id
```

#### Response body

```
{200}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

## Buildings

### /app/building/all/ (GET)

#### Request cURL

```
curl 'http://localhost:5001/app/building/all'
```
#### Response body

```
[{"_id":"625e4021000fa59c306e2bbe","name":"Abernathy","abbreviation":"AB","defaultLatitude":35.91167621,"defaultLongitude":-79.05426351,"campus":"UNC Chapel Hill","__v":0},{"_id":"625e4021000fa59c306e2bc0","name":"Art Studio Building","abbreviation":"LA","defaultLatitude":35.93180563,"defaultLongitude":-79.05819518,"campus":"UNC Chapel Hill","__v":0}]
```

### /app/building/add/ (POST)

#### Request cURL

```
curl -X POST 'http://localhost:5001/app/building/add' -H "Content-type: application/json" -d '{
   "name": "test 1",
   "abbreviation": "test 1",
   "defaultLatitude": "0.00000000",
   "defaultLongitude": "0.00000000",
   "campus": "test"
}'
```

#### Response body

```
{"name":"test 1","abbreviation":"test 1","defaultLatitude":0,"defaultLongitude":0,"campus":"test","_id":"626b5443f550eeb91fae3610","__v":0}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 139
ETag: W/"8b-x5xwzwwgJSfvOduAPPd2QHgyKz4"
Date: Fri, 29 Apr 2022 02:58:12 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/building/add/multiple/ (POST)

#### Request cURL

```
curl -X POST 'http://localhost:5001/app/building/add/multiple' -H "Content-type: application/json" -d '[
   {
       "name": "North Pole",
       "abbreviation": "NP",
       "defaultLatitude": "90.00000000",
       "defaultLongitude": "135.00000000",
       "campus": "test"
   },
   {
       "name": "South Pole",
       "abbreviation": "SP",
       "defaultLatitude": "90.00000000",
       "defaultLongitude": "45.00000000",
       "campus": "test"
   }
]'
```

#### Response body

```
[{"name":"North Pole","abbreviation":"NP","defaultLatitude":90,"defaultLongitude":135,"campus":"test","_id":"626b5314f550eeb91fae360d","__v":0},{"name":"South Pole","abbreviation":"SP","defaultLatitude":90,"defaultLongitude":45,"campus":"test","_id":"626b5314f550eeb91fae360e","__v":0}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 286
ETag: W/"11e-3TOI4w+0pjhldtTHdOzuWbKryHg"
Date: Fri, 29 Apr 2022 02:53:08 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/building/update/:id/ (PATCH)

#### Request cURL

```
curl -X PATCH 'http://localhost:5001/app/building/update/626b5443f550eeb91fae3610' -H "Content-type: application/json" -d '{
 "name": "At the Prime Meridian and the Equator"
}'
```

#### Response body

```
{"_id":"626b5443f550eeb91fae3610","name":"test 1","abbreviation":"test 1","defaultLatitude":0,"defaultLongitude":0,"campus":"test","__v":0}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 139
ETag: W/"8b-G7E1MQYpjU8HHW3b3QluYB5cIng"
Date: Fri, 29 Apr 2022 03:01:33 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/building/delete/:id/ (DELETE)

#### Request cURL

```
curl -X DELETE 'http://localhost:5001/app/building/delete/626b5443f550eeb91fae3610'
```

#### Response body

```
{"msg":{"_id":"626b5443f550eeb91fae3610","name":"At the Prime Meridian and the Equator","abbreviation":"test 1","defaultLatitude":0,"defaultLongitude":0,"campus":"test","__v":0}}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 178
ETag: W/"b2-P2ZiE2a53XFOtTXwFKtaAgMGxzk"
Date: Fri, 29 Apr 2022 03:04:47 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

## **Issue**
#### /app/issue/all
#### Request cURL

```
    curl http://localhost:5000/app/issue/all
```
#### Response body

```
       {{ location: String, latitude: Number, longitude: Number, description: String, status: String, datetimeOpen: Number, datetimeClosed: Number, datetimePermanent: Number, votes: Number}, { location: String, latitude: Number, longitude: Number, description: String, status: String, datetimeOpen: Number, datetimeClosed: Number, datetimePermanent: Number, votes: Number}}
```
#### Response headers

```
        HTTP/1.1 200 OK
        X-Powered-By: Express
        Content-Type: application/json; charset=utf-8
        Content-Length: 366
        ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
        Date: Thu, 28 Apr 2022 15:07:49 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5
```

#### /app/issue/:id
#### Request cURL

```
 curl http://localhost:5000/app/issue/:id
```
#### Response body

```
 { location: String, latitude: Number, longitude: Number, description: String, status: String, datetimeOpen: Number, datetimeClosed: Number, datetimePermanent: Number, votes: Number}
```
#### Response headers

```
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 183
    ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
    Date: Thu, 28 Apr 2022 15:07:49 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
```

#### /app/issue/add
#### Request cURL

```
curl http://localhost:5000/app/issue/add
```
#### Response body

```
{(200)}
```
#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
#### /app/issue/update/:id
#### Request cURL

```
curl http://localhost:5000/app/issue/update:id
```
#### Response body

```
 {(200)}
```
#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
#### /app/issue/delete/:id
#### Request cURL

```
curl http://localhost:5000/app/issue/delete:id
```
#### Response body

```
 {(200)}
```
#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

## **ClientLog**


#### /app/clientLog/all
#### Request cURL

```
curl http://localhost:5000/app/clientLog/all

```
#### Response body

```
[{"_id":"626a6e60fcb1207d51060c59","level":2,"additional":["header","constructor"],"message":"Render header","timestamp":"2022-04-28T10:37:20.428Z","fileName":"main.js","lineNumber":431,"columnNumber":21,"levelName":"INFO","__v":0},{"_id":"626a6e60fcb1207d51060c5b","level":2,"additional":["footer","constructor"],"message":"Render footer","timestamp":"2022-04-28T10:37:20.434Z","fileName":"main.js","lineNumber":385,"columnNumber":21,"levelName":"INFO","__v":0},{"_id":"626a6e60fcb1207d51060c5d","level":2,"additional":["home","constructor"],"message":"Render home page","timestamp":"2022-04-28T10:37:20.444Z","fileName":"main.js","lineNumber":643,"columnNumber":21,"levelName":"INFO","__v":0}]
```
#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 695
ETag: W/"1272-4gWT2RvtevG6+kKnCSiULwPtxVs"
Date: Fri, 29 Apr 2022 02:23:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
#### /app/clientLog/:id
#### Request cURL

```
curl http://localhost:5000/app/clientLog/:id

```
#### Response body

```

```
#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive

```
#### /app/clientLog/add
#### Request cURL

```
curl http://localhost:5000/app/clientLog/add

```
#### Response body

```
{200}
```
#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 28 Apr 2022 15:07:49 GMT
Connection: keep-alive

```
