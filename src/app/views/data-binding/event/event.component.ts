import { Component, OnInit } from '@angular/core';
import {FileReadService } from '../../../core/services/file-read.service';

@Component({
  selector: 'app-property',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
// start
export class EventComponent implements OnInit {
  firstName = '';
  lastName = '';
  fontWeight = 'bold';

  onClick(){
    this.firstName = 'Vidit';
    this.lastName = 'Shah';
  }
  // end

  tsFileContent: string;
  htmlFileContent: string;


  constructor(private _fileReadService: FileReadService) {

  }
  ngOnInit() {
    this._fileReadService.getFileContents('src/app/views/data-binding/event/event.component.ts')
    .subscribe(tsFileContent => this.tsFileContent = this._fileReadService
    .trimContent(tsFileContent, FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/data-binding/event/event.component.html')
    .subscribe(htmlFileContent => this.htmlFileContent = this._fileReadService
    .trimContent(htmlFileContent, FileReadService.HTML));
  }
}
