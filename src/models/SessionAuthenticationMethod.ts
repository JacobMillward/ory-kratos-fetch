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
import type { AuthenticatorAssuranceLevel } from './AuthenticatorAssuranceLevel';
import {
    AuthenticatorAssuranceLevelFromJSON,
    AuthenticatorAssuranceLevelFromJSONTyped,
    AuthenticatorAssuranceLevelToJSON,
} from './AuthenticatorAssuranceLevel';

/**
 * A singular authenticator used during authentication / login.
 * @export
 * @interface SessionAuthenticationMethod
 */
export interface SessionAuthenticationMethod {
    /**
     * 
     * @type {AuthenticatorAssuranceLevel}
     * @memberof SessionAuthenticationMethod
     */
    aal?: AuthenticatorAssuranceLevel;
    /**
     * When the authentication challenge was completed.
     * @type {Date}
     * @memberof SessionAuthenticationMethod
     */
    completed_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof SessionAuthenticationMethod
     */
    method?: SessionAuthenticationMethodMethodEnum;
}


/**
 * @export
 */
export const SessionAuthenticationMethodMethodEnum = {
    LinkRecovery: 'link_recovery',
    CodeRecovery: 'code_recovery',
    Password: 'password',
    Totp: 'totp',
    Oidc: 'oidc',
    Webauthn: 'webauthn',
    LookupSecret: 'lookup_secret',
    V06LegacySession: 'v0.6_legacy_session'
} as const;
export type SessionAuthenticationMethodMethodEnum = typeof SessionAuthenticationMethodMethodEnum[keyof typeof SessionAuthenticationMethodMethodEnum];


/**
 * Check if a given object implements the SessionAuthenticationMethod interface.
 */
export function instanceOfSessionAuthenticationMethod(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SessionAuthenticationMethodFromJSON(json: any): SessionAuthenticationMethod {
    return SessionAuthenticationMethodFromJSONTyped(json, false);
}

export function SessionAuthenticationMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionAuthenticationMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aal': !exists(json, 'aal') ? undefined : AuthenticatorAssuranceLevelFromJSON(json['aal']),
        'completed_at': !exists(json, 'completed_at') ? undefined : (new Date(json['completed_at'])),
        'method': !exists(json, 'method') ? undefined : json['method'],
    };
}

export function SessionAuthenticationMethodToJSON(value?: SessionAuthenticationMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aal': AuthenticatorAssuranceLevelToJSON(value.aal),
        'completed_at': value.completed_at === undefined ? undefined : (value.completed_at.toISOString()),
        'method': value.method,
    };
}

