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
import type { IdentityWithCredentialsOidcConfigProvider } from './IdentityWithCredentialsOidcConfigProvider';
import {
    IdentityWithCredentialsOidcConfigProviderFromJSON,
    IdentityWithCredentialsOidcConfigProviderFromJSONTyped,
    IdentityWithCredentialsOidcConfigProviderToJSON,
} from './IdentityWithCredentialsOidcConfigProvider';
import type { IdentityWithCredentialsPasswordConfig } from './IdentityWithCredentialsPasswordConfig';
import {
    IdentityWithCredentialsPasswordConfigFromJSON,
    IdentityWithCredentialsPasswordConfigFromJSONTyped,
    IdentityWithCredentialsPasswordConfigToJSON,
} from './IdentityWithCredentialsPasswordConfig';

/**
 * 
 * @export
 * @interface IdentityWithCredentialsOidcConfig
 */
export interface IdentityWithCredentialsOidcConfig {
    /**
     * 
     * @type {IdentityWithCredentialsPasswordConfig}
     * @memberof IdentityWithCredentialsOidcConfig
     */
    config?: IdentityWithCredentialsPasswordConfig;
    /**
     * A list of OpenID Connect Providers
     * @type {Array<IdentityWithCredentialsOidcConfigProvider>}
     * @memberof IdentityWithCredentialsOidcConfig
     */
    providers?: Array<IdentityWithCredentialsOidcConfigProvider>;
}

/**
 * Check if a given object implements the IdentityWithCredentialsOidcConfig interface.
 */
export function instanceOfIdentityWithCredentialsOidcConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdentityWithCredentialsOidcConfigFromJSON(json: any): IdentityWithCredentialsOidcConfig {
    return IdentityWithCredentialsOidcConfigFromJSONTyped(json, false);
}

export function IdentityWithCredentialsOidcConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityWithCredentialsOidcConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : IdentityWithCredentialsPasswordConfigFromJSON(json['config']),
        'providers': !exists(json, 'providers') ? undefined : ((json['providers'] as Array<any>).map(IdentityWithCredentialsOidcConfigProviderFromJSON)),
    };
}

export function IdentityWithCredentialsOidcConfigToJSON(value?: IdentityWithCredentialsOidcConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': IdentityWithCredentialsPasswordConfigToJSON(value.config),
        'providers': value.providers === undefined ? undefined : ((value.providers as Array<any>).map(IdentityWithCredentialsOidcConfigProviderToJSON)),
    };
}

