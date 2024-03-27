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
## Contribution

If you want to contribute to this project, follow the steps below:

1. Fork the project.
2. Create a Branch for your Feature (`git checkout -b feature/AmazingFeature`).
3. Add your changes (`git add .`).
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5. Push the Branch (`git push origin feature/AmazingFeature`).
6. Open a Pull Request.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.