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
import type { RecoveryFlowState } from './RecoveryFlowState';
import {
    RecoveryFlowStateFromJSON,
    RecoveryFlowStateFromJSONTyped,
    RecoveryFlowStateToJSON,
} from './RecoveryFlowState';
import type { UiContainer } from './UiContainer';
import {
    UiContainerFromJSON,
    UiContainerFromJSONTyped,
    UiContainerToJSON,
} from './UiContainer';

/**
 * This request is used when an identity wants to recover their account.
 * 
 * We recommend reading the [Account Recovery Documentation](../self-service/flows/password-reset-account-recovery)
 * @export
 * @interface RecoveryFlow
 */
export interface RecoveryFlow {
    /**
     * Active, if set, contains the recovery method that is being used. It is initially
     * not set.
     * @type {string}
     * @memberof RecoveryFlow
     */
    active?: string;
    /**
     * ExpiresAt is the time (UTC) when the request expires. If the user still wishes to update the setting,
     * a new request has to be initiated.
     * @type {Date}
     * @memberof RecoveryFlow
     */
    expires_at: Date;
    /**
     * ID represents the request's unique ID. When performing the recovery flow, this
     * represents the id in the recovery ui's query parameter: http://<selfservice.flows.recovery.ui_url>?request=<id>
     * @type {string}
     * @memberof RecoveryFlow
     */
    id: string;
    /**
     * IssuedAt is the time (UTC) when the request occurred.
     * @type {Date}
     * @memberof RecoveryFlow
     */
    issued_at: Date;
    /**
     * RequestURL is the initial URL that was requested from Ory Kratos. It can be used
     * to forward information contained in the URL's path or query for example.
     * @type {string}
     * @memberof RecoveryFlow
     */
    request_url: string;
    /**
     * ReturnTo contains the requested return_to URL.
     * @type {string}
     * @memberof RecoveryFlow
     */
    return_to?: string;
    /**
     * 
     * @type {RecoveryFlowState}
     * @memberof RecoveryFlow
     */
    state: RecoveryFlowState;
    /**
     * The flow type can either be `api` or `browser`.
     * @type {string}
     * @memberof RecoveryFlow
     */
    type: string;
    /**
     * 
     * @type {UiContainer}
     * @memberof RecoveryFlow
     */
    ui: UiContainer;
}

/**
 * Check if a given object implements the RecoveryFlow interface.
 */
export function instanceOfRecoveryFlow(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "expires_at" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "issued_at" in value;
    isInstance = isInstance && "request_url" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "ui" in value;

    return isInstance;
}

export function RecoveryFlowFromJSON(json: any): RecoveryFlow {
    return RecoveryFlowFromJSONTyped(json, false);
}

export function RecoveryFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecoveryFlow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'expires_at': (new Date(json['expires_at'])),
        'id': json['id'],
        'issued_at': (new Date(json['issued_at'])),
        'request_url': json['request_url'],
        'return_to': !exists(json, 'return_to') ? undefined : json['return_to'],
        'state': RecoveryFlowStateFromJSON(json['state']),
        'type': json['type'],
        'ui': UiContainerFromJSON(json['ui']),
    };
}

export function RecoveryFlowToJSON(value?: RecoveryFlow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'expires_at': (value.expires_at.toISOString()),
        'id': value.id,
        'issued_at': (value.issued_at.toISOString()),
        'request_url': value.request_url,
        'return_to': value.return_to,
        'state': RecoveryFlowStateToJSON(value.state),
        'type': value.type,
        'ui': UiContainerToJSON(value.ui),
    };
}
