import pymongo
import json
from api.utils.utils import get_mongo_client
from bson.objectid import ObjectId

# Opening JSON file
f = open('api/local.settings.json')

# returns JSON object as
# a dictionary
data = json.load(f)


#####################################################################
# From:
# https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/quickstart-python?tabs=azure-portal%2Cvenv-linux%2Clinux
# https://github.com/Azure-Samples/azure-cosmos-db-mongodb-python-getting-started
#####################################################################

DB_NAME = 'sagesnips-dev'
CONNECTION_STRING = data['Values']['COSMOS_CONN_STRING']
COLLECTION_NAME = 'users'

client = pymongo.MongoClient(CONNECTION_STRING)


#########################
# Get database
#########################
# Check if the database exists with list_database_names method. If the database doesn't exist, use the create database extension command to create it with a specified provisioned throughput.
# Create database if it doesn't exist
db = client[DB_NAME]
if DB_NAME not in client.list_database_names():
    # Create a database with 400 RU throughput that can be shared across
    # the DB's collections
    # db.command({"customAction": "CreateDatabase", "offerThroughput": 400})
    db.command({"customAction": "CreateDatabase"})
    print("Created db '{}' with shared throughput.\n".format(DB_NAME))
else:
    print("Using database: '{}'.\n".format(DB_NAME))


#########################
# Get collection
#########################
# Check if the collection exists with the list_collection_names method. If the collection doesn't exist, use the create collection extension command to create it.
# Create collection if it doesn't exist
collection = db[COLLECTION_NAME]
if COLLECTION_NAME not in db.list_collection_names():
    # Creates a unsharded collection that uses the DBs shared throughput
    db.command(
        {"customAction": "CreateCollection", "collection": COLLECTION_NAME}
    )
    print("Created collection '{}'.\n".format(COLLECTION_NAME))
else:
    print("Using collection: '{}'.\n".format(COLLECTION_NAME))


#########################
# Create an index
#########################
# Create an index using the update collection extension command. You can also set the index in the create collection
# extension command. Set the index to name property in this example so that you can later sort with the
# cursor class sort method on product name.
indexes = [
    {"key": {"_id": 1}, "name": "_id_1"},
    {"key": {"userID": 2}, "name": "_id_2"},
]
db.command(
    {
        "customAction": "UpdateCollection",
        "collection": COLLECTION_NAME,
        "indexes": indexes,
    }
)
print("Indexes are: {}\n".format(sorted(collection.index_information())))


# #########################
# # Create a document
# #########################
# """Create new document and upsert (create or replace) to collection"""
# product = {
#     "category": "gear-surf-surfboards",
#     "name": "Yamba Surfboard-{}".format(randint(50, 5000)),
#     "quantity": 1,
#     "sale": False,
# }
# result = collection.update_one(
#     {"name": product["name"]}, {"$set": product}, upsert=True
# )
# print("Upserted document with _id {}\n".format(result.upserted_id))


# #########################
# # Get a document
# #########################
# # Use the find_one method to get a document.
# doc = collection.find_one({"_id": result.upserted_id})
# print("Found a document with _id {}: {}\n".format(result.upserted_id, doc))


#########################
# Query documents
#########################
# After you insert a doc, you can run a query to get all docs that match a specific filter. This example finds all docs that match a specific category: gear-surf-surfboards. Once the query is defined, call Collection.find to get a Cursor result, and then use sort.
"""Query for documents in the collection"""
print("Products with category 'gear-surf-surfboards':\n")
allProductsQuery = {"category": "gear-surf-surfboards"}
for doc in collection.find(allProductsQuery).sort(
    "name", pymongo.ASCENDING
):
    print("Found a product with _id {}: {}\n".format(doc["_id"], doc))



#########################
# Delete documents
#########################

myquery = {'_id': ObjectId("63b639ea993ebb66792441a7")}
collection.delete_one(myquery)