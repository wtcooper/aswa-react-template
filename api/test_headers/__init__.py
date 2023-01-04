import logging
import os

import azure.functions as func
import base64

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    client_principal = req.headers.get('X-MS-CLIENT-PRINCIPAL')
    client_principal = base64.b64decode(client_principal)

    test_env = os.environ['TEST_ENV']


    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if not name:
        name = 'Noname'

    return func.HttpResponse(
            f"Hello, {name}. " \
            f"\nOS test env: {test_env} " \
            f"\nThis is your X-MS-CLIENT-PRINCIPAL: {client_principal}"
        )
