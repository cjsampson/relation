import adapter from './adapter'

export default class Builder {
  constructor(options) {
    this.options = options
  }

  limit(limit) {
    this.options.limit = limit
    return this
  }

  select(...select) {
    this.options.select = select
    return this
  }

  where(where) {
    this.options.where = where
    return this
  }

  limit(limit) {
    this.options.limit = limit
    return this
  }


  first() {
    this.options.limit = 1
    return this.get()
  }

  get() {
    return adapter.select(this.options)
  }
}