
module.exports = class stack {
  constructor(model) {
    this.model = model;
  }
  async push(req, res, next) {
    const stackDb = await this.model.find();
    if (!stackDb[0]) {
      const newStack = new this.model({
        list: {
          stack: [req.body.data]
        }
      })
      const stackUpdated = await newStack.save();
      return res.status(201).json({ message: 'push success', data: stackUpdated })
    } else {
      const stackList = stackDb[0].list.stack
      stackList.push(req.body.data);
      const stackUpdated = await stackDb[0].save();
      return res.status(201).json({ message: 'push success', data: stackUpdated })
    }
  }
  async pop(req, res, next) {
    const stackDb = await this.model.find()
    const stackList = stackDb[0].list.stack;
    const popItem = stackList.pop()
    const updatedStack = await stackDb[0].save();
    res.status(200).json({ message: "pop sucssecc", data: popItem })
  }

  async peak(req, res, next) {
    const stackDb = await this.model.find();
    const stack = stackDb[0].list.stack;
    res.status(200).json({ message: 'peak success', data: stack[stack.length - 1] })
  }

  async showAll(req, res, next) {
    const stackDb = await this.model.find();
    const stack = stackDb[0].list.stack;
    res.status(200).json({ message: 'show', data: stack })
  }
  async isEmpty(req, res, next) {
    const stackDb = await this.model.find();
    const stack = stackDb[0].list.stack;
    if (stack.length > 0) {
      return res.status(200).json({ message: 'false' })
    }
    res.status(200).json({ message: 'true' })
  }

}