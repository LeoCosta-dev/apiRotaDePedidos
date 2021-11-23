const customExpress = require("./config/customExpress");
const app = customExpress();
const PORT = process.env.PORT || 3000;
require("./infra/conexao");


app.listen(PORT, () => {
    console.log(`Servido rodadando na porta ${PORT}.`)
})
