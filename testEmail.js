const emails = ["teste@gmail.com", "teste@hotmail.com", "teste@outlook.com", "teste@sapo.com", "teste@globo.com"]
const domains = ["gmail", "hotmail", "outlook"]
const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const checkEmail = (email) => {
  if (regex.test(email)) {
    const splited = email.split("@")[1].split(".")[0]
    return domains.indexOf(splited) !== -1 ? "Email válido" : "Email inválido"
  }

}

emails.forEach(email => {
  checkEmail(email)
})

