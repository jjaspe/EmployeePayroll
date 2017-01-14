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
        static string serverConnectionString = ConfigurationManager.ConnectionStrings[Constants.mongoServerKey].ConnectionString;
        static string databaseName = ConfigurationManager.AppSettings[
            Constants.mongoDbNameKey];
        public static IMongoDatabase getMongoDB()
        {
            MongoClient client = new MongoClient(serverConnectionString);
            return client.GetDatabase(databaseName);
        }
    }
}
