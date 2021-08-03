# What is this?

this is a simple package for simulate a stack

# Installation

`npm i stack --save`

Then...

```
 const stack = requier('stack);
 conat newStack = new stack(model)

```

```
  async push(req, res, next) {
    const stackDb = await this.model.find();
    if (!stackDb[0]) {
      const newStack = new this.model({
        list: {
          stack: [req.body.data]
        }
      })
```