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

import {
    UpdateRegistrationFlowWithOidcMethod,
    instanceOfUpdateRegistrationFlowWithOidcMethod,
    UpdateRegistrationFlowWithOidcMethodFromJSON,
    UpdateRegistrationFlowWithOidcMethodFromJSONTyped,
    UpdateRegistrationFlowWithOidcMethodToJSON,
} from './UpdateRegistrationFlowWithOidcMethod';
import {
    UpdateRegistrationFlowWithPasswordMethod,
    instanceOfUpdateRegistrationFlowWithPasswordMethod,
    UpdateRegistrationFlowWithPasswordMethodFromJSON,
    UpdateRegistrationFlowWithPasswordMethodFromJSONTyped,
    UpdateRegistrationFlowWithPasswordMethodToJSON,
} from './UpdateRegistrationFlowWithPasswordMethod';
import {
    UpdateRegistrationFlowWithWebAuthnMethod,
    instanceOfUpdateRegistrationFlowWithWebAuthnMethod,
    UpdateRegistrationFlowWithWebAuthnMethodFromJSON,
    UpdateRegistrationFlowWithWebAuthnMethodFromJSONTyped,
    UpdateRegistrationFlowWithWebAuthnMethodToJSON,
} from './UpdateRegistrationFlowWithWebAuthnMethod';

/**
 * @type UpdateRegistrationFlowBody
 * Update Registration Request Body
 * @export
 */
export type UpdateRegistrationFlowBody = { method: 'oidc' } & UpdateRegistrationFlowWithOidcMethod | { method: 'password' } & UpdateRegistrationFlowWithPasswordMethod | { method: 'webauthn' } & UpdateRegistrationFlowWithWebAuthnMethod;

export function UpdateRegistrationFlowBodyFromJSON(json: any): UpdateRegistrationFlowBody {
    return UpdateRegistrationFlowBodyFromJSONTyped(json, false);
}

export function UpdateRegistrationFlowBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRegistrationFlowBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['method']) {
        case 'oidc':
            return {...UpdateRegistrationFlowWithOidcMethodFromJSONTyped(json, true), method: 'oidc'};
        case 'password':
            return {...UpdateRegistrationFlowWithPasswordMethodFromJSONTyped(json, true), method: 'password'};
        case 'webauthn':
            return {...UpdateRegistrationFlowWithWebAuthnMethodFromJSONTyped(json, true), method: 'webauthn'};
        default:
            throw new Error(`No variant of UpdateRegistrationFlowBody exists with 'method=${json['method']}'`);
    }
}

export function UpdateRegistrationFlowBodyToJSON(value?: UpdateRegistrationFlowBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['method']) {
        case 'oidc':
            return UpdateRegistrationFlowWithOidcMethodToJSON(value);
        case 'password':
            return UpdateRegistrationFlowWithPasswordMethodToJSON(value);
        case 'webauthn':
            return UpdateRegistrationFlowWithWebAuthnMethodToJSON(value);
        default:
            throw new Error(`No variant of UpdateRegistrationFlowBody exists with 'method=${value['method']}'`);
    }

}
