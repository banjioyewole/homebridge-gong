#Homebridge-Gong

This is the Homebridge service-accessory that enables control over the Gong through Homekit.


###More Information
The "Gong" is a literal 12" gong in our livingroom. Attached to it is a carbon fiber arm with a motor. By network request, the arm can be 'actuated' resulting in the gong being hit.

More on making your own accessories for homebridge here:
https://blog.theodo.com/2017/08/make-siri-perfect-home-companion-devices-not-supported-apple-homekit/

Tl;dr

`npm install -g homebridge-gong`
You have to be in the directory above it to be able to run this command


Register in Homekit using:


```{
  "accessory": "homebrige-gong",
  "getUrl": "http://192.168.1.101:4664/",
  "postUrl": "http://192.168.1.101:4664/gong"
}```
