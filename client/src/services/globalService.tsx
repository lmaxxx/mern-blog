const globalService = {
  hof(callback: (...rest: any) => any) {
    return callback
  }
}

export default globalService
