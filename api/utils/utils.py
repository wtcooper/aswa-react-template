from pymongo import MongoClient


def get_mongo_client(conn_string):
    client = MongoClient(conn_string, tls=True, tlsAllowInvalidCertificates=True)
    return client
