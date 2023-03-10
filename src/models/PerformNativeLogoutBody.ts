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
 * nolint:deadcode,unused
 * @export
 * @interface PerformNativeLogoutBody
 */
export interface PerformNativeLogoutBody {
    /**
     * The Session Token
     * 
     * Invalidate this session token.
     * @type {string}
     * @memberof PerformNativeLogoutBody
     */
    session_token: string;
}

/**
 * Check if a given object implements the PerformNativeLogoutBody interface.
 */
export function instanceOfPerformNativeLogoutBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "session_token" in value;

    return isInstance;
}

export function PerformNativeLogoutBodyFromJSON(json: any): PerformNativeLogoutBody {
    return PerformNativeLogoutBodyFromJSONTyped(json, false);
}

export function PerformNativeLogoutBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PerformNativeLogoutBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'session_token': json['session_token'],
    };
}

export function PerformNativeLogoutBodyToJSON(value?: PerformNativeLogoutBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'session_token': value.session_token,
    };
}

