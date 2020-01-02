# Notes App with Node, Mongodb
This is a basic App to manage simple Notes on the web using Javascript Technologies like Nodejs, Mongodb, and so on.
This app can:
- create/read/update/delete Notes
- Allows a user to do log in and save his personal notes

# Screenshot
![](docs/tasks.png)

## Config

```bash
ALLOW_SIGNUP=
SITE_PRIVATE=
SECRET_KEY=
MONGOOSE=
```

* ALLOW_SIGNUP: Enable/Disable signup new account (default: ''. e.g. '1).
* SITE_PRIVATE: Enable/Disable private site via password (default: ''. e.g. '123@@456').
* SECRET_KEY: Salt, generate via `npm run salt --silent`.
* MONGOOSE: MongoDB connection string.
