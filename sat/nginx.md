if you want to use the server with an nginx reverse proxy then you can use the following snippet

```
location /ws/ {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass "http://localhost:8010";
}
```

note: use wss:// or else nginx does not like it