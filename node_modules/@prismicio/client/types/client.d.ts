import { Document } from "./documents";
import ResolvedApi, { QueryOptions } from './ResolvedApi';
import ApiSearchResponse from './ApiSearchResponse';
import LazySearchForm from './LazySearchForm';
import { RequestCallback } from './request';
import Api, { ApiOptions } from './Api';
import { PreviewResolver } from './PreviewResolver';
export interface Client {
    query<T>(q: string | string[], optionsOrCallback?: QueryOptions | RequestCallback<ApiSearchResponse<T>>, cb?: RequestCallback<ApiSearchResponse<T>>): Promise<ApiSearchResponse<T>>;
    queryFirst<T>(q: string | string[], optionsOrCallback?: QueryOptions | RequestCallback<Document<T>>, cb?: RequestCallback<Document<T>>): Promise<Document<T>>;
    getByID<T>(id: string, options: QueryOptions, cb: RequestCallback<Document<T>>): Promise<Document<T>>;
    getByIDs<T>(ids: string[], options: QueryOptions, cb: RequestCallback<ApiSearchResponse<T>>): Promise<ApiSearchResponse<T>>;
    getByUID<T>(type: string, uid: string, options: QueryOptions, cb: RequestCallback<Document<T>>): Promise<Document<T>>;
    getSingle<T>(type: string, options: QueryOptions, cb: RequestCallback<Document<T>>): Promise<Document<T>>;
    getBookmark<T>(bookmark: string, options: QueryOptions, cb: RequestCallback<Document<T>>): Promise<Document<T>>;
    getPreviewResolver(token: string, documentId?: string): PreviewResolver;
}
export declare class DefaultClient implements Client {
    api: Api;
    constructor(url: string, options?: ApiOptions);
    getApi(): Promise<ResolvedApi>;
    everything(): LazySearchForm;
    form(formId: string): LazySearchForm;
    query<T>(q: string | string[], optionsOrCallback?: QueryOptions | RequestCallback<ApiSearchResponse<T>>, cb?: RequestCallback<ApiSearchResponse<T>>): Promise<ApiSearchResponse<T>>;
    queryFirst<T>(q: string | string[], optionsOrCallback?: QueryOptions | RequestCallback<Document<T>>, cb?: RequestCallback<Document<T>>): Promise<Document<T>>;
    getByID<T>(id: string, options: QueryOptions, cb?: RequestCallback<Document<T>>): Promise<Document<T>>;
    getByIDs<T>(ids: string[], options: QueryOptions, cb?: RequestCallback<ApiSearchResponse<T>>): Promise<ApiSearchResponse<T>>;
    getByUID<T>(type: string, uid: string, options: QueryOptions, cb?: RequestCallback<Document<T>>): Promise<Document<T>>;
    getSingle<T>(type: string, options: QueryOptions, cb?: RequestCallback<Document<T>>): Promise<Document<T>>;
    getBookmark<T>(bookmark: string, options: QueryOptions, cb?: RequestCallback<Document<T>>): Promise<Document<T>>;
    getTags(): Promise<string[]>;
    getPreviewResolver(token: string, documentId?: string): PreviewResolver;
    static getApi(url: string, options?: ApiOptions): Promise<ResolvedApi>;
}
