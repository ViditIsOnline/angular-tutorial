import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FileReadService {
    public static TS = 0;
    public static HTML = 1;
    constructor(private _http: Http) { }
    getFileContents(fileUrl: string): Observable<string> {
        return this._http.get(fileUrl).map((res: Response) => res.text());
    }
    trimContent(content: string, type: number): string {
        let start, end;
        if (type === 0) {
            start = '// start';
            end = '// end';
        }else if (type === 1) {
            start = '<!--start-->';
            end = '<!--end-->';
        }
        let startPos = content.indexOf(start) + start.length;
        let endPos = content.indexOf(end);
        return content.substring(startPos, endPos);
    }
}