function emailVerfiTemplate(token) {
  return `<div><img style="width:100px" src="https://i.ibb.co/ZL20JXH/Logo.png" alt=""><div><p>Please verify your mail. Your token number is <span style="background:#ddd; font-size:25px;">${token}</span></p><button style="background-color:#262626;color:#fff;padding:10px 20px;border-radius:10px;cursor:pointer">Click me</button></div></div>`;
}
module.exports = emailVerfiTemplate;
