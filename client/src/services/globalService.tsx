const globalService = {
  hof(callback: (...args: any[]) => any) {
    return callback
  }
}


export default globalService
