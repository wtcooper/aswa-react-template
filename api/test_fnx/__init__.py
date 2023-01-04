import azure.functions as func
import logging
import os
import json


def run_all(msg_dict):
    logging.info(f"In run_all, msg_dict: {msg_dict}")
    return {"status": "success"}


def validate_data_pack(msg_dict):
    """
    Validates the data_pack to ensure calculations will run correctly
    :param msg_dict:
    :return:
    """
    message = 'valid'
    valid = True

    # TODO - add in message validations here
    if 'param1' not in msg_dict:
        message = f"`param1` must be in message"
        valid = False
    if 'param2' not in msg_dict:
        message = f"`param2` must be in message"
        valid = False

    # throw error if invalid
    if not valid:
        logging.info("data validation FAILED")
        print("data validation FAILED")
        raise ValueError(message)
    else:
        logging.info("data validation PASSED")
        print("data validation PASSED")


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

    for k, v in req.headers.items():
        logging.info(f"{k} : {v}")

    #####################################
    # Method
    #####################################

    method = req.method

    if method == 'POST':
        pass
    elif method == 'GET':
        pass
    elif method == 'PUT':
        pass
    elif method == 'DELETE':
        pass

    #####################################
    # REST body and parameters
    #####################################

    # get the message body
    msg_params = req.params
    logging.info(f"parameters: {msg_params}")

    # # get the message body if json
    # msg_json = req.get_json()
    # logging.info(f"body: {msg_json}")
    #
    # # get the message body if binary
    # msg_body = req.get_body()
    # logging.info(f"body: {msg_body}")

    #####################################
    # environment variables
    # set in portal: Configuration > Application settings
    #####################################

    # TODO - add any needed env variates in the Portal (connection strings from KeyVault, feature flags, etc)
    test = os.environ['FUNCTIONS_WORKER_RUNTIME']
    logging.info(f"test env variables (FUNCTIONS_WORKER_RUNTIME): {test}")

    try:
        validate_data_pack(msg_params)
        return_msg = run_all(msg_params)
        logging.error(f'return_msg: {return_msg}')

        return func.HttpResponse(json.dumps(return_msg), status_code=200)

    except Exception as e:
        logging.error(f'Error - failed {function_name} in main - {e}')
        return func.HttpResponse(f'Error: {e}', status_code=400)


if __name__ == '__main__':

    ##############################################
    # For local testing only
    ##############################################

    msg_params = dict(
        param1='test1',
        param2='test2'
    )

    function_directory = f"{os.getcwd()}"

    try:
        validate_data_pack(msg_params)
        return_msg = run_all(msg_params)
        print(f"return message {return_msg}")

    except Exception as e:
        print(f'Error - failed in main - {e}')
