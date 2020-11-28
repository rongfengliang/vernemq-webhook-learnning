# vernemq webhook learning

> with benthos for webhook server

## Usage

* enable webhook

> inside container (each vernemq node)

```code
vmq-admin  plugin enable --name vmq_webhooks
```

* register hooks

> inside container

```code
vmq-admin webhooks register hook=on_publish endpoint="http://172.16.238.11:4195"

vmq-admin webhooks register hook=on_subscribe endpoint="http://172.16.238.11:4195"
```

* view webhook info

> inside container

```code
vmq-admin  webhooks show
```

* send message

![images](./images/WX20201128-190734@2x.png)

* webhook message

>  note payload with base64 encode


![images](./images/WX20201128-190750@2x.png)
