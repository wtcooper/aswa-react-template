import logging
import json
import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

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
