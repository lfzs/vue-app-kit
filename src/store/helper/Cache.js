const isRequired = () => {
  throw new Error('id is required')
}

export default class {
  static caches = Object.create(null)

  static findOrCreate(id = isRequired()) {
    this._id = this._id || Math.random().toString(36).slice(2) // 向构造函数添加 _id 标志

    const key = `${this._id}_${id}`
    let value = this.caches[key]

    if (!value) {
      value = new this(id)
      value.id = id
      this.caches[key] = value
    }

    return this.caches[key]
  }

  static remove(id) {
    if (this._id && id) {
      const key = `${this._id}_${id}`
      const value = this.caches[key]
      value && delete this.caches[key]
    }
  }
}
