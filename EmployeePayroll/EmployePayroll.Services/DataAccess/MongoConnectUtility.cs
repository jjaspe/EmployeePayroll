using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB;

namespace EmployePayroll.Services.DataAccess
{
    public class MongoConnectUtility
    {
        static string serverConnectionString = getCorrectMongoDbEnvironment();
        static string databaseName = ConfigurationManager.AppSettings[
            Constants.mongoDbNameKey];

        static string getCorrectMongoDbEnvironment()
        {
            string isLocal = ConfigurationManager.AppSettings[
            Constants.runLocalKey];
            bool local = true;
            bool result = bool.TryParse(isLocal, out local);
            string dbConnectionString = local ? 
                ConfigurationManager.ConnectionStrings[Constants.mongoLocalDbConnectionKey].ConnectionString :
                ConfigurationManager.ConnectionStrings[Constants.mongoRemoteDbConnectionKey].ConnectionString;
            return dbConnectionString;
        }
        public static IMongoDatabase getMongoDB()
        {
            MongoClient client = new MongoClient(serverConnectionString);
            return client.GetDatabase(databaseName);
        }
    }
}
