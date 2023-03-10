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
 * Update Login Flow with OpenID Connect Method
 * @export
 * @interface UpdateLoginFlowWithOidcMethod
 */
export interface UpdateLoginFlowWithOidcMethod {
    /**
     * The CSRF Token
     * @type {string}
     * @memberof UpdateLoginFlowWithOidcMethod
     */
    csrf_token?: string;
    /**
     * Method to use
     * 
     * This field must be set to `oidc` when using the oidc method.
     * @type {string}
     * @memberof UpdateLoginFlowWithOidcMethod
     */
    method: string;
    /**
     * The provider to register with
     * @type {string}
     * @memberof UpdateLoginFlowWithOidcMethod
     */
    provider: string;
    /**
     * The identity traits. This is a placeholder for the registration flow.
     * @type {object}
     * @memberof UpdateLoginFlowWithOidcMethod
     */
    traits?: object;
}

/**
 * Check if a given object implements the UpdateLoginFlowWithOidcMethod interface.
 */
export function instanceOfUpdateLoginFlowWithOidcMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "method" in value;
    isInstance = isInstance && "provider" in value;

    return isInstance;
}

export function UpdateLoginFlowWithOidcMethodFromJSON(json: any): UpdateLoginFlowWithOidcMethod {
    return UpdateLoginFlowWithOidcMethodFromJSONTyped(json, false);
}

export function UpdateLoginFlowWithOidcMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLoginFlowWithOidcMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'csrf_token': !exists(json, 'csrf_token') ? undefined : json['csrf_token'],
        'method': json['method'],
        'provider': json['provider'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
    };
}

export function UpdateLoginFlowWithOidcMethodToJSON(value?: UpdateLoginFlowWithOidcMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'csrf_token': value.csrf_token,
        'method': value.method,
        'provider': value.provider,
        'traits': value.traits,
    };
}

