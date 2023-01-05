import azure.functions as func
import logging
import json
import os
import base64
from pymongo import MongoClient

# sys.path.append(
#     os.path.abspath(os.path.join(os.path.dirname(__file__), os.path.pardir)))

def get_user_data(collection, client_principal):
    userId = client_principal['userId']
    user = collection.find_one({"userId": userId})

    if user is not None:
        logging.info(f"User exists")
        return user['data']
    else:
        logging.info(f"New user, creating")
        client_principal['data'] = {}  # empty dict for data to go into
        collection.insert_one(client_principal)
        return client_principal['data']




def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:

    #####################################
    # Function properties
    #####################################

    function_directory = context.function_directory
    function_name = context.function_name
    logging.info(f"\n\n{'=' * 20} Starting {function_name} in {function_directory} {'=' * 20}")

    #####################################
    # Headers
    #####################################

    # for k, v in req.headers.items():
    #     logging.info(f"{k} : {v}")

    #####################################
    # Method
    #####################################

    method = req.method
    logging.info(f"request method: {method}")

    #####################################
    # REST body and parameters
    #####################################

    # # get the message body
    # msg_params = req.params
    # logging.info(f"parameters: {msg_params}")

    # # get the message body if json
    # msg_json = req.get_json()
    # logging.info(f"body: {msg_json}")
    #
    # # get the message body if binary
    # msg_body = req.get_body()
    # logging.info(f"body: {msg_body}")

    #####################################
    # environment variables
    #####################################

    conn_string = os.environ['COSMOS_CONN_STRING']

    #####################################
    # Run core logic
    #####################################

    try:

        #####################################
        # Get the User detials
        #####################################
        client_principal = req.headers.get('X-MS-CLIENT-PRINCIPAL')
        client_principal = json.loads(base64.b64decode(client_principal).decode())
        logging.info('client_principal:')
        logging.info(client_principal)

        # Connect to the DB
        DB_NAME = 'sagesnips-dev'
        COLLECTION_NAME = 'users'
        client = MongoClient(conn_string)
        db = client[DB_NAME]
        collection = db[COLLECTION_NAME]

        user = get_user_data(collection, client_principal)

        return func.HttpResponse(json.dumps(user), status_code=200)

    except Exception as e:
        logging.error(f'Error - failed {function_name} in main - {e}')
        return func.HttpResponse(f'Error: {e}', status_code=400)


if __name__ == '__main__':

    ##############################################
    # For local testing only
    ##############################################

    # Opening JSON file
    f = open('api/local.settings.json')

    # returns JSON object as
    # a dictionary
    data = json.load(f)
    client_principal = {'userId': 'b3a748c668ef69529c2ffc6838947df2', 'userRoles': ['anonymous', 'authenticated'], 'identityProvider': 'aadb2c', 'userDetails': 'wcooper'}
    conn_string = data['Values']['COSMOS_CONN_STRING']

    try:
        # Connect to the DB
        DB_NAME = 'sagesnips-dev'
        COLLECTION_NAME = 'users'
        client = MongoClient(conn_string)
        db = client[DB_NAME]
        collection = db[COLLECTION_NAME]

        user = get_user_data(collection, client_principal)
        print(f"user {user}")

    except Exception as e:
        print(f'Error - failed in main - {e}')
