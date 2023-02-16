/* tslint:disable */
/* eslint-disable */
/**
 * Ory Identities API
 * This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more. 
 *
 * The version of the OpenAPI document: v0.11.1
 * Contact: office@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Update Recovery Flow with Code Method
 * @export
 * @interface UpdateRecoveryFlowWithCodeMethod
 */
export interface UpdateRecoveryFlowWithCodeMethod {
    /**
     * Code from recovery email
     * 
     * Sent to the user once a recovery has been initiated and is used to prove
     * that the user is in possession of the email
     * @type {string}
     * @memberof UpdateRecoveryFlowWithCodeMethod
     */
    code?: string;
    /**
     * Sending the anti-csrf token is only required for browser login flows.
     * @type {string}
     * @memberof UpdateRecoveryFlowWithCodeMethod
     */
    csrf_token?: string;
    /**
     * Email to Recover
     * 
     * Needs to be set when initiating the flow. If the email is a registered
     * recovery email, a recovery link will be sent. If the email is not known,
     * a email with details on what happened will be sent instead.
     * 
     * format: email
     * @type {string}
     * @memberof UpdateRecoveryFlowWithCodeMethod
     */
    email?: string;
    /**
     * Method supports `link` and `code` only right now.
     * @type {string}
     * @memberof UpdateRecoveryFlowWithCodeMethod
     */
    method: string;
}

/**
 * Check if a given object implements the UpdateRecoveryFlowWithCodeMethod interface.
 */
export function instanceOfUpdateRecoveryFlowWithCodeMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "method" in value;

    return isInstance;
}

export function UpdateRecoveryFlowWithCodeMethodFromJSON(json: any): UpdateRecoveryFlowWithCodeMethod {
    return UpdateRecoveryFlowWithCodeMethodFromJSONTyped(json, false);
}

export function UpdateRecoveryFlowWithCodeMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRecoveryFlowWithCodeMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'csrf_token': !exists(json, 'csrf_token') ? undefined : json['csrf_token'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'method': json['method'],
    };
}

export function UpdateRecoveryFlowWithCodeMethodToJSON(value?: UpdateRecoveryFlowWithCodeMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'csrf_token': value.csrf_token,
        'email': value.email,
        'method': value.method,
    };
}
