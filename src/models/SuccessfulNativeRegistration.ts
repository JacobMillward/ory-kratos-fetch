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
import type { Identity } from './Identity';
import {
    IdentityFromJSON,
    IdentityFromJSONTyped,
    IdentityToJSON,
} from './Identity';
import type { Session } from './Session';
import {
    SessionFromJSON,
    SessionFromJSONTyped,
    SessionToJSON,
} from './Session';

/**
 * The Response for Registration Flows via API
 * @export
 * @interface SuccessfulNativeRegistration
 */
export interface SuccessfulNativeRegistration {
    /**
     * 
     * @type {Identity}
     * @memberof SuccessfulNativeRegistration
     */
    identity: Identity;
    /**
     * 
     * @type {Session}
     * @memberof SuccessfulNativeRegistration
     */
    session?: Session;
    /**
     * The Session Token
     * 
     * This field is only set when the session hook is configured as a post-registration hook.
     * 
     * A session token is equivalent to a session cookie, but it can be sent in the HTTP Authorization
     * Header:
     * 
     * Authorization: bearer ${session-token}
     * 
     * The session token is only issued for API flows, not for Browser flows!
     * @type {string}
     * @memberof SuccessfulNativeRegistration
     */
    session_token?: string;
}

/**
 * Check if a given object implements the SuccessfulNativeRegistration interface.
 */
export function instanceOfSuccessfulNativeRegistration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "identity" in value;

    return isInstance;
}

export function SuccessfulNativeRegistrationFromJSON(json: any): SuccessfulNativeRegistration {
    return SuccessfulNativeRegistrationFromJSONTyped(json, false);
}

export function SuccessfulNativeRegistrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuccessfulNativeRegistration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identity': IdentityFromJSON(json['identity']),
        'session': !exists(json, 'session') ? undefined : SessionFromJSON(json['session']),
        'session_token': !exists(json, 'session_token') ? undefined : json['session_token'],
    };
}

export function SuccessfulNativeRegistrationToJSON(value?: SuccessfulNativeRegistration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identity': IdentityToJSON(value.identity),
        'session': SessionToJSON(value.session),
        'session_token': value.session_token,
    };
}

