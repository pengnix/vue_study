export default{
  aUpdateInfo(context, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        context.commit('changeInfo')
        console.log(payload)
        resolve('success')
      }, 2000)
    })
  }
}
