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
 * 
 * @export
 * @interface IsReady503Response
 */
export interface IsReady503Response {
    /**
     * Errors contains a list of errors that caused the not ready status.
     * @type {{ [key: string]: string; }}
     * @memberof IsReady503Response
     */
    errors: { [key: string]: string; };
}

/**
 * Check if a given object implements the IsReady503Response interface.
 */
export function instanceOfIsReady503Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;

    return isInstance;
}

export function IsReady503ResponseFromJSON(json: any): IsReady503Response {
    return IsReady503ResponseFromJSONTyped(json, false);
}

export function IsReady503ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsReady503Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': json['errors'],
    };
}

export function IsReady503ResponseToJSON(value?: IsReady503Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors,
    };
}

