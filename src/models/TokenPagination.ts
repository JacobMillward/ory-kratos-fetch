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
 * @interface TokenPagination
 */
export interface TokenPagination {
    /**
     * Items per page
     * 
     * This is the number of items per page to return.
     * For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type {number}
     * @memberof TokenPagination
     */
    page_size?: number;
    /**
     * Next Page Token
     * 
     * The next page token.
     * For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type {string}
     * @memberof TokenPagination
     */
    page_token?: string;
}

/**
 * Check if a given object implements the TokenPagination interface.
 */
export function instanceOfTokenPagination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TokenPaginationFromJSON(json: any): TokenPagination {
    return TokenPaginationFromJSONTyped(json, false);
}

export function TokenPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenPagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page_size': !exists(json, 'page_size') ? undefined : json['page_size'],
        'page_token': !exists(json, 'page_token') ? undefined : json['page_token'],
    };
}

export function TokenPaginationToJSON(value?: TokenPagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page_size': value.page_size,
        'page_token': value.page_token,
    };
}
