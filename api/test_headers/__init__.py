import logging
import os
import json
import azure.functions as func
import base64
from pymongo import MongoClient


def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:

    function_directory = context.function_directory
    function_name = context.function_name

    logging.info('Python HTTP trigger function processed a request.')

    client_principal = req.headers.get('X-MS-CLIENT-PRINCIPAL')
    client_principal = json.loads(base64.b64decode(client_principal).decode())
    userID = client_principal['userId']
    userDetails = client_principal['userDetails']
    userRoles = client_principal['userRoles']

    logging.info(f"userID: {userID}")
    logging.info(f"userDetails: {userDetails}")
    logging.info(f"userRoles: {userRoles}")


    conn_string = os.environ['COSMOS_CONN_STRING']

    DB_NAME = 'sagesnips-dev'
    COLLECTION_NAME = 'users'

    try:
        # get the message body
        msg_params = req.params
        logging.info(f"\nparameters: {msg_params}")
        # name = msg_params['name']
        name = 'fred'


        # get the message body if json
        msg_json = req.get_json()
        logging.info(f"body: {msg_json}")

        client = MongoClient(conn_string)
        db = client[DB_NAME]
        collection = db[COLLECTION_NAME]

        logging.info(f"client connected: {db.list_collection_names()}")
        print()

        # todo - build out offline:
        #  https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/quickstart-python?tabs=azure-portal%2Cvenv-linux%2Clinux

        # users_collection = mongo_db['vendors']
        # users_collection.insert_one(client_principal)

        return func.HttpResponse(
                f"Hello, {name}. " \
                f"\nThis is your X-MS-CLIENT-PRINCIPAL: {client_principal}"
            )

    except Exception as e:
        logging.error(f'Error - failed {function_name} in main - {e}')
        return func.HttpResponse(f'Error: {e}', status_code=400)
