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


import * as runtime from '../runtime';
import type {
  CreateIdentityBody,
  CreateRecoveryCodeForIdentityBody,
  CreateRecoveryLinkForIdentityBody,
  ErrorGeneric,
  Identity,
  IdentitySchemaContainer,
  JsonPatch,
  RecoveryCodeForIdentity,
  RecoveryLinkForIdentity,
  Session,
  UpdateIdentityBody,
} from '../models';
import {
    CreateIdentityBodyFromJSON,
    CreateIdentityBodyToJSON,
    CreateRecoveryCodeForIdentityBodyFromJSON,
    CreateRecoveryCodeForIdentityBodyToJSON,
    CreateRecoveryLinkForIdentityBodyFromJSON,
    CreateRecoveryLinkForIdentityBodyToJSON,
    ErrorGenericFromJSON,
    ErrorGenericToJSON,
    IdentityFromJSON,
    IdentityToJSON,
    IdentitySchemaContainerFromJSON,
    IdentitySchemaContainerToJSON,
    JsonPatchFromJSON,
    JsonPatchToJSON,
    RecoveryCodeForIdentityFromJSON,
    RecoveryCodeForIdentityToJSON,
    RecoveryLinkForIdentityFromJSON,
    RecoveryLinkForIdentityToJSON,
    SessionFromJSON,
    SessionToJSON,
    UpdateIdentityBodyFromJSON,
    UpdateIdentityBodyToJSON,
} from '../models';

export interface CreateIdentityRequest {
    createIdentityBody?: CreateIdentityBody;
}

export interface CreateRecoveryCodeForIdentityRequest {
    createRecoveryCodeForIdentityBody?: CreateRecoveryCodeForIdentityBody;
}

export interface CreateRecoveryLinkForIdentityRequest {
    createRecoveryLinkForIdentityBody?: CreateRecoveryLinkForIdentityBody;
}

export interface DeleteIdentityRequest {
    id: string;
}

export interface DeleteIdentitySessionsRequest {
    id: string;
}

export interface DisableSessionRequest {
    id: string;
}

export interface ExtendSessionRequest {
    id: string;
}

export interface GetIdentityRequest {
    id: string;
    includeCredential?: Array<string>;
}

export interface GetIdentitySchemaRequest {
    id: string;
}

export interface GetSessionRequest {
    id: string;
    expand?: Array<GetSessionExpandEnum>;
}

export interface ListIdentitiesRequest {
    perPage?: number;
    page?: number;
}

export interface ListIdentitySchemasRequest {
    perPage?: number;
    page?: number;
}

export interface ListIdentitySessionsRequest {
    id: string;
    perPage?: number;
    page?: number;
    active?: boolean;
}

export interface ListSessionsRequest {
    pageSize?: number;
    pageToken?: string;
    active?: boolean;
    expand?: Array<ListSessionsExpandEnum>;
}

export interface PatchIdentityRequest {
    id: string;
    jsonPatch?: Array<JsonPatch>;
}

export interface UpdateIdentityRequest {
    id: string;
    updateIdentityBody?: UpdateIdentityBody;
}

/**
 * 
 */
export class IdentityApi extends runtime.BaseAPI {

    /**
     * Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create an Identity
     */
    async createIdentityRaw(requestParameters: CreateIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Identity>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/identities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateIdentityBodyToJSON(requestParameters.createIdentityBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IdentityFromJSON(jsonValue));
    }

    /**
     * Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create an Identity
     */
    async createIdentity(requestParameters: CreateIdentityRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Identity> {
        const response = await this.createIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Code
     */
    async createRecoveryCodeForIdentityRaw(requestParameters: CreateRecoveryCodeForIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecoveryCodeForIdentity>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/recovery/code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRecoveryCodeForIdentityBodyToJSON(requestParameters.createRecoveryCodeForIdentityBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecoveryCodeForIdentityFromJSON(jsonValue));
    }

    /**
     * This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Code
     */
    async createRecoveryCodeForIdentity(requestParameters: CreateRecoveryCodeForIdentityRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecoveryCodeForIdentity> {
        const response = await this.createRecoveryCodeForIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Link
     */
    async createRecoveryLinkForIdentityRaw(requestParameters: CreateRecoveryLinkForIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecoveryLinkForIdentity>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/recovery/link`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRecoveryLinkForIdentityBodyToJSON(requestParameters.createRecoveryLinkForIdentityBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecoveryLinkForIdentityFromJSON(jsonValue));
    }

    /**
     * This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Link
     */
    async createRecoveryLinkForIdentity(requestParameters: CreateRecoveryLinkForIdentityRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecoveryLinkForIdentity> {
        const response = await this.createRecoveryLinkForIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.
     * Delete an Identity
     */
    async deleteIdentityRaw(requestParameters: DeleteIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteIdentity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/identities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.
     * Delete an Identity
     */
    async deleteIdentity(requestParameters: DeleteIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteIdentityRaw(requestParameters, initOverrides);
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
     * Delete & Invalidate an Identity\'s Sessions
     */
    async deleteIdentitySessionsRaw(requestParameters: DeleteIdentitySessionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteIdentitySessions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/identities/{id}/sessions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
     * Delete & Invalidate an Identity\'s Sessions
     */
    async deleteIdentitySessions(requestParameters: DeleteIdentitySessionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteIdentitySessionsRaw(requestParameters, initOverrides);
    }

    /**
     * Calling this endpoint deactivates the specified session. Session data is not deleted.
     * Deactivate a Session
     */
    async disableSessionRaw(requestParameters: DisableSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling disableSession.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/sessions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Calling this endpoint deactivates the specified session. Session data is not deleted.
     * Deactivate a Session
     */
    async disableSession(requestParameters: DisableSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.disableSessionRaw(requestParameters, initOverrides);
    }

    /**
     * Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.
     * Extend a Session
     */
    async extendSessionRaw(requestParameters: ExtendSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Session>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling extendSession.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/sessions/{id}/extend`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionFromJSON(jsonValue));
    }

    /**
     * Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.
     * Extend a Session
     */
    async extendSession(requestParameters: ExtendSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Session> {
        const response = await this.extendSessionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.
     * Get an Identity
     */
    async getIdentityRaw(requestParameters: GetIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Identity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getIdentity.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeCredential) {
            queryParameters['include_credential'] = requestParameters.includeCredential;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/identities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IdentityFromJSON(jsonValue));
    }

    /**
     * Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.
     * Get an Identity
     */
    async getIdentity(requestParameters: GetIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Identity> {
        const response = await this.getIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a specific identity schema.
     * Get Identity JSON Schema
     */
    async getIdentitySchemaRaw(requestParameters: GetIdentitySchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getIdentitySchema.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/schemas/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Return a specific identity schema.
     * Get Identity JSON Schema
     */
    async getIdentitySchema(requestParameters: GetIdentitySchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getIdentitySchemaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.
     * Get Session
     */
    async getSessionRaw(requestParameters: GetSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Session>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSession.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/sessions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SessionFromJSON(jsonValue));
    }

    /**
     * This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.
     * Get Session
     */
    async getSession(requestParameters: GetSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Session> {
        const response = await this.getSessionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.
     * List Identities
     */
    async listIdentitiesRaw(requestParameters: ListIdentitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Identity>>> {
        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/identities`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IdentityFromJSON));
    }

    /**
     * Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.
     * List Identities
     */
    async listIdentities(requestParameters: ListIdentitiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Identity>> {
        const response = await this.listIdentitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all identity schemas currently in use.
     * Get all Identity Schemas
     */
    async listIdentitySchemasRaw(requestParameters: ListIdentitySchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<IdentitySchemaContainer>>> {
        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/schemas`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IdentitySchemaContainerFromJSON));
    }

    /**
     * Returns a list of all identity schemas currently in use.
     * Get all Identity Schemas
     */
    async listIdentitySchemas(requestParameters: ListIdentitySchemasRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<IdentitySchemaContainer>> {
        const response = await this.listIdentitySchemasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns all sessions that belong to the given Identity.
     * List an Identity\'s Sessions
     */
    async listIdentitySessionsRaw(requestParameters: ListIdentitySessionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Session>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listIdentitySessions.');
        }

        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.active !== undefined) {
            queryParameters['active'] = requestParameters.active;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/identities/{id}/sessions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SessionFromJSON));
    }

    /**
     * This endpoint returns all sessions that belong to the given Identity.
     * List an Identity\'s Sessions
     */
    async listIdentitySessions(requestParameters: ListIdentitySessionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Session>> {
        const response = await this.listIdentitySessionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Listing all sessions that exist.
     * List All Sessions
     */
    async listSessionsRaw(requestParameters: ListSessionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Session>>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.pageToken !== undefined) {
            queryParameters['page_token'] = requestParameters.pageToken;
        }

        if (requestParameters.active !== undefined) {
            queryParameters['active'] = requestParameters.active;
        }

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/sessions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SessionFromJSON));
    }

    /**
     * Listing all sessions that exist.
     * List All Sessions
     */
    async listSessions(requestParameters: ListSessionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Session>> {
        const response = await this.listSessionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Partially updates an [identity\'s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.
     * Patch an Identity
     */
    async patchIdentityRaw(requestParameters: PatchIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Identity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchIdentity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/identities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.jsonPatch.map(JsonPatchToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IdentityFromJSON(jsonValue));
    }

    /**
     * Partially updates an [identity\'s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.
     * Patch an Identity
     */
    async patchIdentity(requestParameters: PatchIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Identity> {
        const response = await this.patchIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity\'s credentials as well.
     * Update an Identity
     */
    async updateIdentityRaw(requestParameters: UpdateIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Identity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateIdentity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // oryAccessToken authentication
        }

        const response = await this.request({
            path: `/admin/identities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateIdentityBodyToJSON(requestParameters.updateIdentityBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IdentityFromJSON(jsonValue));
    }

    /**
     * This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity\'s credentials as well.
     * Update an Identity
     */
    async updateIdentity(requestParameters: UpdateIdentityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Identity> {
        const response = await this.updateIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetSessionExpandEnum = {
    Devices: 'Devices',
    Identity: 'Identity'
} as const;
export type GetSessionExpandEnum = typeof GetSessionExpandEnum[keyof typeof GetSessionExpandEnum];
/**
 * @export
 */
export const ListSessionsExpandEnum = {
    Devices: 'Devices',
    Identity: 'Identity'
} as const;
export type ListSessionsExpandEnum = typeof ListSessionsExpandEnum[keyof typeof ListSessionsExpandEnum];