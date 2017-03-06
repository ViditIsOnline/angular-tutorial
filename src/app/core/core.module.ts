import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FileReadService } from './services/file-read.service';

@NgModule({
    imports: [],
    providers: [FileReadService]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core Module Already Exists');
        }
    }
}