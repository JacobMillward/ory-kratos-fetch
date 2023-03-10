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
 * Create Identity and Import Password Credentials Configuration
 * @export
 * @interface IdentityWithCredentialsPasswordConfig
 */
export interface IdentityWithCredentialsPasswordConfig {
    /**
     * The hashed password in [PHC format]( https://www.ory.sh/docs/kratos/concepts/credentials/username-email-password#hashed-password-format)
     * @type {string}
     * @memberof IdentityWithCredentialsPasswordConfig
     */
    hashed_password?: string;
    /**
     * The password in plain text if no hash is available.
     * @type {string}
     * @memberof IdentityWithCredentialsPasswordConfig
     */
    password?: string;
}

/**
 * Check if a given object implements the IdentityWithCredentialsPasswordConfig interface.
 */
export function instanceOfIdentityWithCredentialsPasswordConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdentityWithCredentialsPasswordConfigFromJSON(json: any): IdentityWithCredentialsPasswordConfig {
    return IdentityWithCredentialsPasswordConfigFromJSONTyped(json, false);
}

export function IdentityWithCredentialsPasswordConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityWithCredentialsPasswordConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hashed_password': !exists(json, 'hashed_password') ? undefined : json['hashed_password'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function IdentityWithCredentialsPasswordConfigToJSON(value?: IdentityWithCredentialsPasswordConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hashed_password': value.hashed_password,
        'password': value.password,
    };
}

