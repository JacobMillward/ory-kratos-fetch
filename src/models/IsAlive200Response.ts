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
 * @interface IsAlive200Response
 */
export interface IsAlive200Response {
    /**
     * Always "ok".
     * @type {string}
     * @memberof IsAlive200Response
     */
    status: string;
}

/**
 * Check if a given object implements the IsAlive200Response interface.
 */
export function instanceOfIsAlive200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function IsAlive200ResponseFromJSON(json: any): IsAlive200Response {
    return IsAlive200ResponseFromJSONTyped(json, false);
}

export function IsAlive200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsAlive200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
    };
}

export function IsAlive200ResponseToJSON(value?: IsAlive200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}

