# CUT HERE

This is a simple project that provides functionality to shorten URLs. It exposes two main endpoints:

1. `POST http://localhost:8000/createurl`: This endpoint creates a new short URL. It accepts a JSON body with two properties: `shortUrl`, which is the desired short URL, and `url`, which is the original URL that should be shortened.

```
# @method POST
# @path http://localhost:8000/createurl
# @header:
{
    "content-type": "application/json"
}
# @body:
{
    "shortUrl": "hello",
    "url": "https://google.com"
}
```

2. `GET http://localhost:8000/hello`: This endpoint retrieves the URL associated with the provided short URL in the parameter.

```
# @method: GET
# @path: http://localhost:8000/hello3
# @header:
{
    "content-type": "application/json"
}
```

3. `GET http://localhost:8000/shorturl/all`: This endpoint retrieves all data.

```
# @method: GET
# @path: http://localhost:8000/shorturl/all
# @header:
{
    "content-type": "application/json"
}
```
