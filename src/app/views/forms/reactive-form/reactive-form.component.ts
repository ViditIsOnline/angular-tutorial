import { Component, OnInit } from '@angular/core';
import { FileReadService } from '../../../core/services/file-read.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  tsFileContent: string;
  htmlFileContent: string;
  constructor(private _fileReadService: FileReadService){
  }
  ngOnInit(){
    this._fileReadService.getFileContents('src/app/views/forms/reactive-form/reactive-form.component.ts')
    .subscribe(tsFileContent => this.tsFileContent = this._fileReadService
    .trimContent(tsFileContent, FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/forms/reactive-form/reactive-form.component.html')
    .subscribe(htmlFileContent => this.htmlFileContent = this._fileReadService
    .trimContent(htmlFileContent, FileReadService.HTML));
  }
}
