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

 
* Modify `App.jsx` content
```js
this.state = {
  resumeData: {}
}
```
to
```js
this.state = {
  main: {}
}
```
* 
```js
$.ajax({
  url: 'http://localhost:3000/resumeData.json',
  dataType: 'json',
  cache: false,
  success: function (data) {
    this.setState({ resumeData: data })
  }.bind(this),
  error: function (err) {
    alert(err)
  }
})
```
little change at `success` function
```js
  success: function (data) {
    this.setState({ main: data.main })
  }
```
* 
```js
 <Header data={this.state.resumeData} />
```
to
```js
 <Header main={this.state.main} />
```

Then we dont have to type this `this.props.data.main.name` long long shit 
and can get access to `this.props.main` and pass it to our variable at `Header.js`
```js
if (this.props.main) {
  var name = this.props.main.name
}
```