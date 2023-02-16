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
import type { Identity } from './Identity';
import {
    IdentityFromJSON,
    IdentityFromJSONTyped,
    IdentityToJSON,
} from './Identity';
import type { SessionAuthenticationMethod } from './SessionAuthenticationMethod';
import {
    SessionAuthenticationMethodFromJSON,
    SessionAuthenticationMethodFromJSONTyped,
    SessionAuthenticationMethodToJSON,
} from './SessionAuthenticationMethod';
import type { SessionDevice } from './SessionDevice';
import {
    SessionDeviceFromJSON,
    SessionDeviceFromJSONTyped,
    SessionDeviceToJSON,
} from './SessionDevice';

/**
 * A Session
 * @export
 * @interface Session
 */
export interface Session {
    /**
     * Active state. If false the session is no longer active.
     * @type {boolean}
     * @memberof Session
     */
    active?: boolean;
    /**
     * The Session Authentication Timestamp
     * 
     * When this session was authenticated at. If multi-factor authentication was used this
     * is the time when the last factor was authenticated (e.g. the TOTP code challenge was completed).
     * @type {Date}
     * @memberof Session
     */
    authenticated_at?: Date;
    /**
     * A list of authenticators which were used to authenticate the session.
     * @type {Array<SessionAuthenticationMethod>}
     * @memberof Session
     */
    authentication_methods?: Array<SessionAuthenticationMethod>;
    /**
     * 
     * @type {AuthenticatorAssuranceLevel}
     * @memberof Session
     */
    authenticator_assurance_level?: AuthenticatorAssuranceLevel;
    /**
     * Devices has history of all endpoints where the session was used
     * @type {Array<SessionDevice>}
     * @memberof Session
     */
    devices?: Array<SessionDevice>;
    /**
     * The Session Expiry
     * 
     * When this session expires at.
     * @type {Date}
     * @memberof Session
     */
    expires_at?: Date;
    /**
     * Session ID
     * @type {string}
     * @memberof Session
     */
    id: string;
    /**
     * 
     * @type {Identity}
     * @memberof Session
     */
    identity: Identity;
    /**
     * The Session Issuance Timestamp
     * 
     * When this session was issued at. Usually equal or close to `authenticated_at`.
     * @type {Date}
     * @memberof Session
     */
    issued_at?: Date;
}

/**
 * Check if a given object implements the Session interface.
 */
export function instanceOfSession(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "identity" in value;

    return isInstance;
}

export function SessionFromJSON(json: any): Session {
    return SessionFromJSONTyped(json, false);
}

export function SessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Session {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'authenticated_at': !exists(json, 'authenticated_at') ? undefined : (new Date(json['authenticated_at'])),
        'authentication_methods': !exists(json, 'authentication_methods') ? undefined : ((json['authentication_methods'] as Array<any>).map(SessionAuthenticationMethodFromJSON)),
        'authenticator_assurance_level': !exists(json, 'authenticator_assurance_level') ? undefined : AuthenticatorAssuranceLevelFromJSON(json['authenticator_assurance_level']),
        'devices': !exists(json, 'devices') ? undefined : ((json['devices'] as Array<any>).map(SessionDeviceFromJSON)),
        'expires_at': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
        'id': json['id'],
        'identity': IdentityFromJSON(json['identity']),
        'issued_at': !exists(json, 'issued_at') ? undefined : (new Date(json['issued_at'])),
    };
}

export function SessionToJSON(value?: Session | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'authenticated_at': value.authenticated_at === undefined ? undefined : (value.authenticated_at.toISOString()),
        'authentication_methods': value.authentication_methods === undefined ? undefined : ((value.authentication_methods as Array<any>).map(SessionAuthenticationMethodToJSON)),
        'authenticator_assurance_level': AuthenticatorAssuranceLevelToJSON(value.authenticator_assurance_level),
        'devices': value.devices === undefined ? undefined : ((value.devices as Array<any>).map(SessionDeviceToJSON)),
        'expires_at': value.expires_at === undefined ? undefined : (value.expires_at.toISOString()),
        'id': value.id,
        'identity': IdentityToJSON(value.identity),
        'issued_at': value.issued_at === undefined ? undefined : (value.issued_at.toISOString()),
    };
}

