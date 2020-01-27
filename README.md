# Homebridge-Gong

This is the Homebridge service-accessory that enables control over the Gong through Homekit.


### More Information
The "Gong" is a literal 12" gong in our livingroom. Attached to it is a carbon fiber arm with a motor. By network request, the arm can be 'actuated' resulting in the gong being hit.

More on making your own accessories for homebridge [Here](https://blog.theodo.com/2017/08/make-siri-perfect-home-companion-devices-not-supported-apple-homekit/)

## Tl;dr

`npm install -g homebridge-gong`
You have to be in the directory above it to be able to run this command


Register in Homekit using:

As of Jan 26, 2020 postUrl in the `config.json` is ignored.


```"accessories": [{
                "accessory": "homebridge-gong",
                "getUrl": "http://192.168.1.101:4664/",
                "postUrl": "http://192.168.1.101:4664/gong"
        }]
```

Full `config.json` with the Gong as the only accessory

```json
{
	"bridge": {
		"name": "AmericanPi Bridge",
		"username": "CC:22:3D:E3:CE:30",
		"port": 51826,
		"pin": "001-02-003"
	},
	"accessories": [{
		"accessory": "Gong",
		"name": "Gong",
		"getUrl": "http://192.168.1.101:4664/",
		"postUrl": "http://192.168.1.101:4664/gong"
	}]
}
```
