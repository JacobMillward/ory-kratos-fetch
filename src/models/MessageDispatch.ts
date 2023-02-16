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
 * MessageDispatch represents an attempt of sending a courier message
 * It contains the status of the attempt (failed or successful) and the error if any occured
 * @export
 * @interface MessageDispatch
 */
export interface MessageDispatch {
    /**
     * CreatedAt is a helper struct field for gobuffalo.pop.
     * @type {Date}
     * @memberof MessageDispatch
     */
    created_at: Date;
    /**
     * 
     * @type {object}
     * @memberof MessageDispatch
     */
    error?: object;
    /**
     * The ID of this message dispatch
     * @type {string}
     * @memberof MessageDispatch
     */
    id: string;
    /**
     * The ID of the message being dispatched
     * @type {string}
     * @memberof MessageDispatch
     */
    message_id: string;
    /**
     * The status of this dispatch
     * Either "failed" or "success"
     * failed CourierMessageDispatchStatusFailed
     * success CourierMessageDispatchStatusSuccess
     * @type {string}
     * @memberof MessageDispatch
     */
    status: MessageDispatchStatusEnum;
    /**
     * UpdatedAt is a helper struct field for gobuffalo.pop.
     * @type {Date}
     * @memberof MessageDispatch
     */
    updated_at: Date;
}


/**
 * @export
 */
export const MessageDispatchStatusEnum = {
    Failed: 'failed',
    Success: 'success'
} as const;
export type MessageDispatchStatusEnum = typeof MessageDispatchStatusEnum[keyof typeof MessageDispatchStatusEnum];


/**
 * Check if a given object implements the MessageDispatch interface.
 */
export function instanceOfMessageDispatch(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "message_id" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function MessageDispatchFromJSON(json: any): MessageDispatch {
    return MessageDispatchFromJSONTyped(json, false);
}

export function MessageDispatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageDispatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'error': !exists(json, 'error') ? undefined : json['error'],
        'id': json['id'],
        'message_id': json['message_id'],
        'status': json['status'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function MessageDispatchToJSON(value?: MessageDispatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.created_at.toISOString()),
        'error': value.error,
        'id': value.id,
        'message_id': value.message_id,
        'status': value.status,
        'updated_at': (value.updated_at.toISOString()),
    };
}

