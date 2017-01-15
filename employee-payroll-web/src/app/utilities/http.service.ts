import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    get(url) {
        return this.http.get(url).map(this.extractData).catch(e=>this.handleError(e, url));
    }

    post(url, object): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let json = JSON.stringify(object);
        return this.http.post(url, json, options).catch(e=>this.handleError(e,url));
    }

    put(url, object): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let json = JSON.stringify(object);
        return this.http.put(url, json, options).catch(e=>this.handleError(e,url));
    }

    delete(url): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(url, options).catch(e=>this.handleError(e,url));
    }

    extractData(res: any) {
        res = JSON.parse(res._body);
        return (res);
    }

    handleError(error: any, url: string) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error({ error: error + '\r\n url:'+url});
        console.error({ errorMsg: errMsg });
        return Observable.throw(errMsg);
    }
}