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

## User
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