import logging
import json
import azure.functions as func

def run(msg_dict):

    pass


def main(req: func.HttpRequest) -> func.HttpResponse:

    logging.info('Python HTTP trigger function processed a request.')

    method = req.method

    if method == 'POST':
        pass
    elif method == 'GET':
        pass
    elif method == 'PUT':
        pass
    elif method == 'DELETE':
        pass


    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(json.dumps({"text": f"Hello, {name}"}))
    else:
        return func.HttpResponse(
             json.dumps({"text": "Test output"}),
             status_code=200
        )
