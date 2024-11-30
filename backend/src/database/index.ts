import sequelize from 'sequelize';
import { Sequelize } from 'sequelize';

const databaseConnect = new Sequelize({
    dialect: 'postgres',
    username: "postgres",
    password: "redlliw9758",
    host: '127.0.0.1',
    database: "pagamentos"
})

const TesteConnection = async () => {
    try {
        await databaseConnect.authenticate();
        console.log("Conexão realizada com sucesso");
    } catch (error) {
        console.log(`Falha na conexão: ${error}`);
        
    }
}

export default TesteConnection;