export const zipCodeChange = (text) => {
  console.log("text", text)
  return {
    type: 'CHANGE_ZIPCODE',
    payload: text
  }
}