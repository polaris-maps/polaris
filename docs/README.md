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

USER
----------------------------------------------------------------------
1.  /app/user/all
       - curl http://localhost:5000/app/user/all
       - {{ firstName: John, lastName: Doe, email: test@email.com, favoriteLocations: [], issueInterractions: [], issuesCreated: [] },
         { firstName: John, lastName: Doe, email: test@email.com, favoriteLocations: [], issueInterractions: [], issuesCreated: [] },}
       -    HTTP/1.1 200 OK
            X-Powered-By: Express
            Content-Type: application/json; charset=utf-8
            Content-Length: 254
            ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
            Date: Thu, 28 Apr 2022 15:07:49 GMT
            Connection: keep-alive
            Keep-Alive: timeout=5
2.  /app/user/:id
       - curl http://localhost:5000/app/user/:id
       - { firstName: John, lastName: Doe, email: test@email.com, favoriteLocations: [], issueInterractions: [], issuesCreated: [] }
       -    HTTP/1.1 200 OK
            X-Powered-By: Express
            Content-Type: application/json; charset=utf-8
            Content-Length: 123
            ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
            Date: Thu, 28 Apr 2022 15:07:49 GMT
            Connection: keep-alive
            Keep-Alive: timeout=5
3.  /app/user/add
       -  curl http://localhost:5000/app/user/add
       -  {(200)}
       -    HTTP/1.1 200 OK
            X-Powered-By: Express
            Content-Type: application/json; charset=utf-8
            Content-Length: 3
            ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
            Date: Thu, 28 Apr 2022 15:07:49 GMT
            Connection: keep-alive
            Keep-Alive: timeout=5
4.  /app/user/update/:id
       - curl http://localhost:5000/app/user/update/:id
       - {200}
       -    HTTP/1.1 200 OK
            X-Powered-By: Express
            Content-Type: application/json; charset=utf-8
            Content-Length: 3
            ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
            Date: Thu, 28 Apr 2022 15:07:49 GMT
            Connection: keep-alive
            Keep-Alive: timeout=5
5.  /app/user/delete/:id
       - curl http://localhost:5000/app/user/delete/:id
       - {200}
       -    HTTP/1.1 200 OK
            X-Powered-By: Express
            Content-Type: application/json; charset=utf-8
            Content-Length: 3
            ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
            Date: Thu, 28 Apr 2022 15:07:49 GMT
            Connection: keep-alive
            Keep-Alive: timeout=5