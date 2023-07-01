class AppConfig {
    public helpPage = "http://northwind.com/help";
    public salesEmail = "sales@northwind.com";
}


class DevelopmentConfig extends AppConfig {
    public isDevelopment = true
    public isProduction = false
    public host = "localhost";
    public user = "root";
    public password = "";
    public database = "vacations";
    public port = 3001;
    public frontEndUrl = "http://localhost:3000";
}

class ProductionConfig extends AppConfig {
    public isDevelopment = false
    public isProduction = true
    public host = "";
    public user = "";
    public password = "";
    public database = "";
    public port = 0;
    public frontEndUrl = "http://nortwind.com";
}

const appConfig = process.env.NODE_ENV === "production" ? new ProductionConfig() :new DevelopmentConfig()



export default appConfig;