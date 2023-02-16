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
 * Is sent when a flow is expired
 * @export
 * @interface SelfServiceFlowExpiredError
 */
export interface SelfServiceFlowExpiredError {
    /**
     * The status code
     * @type {number}
     * @memberof SelfServiceFlowExpiredError
     */
    code?: number;
    /**
     * Debug information
     * 
     * This field is often not exposed to protect against leaking
     * sensitive information.
     * @type {string}
     * @memberof SelfServiceFlowExpiredError
     */
    debug?: string;
    /**
     * Further error details
     * @type {{ [key: string]: any; }}
     * @memberof SelfServiceFlowExpiredError
     */
    details?: { [key: string]: any; };
    /**
     * When the flow has expired
     * @type {Date}
     * @memberof SelfServiceFlowExpiredError
     */
    expired_at?: Date;
    /**
     * The error ID
     * 
     * Useful when trying to identify various errors in application logic.
     * @type {string}
     * @memberof SelfServiceFlowExpiredError
     */
    id?: string;
    /**
     * Error message
     * 
     * The error's message.
     * @type {string}
     * @memberof SelfServiceFlowExpiredError
     */
    message: string;
    /**
     * A human-readable reason for the error
     * @type {string}
     * @memberof SelfServiceFlowExpiredError
     */
    reason?: string;
    /**
     * The request ID
     * 
     * The request ID is often exposed internally in order to trace
     * errors across service architectures. This is often a UUID.
     * @type {string}
     * @memberof SelfServiceFlowExpiredError
     */
    request?: string;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof SelfServiceFlowExpiredError
     */
    since?: number;
    /**
     * The status description
     * @type {string}
     * @memberof SelfServiceFlowExpiredError
     */
    status?: string;
    /**
     * The flow ID that should be used for the new flow as it contains the correct messages.
     * @type {string}
     * @memberof SelfServiceFlowExpiredError
     */
    use_flow_id?: string;
}

/**
 * Check if a given object implements the SelfServiceFlowExpiredError interface.
 */
export function instanceOfSelfServiceFlowExpiredError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function SelfServiceFlowExpiredErrorFromJSON(json: any): SelfServiceFlowExpiredError {
    return SelfServiceFlowExpiredErrorFromJSONTyped(json, false);
}

export function SelfServiceFlowExpiredErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfServiceFlowExpiredError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'debug': !exists(json, 'debug') ? undefined : json['debug'],
        'details': !exists(json, 'details') ? undefined : json['details'],
        'expired_at': !exists(json, 'expired_at') ? undefined : (new Date(json['expired_at'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'message': json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'request': !exists(json, 'request') ? undefined : json['request'],
        'since': !exists(json, 'since') ? undefined : json['since'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'use_flow_id': !exists(json, 'use_flow_id') ? undefined : json['use_flow_id'],
    };
}

export function SelfServiceFlowExpiredErrorToJSON(value?: SelfServiceFlowExpiredError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'debug': value.debug,
        'details': value.details,
        'expired_at': value.expired_at === undefined ? undefined : (value.expired_at.toISOString()),
        'id': value.id,
        'message': value.message,
        'reason': value.reason,
        'request': value.request,
        'since': value.since,
        'status': value.status,
        'use_flow_id': value.use_flow_id,
    };
}

