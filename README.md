### Notes

#### Closing tag
```html
<img ...> 
```
change to 
```html
<img .../> 
```

#### Attributes
```html
<label for="">
```
change to
```html
<label htmlFor="">
```


#### cannot figure it out
if content of `data` is 
```json
{
  "main": {
    "name": "Brad Traversy",
    "occupation": "Web developer, programmer and designer",
    "image": "profilepic.jpg",
    "email": "bradtraversy@gmail.com",
    "phone": "555-555-5555",
    "address": {
      "street": "933 Albany st, Suite 3",
      "city": "Boston",
      "state": "MA",
      "zip": "20293"
    },
  }
```

why not `this.props.data.main.name` but directly pick `name` property
```js
if (this.props.data) {
  var name = this.props.data.name
}

```
