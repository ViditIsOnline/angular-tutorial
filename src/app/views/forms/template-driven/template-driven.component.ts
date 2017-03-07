import { Component, OnInit } from '@angular/core';
import { FileReadService } from '../../../core/services/file-read.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})

// start
export class TemplateDrivenComponent implements OnInit {
  firsName: string;
  lastName: string;
  isIndian: boolean;
  primaryLanguage: string;

  lastNameChanged(value: string){
    this.lastName = value;
  }

// end
  tsFileContent: string;
  htmlFileContent: string;
  constructor(private _fileReadService: FileReadService){
  }
  ngOnInit(){
    this._fileReadService.getFileContents('src/app/views/forms/template-driven/template-driven.component.ts')
    .subscribe(tsFileContent => this.tsFileContent = this._fileReadService
    .trimContent(tsFileContent, FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/forms/template-driven/template-driven.component.html')
    .subscribe(htmlFileContent => this.htmlFileContent = this._fileReadService
    .trimContent(htmlFileContent, FileReadService.HTML));
  }
}
